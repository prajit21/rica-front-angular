import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-tour-booking-failed',
  templateUrl: './tour-booking-failed.html',
  styleUrl: './tour-booking-failed.scss',
  imports: [Header, Footer, Layout],
})
export class TourBookingFailed {}
