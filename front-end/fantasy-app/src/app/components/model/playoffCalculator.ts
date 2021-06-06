import {SleeperTeam} from '../../model/SleeperLeague';

export class Division {
  constructor(divisionId: number, divisionTeams: any[]) {
    this.divisionId = divisionId;
    this.teams = divisionTeams;
  }

  divisionId: number;
  divisionName: string;
  teams: SleeperTeam[];
}
