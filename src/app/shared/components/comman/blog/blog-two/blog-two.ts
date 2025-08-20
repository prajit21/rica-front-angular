import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { blogs } from '../../../../../shared/interface/hotel-minimal';

@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.html',
  styleUrls: ['./blog-two.scss'],
  imports: [CarouselModule, RouterLink, NgClass],
})
export class BlogTwo {
  @Input() blogs: blogs[];
  readonly postedBy = input<boolean>(false);
  readonly postedDate = input<boolean>(false);
  readonly buttonClass = input<string>();

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      890: {
        items: 2,
      },
    },
  };
}
