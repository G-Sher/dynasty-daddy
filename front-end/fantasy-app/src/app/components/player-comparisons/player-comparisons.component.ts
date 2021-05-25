import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {KTCApiService} from '../../services/api/ktc-api.service';
import {PlayerService} from '../../services/player.service';
import {KTCPlayer} from '../../model/KTCPlayer';
import {BaseComponent} from '../base-component.abstract';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {debounce, debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {fromEvent, Observable, of, Subject} from 'rxjs';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AddPlayerComparisonModalComponent} from '../modals/add-player-comparison-modal/add-player-comparison-modal.component';
import {PlayerComparisonService} from '../services/player-comparison.service';
import {SleeperService} from '../../services/sleeper.service';
import {moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-player-comparisons',
  templateUrl: './player-comparisons.component.html',
  styleUrls: ['./player-comparisons.component.css']
})
export class PlayerComparisonsComponent extends BaseComponent implements OnInit {

  constructor(private ktcApiService: KTCApiService, private playerService: PlayerService, private sleeperService: SleeperService, private dialog: MatDialog, public playerComparisonService: PlayerComparisonService) {
    super();
  }

  ngOnInit() {
    if(this.sleeperService.leagueLoaded) {
      this.playerComparisonService.isSuperFlex = this.sleeperService.selectedLeague.isSuperflex
    }
    this.playerService.loadPlayerValuesForToday();
    this.addSubscriptions(this.playerService.$currentPlayerValuesLoaded.subscribe(() => {
      if(this.playerComparisonService.lineChartData.length == 1  && this.playerComparisonService.selectedPlayers[0] === undefined) {
        this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)])
        this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)])
      }
    }));
    if(this.playerComparisonService.selectedPlayers.length == 0 && this.playerService.playerValues.length > 0) {
      this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)])
      this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer(true)])
    }
  }

  private getRandomPlayer(stars: boolean = false): number {
    return Math.floor(Math.random() * (stars ? 50 : this.playerService.playerValues.length-1)) + 1
  }

  addRandomPlayer() {
    this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer()])
    if(this.playerComparisonService.isGroupMode) {
      this.playerComparisonService.addPlayerToCharts(this.playerService.playerValues[this.getRandomPlayer()], true)
    }
  }

  addNewPlayerModal(isGroup2: boolean = false) {
    this.dialog.open(AddPlayerComparisonModalComponent, {
      height: '550px',
      width: '600px',
      data: {
        isGroup2: isGroup2,
      }
    });
  }

  /**
   * reorder players
   * @param event
   */
  drop(event: any) {
    if (event.previousIndex !== event.currentIndex && !this.playerComparisonService.isGroupMode) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.playerComparisonService.refreshTable()
    }
  }

}
