import {Component, OnInit, ViewChild, Input, OnChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SleeperCompletedPickData} from '../../../model/SleeperLeague';
import {CompletedDraft} from '../../../model/SleeperUser';
import {MatPaginator} from '@angular/material/paginator';
import {SleeperService} from '../../../services/sleeper.service';
import {PlayerService} from '../../../services/player.service';
import {KTCPlayer} from '../../../model/KTCPlayer';

@Component({
  selector: 'app-completed-draft-table',
  templateUrl: './completed-draft-table.component.html',
  styleUrls: ['./completed-draft-table.component.css']
})
export class CompletedDraftTableComponent implements OnInit, OnChanges {

  /** selected draft completed */
  @Input()
  selectedDraft: CompletedDraft;

  /** columns */
  displayedColumns = ['pickNumber', 'team', 'owner', 'selectedPlayer'];

  /** mat paginator */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /** page length */
  pageLength: number;

  /** mat datasource */
  dataSource: MatTableDataSource<SleeperCompletedPickData> = new MatTableDataSource<SleeperCompletedPickData>();

  constructor(private sleeperService: SleeperService,
              public playerService: PlayerService) { }

  ngOnInit(): void {
    this.pageLength = this.sleeperService.selectedLeague.totalRosters;
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.selectedDraft.picks);
    this.dataSource.paginator = this.paginator;
  }

  /**
   * get team name from roster id
   * @param rosterId roster id
   * return name
   */
  getTeamName(rosterId: string): string {
    for (const team of this.sleeperService.sleeperTeamDetails) {
      if (team.roster.rosterId.toString() === rosterId.toString()) {
        return team.owner?.teamName;
      }
    }
    return 'none';
  }

  /**
   * get owner name by roster id
   * @param rosterId roster id
   */
  getOwnerName(rosterId: string): string {
    for (const team of this.sleeperService.sleeperTeamDetails) {
      if (team.roster.rosterId === rosterId) {
        return team.owner?.ownerName;
      }
    }
    return 'none';
  }

  /**
   * get player by sleeper id
   * @param sleeperId sleeper id
   */
  getPlayerBySleeperId(sleeperId: string): KTCPlayer {
    return this.playerService.getPlayerBySleeperId(sleeperId);
  }
}
