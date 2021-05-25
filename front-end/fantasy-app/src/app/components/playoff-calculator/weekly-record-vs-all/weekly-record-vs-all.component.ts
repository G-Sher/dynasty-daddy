import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SleeperService} from '../../../services/sleeper.service';
import {MatchupService} from '../../services/matchup.service';
import { WeeklyRecordComp} from '../../model/matchup';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-weekly-record-vs-all',
  templateUrl: './weekly-record-vs-all.component.html',
  styleUrls: ['./weekly-record-vs-all.component.css']
})
export class WeeklyRecordVsAllComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;

  displayColumns: string[] = [];

  dataSource: MatTableDataSource<WeeklyRecordComp> = new MatTableDataSource<WeeklyRecordComp>();

  constructor(private sleeperService: SleeperService, private matchupService: MatchupService) { }

  ngOnInit(): void {
    this.displayColumns = this.generateCols();
    this.dataSource = new MatTableDataSource(this.matchupService.weeklyComparison);
  }

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'total': return item.totalWins;
        default: return item.records[property][0];
      }
    };
    this.dataSource.sort = this.sort;
  }

  /**
   * generate col values
   * @private
   */
  private generateCols() {
    const list = ['teams'];
    for(let i = this.sleeperService.selectedLeague.startWeek; i < this.sleeperService.selectedLeague.playoffStartWeek; i++){
      list.push(i.toString());
    }
    list.push('total');
    return list;
  }

  /**
   * return record string to display
   * @param element
   * @param col
   */
  getRecord(element: WeeklyRecordComp, col: string): string {
    return `${element.records[col][0]}-${element.records[col][1]}` + (element.records[col][2] > 0 ? `-${element.records[col][2]}` : '');
  }

  /**
   * return total record string
   * @param element
   */
  getTotalRecord(element) {
    return `${element.totalWins}-${element.totalLosses}` + (element.totalTies > 0 ? `-${element.totalTies}` : '');
  }
}
