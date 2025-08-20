import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-flight-booking-success',
  templateUrl: './flight-booking-success.html',
  styleUrl: './flight-booking-success.scss',
  imports: [Header, Footer, Layout],
})
export class FlightBookingSuccess {
  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2', '66, 145, 184');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
