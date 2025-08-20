import { Component, inject } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { tourDetails } from '../../../../shared/interface/tour';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { TourAccommodation } from '../widgets/tour-accommodation/tour-accommodation';
import { TourPolicy } from '../widgets/tour-policy/tour-policy';
import { TourReview } from '../widgets/tour-review/tour-review';
import { TourItinerary } from '../widgets/tour-itinerary/tour-itinerary';
import { TourHighlight } from '../widgets/tour-highlight/tour-highlight';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-full-page-slider',
    templateUrl: './tour-full-page-slider.html',
    styleUrl: './tour-full-page-slider.scss',
    imports: [Header, CarouselModule, TourHighlight, TourItinerary, TourReview, TourPolicy, TourAccommodation, Layout]
})
export class TourFullPageSlider {
  private tourService = inject(TourService); 

  public carouselData = [
    {
      id: 1,
      image: "assets/images/tour/slider/1.jpg",
      value: "highlight",
      class: "about"
    },
    {
      id: 2,
      image: "assets/images/tour/slider/2.jpg",
      value: "itinerary",
      class: "accordion"
    },
    {
      id: 3,
      image: "assets/images/tour/slider/3.jpg",
      value: "review",
      class: "review"
    },
    {
      id: 4,
      image: "assets/images/tour/slider/5.jpg",
      value: "policy",
      class: "about"
    },
    {
      id: 5,
      image: "assets/images/tour/slider/4.jpg",
      value: "accommodations",
      class: ""
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  activeIndex = 0;
  public options = {
    loop: true,
    nav: true,
    dots: true,
    dotsData: true,
    responsive: {
      0: {
        items: 1
      }
    }
  }

  public tourDetail: tourDetails;

  constructor() {
    this.tourService.tourDetails().subscribe(response => {
      this.tourDetail = response;
    })
  }

}
