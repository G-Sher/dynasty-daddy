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

  constructor(
    private sleeperService: SleeperService,
    private powerRankingsService: PowerRankingsService,
    private matchUpService: MatchupService
  ) {}

  /**
   * calculate games with probability
   */
  calculateGamesWithProbability(): void {
    this.matchUpsWithProb = [];
    this.matchUpService.leagueMatchUpUI.map(weekMatchups => {
      const games: MatchUpProbability[] = [];
      weekMatchups.map(matchup => {
        games.push(this.getProbabilityForGame(matchup));
      });
      this.matchUpsWithProb.push(games);
    });
    console.log(this.matchUpsWithProb, this.matchUpService.leagueMatchUpUI);
    this.getProjectedRecord();
  }

  /**
   * get probability for each match up
   * @param matchup array of arrays of match up prob
   */
  getProbabilityForGame(matchup: MatchUpUI): MatchUpProbability {
    const team1Value = this.powerRankingsService.findTeamFromRankingsByRosterId(matchup.team1RosterId);
    const team2Value = this.powerRankingsService.findTeamFromRankingsByRosterId(matchup.team2RosterId);
    if (!team1Value || !team2Value) { return null; }
    const valProperty = this.sleeperService.selectedLeague.isSuperflex ? 'sfTradeValueStarter' : 'tradeValueStarter';
    const team1Prob = team1Value[valProperty] / team2Value[valProperty];
    const team2Prob = team2Value[valProperty] / team1Value[valProperty];
    return new MatchUpProbability(
      matchup,
      this.getPercent(team1Prob / (team1Prob + team2Prob)),
      this.getPercent(team2Prob / (team1Prob + team2Prob))
    );
  }

  getProjectedRecord(): void {

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
          if (a.roster.teamMetrics.rank !== 0){
            return a.roster.teamMetrics.rank - b.roster.teamMetrics.rank;
          } else {
            return b.roster.teamMetrics.wins - a.roster.teamMetrics.wins ||  b.roster.teamMetrics.fpts - a.roster.teamMetrics.fpts;
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
}
