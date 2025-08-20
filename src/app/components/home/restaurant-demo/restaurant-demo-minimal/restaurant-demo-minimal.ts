import { Component, inject } from '@angular/core';

import { RestaurantMinimalApplication } from './restaurant-minimal-application/restaurant-minimal-application';
import { RestaurantMinimalBanner } from './restaurant-minimal-banner/restaurant-minimal-banner';
import { RestaurantMinimalBooking } from './restaurant-minimal-booking/restaurant-minimal-booking';
import { RestaurantMinimalCategory } from './restaurant-minimal-category/restaurant-minimal-category';
import { RestaurantMinimalHomeSection } from './restaurant-minimal-home-section/restaurant-minimal-home-section';
import { RestaurantMinimalPopularRestaurant } from './restaurant-minimal-popular-restaurant/restaurant-minimal-popular-restaurant';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { restaurantMinimal } from '../../../../shared/interface/restaurant-minimal';
import { RestaurantService } from '../../../../shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant-demo-minimal',
  templateUrl: './restaurant-demo-minimal.html',
  styleUrls: ['./restaurant-demo-minimal.scss'],
  imports: [
    Header,
    RestaurantMinimalHomeSection,
    RestaurantMinimalCategory,
    RestaurantMinimalBanner,
    RestaurantMinimalBooking,
    RestaurantMinimalPopularRestaurant,
    RestaurantMinimalApplication,
    Footer,
    Layout,
  ],
})
export class RestaurantDemoMinimal {
  private restaurantService = inject(RestaurantService);

  public restaurantMinimal: restaurantMinimal;

  constructor() {
    this.restaurantService.restaurantMinimal().subscribe(response => {
      this.restaurantMinimal = response;
    });
  }
}
