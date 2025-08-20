import { Component, inject } from '@angular/core';
import { flightModern } from '../../../../shared/interface/flight-modern';
import { categoryModel } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { FlightModernSubscribe } from './flight-modern-subscribe/flight-modern-subscribe';
import { FlightModernBlog } from './flight-modern-blog/flight-modern-blog';
import { FlightModernTopDestination } from './flight-modern-top-destination/flight-modern-top-destination';
import { FlightModernAirlineTicket } from './flight-modern-airline-ticket/flight-modern-airline-ticket';
import { FlightModernBanner } from './flight-modern-banner/flight-modern-banner';
import { FlightModernCategory } from './flight-modern-category/flight-modern-category';
import { FlightModernAirlinesDetail } from './flight-modern-airlines-detail/flight-modern-airlines-detail';
import { FlightModernDestination } from './flight-modern-destination/flight-modern-destination';
import { FlightModernHomeSection } from './flight-modern-home-section/flight-modern-home-section';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-flight-demo-modern',
    templateUrl: './flight-demo-modern.html',
    styleUrls: ['./flight-demo-modern.scss'],
    imports: [Header, FlightModernHomeSection, FlightModernDestination, FlightModernAirlinesDetail, FlightModernCategory, FlightModernBanner, FlightModernAirlineTicket, FlightModernTopDestination, FlightModernBlog, FlightModernSubscribe, Footer, Layout]
})
export class FlightDemoModern {

  public tourService = inject(TourService);
  private flightService = inject(FlightService);
  
  public flightModern: flightModern;
  public category: categoryModel;

  constructor() {
    this.flightService.flightModern().subscribe(response => {
      return this.flightModern = response;
    })

    this.tourService.category().subscribe(response => {
      return this.category = response;
    })
  }
}
