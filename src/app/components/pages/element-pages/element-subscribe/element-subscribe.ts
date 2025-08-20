import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightModernSubscribe } from '../../../home/flight-demo/flight-demo-modern/flight-modern-subscribe/flight-modern-subscribe';
import { HotelClassicSubscribe } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-subscribe/hotel-classic-subscribe';
import { TourModernSubscribe } from '../../../home/tour-demo/tour-demo-modern/tour-modern-subscribe/tour-modern-subscribe';

@Component({
  selector: 'app-element-subscribe',
  templateUrl: './element-subscribe.html',
  styleUrl: './element-subscribe.scss',
  imports: [
    Header,
    HotelClassicSubscribe,
    TourModernSubscribe,
    FlightModernSubscribe,
    Footer,
    Layout,
  ],
})
export class ElementSubscribe {
  constructor() {}
}
