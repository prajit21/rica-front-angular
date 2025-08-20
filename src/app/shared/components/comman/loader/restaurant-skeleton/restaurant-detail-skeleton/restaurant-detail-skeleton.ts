import { Component, input } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail-skeleton',
  templateUrl: './restaurant-detail-skeleton.html',
  styleUrl: './restaurant-detail-skeleton.scss',
})
export class RestaurantDetailSkeleton {
  readonly gridType = input<string>();
  readonly horizontalFilter = input<boolean>();
}
