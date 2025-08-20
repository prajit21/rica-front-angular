import { Routes } from '@angular/router';
import { CabBookingFailed } from './cab-booking-failed/cab-booking-failed';
import { CabBookingPayment } from './cab-booking-payment/cab-booking-payment';
import { CabBookingSuccess } from './cab-booking-success/cab-booking-success';
import { CabBooking } from './cab-booking/cab-booking';

export default [
  {
    path: 'booking',
    component: CabBooking
  },
  {
    path: 'booking-payment',
    component: CabBookingPayment
  },
  {
    path: 'booking-success',
    component: CabBookingSuccess
  },
  {
    path: 'booking-failed',
    component: CabBookingFailed
  }
] as Routes;
