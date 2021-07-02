import {Component, Inject, OnInit} from '@angular/core';
import {PlayerService} from '../../../services/player.service';
import {KTCPlayer} from '../../../model/KTCPlayer';
import {KTCApiService} from '../../../services/api/ktc-api.service';
import {PlayerComparisonService} from '../../services/player-comparison.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SleeperService} from '../../../services/sleeper.service';
import {QueryBuilderClassNames, QueryBuilderConfig} from 'angular2-query-builder';
import {SleeperOwnerData} from '../../../model/SleeperLeague';

@Component({
  selector: 'app-add-player-comparison-modal',
  templateUrl: './add-player-comparison-modal.component.html',
  styleUrls: ['./add-player-comparison-modal.component.css']
})
export class AddPlayerComparisonModalComponent implements OnInit {

  /** player search string */
  playerSearch = '';

  /** filtered search list */
  filteredList: KTCPlayer[];

  /** query filtered list */
  queryList: KTCPlayer[] = [];

  /** filter grouping options */
  filterPosGroup: boolean[];

  /** toggle between search and query mode */
  toggleQueryMode: boolean = false;

  query = {
    condition: 'and',
    rules: [
      {field: 'position', operator: '=', value: 'QB'},
      {field: 'sf_position_rank', operator: '<=', value: 5},
    ]
  };

  config: QueryBuilderConfig = {
    fields: {
      position: {
        name: 'Position',
        type: 'category',
        options: [
          {name: 'Quarterback', value: 'QB'},
          {name: 'Running back', value: 'RB'},
          {name: 'Wide Receiver', value: 'WR'},
          {name: 'Tight End', value: 'TE'}
        ]
      },
      age: {name: 'Age', type: 'number'},
      experience: {name: 'Experience', type: 'number'},
      team: {
        name: 'NFL Team',
        type: 'category',
        options: [
          {value: 'CAR', name: 'Carolina Panthers'},
          {value: 'NOS', name: 'New Orleans Saints'},
          {value: 'TBB', name: 'Tampa Bay Buccaneers'},
          {value: 'ATL', name: 'Atlanta Falcons'},
          {value: 'LAR', name: 'Los Angeles Rams'},
          {value: 'SEA', name: 'Seattle Seahawks'},
          {value: 'SFO', name: 'San Francisco 49ers'},
          {value: 'ARI', name: 'Arizona Cardinals'},
          {value: 'DAL', name: 'Dallas Cowboys'},
          {value: 'NYG', name: 'New York Giants'},
          {value: 'PHI', name: 'Philadelphia Eagles'},
          {value: 'WAS', name: 'Washington Football Team'},
          {value: 'GBP', name: 'Green Bay Packers'},
          {value: 'MIN', name: 'Minnesota Vikings'},
          {value: 'DET', name: 'Detroit Lions'},
          {value: 'CHI', name: 'Chicago Bears'},
          {value: 'KCC', name: 'Kansas City Chiefs'},
          {value: 'LVR', name: 'Las Vegas Raiders'},
          {value: 'LAC', name: 'Los Angeles Chargers'},
          {value: 'DEN', name: 'Denver Broncos'},
          {value: 'HOU', name: 'Houston Texans'},
          {value: 'TEN', name: 'Tennessee Titans'},
          {value: 'IND', name: 'Indianapolis Colts'},
          {value: 'JAC', name: 'Jacksonville Jaguars'},
          {value: 'CLE', name: 'Cleveland Browns'},
          {value: 'PIT', name: 'Pittsburgh Steelers'},
          {value: 'BAL', name: 'Baltimore Ravens'},
          {value: 'CIN', name: 'Cincinnati Bengals'},
          {value: 'BUF', name: 'Buffalo Bills'},
          {value: 'MIA', name: 'Miami Dolphins'},
          {value: 'NYJ', name: 'New York Jets'},
          {value: 'NEP', name: 'New England Patriots'},
          {value: 'FA', name: 'Free Agent'}
        ]
      },
      sf_trade_value: {name: 'Trade Value (SF)', type: 'number'},
      trade_value: {name: 'Trade Value (Standard)', type: 'number'},
      sf_position_rank: {name: 'Position Rank (SF)', type: 'number'},
      position_rank: {name: 'Position Rank (Standard)', type: 'number'},
      full_name: {name: 'Full Name', type: 'string'},
      first_name: {name: 'First Name', type: 'string'},
      last_name: {name: 'Last Name', type: 'string'},
    }
  };

  classNames: QueryBuilderClassNames = {
    row: 'query-row',
    rule: 'query-rule',
    ruleSet: 'query-ruleset',
    invalidRuleSet: 'query-error',
    emptyWarning: 'query-warning',
  };

  /** if true query results overwrite old selected players */
  toggleOverwritePlayers: boolean = true;

  /** has the query been run since last change */
  dirtyQuery: boolean = true;

  constructor(private playerService: PlayerService,
              private ktcApiService: KTCApiService,
              public playerComparisonService: PlayerComparisonService,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: { isGroup2: boolean },
              public sleeperService: SleeperService) {
  }

  ngOnInit(): void {
    this.filterPosGroup = [true, true, true, true, true, false];
    this.filteredList = this.playerService.playerValues.slice(0, 7);
    // add fantasy owners if league is logged in
    if (this.sleeperService.leagueLoaded) {
      this.config.fields.owner = {
        name: 'Fantasy Owner',
        type: 'category',
        options: this.generateSleeperOwnerList()
      };
    }
  }

  /**
   * add player to comparison
   * @param player selected player to add
   */
  addPlayer(player: KTCPlayer): void {
    let addable = true;
    if (this.playerComparisonService.isGroupMode && this.data.isGroup2) {
      for (const p of this.playerComparisonService.group2SelectedPlayers) {
        if (p.id === player.name_id) {
          addable = false;
        }
      }
    } else {
      for (const p of this.playerComparisonService.selectedPlayers) {
        if (p.id === player.name_id) {
          addable = false;
        }
      }
    }
    if (addable) {
      this.playerComparisonService.isGroupMode ? this.playerComparisonService.addPlayerToCharts(player, this.data.isGroup2)
        : this.playerComparisonService.addPlayerToCharts(player);
    }
  }

  /**
   * remove player from comparison
   * @param player player to remove
   * @param isGroup2 is group 2 or not
   */
  onRemove(player: KTCPlayer, isGroup2: boolean = false): void {
    this.playerComparisonService.onRemove({name: player.full_name, data: [], id: player.name_id}, isGroup2);
  }

  /**
   * close dialog
   */
  finishAdding(): void {
    this.dialog.closeAll();
  }

  /**
   * update search filters
   */
  updatePlayerFilters(): void {
    this.filteredList = this.playerService.playerValues.slice(0);
    const filterOptions = ['QB', 'RB', 'WR', 'TE', 'PI'];
    if (this.filterPosGroup[5]) {
      this.filteredList = this.filteredList.filter(player => {
        if (player.experience === 0 && player.position !== 'PI') {
          return player;
        }
      });
    }
    for (let i = 0; i < this.filterPosGroup.length; i++) {
      if (!this.filterPosGroup[i]) {
        this.filteredList = this.filteredList.filter(player => {
          if (player.position !== filterOptions[i]) {
            return player;
          }
        });
      }
    }
    if (!this.playerSearch || this.playerSearch === '') {
      this.filteredList = this.filteredList.slice(0, 7);
    } else {
      this.filteredList = this.filteredList.filter((player) => {
        return player.full_name.toLowerCase().includes(this.playerSearch.toLowerCase())
          || player.position.toLowerCase().includes(this.playerSearch.toLowerCase())
          || player.team.toLowerCase().includes(this.playerSearch.toLowerCase())
          || (player.owner?.ownerName.toLowerCase().includes(this.playerSearch.toLowerCase()) && this.sleeperService.selectedLeague);
      }).slice(0, 7);
    }
  }

  /**
   * runs query and updates query list of players that meet criteria
   */
  runQuery(): void {
    this.queryList = this.processRuleset(this.playerService.playerValues.slice(), this.query);
    this.dirtyQuery = false;
  }

  /**
   * helper that handles ruleset
   * @param playersSubset players to apply ruleset to
   * @param ruleset ruleset from query builder
   * @return list of players filtered
   */
  private processRuleset(playersSubset: KTCPlayer[], ruleset: any): KTCPlayer[] {
    const ruleResults = [];
    let rulesetResults: KTCPlayer[] = [];
    for (const rule of ruleset.rules) {
      ruleResults.push(this.processRule(playersSubset.slice(), rule));
    }
    if (ruleset.condition === 'or') {
      for (const players of ruleResults) {
        players.map(player => {
          if (!rulesetResults.includes(player)) {
            rulesetResults.push(player);
          }
        });
      }
    } else {
      rulesetResults = ruleResults[0]?.slice();
      for (const players of ruleResults.slice(1)) {
        rulesetResults = rulesetResults.filter(player => {
          return players.includes(player);
        });
      }
    }
    return rulesetResults;
  }

  /**
   * processes rule operators and returns results
   * @param players list of players to apply filters on
   * @param rule rule from query builder
   */
  private processRule(players: KTCPlayer[], rule: any): KTCPlayer[] {
    if (rule.condition !== undefined) {
      return this.processRuleset(players, rule);
    } else {
      return players.filter(player => {
        switch (rule.operator) {
          case 'contains': {
            return (player[rule.field] as string).toString().toLowerCase().includes(rule.value.toString().toLowerCase());
          }
          case 'like': {
            return (player[rule.field] as string).toString().toLowerCase().includes(rule.value.toString().toLowerCase());
          }
          case 'in': {
            return rule.value.includes(player[rule.field]);
          }
          case 'not in': {
            return !rule.value.includes(player[rule.field]);
          }
          case '!=': {
            return player[rule.field] !== rule.value;
          }
          case '<=': {
            return player[rule.field] <= rule.value;
          }
          case '>=': {
            return player[rule.field] >= rule.value;
          }
          case '<': {
            return player[rule.field] < rule.value;
          }
          case '>': {
            return player[rule.field] > rule.value;
          }
          default: {
            return player[rule.field] === rule.value;
          }
        }
      });
    }
  }

  /**
   * generate owners value object to use in query
   * @return list of objects
   * @private
   */
  private generateSleeperOwnerList(): {value: SleeperOwnerData, name: string}[] {
    const list = [];
    for (const owner of this.sleeperService.sleeperTeamDetails) {
      list.push({value: owner.owner, name: owner.owner.ownerName});
    }
    return list;
  }

  /**
   * adds all query results to comp table
   */
  addQueryResults(): void {
    if (this.toggleOverwritePlayers) {
      this.data.isGroup2 ? this.playerComparisonService.group2SelectedPlayers = [] : this.playerComparisonService.selectedPlayers = [];
      this.playerComparisonService.refreshTable();
    }
    for (const player of this.queryList) {
      this.addPlayer(player);
    }
  }
}
