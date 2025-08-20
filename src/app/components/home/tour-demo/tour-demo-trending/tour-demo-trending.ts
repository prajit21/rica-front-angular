import { Component, inject } from '@angular/core';

import { TourTrendingExploreContinents } from './tour-trending-explore-continents/tour-trending-explore-continents';
import { TourTrendingExploreThemes } from './tour-trending-explore-themes/tour-trending-explore-themes';
import { TourTrendingHolidays } from './tour-trending-holidays/tour-trending-holidays';
import { TourTrendingHomeSection } from './tour-trending-home-section/tour-trending-home-section';
import { TourTrendingTestimonial } from './tour-trending-testimonial/tour-trending-testimonial';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { tourTrending } from '../../../../shared/interface/tour-trending';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-tour-demo-trending',
  templateUrl: './tour-demo-trending.html',
  styleUrls: ['./tour-demo-trending.scss'],
  imports: [
    Header,
    TourTrendingHomeSection,
    TourTrendingHolidays,
    TourTrendingExploreContinents,
    TourTrendingExploreThemes,
    TourTrendingTestimonial,
    Footer,
    Layout,
  ],
})
export class TourDemoTrending {
  private tourService = inject(TourService);

  public tourTrending: tourTrending;

  constructor() {
    this.tourService.tourTrending().subscribe(response => {
      this.tourTrending = response;
    });
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '127, 180, 212');
    document.documentElement.style.setProperty('--theme-color2', '239, 63, 62');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
