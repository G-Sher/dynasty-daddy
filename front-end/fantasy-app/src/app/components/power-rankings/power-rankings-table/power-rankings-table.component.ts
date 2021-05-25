import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TeamPowerRanking} from '../../model/powerRankings';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {SleeperTeam} from '../../../model/SleeperLeague';
import {SleeperService} from '../../../services/sleeper.service';

export const detailExpand = trigger('detailExpand',
  [
    state('collapsed, void', style({ height: '0px'})),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
  ]);

@Component({
  selector: 'app-power-rankings-table',
  templateUrl: './power-rankings-table.component.html',
  styleUrls: ['./power-rankings-table.component.css'],
  animations: [detailExpand],
})
export class PowerRankingsTableComponent implements OnInit {

  @Input()
  powerRankings: TeamPowerRanking[];

  @Input()
  isSuperFlex: boolean;

  dataSource: MatTableDataSource<TeamPowerRanking> = new MatTableDataSource<TeamPowerRanking>();

  columnsToDisplay = ['team', 'owner', 'overallRank', 'starterRank', 'qbRank', 'rbRank', 'wrRank', 'teRank', 'draftRank'];
  expandedElement: any[] = [];

  alertThreshold: number;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public sleeperService: SleeperService) { }

  ngOnInit(): void {
    this.alertThreshold = this.powerRankings.length/3;
    this.dataSource = new MatTableDataSource<TeamPowerRanking>(this.powerRankings);

    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'team') {
        return item.team.owner.teamName;
      } else if (property === 'owner') {
        return item.team.owner.ownerName;
      } else if (property === 'qbRank') {
        return item.roster[0].rank;
      } else if (property === 'rbRank') {
        return item.roster[1].rank;
      } else if (property === 'wrRank') {
        return item.roster[2].rank;
      } else if (property === 'teRank') {
        return item.roster[3].rank;
      } else if (property === 'draftRank') {
        return item.picks.rank;
      } else {
        return item[property];
      }
    };
    this.dataSource.sort = this.sort;

  }

  checkExpanded(element: TeamPowerRanking): boolean {
    let flag = false;
    this.expandedElement.forEach(e => {
      if(e === element) {
        flag = true;
      }
    });
    return flag;
  }

  pushPopElement(element: TeamPowerRanking) {
    const index = this.expandedElement.indexOf(element);
    if(index === -1) {
      this.expandedElement.push(element);
    } else {
      this.expandedElement.splice(index,1);
    }
  }

  expandCollapseAll() {
    this.dataSource.data = this.powerRankings;
    if(this.expandedElement.length != this.powerRankings.length) {
      this.expandedElement = this.powerRankings;
    } else {
      this.expandedElement = [];
    }
  }

  isStarter(team: TeamPowerRanking, player: KTCPlayer): boolean {
    return team.starters.includes(player);
  }
}
