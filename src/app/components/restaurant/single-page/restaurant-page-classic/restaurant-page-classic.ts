import { Component, inject } from '@angular/core';
import { restaurants } from '../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { RestaurantCartItems } from '../widgets/restaurant-cart-items/restaurant-cart-items';
import { RestaurantDetailSlider } from '../widgets/restaurant-detail-slider/restaurant-detail-slider';
import { RestaurantReview } from '../widgets/restaurant-review/restaurant-review';
import { RestaurantBookTable } from '../widgets/restaurant-book-table/restaurant-book-table';
import { RestaurantLocation } from '../widgets/restaurant-location/restaurant-location';
import { RestaurantGallery } from '../widgets/restaurant-gallery/restaurant-gallery';
import { RestaurantOverview } from '../widgets/restaurant-overview/restaurant-overview';
import { RestaurantOrders } from '../widgets/restaurant-orders/restaurant-orders';
import { RestaurantPageTabs } from '../widgets/restaurant-page-tabs/restaurant-page-tabs';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-restaurant-page-classic',
    templateUrl: './restaurant-page-classic.html',
    styleUrl: './restaurant-page-classic.scss',
    imports: [Header, Breadcrumbs, RestaurantPageTabs, RestaurantOrders, RestaurantOverview, RestaurantGallery, RestaurantLocation, RestaurantBookTable, RestaurantReview, RestaurantDetailSlider, RestaurantCartItems, Footer, Layout]
})
export class RestaurantPageClassic {

  private restaurantService = inject(RestaurantService);
  
  public activeTab = 'order';

  public restaurantDetails: restaurants;

  constructor() {
    this.restaurantService.restaurantDetails().subscribe(response => {
      this.restaurantDetails = response;
    })
  }

  ngOnInit(){
    this.activeTab = 'order';
  }

  getTabValue(value: string){
    this.activeTab = value;
  }

  openCart(){
    this.restaurantService.isOpenCart = true;
  }
}
