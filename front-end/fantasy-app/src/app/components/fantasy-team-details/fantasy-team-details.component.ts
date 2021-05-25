import {Component, OnInit} from '@angular/core';
import {SleeperService} from '../../services/sleeper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayoffCalculatorService} from '../services/playoff-calculator.service';
import {SleeperTeam} from '../../model/SleeperLeague';
import {MatchupService} from '../services/matchup.service';
import {PowerRankingsService} from '../services/power-rankings.service';
import {PlayerService} from '../../services/player.service';
import {KTCPlayer} from '../../model/KTCPlayer';
import {PlayerComparisonService} from '../services/player-comparison.service';

@Component({
  selector: 'app-fantasy-team-details',
  templateUrl: './fantasy-team-details.component.html',
  styleUrls: ['./fantasy-team-details.component.css']
})
export class FantasyTeamDetailsComponent implements OnInit {

  selectedTeam: SleeperTeam;

  roster: KTCPlayer[] = [];

  constructor(public sleeperService: SleeperService, private route: ActivatedRoute, public powerRankingsService: PowerRankingsService, public playerService: PlayerService, private playerComparisonService: PlayerComparisonService, private router: Router) {
  }

  ngOnInit(): void {
    const ownerName = this.route.snapshot.paramMap.get('ownerName');

    if (this.sleeperService.leagueLoaded) {
      const teamIndex = this.sleeperService.sleeperTeamDetails.map(e => e.owner.ownerName).indexOf(ownerName);
      this.selectedTeam = this.sleeperService.sleeperTeamDetails[teamIndex];
      this.powerRankingsService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playerService.playerValues)
      for(let sleeperId of this.selectedTeam.roster.players) {
        const player = this.playerService.getPlayerBySleeperId(sleeperId)
        if(player) {
          this.roster.push(player)
        }
      }
      this.roster.sort((a,b) => {
        if(this.sleeperService.selectedLeague.isSuperflex) {
          return b.sf_trade_value - a.sf_trade_value;
        } else {
          return b.trade_value - a.trade_value;
        }
      })
    }
  }

  getAveragePoints() {
    return Math.round(this.selectedTeam.roster.teamMetrics.fpts/(this.sleeperService.selectedLeague.playoffStartWeek - this.sleeperService.selectedLeague.startWeek));
  }

  openPlayerComparison(selectedPlayer: KTCPlayer) {
    this.playerComparisonService.addPlayerToCharts(selectedPlayer);
    this.router.navigateByUrl('players/comparison')
  }

}
