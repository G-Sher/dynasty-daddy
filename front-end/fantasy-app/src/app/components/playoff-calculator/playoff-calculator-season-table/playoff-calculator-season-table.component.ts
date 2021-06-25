import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SleeperService} from '../../../services/sleeper.service';
import Gradient from 'javascript-color-gradient';
import {PowerRankingsService} from '../../services/power-rankings.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-playoff-calculator-season-table',
  templateUrl: './playoff-calculator-season-table.component.html',
  styleUrls: ['./playoff-calculator-season-table.component.css']
})
export class PlayoffCalculatorSeasonTableComponent implements OnInit, AfterViewInit {

  /** mat sort */
  @ViewChild(MatSort) sort: MatSort;

  /** datasource for table */
  public dataSource: MatTableDataSource<any>;

  constructor(public sleeperService: SleeperService, public powerRankingsService: PowerRankingsService) { }

  divisionTableCols = ['teamRating', 'teamName', 'teamDivision', 'record', 'makePlayoffs', 'winDivision', 'winChampionship'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sleeperService.sleeperTeamDetails);
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
}
