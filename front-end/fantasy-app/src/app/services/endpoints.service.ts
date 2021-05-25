import {Injectable} from '@angular/core';
import {KTCApiConfigService} from './api/ktc-api-config.service';
import {SleeperApiConfigService} from './api/sleeper/sleeper-api-config.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  private baseUrl = 'http://localhost:3000'

  constructor( private ktcApiConfigService: KTCApiConfigService, private sleeperApiConfigService: SleeperApiConfigService) {
  }

  public assignEndpoints(): void {

    this.ktcApiConfigService.getPlayerValuesForTodayEndpoint = this.baseUrl + '/v1/player/all/today';
    this.ktcApiConfigService.getHistoricalPlayerValues = this.baseUrl + '/v1/player/sleeper/';
    this.sleeperApiConfigService.getSleeperUsernameEndpoint = 'https://api.sleeper.app/v1/user/';
    this.sleeperApiConfigService.getSleeperLeagueEndpoint = 'https://api.sleeper.app/v1/league/';
    this.sleeperApiConfigService.getSleeperDraftEndpoint = 'https://api.sleeper.app/v1/draft/';
    this.sleeperApiConfigService.getSleeperStatsEndpoint = 'https://api.sleeper.app/v1/stats/nfl/regular/';
    this.sleeperApiConfigService.getSleeperProjectionsEndpoint = 'https://api.sleeper.app/v1/projections/nfl/regular/';
    this.sleeperApiConfigService.getSleeperNFLStateEndpoint = 'https://api.sleeper.app/v1/state/nfl';
  }
}
