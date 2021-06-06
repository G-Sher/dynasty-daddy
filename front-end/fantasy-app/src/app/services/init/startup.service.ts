import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private configService: ConfigService) {
  }

  public startupApplication(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.configService.applyConfigs());
    });
  }
}

