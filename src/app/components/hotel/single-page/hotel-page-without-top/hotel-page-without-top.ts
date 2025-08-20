import { Component, inject } from '@angular/core';

import { HotelTitleSection } from './hotel-title-section/hotel-title-section';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { hotelDetails } from '../../../../shared/interface/hotel';
import { HotelService } from '../../../../shared/services/hotel.service';
import { HotelAbout } from '../widgets/hotel-about/hotel-about';
import { HotelFacility } from '../widgets/hotel-facility/hotel-facility';
import { HotelGallery } from '../widgets/hotel-gallery/hotel-gallery';
import { HotelLocation } from '../widgets/hotel-location/hotel-location';
import { HotelPolicy } from '../widgets/hotel-policy/hotel-policy';
import { HotelReview } from '../widgets/hotel-review/hotel-review';
import { HotelRooms } from '../widgets/hotel-rooms/hotel-rooms';
import { HotelSinglePageFilter } from '../widgets/hotel-single-page-filter/hotel-single-page-filter';
import { HotelSinglePageModal } from '../widgets/hotel-single-page-modal/hotel-single-page-modal';
import { HotelTabSlider } from '../widgets/hotel-tab-slider/hotel-tab-slider';
import { SinglePageHotels } from '../widgets/single-page-hotels/single-page-hotels';

@Component({
  selector: 'app-hotel-page-without-top',
  templateUrl: './hotel-page-without-top.html',
  styleUrls: ['./hotel-page-without-top.scss'],
  imports: [
    Header,
    HotelTitleSection,
    HotelGallery,
    HotelTabSlider,
    HotelAbout,
    HotelRooms,
    HotelFacility,
    HotelLocation,
    HotelReview,
    HotelPolicy,
    SinglePageHotels,
    HotelSinglePageFilter,
    HotelSinglePageModal,
    Footer,
    Layout,
  ],
})
export class HotelPageWithoutTop {
  private hotelService = inject(HotelService);

  public hotelDetails: hotelDetails;
  public activeTab = 'about';

  constructor() {
    this.hotelService.hotelDetails().subscribe(response => {
      this.hotelDetails = response;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
