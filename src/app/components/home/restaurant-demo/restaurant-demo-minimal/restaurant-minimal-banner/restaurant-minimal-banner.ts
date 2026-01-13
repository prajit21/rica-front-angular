import { Component, input } from '@angular/core';

import { restaurantBanner } from '../../../../../shared/interface/restaurant-minimal';

@Component({
  selector: 'app-restaurant-minimal-banner',
  templateUrl: './restaurant-minimal-banner.html',
  styleUrls: ['./restaurant-minimal-banner.scss'],
})
export class RestaurantMinimalBanner {
  readonly banner = input<restaurantBanner[]>();
}
