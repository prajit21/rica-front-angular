import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-hotel-booking-failed',
  templateUrl: './hotel-booking-failed.html',
  styleUrls: ['./hotel-booking-failed.scss'],
  imports: [Header, Footer, Layout],
})
export class HotelBookingFailed {
  constructor() {}
}
