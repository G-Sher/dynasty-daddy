import {SleeperStateOfNFL} from '../../model/SleeperLeague';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SleeperApiService} from '../api/sleeper/sleeper-api.service';

@Injectable({
  providedIn: 'root'
})
export class NflService {

  /** state of nfl from sleeper */
  stateOfNFL: SleeperStateOfNFL;

  constructor(private sleeperApiService: SleeperApiService) {
  }

  /**
   * save state of nfl to service for other services to reference
   */
  public $initStateOfNfl(): Observable<SleeperStateOfNFL> {
    return this.sleeperApiService.getSleeperStateOfNFL().pipe(map((season) => this.stateOfNFL = season));
  }
}
