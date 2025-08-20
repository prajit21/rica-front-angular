import { Component, input } from '@angular/core';
import { RestaurantDetailSkeleton } from './restaurant-detail-skeleton/restaurant-detail-skeleton';
import { RestaurantFilterSkeleton } from './restaurant-filter-skeleton/restaurant-filter-skeleton';
import { GridSkeleton } from '../skeleton-loader/grid-skeleton/grid-skeleton';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-skeleton',
    templateUrl: './restaurant-skeleton.html',
    styleUrl: './restaurant-skeleton.scss',
    imports: [NgClass, GridSkeleton, RestaurantFilterSkeleton, RestaurantDetailSkeleton]
})
export class RestaurantSkeleton {

  readonly filterType = input<string>();
  readonly gridType = input<string>();
  readonly horizontalFilter = input<boolean>();
  readonly filter = input<boolean>();
  readonly mapFilter = input<boolean>();
  readonly mapSide = input<string>();
}
