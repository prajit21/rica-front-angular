import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.html',
  styleUrls: ['./currency.scss'],
  imports: [FormsModule],
})
export class Currency {
  public currencies = [
    {
      name: 'Dollar',
      currency: 'USD',
      value: 'usd',
      symbol: '$',
      price: 1, // price of usd
    },
    {
      name: 'Euro',
      currency: 'EUR',
      value: 'eur',
      symbol: '€',
      price: 0.95, // price of euro
    },
    {
      name: 'Rupees',
      currency: 'INR',
      value: 'inr',
      symbol: '₹',
      price: 83.22, // price of inr
    },
    {
      name: 'Australian Dollar',
      currency: 'AUD',
      value: 'aud',
      symbol: 'A$',
      price: 0.018, // price of euro
    },
  ];

  private hotelService = inject(HotelService);

  getCurrency(event: Event) {
    if (event) {
      this.hotelService.currency = (event.target as HTMLInputElement).value;
      localStorage.setItem('currency', (event.target as HTMLInputElement).value);
    }
  }
}
