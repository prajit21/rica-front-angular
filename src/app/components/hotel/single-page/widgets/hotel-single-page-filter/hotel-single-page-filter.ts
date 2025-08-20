import { Component } from '@angular/core';
import { HotelSinglePageFilterWeather } from './hotel-single-page-filter-weather/hotel-single-page-filter-weather';
import { HotelSinglePageFilterContact } from './hotel-single-page-filter-contact/hotel-single-page-filter-contact';
import { HotelSinglePageFilterBooking } from './hotel-single-page-filter-booking/hotel-single-page-filter-booking';
import { HotelSinglePageFilterPrice } from './hotel-single-page-filter-price/hotel-single-page-filter-price';

@Component({
    selector: 'app-hotel-single-page-filter',
    templateUrl: './hotel-single-page-filter.html',
    styleUrls: ['./hotel-single-page-filter.scss'],
    imports: [HotelSinglePageFilterPrice, HotelSinglePageFilterBooking, HotelSinglePageFilterContact, HotelSinglePageFilterWeather]
})
export class HotelSinglePageFilter {

}
