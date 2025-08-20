import { Component, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Animation } from '../../animation/animation';

@Component({
  selector: 'app-tour-breadcrumb-single-page',
  templateUrl: './tour-breadcrumb-single-page.html',
  styleUrl: './tour-breadcrumb-single-page.scss',
  imports: [Animation, CarouselModule],
})
export class TourBreadcrumbSinglePage {
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly days = input<number>();
  readonly date = input<string>();
  readonly slider = input<boolean>();
  readonly birdAnimation = input<boolean>();
  readonly tourVideo = input<boolean>();

  public carouselData = [
    {
      title: 'splendid spain',
      days: 7,
      date: '11 dec, 2019',
      image: 'assets/images/tour/spain4.jpg',
      details: true,
    },
    {
      title: 'splendid spain',
      image: 'assets/images/tour/spain3.jpg',
      subTitle: true,
    },
  ];

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
