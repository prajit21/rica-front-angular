import { Component, inject, input } from '@angular/core';
import { OrderItems, restaurantOrders } from '../../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { NgStyle, NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-cart-items',
    templateUrl: './restaurant-cart-items.html',
    styleUrl: './restaurant-cart-items.scss',
    imports: [NgStyle, NgClass, CurrencySymbolPipe]
})
export class RestaurantCartItems {

  public restaurantService = inject(RestaurantService);
  public hotelService = inject(HotelService);


  readonly restaurantOrders = input<restaurantOrders[]>();
  readonly emptyCart = input<boolean>(false);
  readonly backButton = input<boolean>(true);

  setValue(item: OrderItems, type: number){
      if(type == 1){
        item.itemsValue += 1;
      }else if(type == -1){
        if(item.itemsValue >= 1){
          item.itemsValue -= 1;
        }

        if(item.itemsValue == 0){
          item.active = false
        }
      }
  }

  closeCart(){
    this.restaurantService.isOpenCart = false;
  }
}
