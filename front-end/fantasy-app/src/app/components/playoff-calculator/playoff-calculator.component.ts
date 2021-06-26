import { Component, OnInit } from '@angular/core';
import {SleeperService} from '../../services/sleeper.service';
import {PlayoffCalculatorService} from '../services/playoff-calculator.service';
import {NflService} from '../../services/utilities/nfl.service';
import {MatchUpProbability} from '../model/playoffCalculator';
import {MatchupService} from '../services/matchup.service';

@Component({
  selector: 'app-playoff-calculator',
  templateUrl: './playoff-calculator.component.html',
  styleUrls: ['./playoff-calculator.component.css']
})
export class PlayoffCalculatorComponent implements OnInit {

  /** upcoming match ups prob */
  upcomingMatchUps: MatchUpProbability[][] = [];

  /** playoff match ups prob */
  playoffMatchUps: MatchUpProbability[][] = [];

  /** past match ups prob */
  completedMatchUps: MatchUpProbability[][] = [];

  /** list of selectable weeks to choose from */
  selectableWeeks: {week: number; value: string}[] = [];

  /** currently selected forcast week */
  selectedWeek: number;

  constructor(
    public sleeperService: SleeperService,
    public playoffCalculatorService: PlayoffCalculatorService,
    private nflService: NflService,
    private matchupService: MatchupService) { }

  ngOnInit(): void {
    if (this.sleeperService.selectedLeague) {
      console.log(this.sleeperService.selectedLeague)
      // TODO fix this
      if (this.matchupService.leagueMatchUpUI.length === 0 || this.playoffCalculatorService.matchUpsWithProb.length === 0) {
        console.warn('Warning: Match Data was not loaded correctly. Recalculating Data...');
        this.matchupService.initMatchUpCharts(this.sleeperService.selectedLeague);
      }
      this.refreshGames();
      this.generateSelectableWeeks();
    }
  }

  /**
   * generate valid weeks to select probability
   * TODO refactor redundant code
   * @private
   */
  private generateSelectableWeeks(): void {
    this.selectableWeeks.push({week: this.sleeperService.selectedLeague.startWeek, value: 'Preseason'});
    if (this.sleeperService.selectedLeague.status !== 'complete') {
      for (let i = 1; i <= this.nflService.stateOfNFL.week; i++) {
        const disclaimer = this.sleeperService.selectedLeague.playoffStartWeek === this.sleeperService.selectedLeague.startWeek + i ? ' (End of regular season)' : '';
        this.selectableWeeks.push({week: this.sleeperService.selectedLeague.startWeek + i, value: 'Before Week '
            + (this.sleeperService.selectedLeague.startWeek + i) + disclaimer});
      }
    } else {
      for (let i = 1; i <= this.playoffCalculatorService.matchUpsWithProb.length; i++) {
        const disclaimer = this.sleeperService.selectedLeague.playoffStartWeek === this.sleeperService.selectedLeague.startWeek + i ? ' (End of regular season)' : '';
        this.selectableWeeks.push({week: this.sleeperService.selectedLeague.startWeek + i, value: 'Before Week '
            + (this.sleeperService.selectedLeague.startWeek + i) + disclaimer});
      }
      this.selectableWeeks.push({week: this.sleeperService.selectedLeague.startWeek
          + this.playoffCalculatorService.matchUpsWithProb.length + 1, value: 'Today'});
    }
    this.selectedWeek = this.selectableWeeks.reverse()[0].week;
  }

  /**
   * refresh game probability
   */
  refreshGames(): void {
    this.playoffCalculatorService.calculateGamesWithProbability(this.selectedWeek);
    if (this.playoffCalculatorService.matchUpsWithProb.length > 0) {
      if (this.sleeperService.selectedLeague.season === this.nflService.stateOfNFL.season) {
        this.upcomingMatchUps = this.playoffCalculatorService.matchUpsWithProb.slice(
          this.nflService.stateOfNFL.week,
          this.sleeperService.selectedLeague.playoffStartWeek - 1,
        );
        this.playoffMatchUps = this.playoffCalculatorService.matchUpsWithProb.slice(
          this.sleeperService.selectedLeague.playoffStartWeek - 1
        );
        this.completedMatchUps = this.playoffCalculatorService.matchUpsWithProb.slice(0, this.nflService.stateOfNFL.week).reverse();
      } else {
        this.completedMatchUps = this.playoffCalculatorService.matchUpsWithProb.slice().reverse();
      }
    }
  }

  /**
   * update probability handler may remove later idk
   * @param value
   */
  updateProbability(value: any): void {
    this.selectedWeek = value;
    this.playoffCalculatorService.updateSeasonOdds(value);
  }
}
