import {Injectable} from '@angular/core';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {ScheduleComp, WeeklyRecordComp} from '../model/matchup';
import {SleeperTeam} from '../../model/SleeperLeague';
import {ChartDataSets} from 'chart.js';
import {MatchUpUI} from '../model/matchup';

@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  /** schedule comparisons */
  scheduleComparison: ScheduleComp[] = [];

  /** weekly record comparisons */
  weeklyComparison: WeeklyRecordComp[] = [];

  /** chart data for stength of schedule */
  strengthOfSchedule: ChartDataSets[] = [];

  /** array of array for each weeks matchups */
  leagueMatchUpUI: MatchUpUI[][] = [];

  /**
   * initializes matchup data
   * @param selectedLeague selected League data
   */
  initMatchUpCharts(selectedLeague: SleeperLeagueData): void {
    this.generateWeeklyRecords(selectedLeague);
    this.generateScheduleComparison(selectedLeague);
    this.leagueMatchUpUI = this.calculateLeagueMatchUps(selectedLeague);
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
  private calculateScheduleForTeam(selectedLeague: SleeperLeagueData, rosterId: number): {} {
    const schedule = {};
    for (let selectedRosterId = 1; selectedRosterId < selectedLeague.totalRosters + 1; selectedRosterId++) {
      let wins = 0;
      let losses = 0;
      let ties = 0;
      for (let week = selectedLeague.startWeek; week < selectedLeague.playoffStartWeek; week++) {
        let matchUpId = 0;
        let teamPoints = 0;
        let totalPoints = 0;
        if (selectedLeague.leagueMatchUps && selectedLeague.leagueMatchUps[week] !== undefined) {
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
   * creates league match ups objects for playoff calculator
   * @param selectedLeague league data
   */
  private calculateLeagueMatchUps(selectedLeague: SleeperLeagueData): MatchUpUI[][] {
    const allWeeksMatchUps = [];
    const weekNumbers = Number(selectedLeague.season) < 2021 ? 17 : 18;
    for (let week = selectedLeague.startWeek; week < weekNumbers; week++) {
      if (selectedLeague.leagueMatchUps && selectedLeague.leagueMatchUps[week] !== undefined) {
        const weekMatchUps: MatchUpUI[] = [];
        for (let i = 1; i <= selectedLeague.leagueMatchUps[week].length / 2; i++) {
          for (const team1 of selectedLeague.leagueMatchUps[week]) {
            if (team1.matchupId === i) {
              selectedLeague.leagueMatchUps[week].map(team2 => {
                if (team2.matchupId === i && team2.rosterId !== team1.rosterId) {
                  return weekMatchUps.push(new MatchUpUI(week, team1, team2));
                }
              });
              break;
            }
          }
        }
        allWeeksMatchUps.push(weekMatchUps);
      }
    }
    return allWeeksMatchUps;
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
      if (selectedLeague.leagueMatchUps && selectedLeague.leagueMatchUps[week] !== undefined) {
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
            } else if (matchup.points !== 0 && teamPoints !== 0) {
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
  getTeamName(col: string | number, teams: SleeperTeam[]): string {
    for (const team of teams) {
      if (team.roster.rosterId.toString() === col.toString()) {
        return team.owner?.teamName;
      }
    }
  }

  /**
   * reset standings arrays
   */
  reset(): void {
    this.weeklyComparison = [];
    this.scheduleComparison = [];
    this.leagueMatchUpUI = [];
  }
}
