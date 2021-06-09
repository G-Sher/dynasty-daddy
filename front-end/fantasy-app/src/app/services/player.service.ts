/* tslint:disable:object-literal-key-quotes */
import {Injectable} from '@angular/core';
import {KTCPlayer} from '../model/KTCPlayer';
import {KTCApiService} from './api/ktc-api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {forkJoin, Observable, of, Subject, timer} from 'rxjs';
import {SleeperStateOfNFL, SleeperTeam, SleeperTeamMatchUpData} from '../model/SleeperLeague';
import {SleeperApiService} from './api/sleeper/sleeper-api.service';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  /** player values for today */
  playerValues: KTCPlayer[] = [];

  /** player yearly stats dict from sleeper */
  playerStats = {};

  /** past week dict from sleeper. 18 weeks */
  pastSeasonWeeklyStats = {};

  /** past week dict from sleeper for projections. 18 weeks */
  pastSeasonWeeklyProjections = {};

  /** state of nfl from sleeper */
  stateOfNFL: SleeperStateOfNFL;

  private teamAccToFullName = {
    'CAR': 'Carolina Panthers',
    'NOS': 'New Orleans Saints',
    'TBB': 'Tampa Bay Buccaneers',
    'ATL': 'Atlanta Falcons',
    'LAR': 'Los Angeles Rams',
    'SEA': 'Seattle Seahawks',
    'SFO': 'San Francisco 49ers',
    'ARI': 'Arizona Cardinals',
    'DAL': 'Dallas Cowboys',
    'NYG': 'New York Giants',
    'PHI': 'Philadelphia Eagles',
    'WAS': 'Washington Football Team',
    'GBP': 'Green Bay Packers',
    'MIN': 'Minnesota Vikings',
    'DET': 'Detroit Lions',
    'CHI': 'Chicago Bears',
    'KCC': 'Kansas City Chiefs',
    'LVR': 'Las Vegas Raiders',
    'LAC': 'Los Angeles Chargers',
    'DEN': 'Denver Broncos',
    'HOU': 'Houston Texans',
    'TEN': 'Tennessee Titans',
    'IND': 'Indianapolis Colts',
    'JAC': 'Jacksonville Jaguars',
    'CLE': 'Cleveland Browns',
    'PIT': 'Pittsburgh Steelers',
    'BAL': 'Baltimore Ravens',
    'CIN': 'Cincinnati Bengals',
    'BUF': 'Buffalo Bills',
    'MIA': 'Miami Dolphins',
    'NYJ': 'New York Jets',
    'NEP': 'New England Patriots',
    'FA': 'Free Agent'
  };

  /** player stats year */
  playerStatsYear: string = '';

  /** subject for loading player values */
  $currentPlayerValuesLoaded: Subject<void> = new Subject<void>();

  constructor(private ktcApiService: KTCApiService,
              private sleeperApiService: SleeperApiService,
              private spinner: NgxSpinnerService) {
  }

  /**
   * loads all player data upon entering site
   */
  loadPlayerValuesForToday(): void {
    this.spinner.show();
    this.ktcApiService.getPlayerValuesForToday().subscribe((response: KTCPlayer[]) => {
      this.playerValues = response.filter(player => {
        if (player.position === 'PI') {
          return Number(player.first_name) >= new Date().getFullYear();
        } else {
          return player;
        }
      });
      this.$loadPlayerStatsForSeason().subscribe((playerStatsResponse) => {
        this.playerStats = playerStatsResponse;
        this.spinner.hide();
        this.$currentPlayerValuesLoaded.next();
      });
    });
  }

  /**
   * load player stats and projection for season
   * @private
   */
  private $loadPlayerStatsForSeason(): Observable<any> {
    if (this.playerStatsYear !== '') {
      return of(this.playerStats);
    }
    return this.sleeperApiService.getSleeperStateOfNFL().pipe(mergeMap((season) => {
      this.stateOfNFL = season;
      this.playerStatsYear = this.stateOfNFL.seasonType === 'off'
      || this.stateOfNFL.seasonType === 'pre' ? this.stateOfNFL.previousSeason : this.stateOfNFL.season;
      const observe = [];
      observe.push(this.sleeperApiService.getSleeperStatsForYear(this.playerStatsYear).pipe(mergeMap((response: any) => {
        this.playerStats = response;
        return of(this.playerStats);
      })));
      let currentWeekInd = this.stateOfNFL.week;
      let currentYearInd = Number(this.stateOfNFL.season);
      for (let weekNum = 1; weekNum < 19; weekNum++) {
        if (currentWeekInd === 0) {
          currentYearInd = currentYearInd - 1;
          currentWeekInd = currentYearInd < 2021 ? 17 : 18;
        }
        observe.push(this.sleeperApiService.getSleeperStatsForWeek(
          currentYearInd.toString(),
          currentWeekInd).pipe(mergeMap((weeklyStats) => {
            this.pastSeasonWeeklyStats[weekNum] = weeklyStats;
            return of(weeklyStats);
        })));

        observe.push(this.sleeperApiService.getSleeperProjectionsForWeek(
          currentYearInd.toString(),
          currentWeekInd).pipe(mergeMap((weeklyStats) => {
            this.pastSeasonWeeklyProjections[weekNum] = weeklyStats;
            return of(weeklyStats);
        })));
        currentWeekInd--;
      }
      forkJoin(observe).subscribe(() => {
          return of(this.pastSeasonWeeklyStats);
        }
      );
      return of(this.pastSeasonWeeklyStats);
    }));
  }

  /**
   * assign players to fantasy teams
   * @param team
   */
  generateRoster(team: SleeperTeam): KTCPlayer[] {
    const roster = [];
    if (!team.roster.players) { return []; }
    for (const sleeperId of team.roster?.players) {
      for (const player of this.playerValues) {
        if (sleeperId === player.sleeper_id) {
          player.owner = team.owner.ownerName;
          roster.push(player);
          break;
        }
      }
    }
    return roster;
  }

  /**
   * get player based on sleeper id
   * @param id
   */
  getPlayerBySleeperId(id: string): KTCPlayer {
    for (const player of this.playerValues) {
      if (id === player.sleeper_id) {
        return player;
      }
    }
    return null;
  }

  /**
   * reset players owners when changing leagues
   */
  resetOwners(): void {
    for (const player of this.playerValues) {
      player.owner = '';
    }
  }

  /**
   * get full team name from acc
   * @param acc
   */
  getFullTeamNameFromACC(acc: string): string {
    return this.teamAccToFullName[acc];
  }

  /**
   * returns players current value based name id
   * @param id
   */
  getPlayerByNameId(id: string): KTCPlayer {
    for (const player of this.playerValues) {
      if (id === player.name_id) {
        return player;
      }
    }
    return null;
  }

  /**
   * get week lable for table
   * @param index
   */
  getWeekByIndex(index: number): string {
    index--;
    if (this.stateOfNFL) {
      let weekNum = this.stateOfNFL.week - index;
      let year = Number(this.stateOfNFL.season);
      if (weekNum < 1) {
        year--;
        weekNum = (year < 2021 ? 17 : 18) - Math.abs(weekNum);
        if (weekNum < 1) {
          year--;
          weekNum = (year < 2021 ? 17 : 18) - Math.abs(weekNum);
        }
      }
      return 'Week ' + weekNum + ' ' + year;
    }
  }
}
