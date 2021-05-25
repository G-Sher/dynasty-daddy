import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KTCApiConfigService {

  // tslint:disable-next-line:variable-name
  private _getPlayerValuesForTodayEndpoint = '';

  private _getHistoricalPlayerValues = '';

  get getPlayerValuesForTodayEndpoint(): string {
    return this._getPlayerValuesForTodayEndpoint;
  }

  set getPlayerValuesForTodayEndpoint(value: string) {
    this._getPlayerValuesForTodayEndpoint = value;
  }

  get getHistoricalPlayerValues(): string {
    return this._getHistoricalPlayerValues;
  }

  set getHistoricalPlayerValues(value: string) {
    this._getHistoricalPlayerValues = value;
  }
}
