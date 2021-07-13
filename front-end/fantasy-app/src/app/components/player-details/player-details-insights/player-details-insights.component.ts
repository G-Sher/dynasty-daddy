import {Component, Input, OnInit} from '@angular/core';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-player-details-insights',
  templateUrl: './player-details-insights.component.html',
  styleUrls: ['./player-details-insights.component.css']
})
export class PlayerDetailsInsightsComponent implements OnInit {

  @Input()
  selectedPlayer: KTCPlayer;

  overallAdjPlayers: KTCPlayer[];

  positionAdjPlayers: KTCPlayer[];
  displayedColumns: string[] = ['rank', 'name', 'value'];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.overallAdjPlayers = this.playerService.getAdjacentPlayersByNameId(this.selectedPlayer.name_id);
    this.positionAdjPlayers = this.playerService.getAdjacentPlayersByNameId(this.selectedPlayer.name_id, this.selectedPlayer.position);
  }

}
