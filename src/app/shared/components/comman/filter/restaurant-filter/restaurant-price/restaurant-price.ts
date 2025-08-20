import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';

import { RestaurantService } from '../../../../../../shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant-price',
  templateUrl: './restaurant-price.html',
  styleUrl: './restaurant-price.scss',
  imports: [NgStyle, NgxSliderModule],
})
export class RestaurantPrice {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private restaurantService = inject(RestaurantService);

  public isOpenPrice: boolean = true;
  public priceArray: number[] = [];
  public getMinPriceParams: number;
  public getMaxPriceParams: number;
  public priceMinValue: number;
  public priceMaxValue: number;

  public options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    },
  };

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.getMinPriceParams = params['minPrice'];
      this.getMaxPriceParams = params['maxPrice'];

      this.priceMinValue = this.getMinPriceParams ? this.getMinPriceParams : 10;
      this.priceMaxValue = this.getMaxPriceParams ? this.getMaxPriceParams : 100;

      void this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { minPrice: this.priceMinValue, maxPrice: this.priceMaxValue },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
      });
    });

    this.restaurantService.getMaxPrice().subscribe(response => {
      this.options = {
        floor: 0,
        ceil: response,
      };

      this.options.ceil = response + 100;
    });
  }

  priceChange(event: Params) {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { minPrice: event['value'], maxPrice: event['highValue'] },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
    });
  }

  openPrice() {
    this.isOpenPrice = !this.isOpenPrice;
  }
}
