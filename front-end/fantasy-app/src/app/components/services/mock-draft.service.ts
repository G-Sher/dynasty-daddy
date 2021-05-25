import {Injectable} from '@angular/core';
import {KTCPlayer} from '../../model/KTCPlayer';
import {TeamMockDraftPick} from '../model/mockDraft';
import {SleeperTeam} from '../../model/SleeperLeague';
import {DraftCapital, SleeperLeagueData} from '../../model/SleeperUser';
import {TeamPowerRanking} from '../model/powerRankings';
import {SleeperService} from '../../services/sleeper.service';

@Injectable({
  providedIn: 'root'
})
export class MockDraftService {

  teamPicks: TeamMockDraftPick[] = [];

  selectablePlayers: KTCPlayer[] = [];

  // picks: KTCPlayer[] = [];

  constructor(private sleeperService: SleeperService) {
  }

  generateDraft(players: KTCPlayer[], isSuperFlex: boolean = true, playerType: number = 1) {
    if(playerType === 1) { // rookies only
      this.selectablePlayers = players.filter(player => {
        return player.experience === 0 && player.position != 'PI';
      })
    } else if (playerType === 2) { // vets only
      this.selectablePlayers = players.filter(player => {
        return player.experience !== 0 && player.position != 'PI';
      })
    } else { // all players
      this.selectablePlayers = players.filter(player => {
        return player.position != 'PI';
      })
    }
    this.selectablePlayers.sort((playerA, playerB) => {
      if(this.sleeperService.selectedLeague.isSuperflex){
        return playerB.sf_trade_value - playerA.sf_trade_value;
      } else {
        return playerB.trade_value - playerA.trade_value;
      }
    })

    // this.picks = players.filter(player => {
    //   return player.position === 'PI';
    // })
  }

  mapDraftObjects(teams: SleeperTeam[]) {
    if(this.teamPicks.length === 0) {
      teams.map(team => {
        for(const pick of team.draftCapital) {
          this.teamPicks.push(new TeamMockDraftPick(((pick.round-1) * 12) + pick.pick, this.createPickString(pick), team.owner.ownerName, team.owner.teamName))
        }
      })
      this.teamPicks.sort((pickA, pickB) => {
        return pickA.pick - pickB.pick;
      })
    }
  }


  private createPickString(pick: DraftCapital) {
    return pick.round.toString() + '.' + (pick.pick > 9 ? pick.pick.toString() : '0' + pick.pick.toString());
  }

  /**
   * reset variables when league is changed
   */
  reset() {
    this.teamPicks = [];
    this.selectablePlayers = [];
    // this.picks = [];
  }
}
