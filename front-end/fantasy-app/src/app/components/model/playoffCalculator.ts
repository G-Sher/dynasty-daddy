import {SleeperTeam} from '../../model/SleeperLeague';

export class Division {
  constructor(number: number, divisionTeams: any[]) {
    this.divisionId = number;
    this.teams = divisionTeams
  }

  divisionId: number;
  divisionName: string;
  teams: SleeperTeam[];
}
