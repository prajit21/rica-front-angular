import { Component, input, output } from '@angular/core';

import { tabs } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-user-dashboard-tab',
  templateUrl: './user-dashboard-tab.html',
  styleUrl: './user-dashboard-tab.scss',
})
export class UserDashboardTab {
  readonly tabs = input<tabs[]>();

  readonly tabValue = output<string>();

  public activeTab = 'dashboard';

  changeTab(value: string) {
    this.activeTab = value;
    this.tabValue.emit(this.activeTab);
  }
}
