import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { TourBookingDetails } from '../widgets/tour-booking-details/tour-booking-details';
import { Booking } from '../../../../shared/components/comman/booking/booking';
import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-checkout',
    templateUrl: './tour-checkout.html',
    styleUrl: './tour-checkout.scss',
    imports: [Header, Breadcrumbs, Animation, Booking, TourBookingDetails, Footer, Layout]
})
export class TourCheckout {
  
  public bg_image = 'assets/images/tour/spain4.jpg';
  public title = 'checkout';
  public parent = 'Home';
  public subParent = "review"
  public child = 'checkout';
  
}
