import { Component } from '@angular/core';
import { walletDetails } from '../../../data/data/booking';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-booking-my-wallet',
    templateUrl: './booking-my-wallet.html',
    styleUrls: ['./booking-my-wallet.scss'],
    imports: [FormsModule]
})
export class BookingMyWallet {

  public walletDetails = walletDetails;

}
