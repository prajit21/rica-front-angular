import { Component, inject } from '@angular/core';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { cabModern } from '../../../../shared/interface/cab-modern';
import { flightModern } from '../../../../shared/interface/flight-modern';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { mixClassic } from '../../../../shared/interface/mix-classic';
import { restaurantClassic } from '../../../../shared/interface/restaurant-classic';
import { category } from '../../../../shared/interface/tour-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { FlightService } from '../../../../shared/services/flight.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { MixService } from '../../../../shared/services/mix.service';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { TourService } from '../../../../shared/services/tour.service';
import { CabModernCall } from '../../cab-demo/cab-demo-modern/cab-modern-call/cab-modern-call';
import { FlightModernDestination } from '../../flight-demo/flight-demo-modern/flight-modern-destination/flight-modern-destination';
import { HotelClassicGallery } from '../../hotel-demo/hotel-demo-classic/hotel-classic-gallery/hotel-classic-gallery';
import { HotelClassicVideo } from '../../hotel-demo/hotel-demo-classic/hotel-classic-video/hotel-classic-video';
import { RestaurantClassicSpecialDishes } from '../../restaurant-demo/restaurant-demo-classic/restaurant-classic-special-dishes/restaurant-classic-special-dishes';
import { TourModernBanner } from '../../tour-demo/tour-demo-modern/tour-modern-banner/tour-modern-banner';
import { TourModernSubscribe } from '../../tour-demo/tour-demo-modern/tour-modern-subscribe/tour-modern-subscribe';
import { TourModernVideo } from '../../tour-demo/tour-demo-modern/tour-modern-video/tour-modern-video';
import { MixClassicCategory } from './mix-classic-category/mix-classic-category';
import { MixClassicHomeSection } from './mix-classic-home-section/mix-classic-home-section';
import { MixClassicHotel } from './mix-classic-hotel/mix-classic-hotel';

@Component({
    selector: 'app-mix-demo-classic',
    templateUrl: './mix-demo-classic.html',
    styleUrls: ['./mix-demo-classic.scss'],
    imports: [Header, MixClassicHomeSection, MixClassicCategory, MixClassicHotel, TourModernVideo, FlightModernDestination, TourModernBanner, CabModernCall, HotelClassicVideo, RestaurantClassicSpecialDishes, HotelClassicGallery, TourModernSubscribe, Footer, Layout]
})
export class MixDemoClassic {

  private mixService = inject(MixService);
  private flightService = inject(FlightService);
  private cabService = inject(CabService);
  private restaurantService = inject(RestaurantService);
  private tourService = inject(TourService);
  private hotelService = inject(HotelService);
  
  public mixClassic: mixClassic;
  public flightModern: flightModern;
  public cabModern: cabModern;
  public restaurantClassic: restaurantClassic;
  public category: category[];
  public homeSectionData: homeSectionModel;

  constructor() {
    this.mixService.mixClassic().subscribe(response => {
      if(response){
        this.mixClassic = response;
      }
    })

    this.flightService.flightModern().subscribe(response => {
      return this.flightModern = response;
    })

    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    })

    this.restaurantService.restaurantClassic().subscribe(response => {
      this.restaurantClassic = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category
    })

     this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });
  }
}
