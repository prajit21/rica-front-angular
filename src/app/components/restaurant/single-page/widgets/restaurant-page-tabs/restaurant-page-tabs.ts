import { Component, output } from '@angular/core';

import { restaurantTab } from '../../../../../shared/components/data/data/filter/restaurant';

@Component({
  selector: 'app-restaurant-page-tabs',
  templateUrl: './restaurant-page-tabs.html',
  styleUrl: './restaurant-page-tabs.scss',
})
export class RestaurantPageTabs {
  readonly tabValue = output<string>();

  public restaurantTab = restaurantTab;

  public activeTab = 'order';

  changeTab(value: string) {
    this.activeTab = value;
    this.tabValue.emit(this.activeTab);
  }
}
