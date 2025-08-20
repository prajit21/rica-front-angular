import { Component, input } from '@angular/core';
import { HotelSinglePageSkeletonDetails } from './hotel-single-page-skeleton-details/hotel-single-page-skeleton-details';
import { HotelSinglePageSkeletonFilter } from './hotel-single-page-skeleton-filter/hotel-single-page-skeleton-filter';

@Component({
    selector: 'app-hotel-single-page-skeleton',
    templateUrl: './hotel-single-page-skeleton.html',
    styleUrls: ['./hotel-single-page-skeleton.scss'],
    imports: [HotelSinglePageSkeletonFilter, HotelSinglePageSkeletonDetails]
})
export class HotelSinglePageSkeleton {

  readonly skeletonType = input<string>();
  readonly withOutTopPage = input<boolean>();
readonly breadcrumbSection = input<boolean>();
  readonly filterType = input<string>();
}
