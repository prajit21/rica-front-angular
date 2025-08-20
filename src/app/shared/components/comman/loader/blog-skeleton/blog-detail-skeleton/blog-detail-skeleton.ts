import { Component, input } from '@angular/core';

@Component({
    selector: 'app-blog-detail-skeleton',
    templateUrl: './blog-detail-skeleton.html',
    styleUrl: './blog-detail-skeleton.scss',
    
})
export class BlogDetailSkeleton {

  readonly gridType = input<string>();
  readonly mix = input<boolean>();
}
