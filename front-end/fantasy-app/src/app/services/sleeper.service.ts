import {Injectable} from '@angular/core';
import {CompletedDraft, DraftCapital, SleeperData, SleeperLeagueData, SleeperUserData} from '../model/SleeperUser';
import {SleeperApiService} from './api/sleeper/sleeper-api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {
  SleeperOwnerData,
  SleeperRawDraftOrderData,
  SleeperRawTradePicksData,
  SleeperRosterData,
  SleeperTeam, SleeperTeamMatchUpData,
} from '../model/SleeperLeague';
import {forkJoin, Observable, of, Subject} from 'rxjs';
import {delay, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SleeperService {

  /** sleeper user data */
  sleeperUser: SleeperData;

  /** selected league data */
  selectedLeague: SleeperLeagueData;

  /** selected year */
  selectedYear: string;

  /** is league loaded */
  leagueLoaded: boolean = false;

  /** selected league team data */
  sleeperTeamDetails: SleeperTeam[];

  /** upcoming draft data */
  upcomingDrafts: SleeperRawDraftOrderData[] = [];

  /** completed draft data */
  completedDrafts: CompletedDraft[] = [];

  constructor(private sleeperApiService: SleeperApiService, private spinner: NgxSpinnerService) {
  }

  /**
   * loads team data, roster, and draft picks by league
   * @param selectedLeague selected league
   */
  $loadNewLeague(selectedLeague: SleeperLeagueData): Observable<any> {
    this.leagueLoaded = false;
    this.selectedLeague = selectedLeague;
    if (this.selectedLeague.rosterPositions.filter(x => x === 'QB').length > 1) {
      this.selectedLeague.isSuperflex = true;
    }
    return this.sleeperApiService.getSleeperOwnersbyLeagueId(selectedLeague.leagueId).pipe(mergeMap((owners: SleeperOwnerData[]) => {
        // fetch matchUps for league
        const leagueMatchups = {};
        const observe = [];
        for (let weekNum = selectedLeague.startWeek; weekNum < 19; weekNum++) {
          observe.push(this.sleeperApiService.getSleeperMatchUpsForWeekByLeagueId(selectedLeague.leagueId, weekNum)
            .pipe(mergeMap((weekMatchups) => {
              const matchupData: SleeperTeamMatchUpData[] = [];
              for (const matchup of weekMatchups) {
                matchupData.push(new SleeperTeamMatchUpData(matchup));
              }
              leagueMatchups[weekNum] = matchupData;
              return of(weekMatchups);
            })));
        }
        forkJoin(observe).subscribe(() => {
            this.selectedLeague.leagueMatchUps = leagueMatchups;
            return of();
          }
        );
        // fetch rosters and drafts picks
        return this.sleeperApiService.getSleeperRostersbyLeagueId(selectedLeague.leagueId).pipe(mergeMap((rosters: SleeperRosterData[]) => {
            console.log('Fetching Roster Ids...');
            this.sleeperTeamDetails = [];
            rosters.map(roster => {
              for (const owner of owners) {
                if (roster.ownerId === owner.userId) {
                  this.sleeperTeamDetails.push(new SleeperTeam(owner, roster));
                  break;
                }
              }
            });
            return this.sleeperApiService.getSleeperDraftbyLeagueId(selectedLeague.leagueId).pipe(mergeMap((draftIds: string[]) => {
              draftIds.map((draftId: string) => {
                  console.log('processing draft:', draftId);
                  return this.$assignPicks(draftId).subscribe((x) => {
                      return of(x);
                    }
                  );
                }
              );
              return of(this.sleeperTeamDetails);
            }));
          })
        );
      })
    );
  }

  /**
   * loads new user data from sleeper username
   * @param userName user name
   */
  loadNewUser(userName: string, year: string): void {
    this.spinner.show();
    console.time('Fetch Sleeper User Data');
    this.selectedYear = year;
    try {
      this.sleeperApiService.getSleeperUserInformation(userName).subscribe((userData: SleeperUserData) => {
        if (userData == null) {
          this.spinner.hide();
          this.sleeperUser = null;
          throw new Error('User data could not be found. Try again!');
        }
        this.sleeperApiService.getSleeperLeaguesByUserID(userData.user_id, year).subscribe((response: SleeperLeagueData[]) => {
          this.sleeperUser = {leagues: response, userData};
          this.spinner.hide();
          console.timeEnd('Fetch Sleeper User Data');
        });
      });
    } catch (e: any) {
      this.spinner.hide();
      console.error('Failed to get data for user ', e);
    }
  }

  private $assignPicks(draftId: string): Observable<SleeperTeam[]> {
    return this.sleeperApiService.getSleeperDraftDetailsByDraftId(draftId).pipe(mergeMap((draft: SleeperRawDraftOrderData) => {
      if (draft.status === 'pre_draft' && draft.draftOrder) {
        this.upcomingDrafts.push(draft);
        return this.sleeperApiService.getSleeperTradedPicksByDraftId(draft.draftId)
          .pipe(mergeMap((tradedPicks: SleeperRawTradePicksData[]) => {
            this.sleeperTeamDetails.map((team: SleeperTeam) => {
              const draftPicks: DraftCapital[] = [];
              const slot = draft.draftOrder[team.owner.userId];
              for (let i = 0; i < draft.rounds; i++) {
                let slotPick = slot;
                if (draft.type === 'snake' && i + 1 % 2 === 0) {
                  slotPick = this.selectedLeague.totalRosters - slot;
                }
                draftPicks.push(new DraftCapital(true, i + 1, Number(slot), draft.season));
              }
              const rosterId = draft.slotToRosterId[slot];
              tradedPicks.reverse();
              tradedPicks.map((tradedPick: SleeperRawTradePicksData) => {
                if (tradedPick.rosterId === rosterId && tradedPick.ownerId !== rosterId) {
                  const index = draftPicks.map((i) => i.round).indexOf(tradedPick.round);
                  draftPicks.splice(index, 1);
                } else if (tradedPick.ownerId === rosterId) {
                  let pickSlot = Number(Object.keys(draft.slotToRosterId).find(key => draft.slotToRosterId[key] === tradedPick.rosterId));
                  if (draft.type === 'snake' && tradedPick.round % 2 === 0) {
                    pickSlot = this.selectedLeague.totalRosters - pickSlot;
                  }
                  if (!this.doesPickAlreadyExist(tradedPick, draftPicks, pickSlot)) {
                    draftPicks.push(new DraftCapital(false, tradedPick.round, pickSlot, tradedPick.season));
                  }
                }
              });
              team.draftCapital = draftPicks;
            });
            return of(this.sleeperTeamDetails);
          }));
      }
      if (draft.status === 'complete' && draft.draftOrder) {
        return this.sleeperApiService.getSleeperCompletedDraftsByDraftId(draft.draftId).pipe(mergeMap((picks) => {
          return this.sleeperApiService.getSleeperTradedPicksByDraftId(draft.draftId)
            .pipe(mergeMap((tradedPicks: SleeperRawTradePicksData[]) => {
              tradedPicks.map((tradedPick: SleeperRawTradePicksData) => {
                picks.filter(pick => {
                  if (pick.round === tradedPick.round && tradedPick.previousOwnerId === pick.rosterId) {
                    pick.rosterId = tradedPick.rosterId;
                  }
                });
              });
              this.completedDrafts.push(new CompletedDraft(draft, picks));
              return of(this.sleeperTeamDetails);
            }));
          return of(this.sleeperTeamDetails);
        }));
      }
      return of(this.sleeperTeamDetails);
    }));
  }

  /**
   * reset league data
   */
  resetLeague(): void {
    this.leagueLoaded = false;
    this.selectedLeague = null;
    this.sleeperTeamDetails = [];
    this.completedDrafts = [];
    this.upcomingDrafts = [];
  }

  /**
   * does this pick already exist
   * catches traded picks back to the original owner
   * @param tradedPick traded pick data
   * @param draftPicks player draft capital
   * @param pickNumber pick number
   * @private
   * returns true if pick already exists
   */
  private doesPickAlreadyExist(tradedPick: SleeperRawTradePicksData, draftPicks: DraftCapital[], pickNumber: number): boolean {
    for (const pick of draftPicks) {
      if (pick.round === tradedPick.round && pick.pick === pickNumber) {
        return true;
      }
    }
    return false;
  }

  /**
   * get team by roster id
   * @param rosterId id
   * returns sleeper team data
   */
  getTeamByRosterId(rosterId): SleeperTeam {
    for (const team of this.sleeperTeamDetails) {
      if (team.roster.rosterId === rosterId) {
        return team;
      }
    }
    return null;
  }
}
