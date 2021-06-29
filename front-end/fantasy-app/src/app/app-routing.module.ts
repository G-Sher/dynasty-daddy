import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PowerRankingsComponent} from './components/power-rankings/power-rankings.component';
import {PlayerValuesComponent} from './components/player-values/player-values.component';
import {DraftComponent} from './components/draft/draft.component';
import {StandingsComponent} from './components/standings/standings.component';
import {PlayerComparisonsComponent} from './components/player-comparisons/player-comparisons.component';
import {PlayerDetailsComponent} from './components/player-details/player-details.component';
import {FantasyTeamDetailsComponent} from './components/fantasy-team-details/fantasy-team-details.component';
import {PlayoffCalculatorComponent} from './components/playoff-calculator/playoff-calculator.component';

const routes: Routes = [
  {
    path: 'players/values',
    component: PlayerValuesComponent
  },
  {
    path: 'players/comparison',
    component: PlayerComparisonsComponent
  },
  {
    path: 'players/details/:playerNameId',
    component: PlayerDetailsComponent
  },
  {
    path: 'league/team/:ownerName',
    component: FantasyTeamDetailsComponent
  },
  {
    path: 'league/rankings',
    component: PowerRankingsComponent
  },
  {
    path: 'league/probability',
    component: PlayoffCalculatorComponent
  },
  {
    path: 'league/standings',
    component: StandingsComponent
  },
  {
    path: 'league/draft',
    component: DraftComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
