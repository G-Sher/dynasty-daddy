import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {TeamMockDraftPick} from '../../model/mockDraft';
import {MockDraftService} from '../../services/mock-draft.service';
import {SleeperService} from '../../../services/sleeper.service';
import {TeamPowerRanking} from '../../model/powerRankings';
import {PowerRankingsService} from '../../services/power-rankings.service';

@Component({
  selector: 'app-draft-table',
  templateUrl: './draft-table.component.html',
  styleUrls: ['./draft-table.component.css']
})
export class DraftTableComponent implements OnInit {

  mockDraftConfig: string;

  displayedColumns: string[] = [];

  selectedPlayers: KTCPlayer[] = [];

  pageLength: number = 12;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource: MatTableDataSource<TeamMockDraftPick> = new MatTableDataSource<TeamMockDraftPick>();

  constructor(private mockDraftService: MockDraftService, public sleeperService: SleeperService, private powerRankingService: PowerRankingsService) { }

  ngOnInit(): void {
    this.mockDraftConfig = 'player';
    this.displayedColumns = ['pickNumber', 'team', 'owner', 'projectedPlayer'];
    this.selectedPlayers = JSON.parse(JSON.stringify(this.mockDraftService.selectablePlayers))
    this.pageLength = this.sleeperService.selectedLeague.totalRosters;
    this.dataSource = new MatTableDataSource(this.mockDraftService.teamPicks);
    this.dataSource.paginator = this.paginator;
  }

  /**
   * updates draft dropdown to show for player value mode
   * @param pick
   */
  updateDraftSelections(pick: number) {
    const staticPicks = this.selectedPlayers.slice(0, pick);
    let newDropDown = [];
    for(let player of this.mockDraftService.selectablePlayers){
      if(!staticPicks.some(picked => picked.sleeper_id === player.sleeper_id))
        newDropDown.push(player);
    }
    this.selectedPlayers = staticPicks.concat(newDropDown)
  }

  /**
   * disable player in custom mode dropdown if already selected
   * @param player
   */
  isPlayerAlreadySelected(player: KTCPlayer): boolean {
    return this.selectedPlayers.some(picked => picked.name_id === player.name_id);
  }

  /**
   * change mock draft type
   */
  changeMockDraftType() {
    if(this.mockDraftConfig !== 'custom') {
      this.selectedPlayers = JSON.parse(JSON.stringify(this.mockDraftService.selectablePlayers));
    } else {
      this.selectedPlayers = [];
    }
  }

  /**
   * resets mock draft values
   */
  resetMockDraft() {
    this.changeMockDraftType();
  }
}
