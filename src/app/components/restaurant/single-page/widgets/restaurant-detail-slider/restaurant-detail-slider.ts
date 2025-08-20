import { Component, inject } from '@angular/core';
import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { NgClass } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-restaurant-detail-slider',
    templateUrl: './restaurant-detail-slider.html',
    styleUrl: './restaurant-detail-slider.scss',
    imports: [CarouselModule, NgClass, CurrencySymbolPipe]
})
export class RestaurantDetailSlider {

  private restaurantService = inject(RestaurantService); 
  public hotelService = inject(HotelService); 

  public restaurantDetails: restaurantDetail[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    }
  }

  constructor(){
    this.restaurantService.restaurant().subscribe(response => {
      this.restaurantDetails = response.restaurant;
    })
  }
}
