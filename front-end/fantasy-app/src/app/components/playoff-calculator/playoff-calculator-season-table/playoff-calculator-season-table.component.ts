import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {SleeperService} from '../../../services/sleeper.service';
import Gradient from 'javascript-color-gradient';
import {PowerRankingsService} from '../../services/power-rankings.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {PlayoffCalculatorService} from '../../services/playoff-calculator.service';
import {ColorService} from '../../services/color.service';
import {ConfigService} from "../../../services/init/config.service";

@Component({
  selector: 'app-playoff-calculator-season-table',
  templateUrl: './playoff-calculator-season-table.component.html',
  styleUrls: ['./playoff-calculator-season-table.component.css']
})
export class PlayoffCalculatorSeasonTableComponent implements OnInit, AfterViewInit, OnChanges {

  /** mat sort */
  @ViewChild(MatSort) sort: MatSort;

  /** which week is the data forecasted on */
  @Input()
  forecastWeek: number;

  /** datasource for table */
  public dataSource: MatTableDataSource<any>;

  constructor(public sleeperService: SleeperService,
              public powerRankingsService: PowerRankingsService,
              public playoffCalculatorService: PlayoffCalculatorService,
              private colorService: ColorService,
              public configService: ConfigService) {
  }

  /** team properties like name division value */
  teamDetails = [];

  /** probability properties */
  probabilityCols = ['record', 'makePlayoffs', 'winDivision', 'getBye', 'winChampionship'];

  /** combined properties to display */
  divisionTableCols = [];

  /** wins at a current point in time */
  realizedWins: number = 0;

  /** color gradient */
  probGradient: string[] = [];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sleeperService.sleeperTeamDetails);
    if (this.playoffCalculatorService.divisions.length === 1 || this.configService.isMobile) {
      this.teamDetails = ['teamRating', 'teamName'];
    } else {
      this.teamDetails = ['teamRating', 'teamName', 'teamDivision'];
    }
    this.divisionTableCols = this.teamDetails.concat(this.probabilityCols);
    this.probGradient = this.colorService.getColorGradientArray(101, '#434243', '#0173aa');
  }

  /** sorting function */
  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'teamRating':
          return this.powerRankingsService.findTeamFromRankingsByRosterId(item.roster.rosterId).sfTradeValueStarter;
        case 'record':
          return this.playoffCalculatorService.teamsProjectedRecord[item.roster.rosterId]?.projWins;
        case 'makePlayoffs':
          return this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesMakingPlayoffs;
        case 'winDivision':
          return this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesWinningDivision;
        case 'getBye':
          return this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesWithBye;
        case 'makeConfChamp':
          return this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesMakeConfRd;
        case 'makeChampionship':
          return this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesMakeChampionship;
        case 'winChampionship':
          return this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesWinChampionship
            || this.playoffCalculatorService.teamPlayoffOdds[item.roster.rosterId]?.timesMakeChampionship;
        default:
          return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }

  /**
   * handles on forecast date changes to hide projected record column if the data is after the reg season
   * TODO clean up this function
   */
  ngOnChanges(): void {
    if (this.forecastWeek >= this.sleeperService.selectedLeague.playoffStartWeek) {
      this.probabilityCols = ['makePlayoffs', 'makeConfChamp', 'makeChampionship', 'winChampionship'];
    } else {
      this.probabilityCols = ['record', 'makePlayoffs', 'winDivision', 'getBye', 'winChampionship'];
      if (this.sleeperService.selectedLeague.playoffTeams % 4 === 0) {
        this.probabilityCols.splice(3, 1);
      }
      if (this.sleeperService.selectedLeague.divisions < 2) {
        this.probabilityCols.splice(2, 1);
      }
      if (this.probabilityCols.length === 3) {
        this.probabilityCols = ['record', 'makePlayoffs', 'makeConfChamp', 'makeChampionship', 'winChampionship'];
      }
      if (this.probabilityCols.length === 4) {
        this.probabilityCols.splice(3, 0, 'makeChampionship');
      }
      if (this.configService.isMobile) {
        this.probabilityCols.splice(0, 1);
      }
    }
    this.divisionTableCols = this.teamDetails.concat(this.probabilityCols);
    if (this.dataSource) {
      this.dataSource.data = this.sleeperService.sleeperTeamDetails;
    }
  }

  /**
   * get color for probability
   * @param prob percent
   */
  getProbColor(prob: number): string {
    return this.probGradient[prob];
  }

  /**
   * get display value based on conditions
   * @param percent percent
   */
  getDisplayValue(percent: number): string {
    switch (percent) {
      case 0: {
        if (this.sleeperService.selectedLeague.playoffStartWeek > this.forecastWeek) {
          return '<1%';
        }
        return '-';
      }
      case 100: {
        if (this.sleeperService.selectedLeague.playoffStartWeek > this.forecastWeek) {
          return '>99%';
        }
        return '100%';
      }
      default: {
        return percent + '%';
      }
    }
  }
}
