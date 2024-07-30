import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  providers: [DataService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lineChart!: Chart;
  barChart!: Chart;
  pieChart!: Chart;
  histogramChart!: Chart;

  constructor(private carDataService: DataService) { }

  ngOnInit() {
    this.carDataService.getCarData().subscribe({
      next:param=>{
        this.initializeCharts(param);
      }
    });
  }

  initializeCharts(data: any) {
    // Assuming we use data from the first year and first month's sales for simplicity
    const categories = data[0].data.map((item: any) => item.month);
    const salesData = data[0].data.map((item: any) => item.sales.reduce((total: number, sale: any) => total + sale.quantity, 0));

    this.lineChart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Car Bar Chart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Months'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Sales'
        }
      },
      series: [
        {
          name: 'Sales',
          data: salesData
        } as any
      ]
    });

    this.barChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Car Line Chart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Months'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Sales'
        }
      },
      series: [
        {
          name: 'Sales',
          data: salesData
        } as any
      ]
    });

    this.pieChart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Car Pie Chart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Sales',
          data: data[0].data.map((item: any) => ({
            name: item.month,
            y: item.sales.reduce((total: number, sale: any) => total + sale.quantity, 0)
          }))
        } as any
      ]
    });

    this.histogramChart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Car Histogram Chart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Months'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Sales'
        }
      },
      series: [
        {
          name: 'Sales',
          data: salesData
        } as any
      ]
    });
  }
}
