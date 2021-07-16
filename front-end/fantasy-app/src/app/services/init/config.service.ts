import {Injectable} from '@angular/core';
import {EndpointsService} from '../endpoints.service';
import {DeviceDetectorService} from 'ngx-device-detector';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _isMobile: boolean = false;

  constructor(private endpointsService: EndpointsService,
              private deviceDetectorService: DeviceDetectorService,
              ) {
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  checkIfMobile(): void {
    this._isMobile = this.deviceDetectorService.isMobile();
  }

  applyConfigs(): void {
    this.endpointsService.assignEndpoints();
  }
}
