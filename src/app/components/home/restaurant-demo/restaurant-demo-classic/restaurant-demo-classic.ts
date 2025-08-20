import { Component, inject } from '@angular/core';

import { RestaurantClassicBanner } from './restaurant-classic-banner/restaurant-classic-banner';
import { RestaurantClassicBookTable } from './restaurant-classic-book-table/restaurant-classic-book-table';
import { RestaurantClassicBreakfast } from './restaurant-classic-breakfast/restaurant-classic-breakfast';
import { RestaurantClassicCategory } from './restaurant-classic-category/restaurant-classic-category';
import { RestaurantClassicHappyHours } from './restaurant-classic-happy-hours/restaurant-classic-happy-hours';
import { RestaurantClassicHomeSection } from './restaurant-classic-home-section/restaurant-classic-home-section';
import { RestaurantClassicMeal } from './restaurant-classic-meal/restaurant-classic-meal';
import { RestaurantClassicOurRestaurant } from './restaurant-classic-our-restaurant/restaurant-classic-our-restaurant';
import { RestaurantClassicService } from './restaurant-classic-service/restaurant-classic-service';
import { RestaurantClassicSocialGallery } from './restaurant-classic-social-gallery/restaurant-classic-social-gallery';
import { RestaurantClassicSpecialDishes } from './restaurant-classic-special-dishes/restaurant-classic-special-dishes';
import { RestaurantClassicTestimonial } from './restaurant-classic-testimonial/restaurant-classic-testimonial';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { restaurantClassic } from '../../../../shared/interface/restaurant-classic';
import { category } from '../../../../shared/interface/tour-modern';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-restaurant-demo-classic',
  templateUrl: './restaurant-demo-classic.html',
  styleUrls: ['./restaurant-demo-classic.scss'],
  imports: [
    Header,
    RestaurantClassicHomeSection,
    RestaurantClassicCategory,
    RestaurantClassicOurRestaurant,
    RestaurantClassicBreakfast,
    RestaurantClassicService,
    RestaurantClassicHappyHours,
    RestaurantClassicSpecialDishes,
    RestaurantClassicBanner,
    RestaurantClassicMeal,
    RestaurantClassicBookTable,
    RestaurantClassicTestimonial,
    RestaurantClassicSocialGallery,
    Footer,
    Layout,
  ],
})
export class RestaurantDemoClassic {
  private restaurantService = inject(RestaurantService);
  private tourService = inject(TourService);

  public restaurantClassic: restaurantClassic;
  public category: category[];

  constructor() {
    this.restaurantService.restaurantClassic().subscribe(response => {
      this.restaurantClassic = response;
    });

    this.tourService.category().subscribe(response => {
      this.category = response.category;
    });
  }
}
