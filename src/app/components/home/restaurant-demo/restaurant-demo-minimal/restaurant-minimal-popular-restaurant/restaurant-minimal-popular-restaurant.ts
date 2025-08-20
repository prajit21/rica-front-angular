import { Component, inject, input } from '@angular/core';

import { RestaurantDetails } from '../../../../../shared/components/comman/restaurant/restaurant-details/restaurant-details';
import { restaurantGridMenu } from '../../../../../shared/components/data/data/restaurant';
import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant-minimal-popular-restaurant',
  templateUrl: './restaurant-minimal-popular-restaurant.html',
  styleUrls: ['./restaurant-minimal-popular-restaurant.scss'],
  imports: [RestaurantDetails],
})
export class RestaurantMinimalPopularRestaurant {
  private restaurantService = inject(RestaurantService);

  readonly id = input<number[]>();

  public restaurant: restaurantDetail[];
  public restaurantDetails: restaurantDetail[];
  public restaurantGridMenu = restaurantGridMenu;

  public activeMenu = '';

  constructor() {
    this.restaurantService.restaurant().subscribe(response => {
      this.restaurant = response.restaurant;

      if (Array.isArray(this.id())) {
        this.restaurant = this.restaurant?.filter(items => {
          return this.id()?.includes(items.id);
        });

        // Get By Default Data of Selected Value
        this.restaurantDetails = this.restaurant.filter(data => {
          if (data.restaurantType == this.activeMenu) {
            return data;
          } else if (this.activeMenu == '') {
            return data;
          }
          return;
        });
      }
    });
  }

  GetRestaurantDetails(value: string) {
    this.activeMenu = value;

    this.restaurantDetails = this.restaurant.filter(data => {
      if (data.restaurantType == value) {
        return data;
      } else if (value == '') {
        return data;
      }
      return;
    });
  }
}
