import { Component, input } from '@angular/core';

import { TourListSkeletonDetails } from './tour-list-skeleton-details/tour-list-skeleton-details';
import { TourSkeletonDetails } from './tour-skeleton-details/tour-skeleton-details';
import { HotelSkeletonFilter } from '../hotel-skeleton/hotel-skeleton-filter/hotel-skeleton-filter';
import { GridSkeleton } from '../skeleton-loader/grid-skeleton/grid-skeleton';

@Component({
  selector: 'app-tour-skeleton',
  templateUrl: './tour-skeleton.html',
  styleUrls: ['./tour-skeleton.scss'],
  imports: [GridSkeleton, HotelSkeletonFilter, TourListSkeletonDetails, TourSkeletonDetails],
})
export class TourSkeleton {
  readonly filter = input<boolean>();
  readonly gridType = input<string>();
  readonly filterType = input<string>();
  readonly list = input<boolean>();
}
