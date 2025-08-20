import { Component, Input } from '@angular/core';
import { hotelGallery } from '../../../../../shared/interface/hotel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-image-slider',
    templateUrl: './hotel-image-slider.html',
    styleUrls: ['./hotel-image-slider.scss'],
    imports: [CarouselModule]
})
export class HotelImageSlider {

  @Input() hotelGallery: hotelGallery[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      924: {
        items: 1.5
      },
      1367: {
        items: 2.5
      }
    },
  }
}
