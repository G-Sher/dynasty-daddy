import { Component, OnInit } from '@angular/core';
import {SleeperService} from '../../../services/sleeper.service';
import {MatTableDataSource} from '@angular/material/table';
import {TeamMockDraftPick} from '../../model/mockDraft';
import {MatchupService} from '../../services/matchup.service';
import {ScheduleComp} from '../../model/matchup';

@Component({
  selector: 'app-schedule-comparison',
  templateUrl: './schedule-comparison.component.html',
  styleUrls: ['./schedule-comparison.component.css']
})
export class ScheduleComparisonComponent implements OnInit {

  /** display columns on table */
  displayColumns: string[] = [];

  /** datasource for table */
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private sleeperService: SleeperService, public matchupService: MatchupService) { }

  ngOnInit(): void {
    this.displayColumns = this.generateCols();
    this.dataSource = new MatTableDataSource(this.matchupService.scheduleComparison);
  }

  /**
   * generate columns
   * @private
   */
  private generateCols(): string[] {
    const rosterIds = ['team'];
    for (const team of this.sleeperService.sleeperTeamDetails){
      rosterIds.push(team.roster.rosterId.toString());
    }
    return rosterIds;
  }

  /**
   * return record string to display
   * @param element
   * @param col
   */
  getRecord(element: ScheduleComp, col: string): string {
    return `${element.record[col][0]}-${element.record[col][1]}` + (element.record[col][2] > 0 ? `-${element.record[col][2]}` : '');
  }

  /**
   * is same team
   * this method is to compare string to num
   * @param col
   * @param rosterId
   */
  areSameTeam(col: string, rosterId: number): boolean {
    return Number(col) === rosterId;
  }
}
