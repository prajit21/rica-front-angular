import { Component, input } from '@angular/core';
import { RestaurantCartSkeleton } from './restaurant-cart-skeleton/restaurant-cart-skeleton';

@Component({
    selector: 'app-restaurant-single-page-skeleton',
    templateUrl: './restaurant-single-page-skeleton.html',
    styleUrl: './restaurant-single-page-skeleton.scss',
    imports: [RestaurantCartSkeleton]
})
export class RestaurantSinglePageSkeleton {

  readonly filterType = input<string>();

}
