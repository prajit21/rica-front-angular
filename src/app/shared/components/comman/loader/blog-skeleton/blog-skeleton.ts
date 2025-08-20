import { Component, Input, input } from '@angular/core';

import { BlogDetailSkeleton } from './blog-detail-skeleton/blog-detail-skeleton';
import { BlogFilterSkeleton } from './blog-filter-skeleton/blog-filter-skeleton';
import { BlogListSkeleton } from './blog-list-skeleton/blog-list-skeleton';
import { MenuSkeleton } from '../skeleton-loader/menu-skeleton/menu-skeleton';

@Component({
  selector: 'app-blog-skeleton',
  templateUrl: './blog-skeleton.html',
  styleUrl: './blog-skeleton.scss',
  imports: [MenuSkeleton, BlogFilterSkeleton, BlogListSkeleton, BlogDetailSkeleton],
})
export class BlogSkeleton {
  readonly skeletonType = input<string>();
  readonly filterType = input<string>();
  readonly gridType = input<string>();
  @Input() creativeList: boolean;
  readonly list = input<boolean>();
  readonly mix = input<boolean>();

  public loaderHide: boolean = false;

  constructor() {
    setTimeout(() => {
      this.loaderHide = true;
    }, 5000);
  }
}
