import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-hotel-booking-success',
    templateUrl: './hotel-booking-success.html',
    styleUrls: ['./hotel-booking-success.scss'],
    imports: [Header, Footer, Layout]
})
export class HotelBookingSuccess {
  
  constructor() {}
  
}
