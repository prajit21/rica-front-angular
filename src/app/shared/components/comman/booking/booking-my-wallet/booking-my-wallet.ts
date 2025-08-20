import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { walletDetails } from '../../../data/data/booking';

@Component({
  selector: 'app-booking-my-wallet',
  templateUrl: './booking-my-wallet.html',
  styleUrls: ['./booking-my-wallet.scss'],
  imports: [FormsModule],
})
export class BookingMyWallet {
  public walletDetails = walletDetails;
}
