import { Component, input } from '@angular/core';

import { CabBreadcrumb } from './cab-breadcrumb/cab-breadcrumb';
import { FlightBreadcrumb } from './flight-breadcrumb/flight-breadcrumb';
import { HotelBreadcrumb } from './hotel-breadcrumb/hotel-breadcrumb';
import { HotelBreadcrumbTitle } from './hotel-breadcrumb-title/hotel-breadcrumb-title';
import { PagesBreadcrumb } from './pages-breadcrumb/pages-breadcrumb';
import { RestaurantBreadcrumb } from './restaurant-breadcrumb/restaurant-breadcrumb';
import { RestaurantSinglePageBreadcrumb } from './restaurant-single-page-breadcrumb/restaurant-single-page-breadcrumb';
import { TourBreadcrumb } from './tour-breadcrumb/tour-breadcrumb';
import { TourBreadcrumbSinglePage } from './tour-breadcrumb-single-page/tour-breadcrumb-single-page';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.scss'],
  imports: [
    HotelBreadcrumb,
    HotelBreadcrumbTitle,
    TourBreadcrumb,
    TourBreadcrumbSinglePage,
    FlightBreadcrumb,
    CabBreadcrumb,
    RestaurantBreadcrumb,
    RestaurantSinglePageBreadcrumb,
    PagesBreadcrumb,
  ],
})
export class Breadcrumbs {
  readonly type = input<string>();
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly subParent = input<string>();
  readonly child = input<string>();
  readonly days = input<number>();
  readonly date = input<string>();
  readonly slider = input<boolean>(false);
  readonly birdAnimation = input<boolean>(false);
  readonly tourVideo = input<boolean>(false);
  readonly tourBreadcrumb = input<boolean>(false);
  readonly FlightDetails = input<boolean>();
  readonly sectionClass = input<string>();
  readonly paddingClass = input<boolean>(false);
}
