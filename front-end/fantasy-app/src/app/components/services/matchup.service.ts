import {Injectable} from '@angular/core';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {ScheduleComp, WeeklyRecordComp} from '../model/matchup';
import {SleeperTeam} from '../../model/SleeperLeague';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  // schedule comparisons
  scheduleComparison: ScheduleComp[] = [];

  // weekly record comparisons
  weeklyComparison: WeeklyRecordComp[] = [];

  /**
   * initializes matchup data
   * @param selectedLeague selected League data
   */
  initMatchUpCharts(selectedLeague: SleeperLeagueData): void {
    this.generateWeeklyRecords(selectedLeague);
    this.generateScheduleComparison(selectedLeague);
  }

  /**
   * helper to generate all weekly records
   * @param selectedLeague league data
   */
  generateWeeklyRecords(selectedLeague: SleeperLeagueData): void {
    if (this.weeklyComparison.length === 0) {
      for (let rosterId = 1; rosterId < selectedLeague.totalRosters + 1; rosterId++) {
        this.weeklyComparison.push(this.calculateWeeklyRecordsForTeam(selectedLeague, rosterId));
      }
    }
  }

  /**
   * helper to generates schedule comparison
   * @param selectedLeague league data
   */
  generateScheduleComparison(selectedLeague: SleeperLeagueData): void {
    if (this.scheduleComparison.length === 0) {
      for (let rosterId = 1; rosterId < selectedLeague.totalRosters + 1; rosterId++) {
        this.scheduleComparison.push(new ScheduleComp(rosterId, this.calculateScheduleForTeam(selectedLeague, rosterId)));
      }
    }
  }

  /**
   * calculates schedule comparison for team
   * @param selectedLeague league data
   * @param rosterId which roster is selected
   */
  calculateScheduleForTeam(selectedLeague: SleeperLeagueData, rosterId: number): {} {
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
          for (const matchup of selectedLeague.leagueMatchUps[week]) {
            totalPoints += matchup.points;
            if (matchup.rosterId === selectedRosterId) {
              matchUpId = matchup.matchupId;
            }
            if (matchup.rosterId === rosterId) {
              teamPoints = matchup.points;
            }
          }
          for (const opponent of selectedLeague.leagueMatchUps[week]) {
            if (matchUpId === opponent.matchupId && opponent.rosterId !== selectedRosterId) {
              if (opponent.points > teamPoints) {
                losses++;
              } else if (opponent.points < teamPoints) {
                wins++;
              } else if (teamPoints !== 0) {
                if (opponent.rosterId === rosterId) {
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

  /**
   * calculate Weekly records for team
   * @param selectedLeague league data
   * @param rosterId selected roster
   * @private
   */
  private calculateWeeklyRecordsForTeam(selectedLeague: SleeperLeagueData, rosterId: number): WeeklyRecordComp {
    const weeklyRecords = {};
    let totalWins = 0;
    let totalLosses = 0;
    let totalTies = 0;
    for (let week = selectedLeague.startWeek; week < selectedLeague.playoffStartWeek; week++) {
      let wins = 0;
      let losses = 0;
      let ties = 0;
      if (selectedLeague.leagueMatchUps[week] !== undefined) {
        const teamPoints = selectedLeague.leagueMatchUps[week]?.filter(matchup => {
          return matchup.rosterId === rosterId;
        })[0]?.points;
        for (const matchup of selectedLeague.leagueMatchUps[week]) {
          if (matchup.rosterId !== rosterId) {
            if (matchup.points > teamPoints) {
              totalLosses++;
              losses++;
            } else if (matchup.points < teamPoints) {
              totalWins++;
              wins++;
            } else if (matchup.points !== 0 && teamPoints !== 0)  {
              totalTies++;
              ties++;
            }
          }
        }
      }
      weeklyRecords[week] = [wins, losses, ties];
    }
    return new WeeklyRecordComp(rosterId, weeklyRecords, totalWins, totalLosses, totalTies);
  }

  /**
   * get team display name
   * @param col col number
   * @param teams team list
   */
  getTeamName(col: string, teams: SleeperTeam[]): string {
    for (const team of teams) {
      if (team.roster.rosterId.toString() === col) {
        return team.owner.teamName;
      }
    }
  }

  /**
   * reset standings arrays
   */
  reset(): void {
    this.weeklyComparison = [];
    this.scheduleComparison = [];
  }
}
