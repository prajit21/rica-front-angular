import { Component } from '@angular/core';

import { Booking } from '../../../../shared/components/comman/booking/booking';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightBookingBreadcrumb } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb';
import { FlightTravelAddons } from '../widgets/flight-travel-addons/flight-travel-addons';

@Component({
  selector: 'app-flight-booking-payment',
  templateUrl: './flight-booking-payment.html',
  styleUrl: './flight-booking-payment.scss',
  imports: [Header, FlightBookingBreadcrumb, Booking, FlightTravelAddons, Footer, Layout],
})
export class FlightBookingPayment {
  public bg_image = 'assets/images/flights/flight-breadcrumb2.jpg';
  public parent = 'review';
  public subParent = 'addons';
  public child = 'payment';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2', '66, 145, 184');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
