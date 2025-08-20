import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { cabDetails, cabModern } from '../../../../shared/interface/cab-modern';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CabModernCall } from '../../../home/cab-demo/cab-demo-modern/cab-modern-call/cab-modern-call';
import { HotelClassicAboutHotel } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-about-hotel/hotel-classic-about-hotel';
import { RestaurantClassicOurRestaurant } from '../../../home/restaurant-demo/restaurant-demo-classic/restaurant-classic-our-restaurant/restaurant-classic-our-restaurant';

@Component({
  selector: 'app-element-about',
  templateUrl: './element-about.html',
  styleUrl: './element-about.scss',
  imports: [
    Header,
    Breadcrumbs,
    CabModernCall,
    HotelClassicAboutHotel,
    RestaurantClassicOurRestaurant,
    Footer,
    Layout,
  ],
})
export class ElementAbout {
  private cabService = inject(CabService);
  private hotelService = inject(HotelService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'about';
  public parent = 'elements';
  public child = 'about';

  public cabModern: cabModern;
  public cab: cabDetails[];
  public homeSectionData: homeSectionModel;

  constructor() {
    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    });

    this.cabService.cabDetails().subscribe(response => {
      this.cab = response.cab;
    });

    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });
  }
}
