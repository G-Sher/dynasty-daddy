import {Component, OnInit} from '@angular/core';
import {SleeperService} from '../../services/sleeper.service';
import {PowerRankingsService} from '../services/power-rankings.service';
import {PlayerService} from '../../services/player.service';
import {BaseComponent} from '../base-component.abstract';

@Component({
  selector: 'app-power-rankings',
  templateUrl: './power-rankings.component.html',
  styleUrls: ['./power-rankings.component.css']
})
export class PowerRankingsComponent extends BaseComponent implements OnInit {

  constructor(public sleeperService: SleeperService,
              public powerRankingService: PowerRankingsService,
              private playersService: PlayerService) {
    super();
  }

  ngOnInit(): void {
    if (this.sleeperService.leagueLoaded && this.playersService.playerValues.length !== 0) {
      this.powerRankingService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playersService.playerValues);
    } else {
      this.playersService.loadPlayerValuesForToday();
    }
    this.addSubscriptions(this.playersService.$currentPlayerValuesLoaded.subscribe(() => {
        if (this.sleeperService.sleeperTeamDetails) {
          this.powerRankingService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playersService.playerValues);
        }
      })
    );
  }
}
