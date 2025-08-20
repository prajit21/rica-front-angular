import { Component, input } from '@angular/core';

import { TourSinglePageSkeletonFilter } from './tour-single-page-skeleton-filter/tour-single-page-skeleton-filter';

@Component({
  selector: 'app-tour-single-page-skeleton',
  templateUrl: './tour-single-page-skeleton.html',
  styleUrl: './tour-single-page-skeleton.scss',
  imports: [TourSinglePageSkeletonFilter],
})
export class TourSinglePageSkeleton {
  readonly filterType = input<string>();
}
