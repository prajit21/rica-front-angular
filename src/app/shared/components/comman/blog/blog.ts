import { Component, input } from '@angular/core';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { BlogTwo } from './blog-two/blog-two';
import { BlogOne } from './blog-one/blog-one';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.html',
    styleUrls: ['./blog.scss'],
    imports: [BlogOne, BlogTwo]
})
export class Blog {

  readonly type = input<string>();
  readonly blogs = input<blogs[]>();
  readonly border = input<boolean>();
  readonly colorClass = input<string>();
  readonly postedBy = input<boolean>(false);
  readonly postedDate = input<boolean>(false);
  readonly buttonClass = input<string>();

}
