import { ApexChart, ApexPlotOptions, ApexStroke } from 'ng-apexcharts';

export interface ChartOptions {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: string[];
  colors: string[];
  stroke: ApexStroke;
}

export const activityChart: ChartOptions = {
  chart: {
    height: 340,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '22px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function () {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return '80';
          },
        },
      },
    },
  },
  series: [50, 30, 20],
  labels: ['Completed', 'Upcoming', 'Cancelled'],
  colors: ['#fa4962', '#379cf9', '#a264ff'],
  stroke: {
    lineCap: 'round',
  },
};
