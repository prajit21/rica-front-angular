import { Component, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { testimonial } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-testimonial-one',
  templateUrl: './testimonial-one.html',
  styleUrls: ['./testimonial-one.scss'],
  imports: [CarouselModule],
})
export class TestimonialOne {
  readonly testimonial = input<testimonial[]>();

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
