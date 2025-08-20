import { Routes } from '@angular/router';
import { TourBookingFailed } from './tour-booking-failed/tour-booking-failed';
import { TourBookingSuccess } from './tour-booking-success/tour-booking-success';
import { TourBooking } from './tour-booking/tour-booking';
import { TourCheckout } from './tour-checkout/tour-checkout';

export default [
  {
    path: 'tour-booking',
    component: TourBooking
  },
  {
    path: 'checkout',
    component: TourCheckout
  },
  {
    path: 'tour-booking-failed',
    component: TourBookingFailed
  },
  {
    path: 'tour-booking-success',
    component: TourBookingSuccess
  }
] as Routes;
