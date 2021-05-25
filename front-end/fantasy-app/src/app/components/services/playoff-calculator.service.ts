import {Injectable} from '@angular/core';
import {SleeperTeam} from '../../model/SleeperLeague';
import {Division} from '../model/playoffCalculator';
import {SleeperLeagueData} from '../../model/SleeperUser';

@Injectable({
  providedIn: 'root'
})
export class PlayoffCalculatorService {

  divisions: Division[] = [];

  generateDivisions(league: SleeperLeagueData, teams: SleeperTeam[]) {
    if (this.divisions.length === 0) {
      if (league.divisions) {
        for (let i = 0; i < league.divisions; i++) {
          const divisionTeams: SleeperTeam[] = [];
          for (let team of teams) {
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
          if(a.roster.teamMetrics.rank != 0){
            return a.roster.teamMetrics.rank - b.roster.teamMetrics.rank;
          } else {
            return b.roster.teamMetrics.wins - a.roster.teamMetrics.wins ||  b.roster.teamMetrics.fpts - a.roster.teamMetrics.fpts;
          }
        });
        if(allTeams[0].roster.teamMetrics.rank == 0) {
          for(let i = 0; i < allTeams.length; i++) {
            allTeams[i].roster.teamMetrics.rank = i + 1;
          }
        }
        this.divisions.push(new Division(1, allTeams))
        league.divisions = 1;
      }
    }
  }

  reset() {
    this.divisions = [];
  }
}
