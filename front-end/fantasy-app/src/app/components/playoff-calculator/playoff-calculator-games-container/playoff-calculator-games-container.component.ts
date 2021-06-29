import {Component, Input, OnInit} from '@angular/core';
import {MatchUpProbability} from '../../model/playoffCalculator';
import {SleeperService} from '../../../services/sleeper.service';

@Component({
  selector: 'app-playoff-calculator-games-container',
  templateUrl: './playoff-calculator-games-container.component.html',
  styleUrls: ['./playoff-calculator-games-container.component.css']
})
export class PlayoffCalculatorGamesContainerComponent implements OnInit {

  @Input()
  weekMatchUps: MatchUpProbability[];

  recordString: string = '';

  constructor(public sleeperService: SleeperService) { }

  ngOnInit(): void {
    let correct = 0;
    let incorrect = 0;
    for (const matchUp of this.weekMatchUps) {
      if (matchUp.matchUpDetails.team1Points !== 0 && matchUp.matchUpDetails.team2Points !== 0) {
        if (matchUp.matchUpDetails.team1Points > matchUp.matchUpDetails.team2Points) {
          matchUp.team1Prob > matchUp.team2Prob ? correct++ : incorrect++;
        } else {
          matchUp.team2Prob > matchUp.team1Prob ? correct++ : incorrect++;
        }
      }
    }
    if (correct !== 0 || incorrect !== 0) {
      this.recordString = `${correct}/${incorrect + correct}`;
    }
  }

}
