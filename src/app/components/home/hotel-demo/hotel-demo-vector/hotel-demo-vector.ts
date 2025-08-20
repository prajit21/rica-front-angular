import { Component, inject } from '@angular/core';

import { HotelVectorBlog } from './hotel-vector-blog/hotel-vector-blog';
import { HotelVectorBooking } from './hotel-vector-booking/hotel-vector-booking';
import { HotelVectorHomeSection } from './hotel-vector-home-section/hotel-vector-home-section';
import { HotelVectorPopularDestination } from './hotel-vector-popular-destination/hotel-vector-popular-destination';
import { HotelVectorSubscribe } from './hotel-vector-subscribe/hotel-vector-subscribe';
import { HotelVectorTopOffers } from './hotel-vector-top-offers/hotel-vector-top-offers';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { hotelVector } from '../../../../shared/interface/hotel-vector';
import { HotelService } from '../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-demo-vector',
  templateUrl: './hotel-demo-vector.html',
  styleUrls: ['./hotel-demo-vector.scss'],
  imports: [
    Header,
    HotelVectorHomeSection,
    HotelVectorTopOffers,
    HotelVectorPopularDestination,
    HotelVectorBooking,
    HotelVectorBlog,
    HotelVectorSubscribe,
    Footer,
    Layout,
  ],
})
export class HotelDemoVector {
  private hotelService = inject(HotelService);

  public hotelVector: hotelVector;

  constructor() {
    this.hotelService.hotelVector().subscribe(response => {
      this.hotelVector = response;
    });
  }
}
