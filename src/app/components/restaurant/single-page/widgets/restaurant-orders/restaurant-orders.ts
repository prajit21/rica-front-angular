import { Component, HostListener, input } from '@angular/core';
import { restaurantOrders } from '../../../../../shared/interface/restaurant';
import { RestaurantMenuItems } from './restaurant-menu-items/restaurant-menu-items';
import { RestaurantMenu } from './restaurant-menu/restaurant-menu';

@Component({
    selector: 'app-restaurant-orders',
    templateUrl: './restaurant-orders.html',
    styleUrl: './restaurant-orders.scss',
    imports: [RestaurantMenu, RestaurantMenuItems]
})
export class RestaurantOrders {

  readonly restaurantOrders = input<restaurantOrders[]>();

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener('window: scroll', [])
  onWindowScroll(){
    let number = window.pageYOffset || 0;
    if (number > 765) {
      this.isStuck = true;
      this.isNotStuck = false;
    }else {
      this.isStuck = false
    }if(number > 3600){
      this.isNotStuck = true;
      this.isStuck = false;
    }
  }
}
