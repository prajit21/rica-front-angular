import { Component, Input, input } from '@angular/core';

import { BlogDetailPageSkeleton } from './blog-detail-page-skeleton/blog-detail-page-skeleton';
import { BlogSkeleton } from './blog-skeleton/blog-skeleton';
import { FlightLoader } from './flight-loader/flight-loader';
import { LoaderOne } from './loader-one/loader-one';
import { LoaderTwo } from './loader-two/loader-two';
import { SkeletonLoader } from './skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss'],
  imports: [
    LoaderOne,
    LoaderTwo,
    SkeletonLoader,
    FlightLoader,
    BlogSkeleton,
    BlogDetailPageSkeleton,
  ],
})
export class Loader {
  @Input() loaderType: string;
  readonly gridType = input<string>();
  readonly filter = input<boolean>();
  readonly skeletonType = input<string>();
  readonly filterType = input<string>();
  readonly mapFilter = input<boolean>();
  readonly mapSide = input<string>();
  readonly list = input<boolean>();
  readonly grid = input<boolean>();
  readonly withOutTopPage = input<boolean>();
  readonly breadcrumbSection = input<boolean>();
  readonly hotel = input<boolean>(false);
  readonly tour = input<boolean>(false);
  readonly tourClassicGallery = input<boolean>();
  readonly flight = input<boolean>();
  readonly map = input<boolean>();
  readonly horizontalFilter = input<boolean>();
  readonly restaurantBreadcrumb = input<boolean>();
  readonly creativeList = input<boolean>();
  readonly mix = input<boolean>();
}
