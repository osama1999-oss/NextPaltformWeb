import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import { AdminServiceService } from './../shared/services/admin-service.service';
import { StatisticsOfReservations } from './../shared/model/statisticsOfReservations';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  PlayGroundsCount:number;
  PlayGroundApprovalCount:number;
  UsersCount:number;
  OwnersCount:number;

  data:StatisticsOfReservations[];
  dailyData:StatisticsOfReservations[];
  statusData:StatisticsOfReservations[];
  constructor( private adminServ:AdminServiceService) { }
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on("draw", function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === "point") {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on("draw", function (data) {
      if (data.type === "bar") {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    });

    seq2 = 0;
  }
  ngOnInit(): void {

    this.getStatisticsOfReservations();
    this.getDailyStatisticsOfReservations();
    this.getPlayGroundStatusStatistics();
    this.getUsersCount();
    this.getOwnersCount();
    this.getPlayGroundApprovalCount();
    this.getPlayGroundsCount();
}
  getStatisticsOfReservations()
  {
    this.adminServ.getStatisticsOfReservations().subscribe(
      res=> {
        this.data = res;
        console.log(this.data);
        this.getReservationChart();
      }
    );
  }
  getReservationChart()
  {
    
    var datawebsiteViewsChart = {
      labels: [this.data[3].name, this.data[1].name, this.data[2].name, this.data[0].name],
      series: [[this.data[3].value, this.data[1].value, this.data[2].value, this.data[0].value]],
    };
    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 18,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    var responsiveOptions: any[] = [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 8,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    var websiteViewsChart = new Chartist.Bar(
      "#websiteViewsChart",
      datawebsiteViewsChart,
      optionswebsiteViewsChart,
      responsiveOptions
    );

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  
  }
  getDailyResrvationChart()
  {
    const dataDailySalesChart: any = {
      // labels: [this.dailyData[6].name,this.dailyData[0].name,this.dailyData[2].name
      // ,this.dailyData[3].name,this.dailyData[1].name,this.dailyData[4].name,this.dailyData[5].name,],
      labels: ['S','S','M','T','W','T','F'],
      series: [
        [this.dailyData[6].value,this.dailyData[0].value,this.dailyData[2].value
        ,this.dailyData[3].value,this.dailyData[1].value,this.dailyData[4].value,this.dailyData[5].value,]
      ]
  };

 const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 8, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  }

  var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  this.startAnimationForLineChart(dailySalesChart);


  }
  getDailyStatisticsOfReservations()
  {
    this.adminServ.getDailyStatisticsOfReservations().subscribe(
      res=> {
        this.dailyData = res;
        console.log(this.dailyData);
        this.getDailyResrvationChart();
      }
    );
  }
  getPlayGroundStatusStatisticsChart()
  {
    
    var datawebsiteViewsChartSt = {
      labels: [this.statusData[3].name, this.statusData[1].name, this.statusData[2].name, this.statusData[0].name],
      series: [[this.statusData[3].value, this.statusData[1].value, this.statusData[2].value, this.statusData[0].value]],
    };
    var optionswebsiteViewsChartSt = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 6,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    var responsiveOptions: any[] = [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 8,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    var websiteViewsChartSt = new Chartist.Bar(
      "#websiteViewsChartSt",
      datawebsiteViewsChartSt,
      optionswebsiteViewsChartSt,
      responsiveOptions
    );

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChartSt);
  
  }
  getPlayGroundStatusStatistics()
  {
    this.adminServ.getPlayGroundStatusStatistics().subscribe(
      res=>{
        this.statusData = res;
        console.log("status",this.statusData);
        this.getPlayGroundStatusStatisticsChart();
      }
    );
  
  }
  getPlayGroundsCount()
  {
    this.adminServ.getPlayGroundsCount().subscribe(
      res=> {this.PlayGroundsCount = res;
    console.log(this.PlayGroundsCount)
  }
    )
  }
  getPlayGroundApprovalCount()
  {
    this.adminServ.getPlayGroundApprovalCount().subscribe(
      res=> this.PlayGroundApprovalCount = res
    )
  }
  getUsersCount()
  {
    this.adminServ.getUsersCount().subscribe(
      res=> this.UsersCount = res
    )
  }
  getOwnersCount()
  {
    this.adminServ.getOwnersCount().subscribe(
      res=> this.OwnersCount = res
    )
  }

}
