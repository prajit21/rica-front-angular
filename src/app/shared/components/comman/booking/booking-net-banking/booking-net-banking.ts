import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { netBankingDetails } from '../../../data/data/booking';

@Component({
  selector: 'app-booking-net-banking',
  templateUrl: './booking-net-banking.html',
  styleUrls: ['./booking-net-banking.scss'],
  imports: [FormsModule],
})
export class BookingNetBanking {
  public netBankingDetails = netBankingDetails;
}
