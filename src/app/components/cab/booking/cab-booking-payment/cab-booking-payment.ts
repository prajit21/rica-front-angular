import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { CabPromoCode } from '../widgets/cab-promo-code/cab-promo-code';
import { CabBookingSummary } from '../widgets/cab-booking-summary/cab-booking-summary';
import { Booking } from '../../../../shared/components/comman/booking/booking';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-booking-payment',
    templateUrl: './cab-booking-payment.html',
    styleUrl: './cab-booking-payment.scss',
    imports: [Header, Breadcrumbs, Booking, CabBookingSummary, CabPromoCode, Footer, Layout, CurrencySymbolPipe]
})
export class CabBookingPayment {

  public hotelService = inject(HotelService);
  
  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab payment';
  public parent = 'Home';
  public child = 'cab payment';

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
