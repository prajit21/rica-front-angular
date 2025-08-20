import { Component, Input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { testimonial } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-testimonial-two',
  templateUrl: './testimonial-two.html',
  styleUrls: ['./testimonial-two.scss'],
  imports: [CarouselModule],
})
export class TestimonialTwo {
  @Input() testimonial: testimonial[];

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
