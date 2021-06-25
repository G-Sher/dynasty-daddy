import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {SleeperService} from '../../../services/sleeper.service';
import Gradient from 'javascript-color-gradient';
import {PowerRankingsService} from '../../services/power-rankings.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {PlayoffCalculatorService} from '../../services/playoff-calculator.service';

@Component({
  selector: 'app-playoff-calculator-season-table',
  templateUrl: './playoff-calculator-season-table.component.html',
  styleUrls: ['./playoff-calculator-season-table.component.css']
})
export class PlayoffCalculatorSeasonTableComponent implements OnInit, AfterViewInit, OnChanges {

  /** mat sort */
  @ViewChild(MatSort) sort: MatSort;

  /** which week is the data forecasted on */
  @Input()
  forcastWeek: number;

  /** datasource for table */
  public dataSource: MatTableDataSource<any>;

  constructor(public sleeperService: SleeperService,
              public powerRankingsService: PowerRankingsService,
              public playoffCalculatorService: PlayoffCalculatorService) { }

  /** team properties like name division value */
  teamDetails = [];

  /** probability properties */
  probabilityCols = ['record', 'makePlayoffs', 'winDivision', 'winChampionship'];

  /** combined properties to display */
  divisionTableCols = [];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sleeperService.sleeperTeamDetails);
    if (this.playoffCalculatorService.divisions.length === 1) {
      this.teamDetails = ['teamRating', 'teamName'];
    } else {
      this.teamDetails = ['teamRating', 'teamName', 'teamDivision'];
    }
    this.divisionTableCols = this.teamDetails.concat(this.probabilityCols);
  }

  /** sorting function */
  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'teamRating': return this.powerRankingsService.findTeamFromRankingsByRosterId(item.roster.rosterId).sfTradeValueStarter;
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  /**
   * handles on forcast date changes to hide projected record column if the data is after the reg season
   */
  ngOnChanges(): void {
    if (this.forcastWeek > this.sleeperService.selectedLeague.playoffStartWeek) {
      this.probabilityCols = ['makePlayoffs', 'winDivision', 'winChampionship'];
    } else {
      this.probabilityCols = ['record', 'makePlayoffs', 'winDivision', 'winChampionship'];
    }
    this.divisionTableCols = this.teamDetails.concat(this.probabilityCols);
  }
}
