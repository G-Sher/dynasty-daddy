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

  pathSource: string = './assets/cn.jpg';

  usernameInput: string = '';

  leagueIdInput: string = '';

  selectedLeague: SleeperLeagueData;

  selectedYear: string;

  supportedYears: string[] = [];

  loginMethod: string = 'sleeper_username';

  constructor(private spinner: NgxSpinnerService,
              private sleeperApiService: SleeperApiService,
              public sleeperService: SleeperService,
              private powerRankingService: PowerRankingsService,
              private playersService: PlayerService,
              private mockDraftService: MockDraftService,
              private matchupService: MatchupService,
              private playoffCalculatorService: PlayoffCalculatorService) {
    super();
  }

  ngOnInit(): void {
    this.supportedYears = this.generateYears();
    if (!this.sleeperService.selectedYear) {
      this.selectedYear = this.supportedYears[0];
    } else {
      this.selectedYear = this.sleeperService.selectedYear;
    }
    this.usernameInput = this.sleeperService.sleeperUser?.userData?.username || '';
    this.selectedLeague = this.sleeperService.selectedLeague || null;
    this.playersService.loadPlayerValuesForToday();
  }

  /**
   * loads sleeper data for user
   */
  fetchSleeperInfo(): void {
    this.sleeperService.loadNewUser(this.usernameInput, this.selectedYear);
    this.sleeperService.selectedYear = this.selectedYear;
    this.sleeperService.resetLeague();
  }

  /**
   * load league data
   * TODO clean up reset and initializing service data
   * @param value league data
   */
  loadLeague(value: SleeperLeagueData): void {
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
          this.sleeperService.sleeperTeamDetails.map((team) => {
            this.playersService.generateRoster(team);
          });
          this.spinner.hide();
          this.powerRankingService.mapPowerRankings(this.sleeperService.sleeperTeamDetails, this.playersService.playerValues);
          this.matchupService.initMatchUpCharts(this.selectedLeague);
          this.playoffCalculatorService.generateDivisions(this.selectedLeague, this.sleeperService.sleeperTeamDetails);
          this.sleeperService.leagueLoaded = true;
          console.timeEnd('Fetch Sleeper League Data');
        }
      ));
      console.log(this.sleeperService.selectedLeague);
    }
  }

  /**
   * generate selectable years
   * TODO dynamic checking of available years for user??
   */
  generateYears(): string[] {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 16; i++) {
      years.push((currentYear - i).toString());
    }
    return years;
  }

  /**
   * handles logging in for demo
   */
  loginWithDemo(): void {
    this.loginWithLeagueId('553670046391185408');
  }

  /**
   * handles logging in with league id
   * @param demoId string of demo league id
   */
  loginWithLeagueId(demoId?: string): void {
    this.sleeperService.sleeperUser = null;
    this.sleeperApiService.getSleeperLeagueByLeagueId(demoId || this.leagueIdInput).subscribe(leagueData => {
      this.loadLeague(leagueData);
    });
  }

  loginWithPrevSeason(): void {
    this.loginWithLeagueId(this.sleeperService.selectedLeague.prevLeagueId);
  }
}
