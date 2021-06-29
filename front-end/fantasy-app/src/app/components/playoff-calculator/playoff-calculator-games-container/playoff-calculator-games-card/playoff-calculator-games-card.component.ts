import {Component, Input, OnInit} from '@angular/core';
import {MatchUpProbability} from '../../../model/playoffCalculator';
import {SleeperTeam} from '../../../../model/SleeperLeague';
import {SleeperService} from '../../../../services/sleeper.service';
import {ColorService} from '../../../services/color.service';

@Component({
  selector: 'app-playoff-calculator-games-card',
  templateUrl: './playoff-calculator-games-card.component.html',
  styleUrls: ['./playoff-calculator-games-card.component.css']
})
export class PlayoffCalculatorGamesCardComponent implements OnInit {

  @Input()
  game: MatchUpProbability;

  @Input()
  showHeader: boolean = true;

  team1: SleeperTeam;

  team2: SleeperTeam;

  probGradient: string[];

  constructor(private sleeperService: SleeperService, private colorService: ColorService) { }

  ngOnInit(): void {
    this.team1 = this.sleeperService.getTeamByRosterId(this.game?.matchUpDetails.team1RosterId);
    this.team2 = this.sleeperService.getTeamByRosterId(this.game?.matchUpDetails.team2RosterId);
    this.probGradient = this.colorService.getColorGradientArray(100, '#7f7f7f', '#e74c3c');
  }

  getProbColor(prob: number): string {
    return this.probGradient[prob];
  }
}
