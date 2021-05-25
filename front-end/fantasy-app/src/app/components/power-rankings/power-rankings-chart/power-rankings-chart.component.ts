import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {PowerRankingsService} from '../../services/power-rankings.service';
import {SleeperService} from '../../../services/sleeper.service';

@Component({
  selector: 'app-power-rankings-chart',
  templateUrl: './power-rankings-chart.component.html',
  styleUrls: ['./power-rankings-chart.component.css']
})
export class PowerRankingsChartComponent implements OnInit {

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  selectedFilter: string = 'starter';

  public lineChartOptions: (ChartOptions & { annotation?: any }) = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      intersect: false,
      mode: 'index'
    },
    title: {
      text: 'Overall Team Value'
    },
    scales: {
      xAxes: [{
        display: true,
        stacked: true,
        gridLines: {
          display: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Team',
          fontColor: '#d3d3d3'
        }
      }],
      yAxes: [{
        display: true,
        stacked: true,
        gridLines: {
          display: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Value',
          fontColor: '#d3d3d3'
        }
      }]
    },
    legend: {
      position: 'left',
      labels: {
        fontColor: '#d3d3d3'
      },
      reverse: true,
    },
    plugins: {
    }
  };
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];
  data: ChartDataSets[] = [];
  dataLabels: Label[] = [];

  constructor(private powerRankingService: PowerRankingsService, private sleeperService: SleeperService) {
  }

  ngOnInit(): void {
    this.dataLabels = [];
    for (let team of this.powerRankingService.powerRankings) {
      this.dataLabels.push(team.team.owner.ownerName);
    }
    this.refreshChart();
  }

  private refreshChart() {
    let temp = [];
    for (let team of this.powerRankingService.powerRankings) {
      const index = this.dataLabels.indexOf(team.team.owner.ownerName);
      temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[0].sfTradeValue : team.roster[0].tradeValue;
      this.data[0] = {data: temp, label: 'QB'};
    }
    temp = [];
    for (let team of this.powerRankingService.powerRankings) {
      const index = this.dataLabels.indexOf(team.team.owner.ownerName);
      temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[1].sfTradeValue : team.roster[1].tradeValue;
      this.data[1] = {data: temp, label: 'RB'};
    }
    temp = [];
    for (let team of this.powerRankingService.powerRankings) {
      const index = this.dataLabels.indexOf(team.team.owner.ownerName);
      temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[2].sfTradeValue : team.roster[2].tradeValue;
      this.data[2] = {data: temp, label: 'WR'};
    }
    temp = [];
    for (let team of this.powerRankingService.powerRankings) {
      const index = this.dataLabels.indexOf(team.team.owner.ownerName);
      temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.roster[3].sfTradeValue : team.roster[3].tradeValue;
      this.data[3] = {data: temp, label: 'TE'};
    }
    temp = [];
    for (let team of this.powerRankingService.powerRankings) {
      const index = this.dataLabels.indexOf(team.team.owner.ownerName);
      temp[index] = this.sleeperService.selectedLeague.isSuperflex ? team.picks.sfTradeValue : team.picks.tradeValue;
      this.data[4] = {data: temp, label: 'Draft Capital'};
    }
  }
}
