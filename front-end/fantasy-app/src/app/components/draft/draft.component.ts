import {Component, OnInit} from '@angular/core';
import {SleeperService} from '../../services/sleeper.service';
import {PowerRankingsService} from '../services/power-rankings.service';
import {PlayerService} from '../../services/player.service';
import {BaseComponent} from '../base-component.abstract';
import {MockDraftService} from '../services/mock-draft.service';
import {CompletedDraft} from '../../model/SleeperUser';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent extends BaseComponent implements OnInit {
  selectedDraft: CompletedDraft | string;

  constructor(public sleeperService: SleeperService,
              private playersService: PlayerService, public mockDraftService: MockDraftService) {
    super();
  }

  ngOnInit(): void {
    if (this.sleeperService.selectedLeague && this.playersService.playerValues.length !== 0) {
      this.initServices();
    } else {
      this.playersService.loadPlayerValuesForToday();
    }
    this.addSubscriptions(this.playersService.$currentPlayerValuesLoaded.subscribe(() => {
        if (this.sleeperService.sleeperTeamDetails) {
          this.initServices();
        }
      })
    );
  }

  private initServices() {
    this.mockDraftService.generateDraft(this.playersService.playerValues, this.sleeperService.selectedLeague.isSuperflex, this.sleeperService.upcomingDrafts[0]?.playerType);
    this.mockDraftService.mapDraftObjects(this.sleeperService.sleeperTeamDetails);
    if(this.mockDraftService.teamPicks.length > 0) {
      this.selectedDraft = 'upcoming';
    }
  }

}
