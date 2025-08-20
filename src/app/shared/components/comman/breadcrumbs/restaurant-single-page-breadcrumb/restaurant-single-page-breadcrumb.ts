import { Component, inject } from '@angular/core';

import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
  selector: 'app-restaurant-single-page-breadcrumb',
  templateUrl: './restaurant-single-page-breadcrumb.html',
  styleUrl: './restaurant-single-page-breadcrumb.scss',
  imports: [CurrencySymbolPipe],
})
export class RestaurantSinglePageBreadcrumb {
  public hotelService = inject(HotelService);
}
