import {Component, OnInit} from '@angular/core';
import {KTCApiService} from './services/api/ktc-api.service';
import {KTCPlayer} from './model/KTCPlayer';
import {ConfigService} from './services/init/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fantasy-app';

  constructor(public configService: ConfigService) {
  }

  ngOnInit(): void {
    this.configService.checkIfMobile();
    console.log('isMobile ' + this.configService.isMobile);
  }
}
