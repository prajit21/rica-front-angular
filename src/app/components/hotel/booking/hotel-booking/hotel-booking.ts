import { Component } from '@angular/core';

import { Animation } from '../../../../shared/components/comman/animation/animation';
import { BookingForm } from '../../../../shared/components/comman/booking/booking-form/booking-form';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { HotelBookingDetails } from '../widgets/hotel-booking-details/hotel-booking-details';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.html',
  styleUrls: ['./hotel-booking.scss'],
  imports: [Header, Breadcrumbs, Animation, BookingForm, HotelBookingDetails, Footer, Layout],
})
export class HotelBooking {
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'review';
  public parent = 'Home';
  public subParent = 'hotels';
  public child = 'review';

  constructor() {}
}
