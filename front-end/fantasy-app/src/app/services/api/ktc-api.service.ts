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

  private playersList: KTCPlayer[];

  constructor(private http: HttpClient, private ktcApiConfigService: KTCApiConfigService) {
  }

  getPlayerValuesForToday(): Observable<KTCPlayer[]> {
    return this.playersList ? of(this.playersList) : this.refreshPlayerValuesForToday();
  }

  refreshPlayerValuesForToday(): Observable<KTCPlayer[]> {
    return this.http.get<KTCPlayer[]>(this.ktcApiConfigService.getPlayerValuesForTodayEndpoint)
      .pipe(tap((players: KTCPlayer[]) => this.playersList = players
      ));
  }

  getHistoricalPlayerValueById(nameId: string): Observable<KTCPlayer[]> {
    return this.http.get<KTCPlayer[]>(this.ktcApiConfigService.getHistoricalPlayerValues + nameId)
      .pipe(tap((players: KTCPlayer[]) => players
      ));
  }
}
