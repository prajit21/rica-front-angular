import { Component } from '@angular/core';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-restaurant-book-table',
  templateUrl: './restaurant-book-table.html',
  styleUrl: './restaurant-book-table.scss',
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule],
})
export class RestaurantBookTable {}
