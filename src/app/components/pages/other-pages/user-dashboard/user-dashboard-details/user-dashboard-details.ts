import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { activityChart } from '../../../../../shared/components/data/chart/dashboard-chart';
import { dashboardDetails } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-user-dashboard-details',
  templateUrl: './user-dashboard-details.html',
  styleUrl: './user-dashboard-details.scss',
  imports: [NgApexchartsModule, NgClass],
})
export class UserDashboardDetails {
  @Input() dashboardDetails: dashboardDetails;

  public activityChart = activityChart;
}
