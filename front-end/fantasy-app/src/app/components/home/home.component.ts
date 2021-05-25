import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {BaseComponent} from '../base-component.abstract';
import {SleeperApiService} from '../../services/api/sleeper/sleeper-api.service';
import {SleeperLeagueData, SleeperUserData} from '../../model/SleeperUser';
import {SleeperService} from '../../services/sleeper.service';
import {PowerRankingsService} from '../services/power-rankings.service';
import {PlayerService} from '../../services/player.service';
import {MockDraftService} from '../services/mock-draft.service';
import {MatchupService} from '../services/matchup.service';
import {PlayoffCalculatorService} from '../services/playoff-calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  pathSource: string = './assets/cn.jpg'

  userName: string = '';

  selectedLeague: SleeperLeagueData;

  selectedYear: string;

  supportedYears: string[] = [];

  constructor(private spinner: NgxSpinnerService, private sleeperApiService: SleeperApiService, public sleeperService: SleeperService,
              private powerRankingService: PowerRankingsService, private playersService: PlayerService, private mockDraftService: MockDraftService,
              private matchupService: MatchupService, private playoffCalculatorService: PlayoffCalculatorService) {
    super();
  }

  ngOnInit(): void {
    this.supportedYears = this.generateYears();
    if(!this.sleeperService.selectedYear) {
      this.selectedYear = this.supportedYears[0]
    } else {
      this.selectedYear = this.sleeperService.selectedYear;
    }
    this.userName = this.sleeperService.sleeperUser?.userData?.username || '';
    this.selectedLeague = this.sleeperService.selectedLeague || null;
    this.playersService.loadPlayerValuesForToday();
  }

  fetchSleeperInfo() {
    this.sleeperService.loadNewUser(this.userName, this.selectedYear);
    this.sleeperService.selectedYear = this.selectedYear;
    this.sleeperService.resetLeague();
  }

  loadLeague(value: SleeperLeagueData) {
    this.sleeperService.resetLeague();
    this.selectedLeague = value;
    this.spinner.show();
    if (this.selectedLeague !== this.sleeperService.selectedLeague) {
      this.powerRankingService.reset();
      this.mockDraftService.reset();
      this.playoffCalculatorService.reset();
      this.matchupService.reset();
      this.playersService.resetOwners();
      console.time('Fetch Sleeper League Data');
      this.addSubscriptions(this.sleeperService.$loadNewLeague(this.selectedLeague).subscribe((x) => {
          this.spinner.hide();
          this.sleeperService.sleeperTeamDetails.map((team) => {
            this.playersService.generateRoster(team)
          })
        this.sleeperService.leagueLoaded = true;
        console.timeEnd('Fetch Sleeper League Data');
        }
      ));

    }
  }

  generateYears() {
    const years = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 16; i++) {
      years.push((currentYear - i).toString());
    }
    return years;
  }
}
