import { Component, input } from '@angular/core';
import { RestaurantFilter } from './restaurant-filter/restaurant-filter';
import { CabFilter } from './cab-filter/cab-filter';
import { FlightFilterTwo } from './flight-filter-two/flight-filter-two';
import { FlightFilter } from './flight-filter/flight-filter';
import { TourFilterHorizontal } from './tour-filter-horizontal/tour-filter-horizontal';
import { TourFilter } from './tour-filter/tour-filter';
import { HotelFilterHorizontal } from './hotel-filter-horizontal/hotel-filter-horizontal';
import { HotelFilter } from './hotel-filter/hotel-filter';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.html',
    styleUrls: ['./filter.scss'],
    imports: [HotelFilter, HotelFilterHorizontal, TourFilter, TourFilterHorizontal, FlightFilter, FlightFilterTwo, CabFilter, RestaurantFilter]
})
export class Filter {

  readonly type = input<string>();
  readonly mapFilter = input<boolean>();

  readonly district = input<boolean>(true);
  readonly facility = input<boolean>(true);
  readonly rating = input<boolean>(true);
  readonly price = input<boolean>(true);
  readonly language = input<boolean>(true);
  readonly hotels = input<boolean>(false);
  readonly cabHorizontal = input<boolean>(false);
  readonly shadowClass = input<boolean>(false);
  readonly horizontalFilter = input<boolean>(false);
  readonly tags = input<boolean>(true);
  readonly restaurant = input<boolean>(false);
  readonly cuisines = input<boolean>(true);
  readonly time = input<boolean>(true);
}
