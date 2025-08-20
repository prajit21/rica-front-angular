import { Component, inject } from '@angular/core';
import { hotelVector } from '../../../../shared/interface/hotel-vector';
import { HotelService } from '../../../../shared/services/hotel.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { HotelVectorSubscribe } from '../../hotel-demo/hotel-demo-vector/hotel-vector-subscribe/hotel-vector-subscribe';
import { HotelVectorBlog } from '../../hotel-demo/hotel-demo-vector/hotel-vector-blog/hotel-vector-blog';
import { HotelVectorBooking } from '../../hotel-demo/hotel-demo-vector/hotel-vector-booking/hotel-vector-booking';
import { HotelVectorPopularDestination } from '../../hotel-demo/hotel-demo-vector/hotel-vector-popular-destination/hotel-vector-popular-destination';
import { HotelVectorTopOffers } from '../../hotel-demo/hotel-demo-vector/hotel-vector-top-offers/hotel-vector-top-offers';
import { MixMinimalHomeSection } from './mix-minimal-home-section/mix-minimal-home-section';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-mix-demo-minimal',
    templateUrl: './mix-demo-minimal.html',
    styleUrls: ['./mix-demo-minimal.scss'],
    imports: [Header, MixMinimalHomeSection, HotelVectorTopOffers, HotelVectorPopularDestination, HotelVectorBooking, HotelVectorBlog, HotelVectorSubscribe, Footer, Layout]
})
export class MixDemoMinimal {

  private hotelService = inject(HotelService);
  
  public searchBoxType: string = 'basic';

  public hotelVector: hotelVector;

  constructor() {
    this.hotelService.hotelVector().subscribe(response => {
      this.hotelVector = response;
    })
  }

  getValue(value: string){
    this.searchBoxType = value;
  }
}
