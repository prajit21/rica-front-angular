import { Component, inject } from '@angular/core';
import { category, tourModern } from '../../../../shared/interface/tour-modern';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { TourModernSubscribe } from './tour-modern-subscribe/tour-modern-subscribe';
import { TourModernApp } from './tour-modern-app/tour-modern-app';
import { TourModernService } from './tour-modern-service/tour-modern-service';
import { TourModernGallery } from './tour-modern-gallery/tour-modern-gallery';
import { TourModernTestimonial } from './tour-modern-testimonial/tour-modern-testimonial';
import { TourModernBanner } from './tour-modern-banner/tour-modern-banner';
import { TourModernAwesomePackage } from './tour-modern-awesome-package/tour-modern-awesome-package';
import { TourModernVideo } from './tour-modern-video/tour-modern-video';
import { TourModernCategory } from './tour-modern-category/tour-modern-category';
import { SearchBox } from '../../../../shared/components/comman/search-box/search-box';
import { TourModernHomeSection } from './tour-modern-home-section/tour-modern-home-section';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-demo-modern',
    templateUrl: './tour-demo-modern.html',
    styleUrls: ['./tour-demo-modern.scss'],
    imports: [Header, TourModernHomeSection, SearchBox, TourModernCategory, TourModernVideo, TourModernAwesomePackage, TourModernBanner, TourModernTestimonial, TourModernGallery, TourModernService, TourModernApp, TourModernSubscribe, Footer, Layout]
})
export class TourDemoModern {

  private tourService = inject(TourService);
  
  public tourModern: tourModern;
  public category: category[];

  constructor() {
    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category;
    })
  }
}
