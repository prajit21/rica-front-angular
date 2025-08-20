import { Component, input } from '@angular/core';
import { restaurantOverview } from '../../../../../shared/interface/restaurant';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-overview',
    templateUrl: './restaurant-overview.html',
    styleUrl: './restaurant-overview.scss',
    imports: [NgClass]
})
export class RestaurantOverview {

  readonly restaurantOverview = input<restaurantOverview[]>();

}
