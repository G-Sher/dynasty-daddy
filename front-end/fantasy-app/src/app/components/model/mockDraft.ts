import {KTCPlayer} from '../../model/KTCPlayer';
import {TeamPowerRanking} from './powerRankings';

export class TeamMockDraftPick {
  constructor(number: number, display: string, ownerName: string, teamName: string) {
    this.pick = number;
    this.pickdisplay = display;
    this.pickOwner = ownerName;
    this.pickTeam = teamName;
  }

  pickOwner: string;
  pickTeam: string;
  pickdisplay: string;
  pick: number;
}
