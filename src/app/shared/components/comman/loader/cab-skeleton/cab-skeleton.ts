import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

import { CabDetailsSkeleton } from './cab-details-skeleton/cab-details-skeleton';
import { CabFilterSkeleton } from './cab-filter-skeleton/cab-filter-skeleton';
import { CabGridSkeleton } from './cab-grid-skeleton/cab-grid-skeleton';
import { CabListDetailsSkeleton } from './cab-list-details-skeleton/cab-list-details-skeleton';
import { CabSearchSkeleton } from './cab-search-skeleton/cab-search-skeleton';

@Component({
  selector: 'app-cab-skeleton',
  templateUrl: './cab-skeleton.html',
  styleUrl: './cab-skeleton.scss',
  imports: [
    NgClass,
    CabSearchSkeleton,
    CabGridSkeleton,
    CabFilterSkeleton,
    CabDetailsSkeleton,
    CabListDetailsSkeleton,
  ],
})
export class CabSkeleton {
  readonly filterType = input<string>();
  @Input() skeletonType: string;
  readonly gridType = input<string>();
  readonly grid = input<boolean>(true);
  readonly filter = input<boolean>();
  readonly mapSide = input<string>();
  readonly map = input<boolean>(false);
}
