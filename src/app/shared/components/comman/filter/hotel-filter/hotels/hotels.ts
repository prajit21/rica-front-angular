import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { hotels } from '../../../../../../shared/components/data/data/filter/hotel';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CurrencySymbolPipe } from '../../../../../pipe/currency.pipe';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.html',
    styleUrls: ['./hotels.scss'],
    imports: [NgStyle, NgbRating, CurrencySymbolPipe]
})
export class Hotels {

  public hotelService = inject(HotelService);
  private config = inject(NgbRatingConfig);


  public hotels = hotels;
  public isOpenHotels: boolean = true;

  constructor(){
    this.config.max = 5;
		this.config.readonly = true;
  }

  openHotels(){
    this.isOpenHotels =! this.isOpenHotels;
  }
}
