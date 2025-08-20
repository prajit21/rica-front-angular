import { Component, HostListener, inject } from '@angular/core';
import { hotelDetails } from '../../../../shared/interface/hotel';
import { HotelService } from '../../../../shared/services/hotel.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { HotelSinglePageModal } from '../widgets/hotel-single-page-modal/hotel-single-page-modal';
import { SinglePageHotels } from '../widgets/single-page-hotels/single-page-hotels';
import { HotelPolicy } from '../widgets/hotel-policy/hotel-policy';
import { HotelReview } from '../widgets/hotel-review/hotel-review';
import { HotelLocation } from '../widgets/hotel-location/hotel-location';
import { HotelFacility } from '../widgets/hotel-facility/hotel-facility';
import { HotelRooms } from '../widgets/hotel-rooms/hotel-rooms';
import { HotelAbout } from '../widgets/hotel-about/hotel-about';
import { HotelTabSlider } from '../widgets/hotel-tab-slider/hotel-tab-slider';
import { HotelGallery } from '../widgets/hotel-gallery/hotel-gallery';
import { HotelSinglePageFilter } from '../widgets/hotel-single-page-filter/hotel-single-page-filter';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-hotel-page-left-sidebar',
    templateUrl: './hotel-page-left-sidebar.html',
    styleUrls: ['./hotel-page-left-sidebar.scss'],
    imports: [Header, Breadcrumbs, HotelSinglePageFilter, HotelGallery, HotelTabSlider, HotelAbout, HotelRooms, HotelFacility, HotelLocation, HotelReview, HotelPolicy, SinglePageHotels, HotelSinglePageModal, Footer, Layout]
})
export class HotelPageLeftSidebar {

  private hotelService = inject(HotelService);

   public hotelDetails: hotelDetails;
   public activeTab = 'about';
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
    this.hotelService.hotelDetails().subscribe(response => {
      this.hotelDetails = response;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
