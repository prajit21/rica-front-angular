import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { TourBookingDetails } from '../widgets/tour-booking-details/tour-booking-details';
import { BookingForm } from '../../../../shared/components/comman/booking/booking-form/booking-form';
import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-booking',
    templateUrl: './tour-booking.html',
    styleUrl: './tour-booking.scss',
    imports: [Header, Breadcrumbs, Animation, BookingForm, TourBookingDetails, Footer, Layout]
})
export class TourBooking {
  
  public bg_image = 'assets/images/tour/spain4.jpg';
  public title = 'review';
  public parent = 'Home';
  public subParent = "holidays"
  public child = 'review';

  constructor() {}
  
}
