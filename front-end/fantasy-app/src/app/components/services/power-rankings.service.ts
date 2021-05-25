import {Injectable} from '@angular/core';
import {SleeperTeam} from '../../model/SleeperLeague';
import {KTCPlayer} from '../../model/KTCPlayer';
import {PositionPowerRanking, TeamPowerRanking} from '../model/powerRankings';
import {SleeperService} from '../../services/sleeper.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerRankingsService {

  /** team power rankings */
  powerRankings: TeamPowerRanking[] = [];

  constructor(private sleeperService: SleeperService) {
  }

  /** supported position groups to power rank */
  positionGroups: string[] = ['QB', 'RB', 'WR', 'TE'];

  /**
   * maps players to sleeper id's on rosters
   * @param teams
   * @param players
   */
  mapPowerRankings(teams: SleeperTeam[], players: KTCPlayer[]) {
    try{
      if (this.powerRankings.length === 0) {
        teams.map((team) => {
          const roster = [];
          let sfTradeValueTotal = 0;
          let tradeValueTotal = 0;
          for (const sleeperId of team.roster?.players) {
            for (const player of players) {
              if (sleeperId === player.sleeper_id) {
                roster.push(player);
                sfTradeValueTotal += player.sf_trade_value;
                tradeValueTotal += player.trade_value;
                break;
              }
            }
          }
          const positionRoster: PositionPowerRanking[] = [];
          for (const group of this.positionGroups) {
            let sfTradeValue = 0;
            let tradeValue = 0;
            let groupList: KTCPlayer[] = [];
            groupList = roster.filter(player => {
              if (player.position === group) {
                sfTradeValue += player.sf_trade_value;
                tradeValue += player.trade_value;
                return player;
              }
            });
            positionRoster.push(new PositionPowerRanking(group, sfTradeValue, tradeValue, groupList));
          }
          const pickValues = players.filter(player => {
            return player.position === 'PI';
          });
          const picks: KTCPlayer[] = [];
          let sfPickTradeValue = 0;
          let pickTradeValue = 0;
          team.draftCapital.map(pick => {
              for (const pickValue of pickValues) {
                if (pickValue.last_name.includes(pick.round.toString()) && pickValue.first_name === pick.year) {
                  if (pick.pick < 5 && pickValue.last_name.includes('Early')) {
                    sfPickTradeValue += pickValue.sf_trade_value;
                    pickTradeValue += pickValue.trade_value;
                    sfTradeValueTotal += pickValue.sf_trade_value;
                    tradeValueTotal += pickValue.trade_value;
                    picks.push(pickValue);
                    break;
                  } else if (pick.pick > 8 && pickValue.last_name.includes('Late')) {
                    sfPickTradeValue += pickValue.sf_trade_value;
                    pickTradeValue += pickValue.trade_value;
                    sfTradeValueTotal += pickValue.sf_trade_value;
                    tradeValueTotal += pickValue.trade_value;
                    picks.push(pickValue);
                    break;
                  } else if (pick.pick > 4 && pick.pick < 9 && pickValue.last_name.includes('Mid')) {
                    sfPickTradeValue += pickValue.sf_trade_value;
                    pickTradeValue += pickValue.trade_value;
                    sfTradeValueTotal += pickValue.sf_trade_value;
                    tradeValueTotal += pickValue.trade_value;
                    picks.push(pickValue);
                    break;
                  }
                }
              }
            }
          );
          const rankedPicks = new PositionPowerRanking('PI', sfPickTradeValue, pickTradeValue, picks);
          this.powerRankings.push(new TeamPowerRanking(team, positionRoster, sfTradeValueTotal, tradeValueTotal, rankedPicks));
        });
        this.rankTeams(this.sleeperService.selectedLeague.isSuperflex);
      }
    } catch(e: any) {
      console.error('Error Mapping League Data: ', e)
    }

  }

  /**
   * sort position groups based on value
   * @param isSuperflex
   */
  sortRosterByValue(isSuperflex: boolean) {
    this.powerRankings.map(team => {
      for (let group of team.roster) {
        group.players.sort((a, b) => {
          if (isSuperflex) {
            return b.sf_trade_value - a.sf_trade_value;
          } else {
            return b.trade_value - a.trade_value;
          }
        });
      }
      team.picks.players.sort((a, b) => {
        if (isSuperflex) {
          return b.sf_trade_value - a.sf_trade_value;
        } else {
          return b.trade_value - a.trade_value;
        }
      });
    });
  }

  /**
   * calulates and ranks teams based on trade value
   * @param isSuperflex
   */
  rankTeams(isSuperflex: boolean) {
    // Sort position groups and picks desc
    this.sortRosterByValue(isSuperflex);
    // Rank position groups
    this.positionGroups.forEach((value, index) => {
      this.powerRankings.sort((teamA, teamB) => {
        if (isSuperflex) {
          return teamB.roster[index].sfTradeValue - teamA.roster[index].sfTradeValue;
        } else {
          return teamB.roster[index].tradeValue - teamA.roster[index].tradeValue;
        }
      });
      this.powerRankings.forEach((team, teamIndex) => {
        team.roster[index].rank = teamIndex + 1;
      });
    });
    // Rank picks
    this.powerRankings.sort((teamA, teamB) => {
      if(isSuperflex){
        return teamB.picks.sfTradeValue - teamA.picks.sfTradeValue;
      } else {
        return teamB.picks.tradeValue - teamA.picks.tradeValue
      }
    });
    this.powerRankings.forEach((team, teamIndex) => {
      team.picks.rank = teamIndex + 1;
    });
    // calculate best starting lineup
    this.calculateStarterValue();
    // Rank starting lineups
    this.powerRankings.sort((teamA, teamB) => {
      if (isSuperflex) {
        return teamB.sfTradeValueStarter - teamA.sfTradeValueStarter;
      } else {
        return teamB.tradeValueStarter - teamA.tradeValueStarter;
      }
    });
    this.powerRankings.forEach((team, index) => {
      team.starterRank = index + 1;
    });
    // rank overall points
    this.powerRankings.sort((teamA, teamB) => {
      if (isSuperflex) {
        return teamB.sfTradeValueOverall - teamA.sfTradeValueOverall;
      } else {
        return teamB.tradeValueOverall - teamA.tradeValueOverall;
      }
    });
    this.powerRankings.forEach((team, index) => {
      team.overallRank = index + 1;
    });
  }

  /**
   * calculates starters for teams
   */
  calculateStarterValue() {
    const positionGroupCount: number[] = [];
    for (const pos of this.positionGroups) {
      positionGroupCount.push(this.getCountForPosition(pos));
    }
    positionGroupCount.push(this.getCountForPosition('FLEX'));
    positionGroupCount.push(this.getCountForPosition('SUPER_FLEX'));
    this.powerRankings.map(team => {
      let teamRosterCount: number[] = positionGroupCount.slice();
      if (teamRosterCount[0] > 0) //qb
      {
        team.starters.push(...team.roster[0].players.slice(0, teamRosterCount[0]));
      }
      if (teamRosterCount[1] > 0) // rb
      {
        team.starters.push(...team.roster[1].players.slice(0, teamRosterCount[1]));
      }
      if (teamRosterCount[2] > 0) // wr
      {
        team.starters.push(...team.roster[2].players.slice(0, teamRosterCount[2]));
      }
      if (teamRosterCount[3] > 0) // te
      {
        team.starters.push(...team.roster[3].players.slice(0, teamRosterCount[3]));
      }
      if (teamRosterCount[4] > 0) // flex
      {
        teamRosterCount = this.getBestAvailableFlex(teamRosterCount[4], teamRosterCount, team);
      }
      if (teamRosterCount[5] > 0) // flex
      {
        if (team.roster[0].players.length > teamRosterCount[0]) {
          team.starters.push(team.roster[0].players[teamRosterCount[0]]);
          teamRosterCount[0]++;
        } else {
          teamRosterCount = this.getBestAvailableFlex(teamRosterCount[5], teamRosterCount, team);
        }
      }
      for (const starter of team.starters) {
        team.sfTradeValueStarter += starter.sf_trade_value;
        team.tradeValueStarter += starter.trade_value;
      }
    });
  }

  /**
   * determines the best available flex option for team by trade value
   * @param spots
   * @param teamRosterCount
   * @param team
   * @param isSuperFlex
   * @private
   */
  private getBestAvailableFlex(spots: number, teamRosterCount: number[], team: TeamPowerRanking): number[] {
    for (let i = 0; i < spots; i++) {
      const topRb = team.roster[1]?.players[teamRosterCount[1]];
      const topWr = team.roster[2]?.players[teamRosterCount[2]];
      const topTe = team.roster[3]?.players[teamRosterCount[3]];
      const flexPlayer = this.getBetterPlayer(topTe, this.getBetterPlayer(topRb, topWr));
      if (flexPlayer) {
        teamRosterCount[this.positionGroups.indexOf(flexPlayer.position)]++;
        team.starters.push(flexPlayer);
      }
    }
    return teamRosterCount;
  }

  /**
   * determines which player has the higher value
   * @param player1
   * @param player2
   * @private
   */
  private getBetterPlayer(player1: KTCPlayer, player2: KTCPlayer): KTCPlayer {
    if (player1 && player2) {
      if (this.sleeperService.selectedLeague.isSuperflex) {
        if (player1.sf_trade_value > player2.sf_trade_value) {
          return player1;
        } else {
          return player2;
        }
      } else {
        if (player1.trade_value > player2.trade_value) {
          return player1;
        } else {
          return player2;
        }
      }
    } else if (player1) {
      return player1;
    } else {
      return player2;
    }
  }

  /**
   * calculates the number of starter positions by position in league
   * @param position
   * @private
   */
  private getCountForPosition(position: string) {
    return this.sleeperService.selectedLeague.rosterPositions.filter(x => x === position).length;
  }

  /**
   * resets power rankings
   */
  reset() {
    this.powerRankings = [];
  }

  getRankByTeam(selectedTeam: SleeperTeam, property = 'overallRank') {
    for( let team of this.powerRankings) {
      if(team.team.roster.rosterId == selectedTeam.roster.rosterId) {
        return team[property];
      }
    }
  }
}
