import { Component, inject } from '@angular/core';
import { hotelMinimal, hotels } from '../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../shared/services/hotel.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { HotelMinimalRicaBenifit } from './hotel-minimal-rica-benifit/hotel-minimal-rica-benifit';
import { HotelMinimalBlog } from './hotel-minimal-blog/hotel-minimal-blog';
import { HotelMinimalApplication } from './hotel-minimal-application/hotel-minimal-application';
import { HotelMinimalTopDeals } from './hotel-minimal-top-deals/hotel-minimal-top-deals';
import { HotelMinimalTopCity } from './hotel-minimal-top-city/hotel-minimal-top-city';
import { HotelMinimalHomeSection } from './hotel-minimal-home-section/hotel-minimal-home-section';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-hotel-demo-minimal',
    templateUrl: './hotel-demo-minimal.html',
    styleUrls: ['./hotel-demo-minimal.scss'],
    imports: [Header, HotelMinimalHomeSection, HotelMinimalTopCity, HotelMinimalTopDeals, HotelMinimalApplication, HotelMinimalBlog, HotelMinimalRicaBenifit, Footer, Layout]
})
export class HotelDemoMinimal {

  private hotelService = inject(HotelService);
  
  public hotelMinimal: hotelMinimal;
  public hotels: hotels[];

  constructor(){
    this.hotelService.hotelMinimal().subscribe(response => {
      this.hotelMinimal = response;
    });

    this.hotelService.hotelRooms().subscribe(response => {
      this.hotels = response.hotel;
    });
  }
}
