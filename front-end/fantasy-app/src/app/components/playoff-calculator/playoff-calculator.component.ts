import { Component, OnInit } from '@angular/core';
import {SleeperService} from '../../services/sleeper.service';
import {PlayoffCalculatorService} from '../services/playoff-calculator.service';
import {NflService} from '../../services/utilities/nfl.service';
import {MatchUpProbability} from '../model/playoffCalculator';
import {MatchupService} from "../services/matchup.service";

@Component({
  selector: 'app-playoff-calculator',
  templateUrl: './playoff-calculator.component.html',
  styleUrls: ['./playoff-calculator.component.css']
})
export class PlayoffCalculatorComponent implements OnInit {

  upcomingMatchUps: MatchUpProbability[][] = [];

  playoffMatchUps: MatchUpProbability[][] = [];

  completedMatchUps: MatchUpProbability[][] = [];


  constructor(
    public sleeperService: SleeperService,
    public playoffCalculatorService: PlayoffCalculatorService,
    private nflService: NflService,
    private matchupService: MatchupService) { }

  ngOnInit(): void {
    // TODO fix this
    if (this.matchupService.leagueMatchUpUI.length === 0) {
      console.warn('Warning: Match Data was not loaded correctly. Recalculating Data...');
      this.matchupService.initMatchUpCharts(this.sleeperService.selectedLeague);
    }
    this.refreshGames();
  }

  refreshGames(): void {
    this.playoffCalculatorService.calculateGamesWithProbability();
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

}
