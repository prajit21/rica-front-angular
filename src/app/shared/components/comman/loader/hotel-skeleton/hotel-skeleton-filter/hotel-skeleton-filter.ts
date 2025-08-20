import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hotel-skeleton-filter',
  templateUrl: './hotel-skeleton-filter.html',
  styleUrls: ['./hotel-skeleton-filter.scss'],
})
export class HotelSkeletonFilter {
  readonly filter = input<boolean>();
}
