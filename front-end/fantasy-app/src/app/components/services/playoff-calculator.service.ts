import {Injectable} from '@angular/core';
import {SleeperTeam} from '../../model/SleeperLeague';
import {Division, MatchUpProbability} from '../model/playoffCalculator';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {PowerRankingsService} from './power-rankings.service';
import {MatchupService} from './matchup.service';
import {MatchUpUI} from '../model/matchup';
import {SleeperService} from '../../services/sleeper.service';
import {NflService} from '../../services/utilities/nfl.service';
import {cumulativeStdNormalProbability, errorFunction, mean, standardDeviation, zScore} from 'simple-statistics';

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

  teamRatingsPValues = {};

  constructor(
    private sleeperService: SleeperService,
    private powerRankingsService: PowerRankingsService,
    private matchUpService: MatchupService,
    private nflService: NflService
  ) {
  }

  /**
   * calculate games with probability
   */
  calculateGamesWithProbability(week: number): void {
    // get mean of team ratings
    const ratings = this.powerRankingsService.powerRankings.map(team => {
      return this.sleeperService.selectedLeague.isSuperflex ? team.sfTradeValueStarter : team.tradeValueStarter;
    });
    const meanRating = mean(ratings);

    // get standard deviation of team ratings
    const stdRating = standardDeviation(ratings);

    // get z scores and p values for each team
    for (const team of this.powerRankingsService.powerRankings) {
      const teamZ = zScore(this.sleeperService.selectedLeague.isSuperflex
        ? team.sfTradeValueStarter : team.tradeValueStarter, meanRating, stdRating);
      const teamP = cumulativeStdNormalProbability(teamZ);
      this.teamRatingsPValues[team.team.roster.rosterId] = teamP;
    }

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
    const team1Prob = 0.5 + (this.teamRatingsPValues[matchup.team1RosterId] - this.teamRatingsPValues[matchup.team2RosterId]) / 2;
    const team2Prob = 0.5 + (this.teamRatingsPValues[matchup.team2RosterId] - this.teamRatingsPValues[matchup.team1RosterId]) / 2;
    return new MatchUpProbability(
      matchup,
      this.getPercent(team1Prob),
      this.getPercent(team2Prob)
    );
  }

  /**
   * calculates projected record based on points
   */
  getProjectedRecord(startWeek: number = this.nflService.stateOfNFL.week): void {
    // if preseason set to 1
    if (startWeek === 0) { startWeek = 1; }
    for (let rosterId = 1; rosterId <= this.sleeperService.selectedLeague.totalRosters; rosterId++) {
      let totalWins = 0;
      let projectedWeeks = 0;
      for (let week = startWeek; week < this.sleeperService.selectedLeague.playoffStartWeek; week++) {
        projectedWeeks++;
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
      const lossesAtDate = this.getLossesAtWeek(rosterId, startWeek - 1);
      this.teamsOdds[rosterId] = {
        projWins: winsAtDate + Math.round(totalWins / 100),
        projLoss: lossesAtDate + projectedWeeks - Math.round(totalWins / 100)
      };
    }
  }

  /**
   * get number of wins at a current week in the past
   * TODO maybe move to separate service?
   * @param rosterId
   * @param endWeek
   */
  getWinsAtWeek(rosterId: number, endWeek: number): number {
    let wins = 0;
    for (let i = 0; i <= endWeek - this.sleeperService.selectedLeague.startWeek; i++) {
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
   * get number of losses at a current week in the past
   * TODO maybe move to seperate service?
   * @param rosterId
   * @param endWeek
   */
  getLossesAtWeek(rosterId: number, endWeek: number): number {
    let losses = 0;
    for (let i = 0; i <= endWeek - this.sleeperService.selectedLeague.startWeek; i++) {
      this.matchUpsWithProb[i]?.map(matchUp => {
        if (matchUp.matchUpDetails.team1RosterId === rosterId && matchUp.matchUpDetails.team1Points < matchUp.matchUpDetails.team2Points) {
          losses++;
        } else if (matchUp.matchUpDetails.team2RosterId === rosterId
          && matchUp.matchUpDetails.team2Points < matchUp.matchUpDetails.team1Points) {
          losses++;
        }
      });
    }
    return losses;
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
