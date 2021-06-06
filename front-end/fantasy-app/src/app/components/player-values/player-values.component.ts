import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {BaseComponent} from '../base-component.abstract';
import {KTCPlayer} from '../../model/KTCPlayer';
import {KTCApiService} from '../../services/api/ktc-api.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SleeperService} from '../../services/sleeper.service';

@Component({
  selector: 'app-player-values',
  templateUrl: './player-values.component.html',
  styleUrls: ['./player-values.component.css']
})
export class PlayerValuesComponent extends BaseComponent implements OnInit {

  /** are players loaded */
  playersLoaded: boolean;

  constructor(public playerService: PlayerService) {
    super();
  }

  ngOnInit(): void {
    this.playersLoaded = (this.playerService.playerValues.length > 0);
    this.playerService.loadPlayerValuesForToday();
    this.addSubscriptions(this.playerService.$currentPlayerValuesLoaded.subscribe(() => {
      this.playersLoaded = true;
    }));
  }

}
