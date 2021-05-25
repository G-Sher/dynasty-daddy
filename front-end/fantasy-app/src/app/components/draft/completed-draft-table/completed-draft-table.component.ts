import {Component, OnInit, ViewChild, Input, OnChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SleeperCompletedPickData} from '../../../model/SleeperLeague';
import {CompletedDraft} from '../../../model/SleeperUser';
import {MatPaginator} from '@angular/material/paginator';
import {SleeperService} from '../../../services/sleeper.service';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-completed-draft-table',
  templateUrl: './completed-draft-table.component.html',
  styleUrls: ['./completed-draft-table.component.css']
})
export class CompletedDraftTableComponent implements OnInit, OnChanges {

  @Input()
  selectedDraft: CompletedDraft;

  displayedColumns = ['pickNumber', 'team', 'owner', 'selectedPlayer'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  pageLength: number;

  dataSource: MatTableDataSource<SleeperCompletedPickData> = new MatTableDataSource<SleeperCompletedPickData>();

  constructor(private sleeperService: SleeperService, public playerService: PlayerService) { }

  ngOnInit(): void {
    this.pageLength = this.sleeperService.selectedLeague.totalRosters;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.selectedDraft.picks);
    this.dataSource.paginator = this.paginator;
  }

  getTeamName(rosterId: string): string {
    for (let team of this.sleeperService.sleeperTeamDetails) {
      if (team.roster.rosterId == rosterId) {
        return team.owner.teamName
      }
    }
    return 'none'
  }

  getOwnerName(rosterId: string) {
    for (let team of this.sleeperService.sleeperTeamDetails) {
      if (team.roster.rosterId == rosterId) {
        return team.owner.ownerName
      }
    }
    return 'none'
  }

  getPlayerBySleeperId(sleeperId: string) {
    return this.playerService.getPlayerBySleeperId(sleeperId);
  }
}
