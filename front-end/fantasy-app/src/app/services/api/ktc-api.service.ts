import {Injectable} from '@angular/core';
import {KTCPlayer} from '../../model/KTCPlayer';
import {HttpClient} from '@angular/common/http';
import {KTCApiConfigService} from './ktc-api-config.service';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class KTCApiService {

  /**
   * cached players list
   * @private
   */
  private playersList: KTCPlayer[];

  constructor(private http: HttpClient, private ktcApiConfigService: KTCApiConfigService) {
  }

  /**
   * get player values for today
   */
  getPlayerValuesForToday(): Observable<KTCPlayer[]> {
    return this.playersList ? of(this.playersList) : this.refreshPlayerValuesForToday();
  }

  /**
   * refresh cached player values for today
   */
  refreshPlayerValuesForToday(): Observable<KTCPlayer[]> {
    return this.http.get<KTCPlayer[]>(this.ktcApiConfigService.getPlayerValuesForTodayEndpoint)
      .pipe(tap((players: KTCPlayer[]) => this.playersList = players, err => {
          throw new Error(err);
        }
      ));
  }

  /**
   * get historical player value over time by id
   * @param nameId player name id
   */
  getHistoricalPlayerValueById(nameId: string): Observable<KTCPlayer[]> {
    return this.http.get<KTCPlayer[]>(this.ktcApiConfigService.getHistoricalPlayerValues + nameId)
      .pipe(tap((players: KTCPlayer[]) => players
      ));
  }
}
