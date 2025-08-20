import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightBookingBreadcrumb } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb';
import { FlightBookingSummary } from '../widgets/flight-booking-summary/flight-booking-summary';
import { FlightInformation } from '../widgets/flight-information/flight-information';
import { FlightPromoCode } from '../widgets/flight-promo-code/flight-promo-code';
import { FlightTravelInsurance } from '../widgets/flight-travel-insurance/flight-travel-insurance';
import { FlightTravellerDetails } from '../widgets/flight-traveller-details/flight-traveller-details';
import { SelectedFlight } from '../widgets/selected-flight/selected-flight';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.html',
  styleUrl: './flight-booking.scss',
  imports: [
    Header,
    FlightBookingBreadcrumb,
    SelectedFlight,
    FlightInformation,
    FlightTravellerDetails,
    FlightTravelInsurance,
    FlightBookingSummary,
    FlightPromoCode,
    Footer,
    Layout,
  ],
})
export class FlightBooking {
  public bg_image = 'assets/images/flights/flight-breadcrumb2.jpg';
  public parent = 'Home';
  public subParent = 'flights';
  public child = 'review';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2', '66, 145, 184');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
