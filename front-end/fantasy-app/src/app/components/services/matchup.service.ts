import {Injectable} from '@angular/core';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {generateAnalysis} from '@angular/compiler-cli/src/ngtsc/indexer';
import {ScheduleComp, WeeklyRecordComp} from '../model/matchup';
import {SleeperTeam} from '../../model/SleeperLeague';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  scheduleComparison: ScheduleComp[] = [];

  weeklyComparison: WeeklyRecordComp[] = [];

  /**
   * initializes matchup data
   * @param selectedLeague
   */
  initMatchUpCharts(selectedLeague: SleeperLeagueData) {
    this.generateWeeklyRecords(selectedLeague);
    this.generateScheduleComparison(selectedLeague);
  }

  generateWeeklyRecords(selectedLeague: SleeperLeagueData) {
    if (this.weeklyComparison.length === 0) {
      for (let rosterId = 1; rosterId < selectedLeague.totalRosters + 1; rosterId++) {
        this.weeklyComparison.push(this.calculateWeeklyRecordsForTeam(selectedLeague, rosterId));
      }
    }
  }

  /**
   * generates schedule comparison
   * @param selectedLeague
   */
  generateScheduleComparison(selectedLeague: SleeperLeagueData) {
    if (this.scheduleComparison.length === 0) {
      for (let rosterId = 1; rosterId < selectedLeague.totalRosters + 1; rosterId++) {
        this.scheduleComparison.push(new ScheduleComp(rosterId, this.calculateScheduleForTeam(selectedLeague, rosterId)));
      }
    }
  }

  /**
   * calculates schedule comparison for team
   * @param selectedLeague
   * @param rosterId
   */
  calculateScheduleForTeam(selectedLeague: SleeperLeagueData, rosterId: number) {
    const schedule = {};
    for (let selectedRosterId = 1; selectedRosterId < selectedLeague.totalRosters + 1; selectedRosterId++) {
      let wins = 0;
      let losses = 0;
      let ties = 0;
      for (let week = selectedLeague.startWeek; week < selectedLeague.playoffStartWeek; week++) {
        let matchUpId = 0;
        let teamPoints = 0;
        let totalPoints = 0;
        if (selectedLeague.leagueMatchUps[week] !== undefined) {
          for (let matchup of selectedLeague.leagueMatchUps[week]) {
            totalPoints += matchup.points;
            if (matchup.rosterId === selectedRosterId) {
              matchUpId = matchup.matchupId;
            }
            if (matchup.rosterId === rosterId) {
              teamPoints = matchup.points;
            }
          }
          for (let opponent of selectedLeague.leagueMatchUps[week]) {
            if (matchUpId === opponent.matchupId && opponent.rosterId !== selectedRosterId) {
              if (opponent.points > teamPoints) {
                losses++;
              } else if (opponent.points < teamPoints) {
                wins++;
              } else if(teamPoints !== 0) {
                if (opponent.rosterId == rosterId) {
                  if (totalPoints / selectedLeague.totalRosters > teamPoints) {
                    losses++;
                  } else if (totalPoints / selectedLeague.totalRosters <= teamPoints) {
                    wins++;
                  }
                } else {
                  ties++;
                }
              }
              break;
            }
          }
        }
      }
      schedule[selectedRosterId] = [wins, losses, ties];
    }
    return schedule;
  }

  private calculateWeeklyRecordsForTeam(selectedLeague: SleeperLeagueData, rosterId: number) {
    const weeklyRecords = {};
    let totalWins = 0, totalLosses = 0, totalTies = 0;
    for (let week = selectedLeague.startWeek; week < selectedLeague.playoffStartWeek; week++) {
      let wins = 0, losses = 0, ties = 0;
      if(selectedLeague.leagueMatchUps[week] !== undefined) {
        const teamPoints = selectedLeague.leagueMatchUps[week]?.filter(matchup => {
          return matchup.rosterId === rosterId
        })[0]?.points
        for (let matchup of selectedLeague.leagueMatchUps[week]) {
          if (matchup.rosterId !== rosterId) {
            if (matchup.points > teamPoints) {
              totalLosses++;
              losses++;
            } else if (matchup.points < teamPoints) {
              totalWins++;
              wins++;
            } else if (matchup.points !== 0 && teamPoints !== 0)  {
              totalTies++
              ties++;
            }
          }
        }
      }
      weeklyRecords[week] = [wins, losses, ties]
    }
    return new WeeklyRecordComp(rosterId, weeklyRecords, totalWins, totalLosses, totalTies);
  }

  getTeamName(col: string, teams: SleeperTeam[]): string {
    for(let team of teams) {
      if(team.roster.rosterId == col) {
        return team.owner.teamName;
      }
    }
  }

  reset() {
    this.weeklyComparison = [];
    this.scheduleComparison = [];
  }
}
