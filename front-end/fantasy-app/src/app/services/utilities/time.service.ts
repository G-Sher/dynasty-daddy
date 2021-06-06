import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  async delay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
