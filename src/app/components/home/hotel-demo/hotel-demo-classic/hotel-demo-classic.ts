import { Component, inject } from '@angular/core';

import { HotelClassicAboutHotel } from './hotel-classic-about-hotel/hotel-classic-about-hotel';
import { HotelClassicGallery } from './hotel-classic-gallery/hotel-classic-gallery';
import { HotelClassicHomeSection } from './hotel-classic-home-section/hotel-classic-home-section';
import { HotelClassicService } from './hotel-classic-service/hotel-classic-service';
import { HotelClassicSocialGallery } from './hotel-classic-social-gallery/hotel-classic-social-gallery';
import { HotelClassicSpecialRooms } from './hotel-classic-special-rooms/hotel-classic-special-rooms';
import { HotelClassicSubscribe } from './hotel-classic-subscribe/hotel-classic-subscribe';
import { HotelClassicTestimonial } from './hotel-classic-testimonial/hotel-classic-testimonial';
import { HotelClassicTicketSection } from './hotel-classic-ticket-section/hotel-classic-ticket-section';
import { HotelClassicVideo } from './hotel-classic-video/hotel-classic-video';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { homeSectionModel, specialRoom } from '../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-demo-classic',
  templateUrl: './hotel-demo-classic.html',
  styleUrls: ['./hotel-demo-classic.scss'],
  imports: [
    Header,
    HotelClassicHomeSection,
    HotelClassicAboutHotel,
    HotelClassicTicketSection,
    HotelClassicGallery,
    HotelClassicSpecialRooms,
    HotelClassicVideo,
    HotelClassicService,
    HotelClassicSubscribe,
    HotelClassicTestimonial,
    HotelClassicSocialGallery,
    Footer,
    Layout,
  ],
})
export class HotelDemoClassic {
  private hotelService = inject(HotelService);

  public homeSectionData: homeSectionModel;
  public specialRooms: specialRoom[];

  ngOnInit() {
    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });

    this.hotelService.hotelRooms().subscribe(response => {
      this.specialRooms = response.hotelRooms;
    });
  }
}
