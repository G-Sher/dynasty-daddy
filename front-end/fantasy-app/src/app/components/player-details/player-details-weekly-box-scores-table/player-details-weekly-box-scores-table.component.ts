import {Component, Input, OnInit} from '@angular/core';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {PlayerService} from '../../../services/player.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-player-details-weekly-box-scores-table',
  templateUrl: './player-details-weekly-box-scores-table.component.html',
  styleUrls: ['./player-details-weekly-box-scores-table.component.css']
})
export class PlayerDetailsWeeklyBoxScoresTableComponent implements OnInit {

  /** selected player data */
  @Input()
  selectedPlayer: KTCPlayer;

  /** general box score cols */
  generalBoxScore = ['week', 'points', 'off_snp'];

  /** passing box score */
  passingBoxScore = ['pass_att', 'pass_cmp', 'pass_yd', 'pass_td', 'pass_int'];

  /** rushing box score */
  rushingBoxScore = ['rush_att', 'rush_yd', 'rush_ypa', 'rush_td'];

  /** sack box score */
  sackBoxScore = ['pass_sack', 'pass_sack_yds'];

  /** turnover box score */
  turnoverBoxScore = ['fum', 'fum_lost'];

  /** receiving Box score */
  receivingBoxScore = ['rec', 'rec_tgt', 'rec_yd', 'rec_ypr', 'rec_td', 'rec_rz_tgt'];

  /** columns to display, aggregate of columns above based on pos */
  displayedColumns: string[] = [];

  /** player weekly stats */
  playerWeeklyStats = [];

  /** mat datasource */
  datasource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>();

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.setDisplayColumns();
    for (let i = 1; i < 19; i++) {
      const weekStats = this.playerService.pastSeasonWeeklyStats[i];
      this.playerWeeklyStats.push(weekStats[this.selectedPlayer.sleeper_id]);
    }
    this.datasource = new MatTableDataSource<any>(this.playerWeeklyStats);
  }

  /**
   * set display column order based on player position
   * @private
   */
  private setDisplayColumns(): void {
    switch (this.selectedPlayer.position){
      case 'QB':
        this.displayedColumns = this.displayedColumns.concat(
          this.generalBoxScore,
          this.passingBoxScore,
          this.rushingBoxScore,
          this.sackBoxScore,
          this.turnoverBoxScore
        );
        break;
      case 'RB':
        this.displayedColumns = this.displayedColumns.concat(
          this.generalBoxScore,
          this.rushingBoxScore,
          this.receivingBoxScore,
          this.turnoverBoxScore
        );
        break;
      case 'WR':
        this.displayedColumns = this.displayedColumns.concat(
          this.generalBoxScore,
          this.receivingBoxScore,
          this.turnoverBoxScore
        );
        break;
      default:
        this.displayedColumns = this.displayedColumns.concat(
          this.generalBoxScore,
          this.receivingBoxScore,
          this.turnoverBoxScore
        );
    }
  }

  /**
   * get week number
   * @param i number from today
   */
  getDisplayWeek(i: number): string {
    return this.playerService.getWeekByIndex(i + 1).slice(5);
  }
}
