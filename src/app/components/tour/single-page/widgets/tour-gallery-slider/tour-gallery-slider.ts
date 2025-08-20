import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { tours } from '../../../../../shared/interface/tour';
import { TourService } from '../../../../../shared/services/tour.service';

@Component({
  selector: 'app-tour-gallery-slider',
  templateUrl: './tour-gallery-slider.html',
  styleUrl: './tour-gallery-slider.scss',
  imports: [CarouselModule, RouterLink],
})
export class TourGallerySlider {
  public tourService = inject(TourService);

  public tourDetails: tours[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      999: {
        items: 3,
      },
      1199: {
        items: 3,
      },
    },
  };

  constructor() {
    this.tourService.tour().subscribe(response => {
      this.tourDetails = response.tour;
    });
  }
}
