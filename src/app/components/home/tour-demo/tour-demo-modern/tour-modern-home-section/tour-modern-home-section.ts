import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-tour-modern-home-section',
    templateUrl: './tour-modern-home-section.html',
    styleUrls: ['./tour-modern-home-section.scss'],
    imports: [CarouselModule]
})
export class TourModernHomeSection {

  public options = {
    loop: true,
    nav: false,
    dots: true,
    dotsData: true,
    responsive: {
      0: {
        items: 1
      }
    }
  }

  public sliderData = [
    {
      image: "assets/images/tour-bg.jpg",
      value: "01",
    },
    {
      image: "assets/images/tour-bg1.jpg",
      value: "02",
    },
    {
      image: "assets/images/tour-bg.jpg",
      value: "03",
    },
  ]
}
