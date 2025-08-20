import { Component, Input, input } from '@angular/core';
import { RestaurantSinglePageSkeleton } from '../restaurant-single-page-skeleton/restaurant-single-page-skeleton';
import { RestaurantSkeleton } from '../restaurant-skeleton/restaurant-skeleton';
import { CabSkeleton } from '../cab-skeleton/cab-skeleton';
import { FlightSkeleton } from '../flight-skeleton/flight-skeleton';
import { TourSinglePageSkeleton } from '../tour-single-page-skeleton/tour-single-page-skeleton';
import { TourPageClassicGallerySkeleton } from '../tour-page-classic-gallery-skeleton/tour-page-classic-gallery-skeleton';
import { TourSkeleton } from '../tour-skeleton/tour-skeleton';
import { HotelSinglePageSkeleton } from '../hotel-single-page-skeleton/hotel-single-page-skeleton';
import { HotelSkeleton } from '../hotel-skeleton/hotel-skeleton';
import { MenuSkeleton } from './menu-skeleton/menu-skeleton';

@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.html',
    styleUrls: ['./skeleton-loader.scss'],
    imports: [MenuSkeleton, HotelSkeleton, HotelSinglePageSkeleton, TourSkeleton, TourPageClassicGallerySkeleton, TourSinglePageSkeleton, FlightSkeleton, CabSkeleton, RestaurantSkeleton, RestaurantSinglePageSkeleton]
})
export class SkeletonLoader {

  @Input() skeletonType: string;
  readonly gridType = input<string>();
  readonly filter = input<boolean>();
  readonly filterType = input<string>();
  readonly mapFilter = input<boolean>();
  readonly mapSide = input<string>();
  readonly list = input<boolean>();
  readonly grid = input<boolean>();
  readonly withOutTopPage = input<boolean>();
  readonly breadcrumbSection = input<boolean>();
  readonly hotel = input<boolean>(false);
  readonly tour = input<boolean>(false);
  readonly tourClassicGallery = input<boolean>();
  readonly flight = input<boolean>();
  readonly map = input<boolean>();
  readonly horizontalFilter = input<boolean>();
  readonly restaurantBreadcrumb = input<boolean>();

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
