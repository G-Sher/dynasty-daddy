import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SleeperApiConfigService {

  private _getSleeperUsernameEndpoint = '';

  private _getSleeperLeagueEndpoint = '';

  private _getSleeperDraftEndpoint = '';

  private _getSleeperStatsEndpoint = '';

  private _getSleeperNFLStateEndpoint = '';

  private _getSleeperProjectionsEndpoint = '';

  get getSleeperUsernameEndpoint(): string {
    return this._getSleeperUsernameEndpoint;
  }

  set getSleeperUsernameEndpoint(value: string) {
    this._getSleeperUsernameEndpoint = value;
  }

  get getSleeperLeagueEndpoint(): string {
    return this._getSleeperLeagueEndpoint;
  }

  set getSleeperLeagueEndpoint(value: string) {
    this._getSleeperLeagueEndpoint = value;
  }

  get getSleeperDraftEndpoint(): string {
    return this._getSleeperDraftEndpoint;
  }

  set getSleeperDraftEndpoint(value: string) {
    this._getSleeperDraftEndpoint = value;
  }

  get getSleeperStatsEndpoint(): string {
    return this._getSleeperStatsEndpoint;
  }

  set getSleeperStatsEndpoint(value: string) {
    this._getSleeperStatsEndpoint = value;
  }

  get getSleeperNFLStateEndpoint(): string {
    return this._getSleeperNFLStateEndpoint;
  }

  set getSleeperNFLStateEndpoint(value: string) {
    this._getSleeperNFLStateEndpoint = value;
  }

  get getSleeperProjectionsEndpoint(): string {
    return this._getSleeperProjectionsEndpoint;
  }

  set getSleeperProjectionsEndpoint(value: string) {
    this._getSleeperProjectionsEndpoint = value;
  }

}
