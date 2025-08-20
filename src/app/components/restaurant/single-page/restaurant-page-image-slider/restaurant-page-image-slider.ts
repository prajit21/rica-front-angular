import { Component, inject } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { hotelGallery } from '../../../../shared/interface/hotel';
import { restaurants } from '../../../../shared/interface/restaurant';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../shared/services/hotel.service';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { RestaurantBookTable } from '../widgets/restaurant-book-table/restaurant-book-table';
import { RestaurantCartItems } from '../widgets/restaurant-cart-items/restaurant-cart-items';
import { RestaurantDetailSlider } from '../widgets/restaurant-detail-slider/restaurant-detail-slider';
import { RestaurantGallery } from '../widgets/restaurant-gallery/restaurant-gallery';
import { RestaurantLocation } from '../widgets/restaurant-location/restaurant-location';
import { RestaurantOrders } from '../widgets/restaurant-orders/restaurant-orders';
import { RestaurantOverview } from '../widgets/restaurant-overview/restaurant-overview';
import { RestaurantPageTabs } from '../widgets/restaurant-page-tabs/restaurant-page-tabs';
import { RestaurantReview } from '../widgets/restaurant-review/restaurant-review';

@Component({
  selector: 'app-restaurant-page-image-slider',
  templateUrl: './restaurant-page-image-slider.html',
  styleUrl: './restaurant-page-image-slider.scss',
  imports: [
    Header,
    CarouselModule,
    RestaurantPageTabs,
    RestaurantOrders,
    RestaurantOverview,
    RestaurantGallery,
    RestaurantLocation,
    RestaurantBookTable,
    RestaurantReview,
    RestaurantDetailSlider,
    RestaurantCartItems,
    Footer,
    Layout,
    CurrencySymbolPipe,
  ],
})
export class RestaurantPageImageSlider {
  private restaurantService = inject(RestaurantService);
  public hotelService = inject(HotelService);

  public activeTab = 'order';

  public restaurantDetails: restaurants;
  public restaurantGallery: hotelGallery[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
    },
  };

  constructor() {
    this.restaurantService.restaurantDetails().subscribe(response => {
      this.restaurantDetails = response;
      this.restaurantGallery = response.restaurantGallery;
    });
  }

  ngOnInit() {
    this.activeTab = 'order';
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }

  openCart() {
    this.restaurantService.isOpenCart = true;
  }
}
