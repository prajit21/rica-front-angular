import { Component, inject } from '@angular/core';

import { TourVectorBanner } from './tour-vector-banner/tour-vector-banner';
import { TourVectorBlog } from './tour-vector-blog/tour-vector-blog';
import { TourVectorBooking } from './tour-vector-booking/tour-vector-booking';
import { TourVectorExploreThemes } from './tour-vector-explore-themes/tour-vector-explore-themes';
import { TourVectorHomeSection } from './tour-vector-home-section/tour-vector-home-section';
import { TourVectorPopularDestination } from './tour-vector-popular-destination/tour-vector-popular-destination';
import { TourVectorSubscribe } from './tour-vector-subscribe/tour-vector-subscribe';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { tourVector } from '../../../../shared/interface/tour-vector';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-tour-demo-vector',
  templateUrl: './tour-demo-vector.html',
  styleUrls: ['./tour-demo-vector.scss'],
  imports: [
    Header,
    TourVectorHomeSection,
    TourVectorExploreThemes,
    TourVectorBooking,
    TourVectorPopularDestination,
    TourVectorBanner,
    TourVectorBlog,
    TourVectorSubscribe,
    Footer,
    Layout,
  ],
})
export class TourDemoVector {
  public tourService = inject(TourService);

  public tourVector: tourVector;

  constructor() {
    this.tourService.tourVector().subscribe(response => {
      this.tourVector = response;
    });
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '127, 180, 212');
    document.documentElement.style.setProperty('--theme-color2', '0, 162, 247');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
