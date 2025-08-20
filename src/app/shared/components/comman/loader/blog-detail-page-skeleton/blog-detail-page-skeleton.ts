import { Component, input } from '@angular/core';
import { BlogDetailPageDataSkeleton } from './blog-detail-page-data-skeleton/blog-detail-page-data-skeleton';
import { BlogFilterSkeleton } from '../blog-skeleton/blog-filter-skeleton/blog-filter-skeleton';
import { MenuSkeleton } from '../skeleton-loader/menu-skeleton/menu-skeleton';

@Component({
    selector: 'app-blog-detail-page-skeleton',
    templateUrl: './blog-detail-page-skeleton.html',
    styleUrl: './blog-detail-page-skeleton.scss',
    imports: [MenuSkeleton, BlogFilterSkeleton, BlogDetailPageDataSkeleton]
})
export class BlogDetailPageSkeleton {

  readonly skeletonType = input<string>();
  readonly filterType = input<string>();

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
