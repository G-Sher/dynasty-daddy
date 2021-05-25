import { Component, OnInit } from '@angular/core';
import {SleeperService} from '../../services/sleeper.service';
import {SleeperLeagueData} from '../../model/SleeperUser';
import {BaseComponent} from '../base-component.abstract';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {


  constructor(public sleeperService: SleeperService) {
    super();
  }

  ngOnInit(): void {
  }
}
