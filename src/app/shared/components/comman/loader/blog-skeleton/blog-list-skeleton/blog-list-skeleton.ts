import { Component, input } from '@angular/core';

@Component({
    selector: 'app-blog-list-skeleton',
    templateUrl: './blog-list-skeleton.html',
    styleUrl: './blog-list-skeleton.scss',
    
})
export class BlogListSkeleton {

  readonly creativeList = input<boolean>();
  readonly mix = input<boolean>();

}
