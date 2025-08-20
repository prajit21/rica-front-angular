import { Routes } from '@angular/router';
import { HotelBookingFailed } from './hotel-booking-failed/hotel-booking-failed';
import { HotelBookingSuccess } from './hotel-booking-success/hotel-booking-success';
import { HotelBooking } from './hotel-booking/hotel-booking';
import { HotelCheckout } from './hotel-checkout/hotel-checkout';

export default [
  {
    path: 'hotel-booking',
    component: HotelBooking
  },
  {
    path: 'checkout',
    component: HotelCheckout
  },
  {
    path: 'hotel-booking-failed',
    component: HotelBookingFailed
  },
  {
    path: 'hotel-booking-success',
    component: HotelBookingSuccess
  }
] as Routes;
