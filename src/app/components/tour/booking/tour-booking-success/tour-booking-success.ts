import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-tour-booking-success',
    templateUrl: './tour-booking-success.html',
    styleUrl: './tour-booking-success.scss',
    imports: [Header, Footer, Layout]
})
export class TourBookingSuccess {
  
  
}
