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

  /** match up details with probability */
  @Input()
  game: MatchUpProbability;

  /** show header info */
  @Input()
  showHeader: boolean = true;

  /** team 1 sleeper object */
  team1: SleeperTeam;

  /** team 2 sleeper object */
  team2: SleeperTeam;

  /** color gradient for prob */
  probGradient: string[];

  constructor(private sleeperService: SleeperService, private colorService: ColorService) { }

  ngOnInit(): void {
    this.team1 = this.sleeperService.getTeamByRosterId(this.game?.matchUpDetails.team1RosterId);
    this.team2 = this.sleeperService.getTeamByRosterId(this.game?.matchUpDetails.team2RosterId);
    this.probGradient = this.colorService.getColorGradientArray(100, '#7f7f7f', '#0173aa');
  }

  /** get color for percent */
  getProbColor(prob: number): string {
    return this.probGradient[prob];
  }
}
