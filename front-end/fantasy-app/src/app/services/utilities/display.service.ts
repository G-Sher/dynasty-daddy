import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() {
  }

  public truncate(str, n): string {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  }

}
