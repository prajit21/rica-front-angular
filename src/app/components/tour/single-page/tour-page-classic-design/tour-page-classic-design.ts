import { Component, HostListener, inject } from '@angular/core';
import { tourDetails } from '../../../../shared/interface/tour';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { TourSinglePageModal } from '../widgets/tour-single-page-modal/tour-single-page-modal';
import { TourGallerySlider } from '../widgets/tour-gallery-slider/tour-gallery-slider';
import { TourPageInquireSection } from '../widgets/tour-page-inquire-section/tour-page-inquire-section';
import { TourPageBookingSection } from '../widgets/tour-page-booking-section/tour-page-booking-section';
import { TourPolicy } from '../widgets/tour-policy/tour-policy';
import { TourReview } from '../widgets/tour-review/tour-review';
import { TourLocation } from '../widgets/tour-location/tour-location';
import { TourAccommodation } from '../widgets/tour-accommodation/tour-accommodation';
import { TourGallery } from '../widgets/tour-gallery/tour-gallery';
import { TourItinerary } from '../widgets/tour-itinerary/tour-itinerary';
import { TourHighlight } from '../widgets/tour-highlight/tour-highlight';
import { TourTabs } from '../widgets/tour-tabs/tour-tabs';
import { TourClassicGallery } from '../widgets/tour-classic-gallery/tour-classic-gallery';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-page-classic-design',
    templateUrl: './tour-page-classic-design.html',
    styleUrl: './tour-page-classic-design.scss',
    imports: [Header, Breadcrumbs, TourClassicGallery, TourTabs, TourHighlight, TourItinerary, TourGallery, TourAccommodation, TourLocation, TourReview, TourPolicy, TourPageBookingSection, TourPageInquireSection, TourGallerySlider, TourSinglePageModal, Footer, Layout]
})
export class TourPageClassicDesign {

  private tourService = inject(TourService); 
  
  public bg_image = 'assets/images/inner-pages/breadcrumb1.jpg';
  public title = 'splendid spain';
  public date = '11 dec, 2019';

  public tourDetail: tourDetails;

  public activeTab = 'highlight';
  public tabFixed: boolean = false;

   @HostListener('window: scroll', [])
   onWindowScroll(){
    let number = window.pageYOffset || 0;
    if (number > 600) {
      this.tabFixed = true;
    } else {
      this.tabFixed = false;
    }
   }

  constructor() {
    this.tourService.tourDetails().subscribe(response => {
      this.tourDetail = response;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
