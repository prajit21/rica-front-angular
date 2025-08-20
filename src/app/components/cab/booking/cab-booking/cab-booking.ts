import { Component, inject } from '@angular/core';

import { BookingForm } from '../../../../shared/components/comman/booking/booking-form/booking-form';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CabBookingSummary } from '../widgets/cab-booking-summary/cab-booking-summary';
import { CabInformation } from '../widgets/cab-information/cab-information';
import { CabPromoCode } from '../widgets/cab-promo-code/cab-promo-code';

@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.html',
  styleUrl: './cab-booking.scss',
  imports: [
    Header,
    Breadcrumbs,
    BookingForm,
    CabInformation,
    CabBookingSummary,
    CabPromoCode,
    Footer,
    Layout,
    CurrencySymbolPipe,
  ],
})
export class CabBooking {
  public hotelService = inject(HotelService);

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab booking';
  public parent = 'Home';
  public child = 'cab booking';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2', '233, 179, 14');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
