import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { restaurantBanner } from '../../../../../shared/interface/restaurant-minimal';

@Component({
  selector: 'app-restaurant-minimal-banner',
  templateUrl: './restaurant-minimal-banner.html',
  styleUrls: ['./restaurant-minimal-banner.scss'],
  imports: [NgClass],
})
export class RestaurantMinimalBanner {
  readonly banner = input<restaurantBanner[]>();
}
