import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { tourDetails } from '../../../../shared/interface/tour';
import { TourService } from '../../../../shared/services/tour.service';
import { TourAccommodation } from '../widgets/tour-accommodation/tour-accommodation';
import { TourGallery } from '../widgets/tour-gallery/tour-gallery';
import { TourGallerySlider } from '../widgets/tour-gallery-slider/tour-gallery-slider';
import { TourHighlight } from '../widgets/tour-highlight/tour-highlight';
import { TourItinerary } from '../widgets/tour-itinerary/tour-itinerary';
import { TourLocation } from '../widgets/tour-location/tour-location';
import { TourPolicy } from '../widgets/tour-policy/tour-policy';
import { TourReview } from '../widgets/tour-review/tour-review';
import { TourSinglePageFilter } from '../widgets/tour-single-page-filter/tour-single-page-filter';
import { TourSinglePageModal } from '../widgets/tour-single-page-modal/tour-single-page-modal';
import { TourTabs } from '../widgets/tour-tabs/tour-tabs';

@Component({
  selector: 'app-tour-page-video',
  templateUrl: './tour-page-video.html',
  styleUrl: './tour-page-video.scss',
  imports: [
    Header,
    Breadcrumbs,
    TourTabs,
    TourHighlight,
    TourItinerary,
    TourGallery,
    TourAccommodation,
    TourLocation,
    TourReview,
    TourPolicy,
    TourGallerySlider,
    TourSinglePageFilter,
    TourSinglePageModal,
    Footer,
    Layout,
  ],
})
export class TourPageVideo {
  private tourService = inject(TourService);

  public bg_image = 'assets/images/tour/spain4.jpg';
  public title = 'splendid spain';
  public date = '11 dec, 2019';

  public tourDetail: tourDetails;

  public activeTab = 'highlight';

  constructor() {
    this.tourService.tourDetails().subscribe(response => {
      this.tourDetail = response;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
