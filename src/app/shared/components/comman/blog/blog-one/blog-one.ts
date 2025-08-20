import { Component, Input, input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog-one',
    templateUrl: './blog-one.html',
    styleUrls: ['./blog-one.scss'],
    imports: [CarouselModule, RouterLink, NgClass]
})
export class BlogOne {

  @Input() blogs: blogs[];
  readonly border = input<boolean>();
  readonly colorClass = input<string>();

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    }
  };
}
