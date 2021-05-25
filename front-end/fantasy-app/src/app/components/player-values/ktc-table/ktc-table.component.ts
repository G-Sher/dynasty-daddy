import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SleeperService} from '../../../services/sleeper.service';
import {PlayerService} from '../../../services/player.service';
import {PlayerComparisonService} from '../../services/player-comparison.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ktc-table',
  templateUrl: './ktc-table.component.html',
  styleUrls: ['./ktc-table.component.css']
})
export class KtcTableComponent implements OnInit {

  @Input()
  players: KTCPlayer[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  filteredPlayers: KTCPlayer[];

  filterPosGroup: boolean[] = [true, true, true, true, true];

  displayedColumns: string[] = [];

  /** is superflex or normal value */
  isSuperFlex: boolean;

  /** mat table datasource */
  dataSource: MatTableDataSource<KTCPlayer> = new MatTableDataSource<KTCPlayer>();

  /** show rookies in table */
  showRookies: boolean = false;

  searchVal: string;

  constructor(public sleeperService: SleeperService, public playerService: PlayerService, private playerComparisonService: PlayerComparisonService, private router: Router) {
  }

  ngOnInit(): void {
    this.isSuperFlex = this.sleeperService?.selectedLeague?.isSuperflex != undefined ? this.sleeperService?.selectedLeague?.isSuperflex  : true;
    // this.displayedColumns = ['full_name', 'position', 'age', 'halfppr', 'valueRatio', this.isSuperFlex ? 'sf_trade_value' : 'trade_value', 'actions'];
    this.filteredPlayers = this.players.slice(0);
    this.dataSource = new MatTableDataSource(this.filteredPlayers);
    this.dataSource.sortingDataAccessor= (item, property) => {
      switch(property) {
        case 'halfppr': return this.playerService.playerStats[item.sleeper_id]?.pts_half_ppr;
        case 'valueRatio': return this.getValueRatio(item);
        default: return item[property]
      }
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.updateSuperFlex();
  }

  updatePlayerFilters() {
    this.filteredPlayers = this.players.slice(0);
    const filterOptions = ['QB', 'RB', 'WR', 'TE', 'PI'];
    if(this.showRookies){
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        if (player.experience === 0 && player.position !== 'PI') {
          return player;
        }
      });
    }
    for (let i = 0; i < this.filterPosGroup.length; i++) {
      if (!this.filterPosGroup[i]) {
        this.filteredPlayers = this.filteredPlayers.filter(player => {
          if (player.position !== filterOptions[i]) {
            return player;
          }
        });
      }
    }
    if(this.searchVal && this.searchVal.length > 0){
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        return (player.full_name.toLowerCase().indexOf(this.searchVal.toLowerCase()) >= 0 || player.age?.toString().indexOf(this.searchVal) >= 0 || ((player.owner?.toLowerCase().indexOf(this.searchVal.toLowerCase()) >= 0) && this.sleeperService.selectedLeague))
      })
    }
    this.dataSource.data = this.filteredPlayers;
  }

  updateSuperFlex() {
    this.displayedColumns = [];
    if(this.sleeperService.selectedLeague) {
      this.displayedColumns = ['full_name', 'position', 'age', 'owner', 'halfppr', this.isSuperFlex ? 'sf_trade_value' : 'trade_value', 'actions'];
    } else {
      this.displayedColumns = ['full_name', 'position', 'age', 'halfppr', this.isSuperFlex ? 'sf_trade_value' : 'trade_value', 'actions'];
    }
    this.dataSource.data = this.filteredPlayers;
    this.dataSource.sort.sort({
      id: this.isSuperFlex ? 'sf_trade_value' : 'trade_value', // The column name specified for matColumnDef attribute
      start: 'desc', // Can be 'asc', 'desc' or null,
      disableClear: false
    });
  }

  getValueRatio(player: KTCPlayer) {
    return Math.round((this.isSuperFlex ? player.sf_trade_value : player.trade_value)/(this.playerService.playerStats[player.sleeper_id]?.pts_half_ppr/this.playerService.playerStats[player.sleeper_id]?.gp)) || '---';
  }

  openPlayerComparison(element) {
    this.playerComparisonService.addPlayerToCharts(element);
    this.router.navigateByUrl('players/comparison')
  }
}
