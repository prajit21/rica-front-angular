import { Component } from '@angular/core';

import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Booking } from '../../../../shared/components/comman/booking/booking';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { HotelBookingDetails } from '../widgets/hotel-booking-details/hotel-booking-details';

@Component({
  selector: 'app-hotel-checkout',
  templateUrl: './hotel-checkout.html',
  styleUrls: ['./hotel-checkout.scss'],
  imports: [Header, Breadcrumbs, Animation, Booking, HotelBookingDetails, Footer, Layout],
})
export class HotelCheckout {
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'checkout';
  public parent = 'Home';
  public subParent = 'review';
  public child = 'checkout';

  constructor() {}
}
