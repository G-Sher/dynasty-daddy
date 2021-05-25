import {Component, Inject, OnInit} from '@angular/core';
import {PlayerService} from '../../../services/player.service';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {KTCApiService} from '../../../services/api/ktc-api.service';
import {PlayerComparisonService} from '../../services/player-comparison.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SleeperService} from '../../../services/sleeper.service';

@Component({
  selector: 'app-add-player-comparison-modal',
  templateUrl: './add-player-comparison-modal.component.html',
  styleUrls: ['./add-player-comparison-modal.component.css']
})
export class AddPlayerComparisonModalComponent implements OnInit {
  playerSearch: string = '';

  filteredList: KTCPlayer[];
  filterPosGroup: boolean[];

  constructor(private playerService: PlayerService, private ktcApiService: KTCApiService, public playerComparisonService: PlayerComparisonService, private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { isGroup2: boolean }, public sleeperService: SleeperService) { }

  ngOnInit(): void {
    this.filterPosGroup = [true, true, true, true, true, false];
    this.filteredList = this.playerService.playerValues.slice(0,7)
  }

  addPlayer(player: KTCPlayer) {
    let addable = true;
    if(this.playerComparisonService.isGroupMode && this.data.isGroup2) {
      for(let p of this.playerComparisonService.group2SelectedPlayers) {
        if(p.id === player.name_id){
          addable = false;
        }
      }
    } else {
      for(let p of this.playerComparisonService.selectedPlayers) {
        if(p.id === player.name_id){
          addable = false;
        }
      }
    }
    if(addable) {
      this.playerComparisonService.isGroupMode ? this.playerComparisonService.addPlayerToCharts(player, this.data.isGroup2) : this.playerComparisonService.addPlayerToCharts(player)
    }
  }

  onRemove(player: KTCPlayer, isGroup2: boolean = false) {
    this.playerComparisonService.onRemove({name: player.full_name, data: [], id: player.name_id}, isGroup2)
  }

  finishAdding() {
    this.dialog.closeAll()
  }

  updatePlayerFilters() {
    this.filteredList = this.playerService.playerValues.slice(0);
    const filterOptions = ['QB', 'RB', 'WR', 'TE', 'PI'];
    if(this.filterPosGroup[5]){
      this.filteredList = this.filteredList.filter(player => {
        if (player.experience === 0 && player.position !== 'PI') {
          return player;
        }
      });
    }
    for (let i = 0; i < this.filterPosGroup.length; i++) {
      if (!this.filterPosGroup[i]) {
        this.filteredList = this.filteredList.filter(player => {
          if (player.position !== filterOptions[i]) {
            return player;
          }
        });
      }
    }
    if(!this.playerSearch || this.playerSearch === '') {
      this.filteredList = this.filteredList.slice(0,7)
    } else {
      this.filteredList = this.filteredList.filter((player) => {
        return player.full_name.toLowerCase().includes(this.playerSearch.toLowerCase()) || player.position.toLowerCase().includes(this.playerSearch.toLowerCase())
          || player.team.toLowerCase().includes(this.playerSearch.toLowerCase()) || (player.owner?.toLowerCase().includes(this.playerSearch.toLowerCase()) && this.sleeperService.selectedLeague);
      }).slice(0, 7);
    }
  }
}