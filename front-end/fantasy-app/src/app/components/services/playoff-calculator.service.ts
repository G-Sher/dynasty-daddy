import {Injectable} from '@angular/core';
import {SleeperPlayoffMatchUp, SleeperTeam} from '../../model/SleeperLeague';
import {Division, MatchUpProbability, SimulatedTeamInfo} from '../model/playoffCalculator';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {PowerRankingsService} from './power-rankings.service';
import {MatchupService} from './matchup.service';
import {MatchUpUI} from '../model/matchup';
import {SleeperService} from '../../services/sleeper.service';
import {NflService} from '../../services/utilities/nfl.service';
import {cumulativeStdNormalProbability, mean, standardDeviation, zScore} from 'simple-statistics';

@Injectable({
  providedIn: 'root'
})
export class PlayoffCalculatorService {

  /** division objects */
  divisions: Division[] = [];

  /** array of arrays of match ups with prob */
  matchUpsWithProb: MatchUpProbability[][] = [];

  /** team odds dict of object with proj wins and proj losses based on roster id key */
  teamsProjectedRecord = {};

  /** team Prob values by roster id */
  teamRatingsPValues = {};

  /** odds values by roster id */
  teamPlayoffOdds = {};

  /** how many selected wins by roster id, used for season table record */
  selectedGameResults = {};

  /** force show records of teams on table if game results are selected */
  forceShowRecord: boolean = false;

  /** total number of simulations, if changed make sure to update percentage function */
  NUMBER_OF_SIMULATIONS = 10000;

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
        matchup.selectedWinner = 0;
        games.push(this.getProbabilityForGame(matchup));
      });
      this.matchUpsWithProb.push(games);
    });
    this.getProjectedRecord(week);
    this.generatePlayoffOdds(week);
  }

  /**
   * get probability for each match up
   * @param matchup array of arrays of match up prob
   */
  private getProbabilityForGame(matchup: MatchUpUI): MatchUpProbability {
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
  private getProjectedRecord(startWeek: number = this.getStartWeek()): void {
    for (let rosterId = 1; rosterId <= this.sleeperService.selectedLeague.totalRosters; rosterId++) {
      let totalWins = 0;
      let projectedWeeks = 0;
      let selectedWins = 0;
      let selectedLosses = 0;
      for (let week = startWeek; week < this.sleeperService.selectedLeague.playoffStartWeek; week++) {
        projectedWeeks++;
        this.matchUpsWithProb[week - 1]?.map(matchUp => {
          if (matchUp.matchUpDetails.team1RosterId === rosterId) {
            if (matchUp.matchUpDetails.selectedWinner === 0) {
              totalWins += matchUp.team1Prob;
            } else if (matchUp.matchUpDetails.selectedWinner === 1) {
              selectedWins++;
              projectedWeeks--;
            } else if (matchUp.matchUpDetails.selectedWinner === 2) {
              selectedLosses++;
              projectedWeeks--;
            }
            return;
          } else if (matchUp.matchUpDetails.team2RosterId === rosterId) {
            if (matchUp.matchUpDetails.selectedWinner === 0) {
              totalWins += matchUp.team2Prob;
            } else if (matchUp.matchUpDetails.selectedWinner === 2) {
              selectedWins++;
              projectedWeeks--;
            } else if (matchUp.matchUpDetails.selectedWinner === 1) {
              selectedLosses++;
              projectedWeeks--;
            }
            return;
          }
        });
      }
      const winsAtDate = this.getWinsAtWeek(rosterId, startWeek - 1);
      const lossesAtDate = this.getLossesAtWeek(rosterId, startWeek - 1);
      this.selectedGameResults[rosterId] = {
        selectedWins,
        selectedLosses
      };
      this.teamsProjectedRecord[rosterId] = {
        projWins: winsAtDate + selectedWins + Math.round(totalWins / 100),
        projLoss: lossesAtDate + selectedLosses + projectedWeeks - Math.round(totalWins / 100)
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
   * TODO maybe move to separate service?
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
  updateSeasonOdds(selectedWeek?: number): void {
    this.getProjectedRecord(selectedWeek);
    this.generatePlayoffOdds(selectedWeek);
  }

  /**
   * get Division by Roster id
   * @param rosterId
   */
  getDivisionByRosterId(rosterId: number): Division {
    for (const division of this.divisions) {
      for (const team of division.teams) {
        if (team.roster.rosterId === rosterId) {
          return division;
        }
      }
    }
    return null;
  }

  /**
   * simulate regular season from week
   * @param startWeek week number to start simulation from
   * @private
   */
  private simulateRegularSeason(startWeek: number): SimulatedTeamInfo[] {
    const wins = [];
    // simulate regular season
    for (let rosterId = 1; rosterId <= this.sleeperService.selectedLeague.totalRosters; rosterId++) {
      let totalWins = 0;
      for (let week = startWeek; week < this.sleeperService.selectedLeague.playoffStartWeek; week++) {
        this.matchUpsWithProb[week - 1]?.map(matchUp => {
          if (matchUp.matchUpDetails.team1RosterId === rosterId) {
            if (matchUp.matchUpDetails.selectedWinner === 0) {
              if (this.getRandomInt(100) < matchUp.team1Prob) {
                totalWins++;
              }
            } else if (matchUp.matchUpDetails.selectedWinner === 1) {
              totalWins++;
            }
            return;
          } else if (matchUp.matchUpDetails.team2RosterId === rosterId) {
            if (matchUp.matchUpDetails.selectedWinner === 0) {
              if (this.getRandomInt(100) < matchUp.team2Prob) {
                totalWins++;
              }
            } else if (matchUp.matchUpDetails.selectedWinner === 2) {
              totalWins++;
            }
            return;
          }
        });
      }
      // get current amount of wins
      const winsAtDate = this.getWinsAtWeek(rosterId, startWeek - 1);
      wins.push({
        team: this.sleeperService.getTeamByRosterId(rosterId),
        projWins: winsAtDate + totalWins
      });
    }

    // sort by wins
    wins.sort((a, b) => {
      return b.projWins - a.projWins || b.team.roster.teamMetrics.fpts - a.team.roster.teamMetrics.fpts;
    });

    return wins;
  }

  /**
   * simulate division winners by record
   * @param wins array of simulated record
   * @param numOfByeWeeks number if byes spots
   * @private
   */
  private simulateDivisionWinners(wins: SimulatedTeamInfo[], numOfByeWeeks: number): SimulatedTeamInfo[] {
    // division winners to filter out if applicable
    const divisionWinners = [];

    this.divisions.map(division => {
      let divWinnerTeam = null;
      let numOfwins = 0;
      division.teams.map(team => {
        for (const teamWins of wins) {
          if (divWinnerTeam) {
            if (numOfwins < teamWins.projWins && teamWins.team.roster.rosterId === team.roster.rosterId) {
              divWinnerTeam = teamWins;
              numOfwins = teamWins.projWins;
              break;
            }
          } else {
            if (team.roster.rosterId === teamWins.team.roster.rosterId) {
              divWinnerTeam = teamWins;
              numOfwins = teamWins.projWins;
              break;
            }
          }
        }
      });
      divisionWinners.push(divWinnerTeam);
      this.teamPlayoffOdds[divWinnerTeam?.team.roster.rosterId].timesMakingPlayoffs =
        (this.teamPlayoffOdds[divWinnerTeam?.team.roster.rosterId]?.timesMakingPlayoffs) + 1;
      this.teamPlayoffOdds[divWinnerTeam?.team.roster.rosterId].timesWinningDivision =
        (this.teamPlayoffOdds[divWinnerTeam?.team.roster.rosterId]?.timesWinningDivision) + 1;
    });

    // sort for bye
    divisionWinners.sort((a, b) => {
      return b.projWins - a.projWins || b.team.roster.teamMetrics.fpts - a.team.roster.teamMetrics.fpts;
    });
    // assign bye weeks TODO what if byes are greater than division winners?
    for (let i = 0; i < numOfByeWeeks; i++) {
      this.teamPlayoffOdds[divisionWinners[i].team.roster.rosterId].timesWithBye =
        (this.teamPlayoffOdds[divisionWinners[i].team.roster.rosterId]?.timesWithBye || 0) + 1;
    }

    return divisionWinners;
  }

  /**
   * simulate round of playoff and returns advanced teams
   * @param playoffTeams array of teams
   * @private
   */
  private simulateRoundOfPlayoffs(playoffTeams: SimulatedTeamInfo[]): SimulatedTeamInfo[] {
    // is the format 2 games or 1 game per round
    const gamesPerRound = this.sleeperService.selectedLeague.playoffRoundType === 2 ? 2 : 1;
    // initialize array of advancing teams
    const advancingTeams: SimulatedTeamInfo[] = [];
    for (let i = 0; i < playoffTeams.length / 2; i++) {
      // get two teams facing off
      const team1 = playoffTeams[i];
      const team2 = playoffTeams[playoffTeams.length - 1 - i];

      // get prob team 1 wins
      const team1WinsOdds = Math.round((0.5 + (this.teamRatingsPValues[team1.team.roster.rosterId]
        - this.teamRatingsPValues[team2.team.roster.rosterId]) / 2) * 100);

      // handles 1 game per round format
      if (gamesPerRound === 1) {
        if (this.getRandomInt(100) < team1WinsOdds) {
          advancingTeams.push(team1);
        } else {
          advancingTeams.push(team2);
        }
      } else {
        // handles 2 games per round playoff format
        let team1Wins = 0;
        let team2Wins = 0;
        for (let round = 0; round < gamesPerRound; round++) {
          if (this.getRandomInt(100) < team1WinsOdds) {
            team1Wins++;
          } else {
            team2Wins++;
          }
        }
        if (team1Wins === team2Wins) {
          if (team1.team.roster.teamMetrics.fpts > team2.team.roster.teamMetrics.fpts) {
            advancingTeams.push(team1);
          } else {
            advancingTeams.push(team2);
          }
        } else if (team1Wins === gamesPerRound) {
          advancingTeams.push(team1);
        } else {
          advancingTeams.push(team2);
        }
      }
    }
    return advancingTeams;
  }

  /**
   * handles add/removing teams from teams left
   * @param teamsLeft current array
   * @param matchup matchup to process
   * @private
   */
  private processTeamsLeft(teamsLeft: number[], matchup: SleeperPlayoffMatchUp): number[] {
    if (matchup.win === matchup.team1) {
      if (!teamsLeft.includes(matchup.team1)) {
        teamsLeft.push(matchup.team1);
      }
      if (teamsLeft.includes(matchup.team2)) {
        teamsLeft.splice(teamsLeft.indexOf(matchup.team2), 1);
      }
    } else {
      if (!teamsLeft.includes(matchup.team2)) {
        teamsLeft.push(matchup.team2);
      }
      if (teamsLeft.includes(matchup.team1)) {
        teamsLeft.splice(teamsLeft.indexOf(matchup.team1), 1);
      }
    }
    return teamsLeft;
  }

  /**
   * update playoff odds for week in the playoffs
   * @param startWeek
   */
  private updatePlayoffOdds(startWeek): void {
    // teams that havent lost yet
    const teamsLeft = [];

    // eliminated teams used to check with matchup is winners bracket
    const teamsEliminated = [];

    // currently selected round of the playoffs
    const weekDiff = startWeek - this.sleeperService.selectedLeague.playoffStartWeek + 1;

    // teams that have a bye for the simulation
    const byeWeekTeams = [];

    // how many games per selected rd for array length
    let gamesThisRd = 0;

    // calculate current state of playoffs
    this.sleeperService.playoffMatchUps.map((matchup) => {
      if (matchup.round === weekDiff && (!teamsEliminated.includes(matchup.team1) || !teamsEliminated.includes(matchup.team2))) {
        gamesThisRd++;
      }
      if (matchup.round <= weekDiff) {
        if (matchup.round === 1) {
          teamsLeft.push(matchup.win);
          teamsEliminated.push(matchup.loss);
          this.teamPlayoffOdds[matchup.team1].timesMakingPlayoffs = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team2].timesMakingPlayoffs = this.NUMBER_OF_SIMULATIONS;
        } else if (matchup.round === 2 && (teamsLeft.includes(matchup.team1) || teamsLeft.includes(matchup.team2))) {
          this.processTeamsLeft(teamsLeft, matchup);
          teamsEliminated.push(matchup.loss);
          this.teamPlayoffOdds[matchup.team1].timesMakingPlayoffs = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team2].timesMakingPlayoffs = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team1].timesMakeConfRd = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team2].timesMakeConfRd = this.NUMBER_OF_SIMULATIONS;
        } else if (matchup.round === 3 && (teamsLeft.includes(matchup.team1) || teamsLeft.includes(matchup.team2))) {
          this.processTeamsLeft(teamsLeft, matchup);
          teamsEliminated.push(matchup.loss);
          this.teamPlayoffOdds[matchup.team1].timesMakeChampionship = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team2].timesMakeChampionship = this.NUMBER_OF_SIMULATIONS;
          if (weekDiff > 3) {
            if (!teamsEliminated.includes(matchup.team1)) {
              this.teamPlayoffOdds[matchup.team1].timesWinChampionship = this.NUMBER_OF_SIMULATIONS;
            } else {
              this.teamPlayoffOdds[matchup.team2].timesWinChampionship = this.NUMBER_OF_SIMULATIONS;
            }
          }
        }
      }
      if (weekDiff === 1 && matchup.round === 2) {
        if (!teamsLeft.includes(matchup.team1) && !teamsEliminated.includes(matchup.team1)) {
          teamsLeft.push(matchup.team1);
          byeWeekTeams.push({team: this.sleeperService.getTeamByRosterId(matchup.team1), projWins: 0});
          this.teamPlayoffOdds[matchup.team1].timesMakingPlayoffs = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team1].timesMakeConfRd = this.NUMBER_OF_SIMULATIONS;
        }
        if (!teamsLeft.includes(matchup.team2) && !teamsEliminated.includes(matchup.team2)) {
          teamsLeft.push(matchup.team2);
          byeWeekTeams.push({team: this.sleeperService.getTeamByRosterId(matchup.team2), projWins: 0});
          this.teamPlayoffOdds[matchup.team2].timesMakingPlayoffs = this.NUMBER_OF_SIMULATIONS;
          this.teamPlayoffOdds[matchup.team2].timesMakeConfRd = this.NUMBER_OF_SIMULATIONS;
        }
      }
    });

    let simulatedTeamRd: SimulatedTeamInfo[] = Array(gamesThisRd * 2).fill(null);

    let gameCount = 0;
    this.sleeperService.playoffMatchUps.map((matchUp) => {
      if (matchUp.round === weekDiff && (!teamsEliminated.includes(matchUp.team1) || !teamsEliminated.includes(matchUp.team2))) {
        simulatedTeamRd[gameCount] = {team: this.sleeperService.getTeamByRosterId(matchUp.team1), projWins: 0};
        simulatedTeamRd[simulatedTeamRd.length - 1 - gameCount] = {
          team: this.sleeperService.getTeamByRosterId(matchUp.team2),
          projWins: 0
        };
        gameCount++;
        if (gameCount === gamesThisRd) {
          return;
        }
      }
    });
    if (weekDiff <= 1) {
      simulatedTeamRd = this.simulateRoundOfPlayoffs(simulatedTeamRd);
      // assign wins for conference
      for (const team of simulatedTeamRd) {
        this.teamPlayoffOdds[team.team.roster.rosterId].timesMakeConfRd =
          (this.teamPlayoffOdds[team.team.roster.rosterId]?.timesMakeConfRd || 0) + 1;
      }
      simulatedTeamRd = byeWeekTeams.concat(simulatedTeamRd);
    }
    if (weekDiff <= 2) {
      simulatedTeamRd = this.simulateRoundOfPlayoffs(simulatedTeamRd);
      // assign wins for conference
      for (const team of simulatedTeamRd) {
        this.teamPlayoffOdds[team.team.roster.rosterId].timesMakeChampionship =
          (this.teamPlayoffOdds[team.team.roster.rosterId]?.timesMakeChampionship || 0) + 1;
      }
    }
    if (weekDiff <= 3) {
      simulatedTeamRd = this.simulateRoundOfPlayoffs(simulatedTeamRd);
      // assign wins for conference
      for (const team of simulatedTeamRd) {
        this.teamPlayoffOdds[team.team.roster.rosterId].timesWinChampionship =
          (this.teamPlayoffOdds[team.team.roster.rosterId]?.timesWinChampionship || 0) + 1;
      }
    }
  }

  /**
   * simulate playoffs during the regular season
   * @param playoffTeams teams in playoff
   * @param numOfBye number of byes
   * @private
   */
  private simulatePlayoffs(playoffTeams: SimulatedTeamInfo[], numOfBye: number): void {

    // remove teams with byes
    const divRdTeams = playoffTeams.slice(numOfBye);

    // simulate round and back bye week teams
    const confRdTeams = playoffTeams.slice(0, numOfBye).concat(this.simulateRoundOfPlayoffs(divRdTeams));

    // assign wins for conference
    for (const team of confRdTeams) {
      this.teamPlayoffOdds[team.team.roster.rosterId].timesMakeConfRd =
        (this.teamPlayoffOdds[team.team.roster.rosterId]?.timesMakeConfRd || 0) + 1;
    }

    // simulate championship teams
    const championshipTeams = this.simulateRoundOfPlayoffs(confRdTeams);

    // assign championships to teams
    for (const team of championshipTeams) {
      this.teamPlayoffOdds[team.team.roster.rosterId].timesMakeChampionship =
        (this.teamPlayoffOdds[team.team.roster.rosterId]?.timesMakeChampionship || 0) + 1;
    }

    // simulate championship game
    const winChampionship = this.simulateRoundOfPlayoffs(championshipTeams);

    // assign championship
    for (const team of winChampionship) {
      this.teamPlayoffOdds[team.team.roster.rosterId].timesWinChampionship =
        (this.teamPlayoffOdds[team.team.roster.rosterId]?.timesWinChampionship || 0) + 1;
    }
  }

  /**
   * handles simulating one whole season including playoffs
   * @param startWeek
   */
  simulateOneSeason(startWeek: number = this.getStartWeek()): void {

    // get simulated regular season wins per team
    const simulatedWins: SimulatedTeamInfo[] = this.simulateRegularSeason(startWeek);

    // determine number of bye weeks
    const numOfByeWeeks = this.sleeperService.selectedLeague.playoffTeams % 4;

    // number of spots available
    let numOfPlayoffSpotsLeft = this.sleeperService.selectedLeague.playoffTeams;

    // division winners array
    let nonWildCardTeams: SimulatedTeamInfo[] = [];

    let simulatedPlayoffTeams: SimulatedTeamInfo[] = [];

    // if divisions calculate winner
    // determine division winner and bye
    if (this.divisions.length > 1) {
      // get array of division winners
      nonWildCardTeams = this.simulateDivisionWinners(simulatedWins, numOfByeWeeks);
      // subtract division winners to determine how many more wildcard spots there are
      numOfPlayoffSpotsLeft -= this.divisions.length;
    } else {
      // get byes for best teams since there is no divisions
      for (let i = 0; i < numOfByeWeeks; i++) {
        this.teamPlayoffOdds[simulatedWins[i].team.roster.rosterId].timesWithBye =
          (this.teamPlayoffOdds[simulatedWins[i].team.roster.rosterId]?.timesWithBye || 0) + 1;
        this.teamPlayoffOdds[simulatedWins[i].team.roster.rosterId].timesMakingPlayoffs =
          (this.teamPlayoffOdds[simulatedWins[i].team.roster.rosterId]?.timesMakingPlayoffs || 0) + 1;
        nonWildCardTeams.push(simulatedWins[i]);
      }
      numOfPlayoffSpotsLeft -= numOfByeWeeks;
    }

    // assign the last playoff spots
    for (const simulatedTeam of simulatedWins) {
      if (numOfPlayoffSpotsLeft !== 0 && !nonWildCardTeams.includes(simulatedTeam)) {
        this.teamPlayoffOdds[simulatedTeam.team.roster.rosterId].timesMakingPlayoffs =
          (this.teamPlayoffOdds[simulatedTeam.team.roster.rosterId]?.timesMakingPlayoffs || 0) + 1;
        numOfPlayoffSpotsLeft--;
        simulatedPlayoffTeams.push(simulatedTeam);
      }
    }
    simulatedPlayoffTeams = nonWildCardTeams.concat(simulatedPlayoffTeams);

    // simulate playoffs
    this.simulatePlayoffs(simulatedPlayoffTeams, numOfByeWeeks);
  }

  /**
   * generate playoffs odds
   * simulate 10000 seasons
   * @param startWeek
   */
  private generatePlayoffOdds(startWeek: number = this.getStartWeek()): void {
    // initialize odds values
    for (const team of this.sleeperService.sleeperTeamDetails) {
      this.teamPlayoffOdds[team.roster.rosterId] = {
        timesMakingPlayoffs: 0,
        timesWinningDivision: 0,
        timesWithBye: 0,
        timesMakeConfRd: 0,
        timesMakeChampionship: 0,
        timesWinChampionship: 0,
      };
    }
    for (let i = 0; i < this.NUMBER_OF_SIMULATIONS; i++) {
      if (startWeek >= this.sleeperService.selectedLeague.playoffStartWeek) {
        this.updatePlayoffOdds(startWeek);
      } else {
        this.simulateOneSeason(startWeek);
      }
    }

    // divisor for percent calculations
    const divisor = (this.NUMBER_OF_SIMULATIONS / 100);

    for (const team of this.sleeperService.sleeperTeamDetails) {
      this.teamPlayoffOdds[team.roster.rosterId] = {
        timesMakingPlayoffs: Math.round(this.teamPlayoffOdds[team.roster.rosterId].timesMakingPlayoffs / divisor),
        timesWinningDivision: Math.round(this.teamPlayoffOdds[team.roster.rosterId].timesWinningDivision / divisor),
        timesWithBye: Math.round(this.teamPlayoffOdds[team.roster.rosterId].timesWithBye / divisor),
        timesMakeConfRd: Math.round(this.teamPlayoffOdds[team.roster.rosterId].timesMakeConfRd / divisor),
        timesMakeChampionship: Math.round(this.teamPlayoffOdds[team.roster.rosterId].timesMakeChampionship / divisor),
        timesWinChampionship: Math.round(this.teamPlayoffOdds[team.roster.rosterId].timesWinChampionship / divisor),
      };
    }
    // console.table(this.teamPlayoffOdds);
  }

  /**
   * get random number
   * TODO create numbers service?
   */
  private getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }

  /**
   * handles if start week is null
   * @private
   */
  private getStartWeek(): number {
    if (this.nflService.stateOfNFL.season === this.sleeperService.selectedLeague.season) {
      return this.nflService.stateOfNFL.week === 0 ? 1 : this.nflService.stateOfNFL.week;
    }
    return Number(this.nflService.stateOfNFL.season) < 2021 ? 17 : 18;
  }
}
