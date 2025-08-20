import { Component } from '@angular/core';
import { netBankingDetails } from '../../../data/data/booking';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-booking-net-banking',
    templateUrl: './booking-net-banking.html',
    styleUrls: ['./booking-net-banking.scss'],
    imports: [FormsModule]
})
export class BookingNetBanking {

  public netBankingDetails = netBankingDetails;

}
