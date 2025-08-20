import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { restaurants } from '../../../../../../shared/components/data/data/filter/restaurant';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CurrencySymbolPipe } from '../../../../../pipe/currency.pipe';

@Component({
    selector: 'app-restaurant-map-filer',
    templateUrl: './restaurant-map-filer.html',
    styleUrl: './restaurant-map-filer.scss',
    imports: [NgbRating, CurrencySymbolPipe]
})
export class RestaurantMapFiler {

  public hotelService = inject(HotelService);
  private config = inject(NgbRatingConfig);
  
  public restaurants = restaurants;

  constructor() {
		this.config.max = 5;
		this.config.readonly = true;
	}

}
