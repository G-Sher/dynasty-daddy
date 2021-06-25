import {Injectable} from '@angular/core';
import {SleeperTeam} from '../../model/SleeperLeague';
import {Division, MatchUpProbability} from '../model/playoffCalculator';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {PowerRankingsService} from './power-rankings.service';
import {MatchupService} from './matchup.service';
import {MatchUpUI} from '../model/matchup';
import {SleeperService} from '../../services/sleeper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayoffCalculatorService {

  /** division objects */
  divisions: Division[] = [];

  /** array of arrays of match ups with prob */
  matchUpsWithProb: MatchUpProbability[][] = [];

  /** team odds dict of object with proj wins and proj losses based on roster id key */
  teamsOdds = {};

  constructor(
    private sleeperService: SleeperService,
    private powerRankingsService: PowerRankingsService,
    private matchUpService: MatchupService
  ) {
  }

  /**
   * calculate games with probability
   */
  calculateGamesWithProbability(week: number): void {
    this.matchUpsWithProb = [];
    this.matchUpService.leagueMatchUpUI.map(weekMatchups => {
      const games: MatchUpProbability[] = [];
      weekMatchups.map(matchup => {
        games.push(this.getProbabilityForGame(matchup));
      });
      this.matchUpsWithProb.push(games);
    });
    this.getProjectedRecord(week);
  }

  /**
   * get probability for each match up
   * @param matchup array of arrays of match up prob
   */
  getProbabilityForGame(matchup: MatchUpUI): MatchUpProbability {
    const team1Value = this.powerRankingsService.findTeamFromRankingsByRosterId(matchup.team1RosterId);
    const team2Value = this.powerRankingsService.findTeamFromRankingsByRosterId(matchup.team2RosterId);
    if (!team1Value || !team2Value) {
      return null;
    }
    const valProperty = this.sleeperService.selectedLeague.isSuperflex ? 'sfTradeValueStarter' : 'tradeValueStarter';
    const team1Prob = team1Value[valProperty] / team2Value[valProperty];
    const team2Prob = team2Value[valProperty] / team1Value[valProperty];
    return new MatchUpProbability(
      matchup,
      this.getPercent(team1Prob / (team1Prob + team2Prob)),
      this.getPercent(team2Prob / (team1Prob + team2Prob))
    );
  }

  /**
   * calculates projected record based on points
   */
  getProjectedRecord(startWeek?: number): void {
    for (let rosterId = 1; rosterId <= this.sleeperService.selectedLeague.totalRosters; rosterId++) {
      let totalWins = 0;
      for (let week = startWeek || 1; week < this.sleeperService.selectedLeague.playoffStartWeek; week++) {
        this.matchUpsWithProb[week - 1]?.map(matchUp => {
          if (matchUp.matchUpDetails.team1RosterId === rosterId) {
            totalWins += matchUp.team1Prob;
            return;
          } else if (matchUp.matchUpDetails.team2RosterId === rosterId) {
            totalWins += matchUp.team2Prob;
            return;
          }
        });
      }
      const winsAtDate = this.getWinsAtWeek(rosterId, startWeek - 1);
      this.teamsOdds[rosterId] = {
        projWins: winsAtDate + Math.round(totalWins / 100),
        projLoss: this.getProjectedLosses(startWeek, Math.round(totalWins / 100), winsAtDate)
      };
    }
  }

  /**
   * helper to calculate losses cause it's complicated
   * @param startWeek
   * @private
   */
  private getProjectedLosses(startWeek: number, projWins: number, winsAtDate: number): number {
    const lossesAtDate = startWeek - 1 - winsAtDate;
    const projLosses = this.sleeperService.selectedLeague.playoffStartWeek - startWeek - projWins;
    return  projLosses + lossesAtDate;
  }

  /**
   * get number of wins at a current week in the past
   * TODO maybe move to seperate service?
   * @param rosterId
   * @param endWeek
   */
  getWinsAtWeek(rosterId: number, endWeek: number): number {
    let wins = 0;
    for (let i = 0; i < endWeek; i++) {
      this.matchUpsWithProb[i]?.map(matchUp => {
        if (matchUp.matchUpDetails.team1RosterId === rosterId && matchUp.matchUpDetails.team1Points > matchUp.matchUpDetails.team2Points) {
          wins++;
        } else if (matchUp.matchUpDetails.team2RosterId === rosterId
          && matchUp.matchUpDetails.team2Points > matchUp.matchUpDetails.team1Points) {
          wins++;
        }
      });
    }
    return wins;
  }

  /**
   * return number as a rounded percent
   * @param num
   * @private
   */
  private getPercent(num: number): number {
    return Math.round(num * 100);
  }

  /**
   * generate league divisions
   * @param league league data
   * @param teams fantasy teams
   */
  generateDivisions(league: SleeperLeagueData, teams: SleeperTeam[]): void {
    if (this.divisions?.length === 0) {
      if (league.divisions && league.divisions > 1) {
        for (let i = 0; i < league.divisions; i++) {
          const divisionTeams: SleeperTeam[] = [];
          for (const team of teams) {
            if (team.roster.teamMetrics.division === i + 1) {
              divisionTeams.push(team);
            }
          }
          divisionTeams.sort((a, b) => {
            return a.roster.teamMetrics.rank - b.roster.teamMetrics.rank;
          });
          this.divisions.push(new Division(i + 1, divisionTeams));
        }
      } else {
        const allTeams = teams.slice();
        allTeams.sort((a, b) => {
          if (a.roster.teamMetrics.rank !== 0) {
            return a.roster.teamMetrics.rank - b.roster.teamMetrics.rank;
          } else {
            return b.roster.teamMetrics.wins - a.roster.teamMetrics.wins || b.roster.teamMetrics.fpts - a.roster.teamMetrics.fpts;
          }
        });
        if (allTeams[0].roster.teamMetrics.rank === 0) {
          for (let i = 0; i < allTeams.length; i++) {
            allTeams[i].roster.teamMetrics.rank = i + 1;
          }
        }
        this.divisions.push(new Division(1, allTeams));
        league.divisions = 1;
      }
    }
  }

  /**
   * resets division data
   */
  reset(): void {
    this.divisions = [];
  }

  /**
   * update season odds handler may remove later if unnecessary
   * @param value
   */
  updateSeasonOdds(value: any): void {
    this.getProjectedRecord(value);
  }

  /**
   * get Division by Roster id
   * @param rosterId
   */
  getDivisionByRosterId(rosterId: number): Division {
    for (const division of this.divisions) {
      for (const team of division.teams) {
        if (Number(team.roster.rosterId) === rosterId) {
          return division;
        }
      }
    }
    return null;
  }
}
