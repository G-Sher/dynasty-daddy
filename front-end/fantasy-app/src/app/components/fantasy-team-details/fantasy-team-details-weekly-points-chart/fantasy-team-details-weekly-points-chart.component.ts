import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import {Classic10} from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';
import {MatchupService} from '../../services/matchup.service';
import {SleeperTeam} from '../../../model/SleeperLeague';
import {SleeperService} from '../../../services/sleeper.service';

@Component({
  selector: 'app-fantasy-team-details-weekly-points-chart',
  templateUrl: './fantasy-team-details-weekly-points-chart.component.html',
  styleUrls: ['./fantasy-team-details-weekly-points-chart.component.css']
})
export class FantasyTeamDetailsWeeklyPointsChartComponent implements OnInit {

  /**
   * team selected
   */
  @Input()
  selectedTeam: SleeperTeam;

  /** line chart data */
  public lineChartData: ChartDataSets[] = [];

  /** line chart labels */
  public lineChartLabels: Label[] = [];

  /** line chart options */
  public lineChartOptions: (ChartOptions & { annotation?: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      intersect: false,
      mode: 'index',
      position: 'nearest',
      // custom: tooltipModel => {
      //   multi
      // }
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: true
        },
        scaleLabel: {
          display: true,
          labelString: 'MatchUp',
          fontColor: '#d3d3d3'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Fantasy Points',
          fontColor: '#d3d3d3'
        }
      }],
    },

    plugins: {
      colorschemes: {
        scheme: Classic10,
        override: true
      }
    }
  };
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private sleeperService: SleeperService, private matchupService: MatchupService) {
  }

  ngOnInit(): void {
    this.createMatchupDataSets();
    this.matchupService.initMatchUpCharts(this.sleeperService.selectedLeague);
  }

  /**
   * create data set for table
   */
  createMatchupDataSets(): void {
    const weeklyPoints = [];
    const oppPoints = [];
    const numOfWeeks = (Number(this.sleeperService.selectedYear) < 2021 ? 17 : 18);
    for (let i = 0; i <= numOfWeeks; i++) {
      const week = this.sleeperService.selectedLeague.leagueMatchUps[i];
      if (week) {
        for (const matchup of week) {
          if (matchup.rosterId === this.selectedTeam.roster.rosterId) {
            weeklyPoints[i] = matchup.points;
            const matchId = matchup.matchupId;
            for (const weekMatchup of week) {
              if (weekMatchup.matchupId === matchId && weekMatchup.rosterId !== this.selectedTeam.roster.rosterId) {
                oppPoints[i] = weekMatchup.points;
                this.lineChartLabels.push('Week ' + i + ' vs. ' +
                  this.sleeperService.getTeamByRosterId(weekMatchup.rosterId).owner.teamName);
                break;
              }
            }
            break;
          }
        }
      }
    }
    this.lineChartData.push({
      label: this.selectedTeam.owner.teamName,
      data: weeklyPoints.slice(this.sleeperService.selectedLeague.startWeek)
    });
    this.lineChartData.push({label: 'Opponent', data: oppPoints.slice(this.sleeperService.selectedLeague.startWeek)});
  }

}
