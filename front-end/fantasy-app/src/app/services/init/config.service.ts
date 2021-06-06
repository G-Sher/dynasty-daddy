import {Injectable} from '@angular/core';
import {EndpointsService} from '../endpoints.service';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private endpointsService: EndpointsService) {
  }

  applyConfigs(): void {
    this.endpointsService.assignEndpoints();
  }
}
