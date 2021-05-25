import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {SleeperApiConfigService} from './sleeper-api-config.service';
import {SleeperLeagueData, SleeperUserData} from '../../../model/SleeperUser';
import {
  SleeperCompletedPickData,
  SleeperOwnerData,
  SleeperRawDraftOrderData,
  SleeperRawTradePicksData,
  SleeperRosterData, SleeperStateOfNFL,
  TeamMetrics
} from '../../../model/SleeperLeague';


@Injectable({
  providedIn: 'root'
})
export class SleeperApiService {

  constructor(private http: HttpClient, private sleeperApiConfigService: SleeperApiConfigService) {
  }

  getSleeperUserInformation(userName: string): Observable<SleeperUserData> {
    return this.http.get<SleeperUserData>(this.sleeperApiConfigService.getSleeperUsernameEndpoint + userName);
  }

  getSleeperLeaguesByUserID(userId: string, year: string): Observable<SleeperLeagueData[]> {
    return this.http.get<SleeperLeagueData[]>(this.sleeperApiConfigService.getSleeperUsernameEndpoint + userId + '/leagues/nfl/' + year).pipe(map((leagues: any[]) => {
      let leagueList: SleeperLeagueData[] = [];
      leagues.map(league => leagueList.push(new SleeperLeagueData(league.roster_positions.includes('SUPER_FLEX'), league.name, league.league_id, league.total_rosters, league.roster_positions, league.previous_league_id, league.status, league.metadata, league.settings)));
      return leagueList;
    }));
  }

  getSleeperRostersbyLeagueId(leagueId: string): Observable<SleeperRosterData[]> {
    return this.http.get<SleeperRosterData[]>(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/rosters').pipe(map((rosters: any[]) => {
      let rosterList: SleeperRosterData[] = [];
      rosters.map(roster => rosterList.push(new SleeperRosterData(roster.roster_id, roster.owner_id, roster.players, new TeamMetrics(roster.settings))));
      return rosterList;
    }));
  }

  getSleeperLeaguebyLeagueId(leagueId: string): Observable<SleeperLeagueData> {
    return this.http.get<SleeperRosterData[]>(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId).pipe(map((league: any) => {
      return new SleeperLeagueData(league.roster_positions.includes('SUPER_FLEX'), league.name, league.league_id, league.total_rosters, league.roster_positions, league.previous_league_id, league.status, league.metadata, league.settings);
    }))
  };

  getSleeperOwnersbyLeagueId(leagueId: string): Observable<SleeperOwnerData[]> {
    return this.http.get<SleeperOwnerData[]>(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/users').pipe(map((owners: any[]) => {
      let ownerList: SleeperOwnerData[] = [];
      owners.map(owner => ownerList.push(new SleeperOwnerData(owner.user_id, owner.display_name, owner.metadata.team_name, owner.avatar)));
      return ownerList;
    }));
  }

  getSleeperDraftbyLeagueId(leagueId: string): Observable<string[]> {
    return this.http.get<string[]>(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/drafts').pipe(map((drafts: any[]) => {
      let draftList: string[] = [];
      drafts.map(draft => draftList.push(draft.draft_id));
      return draftList;
    }));
  }

  getSleeperDraftDetailsByDraftId(draftId: string): Observable<SleeperRawDraftOrderData> {
    return this.http.get<SleeperRawDraftOrderData>(this.sleeperApiConfigService.getSleeperDraftEndpoint + draftId).pipe(map((draft: any) => {
      return new SleeperRawDraftOrderData(draft.draft_id, draft.league_id, draft.status, draft.type, draft.draft_order, draft.slot_to_roster_id, draft.season, draft.settings);
    }));
  }

  getSleeperTradedPicksByDraftId(draftId: string): Observable<SleeperRawTradePicksData[]> {
    return this.http.get<SleeperRawTradePicksData[]>(this.sleeperApiConfigService.getSleeperDraftEndpoint + draftId + '/traded_picks').pipe(map((picks: any[]) => {
      let pickList: SleeperRawTradePicksData[] = [];
      picks.map(pick => pickList.push(new SleeperRawTradePicksData(pick.owner_id, pick.previous_owner_id, pick.roster_id, pick.round, pick.season)));
      return pickList;
    }));
  }

  getSleeperMatchUpsForWeekByLeagueId(leagueId: string, weekNumber: number): Observable<any> {
    return this.http.get<any[]>(this.sleeperApiConfigService.getSleeperLeagueEndpoint + leagueId + '/matchups/' + weekNumber).pipe(map((weekMatchups: any[]) => {
      return weekMatchups;
    }));
  }

  getSleeperCompletedDraftsByDraftId(draftId: string): Observable<SleeperCompletedPickData[]> {
    return this.http.get<SleeperCompletedPickData[]>(this.sleeperApiConfigService.getSleeperDraftEndpoint + draftId + '/picks').pipe(map((picks: any[]) => {
      const mappedPicks: SleeperCompletedPickData[] = [];
      picks.map(pick => mappedPicks.push(new SleeperCompletedPickData(pick)))
      return mappedPicks;
    }));
  }

  getSleeperStatsForYear(year: string): Observable<any> {
    return this.http.get<any>(this.sleeperApiConfigService.getSleeperStatsEndpoint + year).pipe(map((stats: any) => {
      return stats;
    }))
  }

  getSleeperStateOfNFL(): Observable<SleeperStateOfNFL> {
    return this.http.get<any>(this.sleeperApiConfigService.getSleeperNFLStateEndpoint).pipe(map((season: any) => {
      return new SleeperStateOfNFL(season);
    }))
  }

  getSleeperStatsForWeek(year: string, weekNum: number) {
    return this.http.get<any>(this.sleeperApiConfigService.getSleeperStatsEndpoint + year + '/' + weekNum).pipe(map((stats: any) => {
      return stats;
    }))
  }

  getSleeperProjectionsForWeek(year: string, weekNum: number) {
    return this.http.get<any>(this.sleeperApiConfigService.getSleeperProjectionsEndpoint + year + '/' + weekNum).pipe(map((stats: any) => {
      return stats;
    }))
  }
}
