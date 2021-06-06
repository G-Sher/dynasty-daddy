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

  /** all players */
  @Input()
  players: KTCPlayer[];

  /** mat paginator */
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /** mat sort */
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /** filtered list of players for searching */
  filteredPlayers: KTCPlayer[];

  /** position group filters, [qb, rb, wr, te, picks] */
  filterPosGroup: boolean[] = [true, true, true, true, true];

  /** columns to display */
  displayedColumns: string[] = [];

  /** is superflex or normal value */
  isSuperFlex: boolean;

  /** mat table datasource */
  dataSource: MatTableDataSource<KTCPlayer> = new MatTableDataSource<KTCPlayer>();

  /** show rookies in table */
  showRookies = false;

  /** search value from search box */
  searchVal: string;

  constructor(public sleeperService: SleeperService,
              public playerService: PlayerService,
              private playerComparisonService: PlayerComparisonService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isSuperFlex = this.sleeperService?.selectedLeague?.isSuperflex !== undefined ?
      this.sleeperService?.selectedLeague?.isSuperflex  : true;
    this.filteredPlayers = this.players.slice(0);
    this.dataSource = new MatTableDataSource(this.filteredPlayers);
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'halfppr': return this.playerService.playerStats[item.sleeper_id]?.pts_half_ppr;
        // case 'valueRatio': return this.getValueRatio(item);
        default: return item[property];
      }
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.updateSuperFlex();
  }

  /**
   * update player filters, function is called when option is selected
   */
  updatePlayerFilters(): void {
    this.filteredPlayers = this.players.slice(0);
    const filterOptions = ['QB', 'RB', 'WR', 'TE', 'PI'];
    if (this.showRookies){
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
    if (this.searchVal && this.searchVal.length > 0){
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        return (player.full_name.toLowerCase().indexOf(this.searchVal.toLowerCase()) >= 0
          || player.age?.toString().indexOf(this.searchVal) >= 0
          || ((player.owner?.toLowerCase().indexOf(this.searchVal.toLowerCase()) >= 0)
            && this.sleeperService.selectedLeague));
      });
    }
    this.dataSource.data = this.filteredPlayers;
  }

  /**
   * toggle between superflex or regular trade values
   */
  updateSuperFlex(): void {
    this.displayedColumns = [];
    if (this.sleeperService.selectedLeague) {
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

  /**
   * get value ratio
   * TODO fix the logic to make more meaningful
   * @param player player
   */
  // getValueRatio(player: KTCPlayer) {
  // tslint:disable-next-line:max-line-length
  //   return Math.round((this.isSuperFlex ? player.sf_trade_value : player.trade_value)/(this.playerService.playerStats[player.sleeper_id]?.pts_half_ppr/this.playerService.playerStats[player.sleeper_id]?.gp)) || '---';
  // }

  /**
   * route ot player comparison page
   * @param element player to add to comparison
   */
  openPlayerComparison(element: KTCPlayer): void {
    this.playerComparisonService.addPlayerToCharts(element);
    this.router.navigateByUrl('players/comparison');
  }
}
