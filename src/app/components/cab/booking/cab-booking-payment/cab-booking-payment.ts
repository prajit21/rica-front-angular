import { Component, inject } from '@angular/core';

import { Booking } from '../../../../shared/components/comman/booking/booking';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CabBookingSummary } from '../widgets/cab-booking-summary/cab-booking-summary';
import { CabPromoCode } from '../widgets/cab-promo-code/cab-promo-code';

@Component({
  selector: 'app-cab-booking-payment',
  templateUrl: './cab-booking-payment.html',
  styleUrl: './cab-booking-payment.scss',
  imports: [
    Header,
    Breadcrumbs,
    Booking,
    CabBookingSummary,
    CabPromoCode,
    Footer,
    Layout,
    CurrencySymbolPipe,
  ],
})
export class CabBookingPayment {
  public hotelService = inject(HotelService);

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab payment';
  public parent = 'Home';
  public child = 'cab payment';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2', '233, 179, 14');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
