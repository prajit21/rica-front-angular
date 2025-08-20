import { NgStyle, NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngxs/store';

import { RestaurantCuisines } from './restaurant-cuisines/restaurant-cuisines';
import { RestaurantDeliveryTime } from './restaurant-delivery-time/restaurant-delivery-time';
import { RestaurantMapFiler } from './restaurant-map-filer/restaurant-map-filer';
import { RestaurantPopularTags } from './restaurant-popular-tags/restaurant-popular-tags';
import { RestaurantPrice } from './restaurant-price/restaurant-price';
import { RestaurantRating } from './restaurant-rating/restaurant-rating';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { GetRestaurant } from '../../../../../shared/store/action/restaurant.action';

@Component({
  selector: 'app-restaurant-filter',
  templateUrl: './restaurant-filter.html',
  styleUrl: './restaurant-filter.scss',
  imports: [
    NgStyle,
    NgClass,
    RestaurantPopularTags,
    RestaurantCuisines,
    RestaurantRating,
    RestaurantPrice,
    RestaurantDeliveryTime,
    RestaurantMapFiler,
  ],
})
export class RestaurantFilter {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  public restaurantService = inject(RestaurantService);

  readonly horizontalFilter = input<boolean>(false);
  readonly mapFilter = input<boolean>();
  readonly tags = input<boolean>();
  readonly price = input<boolean>();
  readonly restaurant = input<boolean>();
  readonly cuisines = input<boolean>();
  readonly rating = input<boolean>();
  readonly time = input<boolean>();

  public isOpenFilter: boolean = true;
  public getTagParams: string[] = [];
  public getCuisinesParams: string[] = [];
  public getRatingParams: string[] = [];
  public getDeliveryTime: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.getTagParams = params['tag'] ? params['tag'].split(',') : [];
      this.getCuisinesParams = params['cuisines'] ? params['cuisines'].split(',') : [];
      this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
      this.getDeliveryTime = params['delivery_time'] ? params['delivery_time'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
      this.priceData = {
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
      };

      this.paramsTag = [
        ...this.getTagParams,
        ...this.getCuisinesParams,
        ...this.getRatingParams,
        ...this.getDeliveryTime,
      ];

      this.store.dispatch(new GetRestaurant(this.paramsTag, this.priceData));
    });
  }

  openFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  closeResponsiveFilter() {
    this.restaurantService.isOpenResponsiveFilter = false;
  }

  closeResponsiveHorizontal() {
    this.restaurantService.isOpenHorizontalFilter = false;
  }
}
