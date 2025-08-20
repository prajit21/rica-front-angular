import { Component, HostListener, inject } from '@angular/core';
import { tourDetails } from '../../../../shared/interface/tour';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { TourSinglePageModal } from '../widgets/tour-single-page-modal/tour-single-page-modal';
import { TourSinglePageFilter } from '../widgets/tour-single-page-filter/tour-single-page-filter';
import { TourGallerySlider } from '../widgets/tour-gallery-slider/tour-gallery-slider';
import { TourPolicy } from '../widgets/tour-policy/tour-policy';
import { TourReview } from '../widgets/tour-review/tour-review';
import { TourLocation } from '../widgets/tour-location/tour-location';
import { TourAccommodation } from '../widgets/tour-accommodation/tour-accommodation';
import { TourGallery } from '../widgets/tour-gallery/tour-gallery';
import { TourItinerary } from '../widgets/tour-itinerary/tour-itinerary';
import { TourHighlight } from '../widgets/tour-highlight/tour-highlight';
import { TourTabs } from '../widgets/tour-tabs/tour-tabs';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-full-page-details',
    templateUrl: './tour-full-page-details.html',
    styleUrl: './tour-full-page-details.scss',
    imports: [Header, Breadcrumbs, TourTabs, TourHighlight, TourItinerary, TourGallery, TourAccommodation, TourLocation, TourReview, TourPolicy, TourGallerySlider, TourSinglePageFilter, TourSinglePageModal, Footer, Layout]
})
export class TourFullPageDetails {

  private tourService = inject(TourService); 
  
  public bg_image = 'assets/images/tour/spain4.jpg';
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
