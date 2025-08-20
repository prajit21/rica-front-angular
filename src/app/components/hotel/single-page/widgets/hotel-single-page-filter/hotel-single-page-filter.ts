import { Component } from '@angular/core';

import { HotelSinglePageFilterBooking } from './hotel-single-page-filter-booking/hotel-single-page-filter-booking';
import { HotelSinglePageFilterContact } from './hotel-single-page-filter-contact/hotel-single-page-filter-contact';
import { HotelSinglePageFilterPrice } from './hotel-single-page-filter-price/hotel-single-page-filter-price';
import { HotelSinglePageFilterWeather } from './hotel-single-page-filter-weather/hotel-single-page-filter-weather';

@Component({
  selector: 'app-hotel-single-page-filter',
  templateUrl: './hotel-single-page-filter.html',
  styleUrls: ['./hotel-single-page-filter.scss'],
  imports: [
    HotelSinglePageFilterPrice,
    HotelSinglePageFilterBooking,
    HotelSinglePageFilterContact,
    HotelSinglePageFilterWeather,
  ],
})
export class HotelSinglePageFilter {}
