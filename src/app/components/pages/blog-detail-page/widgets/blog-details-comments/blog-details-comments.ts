import { Component, input } from '@angular/core';
import { blogComments } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-blog-details-comments',
    templateUrl: './blog-details-comments.html',
    styleUrl: './blog-details-comments.scss',
})
export class BlogDetailsComments {

  readonly blogComments = input<blogComments[]>();
  
}
