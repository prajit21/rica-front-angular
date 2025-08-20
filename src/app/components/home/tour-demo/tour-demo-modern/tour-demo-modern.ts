import { Component, inject } from '@angular/core';

import { TourModernApp } from './tour-modern-app/tour-modern-app';
import { TourModernAwesomePackage } from './tour-modern-awesome-package/tour-modern-awesome-package';
import { TourModernBanner } from './tour-modern-banner/tour-modern-banner';
import { TourModernCategory } from './tour-modern-category/tour-modern-category';
import { TourModernGallery } from './tour-modern-gallery/tour-modern-gallery';
import { TourModernHomeSection } from './tour-modern-home-section/tour-modern-home-section';
import { TourModernService } from './tour-modern-service/tour-modern-service';
import { TourModernSubscribe } from './tour-modern-subscribe/tour-modern-subscribe';
import { TourModernTestimonial } from './tour-modern-testimonial/tour-modern-testimonial';
import { TourModernVideo } from './tour-modern-video/tour-modern-video';
import { SearchBox } from '../../../../shared/components/comman/search-box/search-box';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { category, tourModern } from '../../../../shared/interface/tour-modern';
import { TourService } from '../../../../shared/services/tour.service';

@Component({
  selector: 'app-tour-demo-modern',
  templateUrl: './tour-demo-modern.html',
  styleUrls: ['./tour-demo-modern.scss'],
  imports: [
    Header,
    TourModernHomeSection,
    SearchBox,
    TourModernCategory,
    TourModernVideo,
    TourModernAwesomePackage,
    TourModernBanner,
    TourModernTestimonial,
    TourModernGallery,
    TourModernService,
    TourModernApp,
    TourModernSubscribe,
    Footer,
    Layout,
  ],
})
export class TourDemoModern {
  private tourService = inject(TourService);

  public tourModern: tourModern;
  public category: category[];

  constructor() {
    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    });

    this.tourService.category().subscribe(response => {
      this.category = response.category;
    });
  }
}
