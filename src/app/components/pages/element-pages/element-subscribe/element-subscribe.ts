import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { FlightModernSubscribe } from '../../../home/flight-demo/flight-demo-modern/flight-modern-subscribe/flight-modern-subscribe';
import { TourModernSubscribe } from '../../../home/tour-demo/tour-demo-modern/tour-modern-subscribe/tour-modern-subscribe';
import { HotelClassicSubscribe } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-subscribe/hotel-classic-subscribe';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-element-subscribe',
    templateUrl: './element-subscribe.html',
    styleUrl: './element-subscribe.scss',
    imports: [Header, HotelClassicSubscribe, TourModernSubscribe, FlightModernSubscribe, Footer, Layout]
})
export class ElementSubscribe {
  
  constructor(){}
  
}
