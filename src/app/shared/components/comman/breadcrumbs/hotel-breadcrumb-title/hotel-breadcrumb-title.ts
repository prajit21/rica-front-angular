import { Component, inject } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hotel-breadcrumb-title',
    templateUrl: './hotel-breadcrumb-title.html',
    styleUrl: './hotel-breadcrumb-title.scss',
    imports: [RouterLink, CurrencySymbolPipe]
})
export class HotelBreadcrumbTitle {

  public hotelService = inject(HotelService);

}
