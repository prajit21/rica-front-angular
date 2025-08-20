import { Routes } from '@angular/router';

import { FlightBooking } from './flight-booking/flight-booking';
import { FlightBookingAddOns } from './flight-booking-add-ons/flight-booking-add-ons';
import { FlightBookingFailed } from './flight-booking-failed/flight-booking-failed';
import { FlightBookingPayment } from './flight-booking-payment/flight-booking-payment';
import { FlightBookingSuccess } from './flight-booking-success/flight-booking-success';

export default [
  {
    path: 'book-now',
    component: FlightBooking,
  },
  {
    path: 'book-add-ons',
    component: FlightBookingAddOns,
  },
  {
    path: 'booking-payment',
    component: FlightBookingPayment,
  },
  {
    path: 'flight-booking-success',
    component: FlightBookingSuccess,
  },
  {
    path: 'flight-booking-failed',
    component: FlightBookingFailed,
  },
] as Routes;
