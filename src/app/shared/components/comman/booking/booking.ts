import { Component, inject, input } from '@angular/core';

import {
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from '@ng-bootstrap/ng-bootstrap';

import { BookingCreditCard } from './booking-credit-card/booking-credit-card';
import { BookingDebitCard } from './booking-debit-card/booking-debit-card';
import { BookingMyWallet } from './booking-my-wallet/booking-my-wallet';
import { BookingNetBanking } from './booking-net-banking/booking-net-banking';
import { hotelDetails } from '../../../../shared/interface/hotel';
import { HotelService } from '../../../../shared/services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.html',
  styleUrls: ['./booking.scss'],
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionToggle,
    NgbAccordionButton,
    NgbCollapse,
    NgbAccordionCollapse,
    NgbAccordionBody,
    BookingDebitCard,
    BookingCreditCard,
    BookingNetBanking,
    BookingMyWallet,
  ],
})
export class Booking {
  private hotelService = inject(HotelService);

  readonly flight = input<boolean>(false);
  readonly title = input<boolean>(false);

  public hotelDetails: hotelDetails;

  constructor() {
    this.hotelService.hotelDetails().subscribe(response => {
      this.hotelDetails = response;
    });
  }
}
