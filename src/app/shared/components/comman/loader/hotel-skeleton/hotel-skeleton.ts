import { Component, input } from '@angular/core';
import { HotelSkeletonDetails } from './hotel-skeleton-details/hotel-skeleton-details';
import { HotelListSkeleton } from './hotel-list-skeleton/hotel-list-skeleton';
import { HotelSkeletonFilter } from './hotel-skeleton-filter/hotel-skeleton-filter';
import { GridSkeleton } from '../skeleton-loader/grid-skeleton/grid-skeleton';
import { NgClass } from '@angular/common';
import { HotelSkeletonSearchBox } from './hotel-skeleton-search-box/hotel-skeleton-search-box';

@Component({
    selector: 'app-hotel-skeleton',
    templateUrl: './hotel-skeleton.html',
    styleUrls: ['./hotel-skeleton.scss'],
    imports: [HotelSkeletonSearchBox, NgClass, GridSkeleton, HotelSkeletonFilter, HotelListSkeleton, HotelSkeletonDetails]
})
export class HotelSkeleton {

  readonly gridType = input<string>();
  readonly filter = input<boolean>();
  readonly filterType = input<string>();
  readonly mapFilter = input<boolean>();
  readonly mapSide = input<string>();
  readonly list = input<boolean>();
  readonly grid = input<boolean>();

}
