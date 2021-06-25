import {SleeperTeam, SleeperTeamMatchUpData} from '../../model/SleeperLeague';
import {MatchUpUI} from './matchup';

export class Division {
  constructor(divisionId: number, divisionTeams: any[]) {
    this.divisionId = divisionId;
    this.teams = divisionTeams;
  }

  divisionId: number;
  divisionName: string;
  teams: SleeperTeam[];
}

export class MatchUpProbability {
  constructor(matchup: MatchUpUI, team1Prob: number, team2Prob: number) {
    this.matchUpDetails = matchup;
    this.team1Prob = team1Prob;
    this.team2Prob = team2Prob;
  }

  matchUpDetails: MatchUpUI;
  team1Prob: number;
  team2Prob: number;
}
