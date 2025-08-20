import { Component, inject, input } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { cabDetail } from '../../../../../shared/interface/cab';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-cab-single-page-detail',
    templateUrl: './cab-single-page-detail.html',
    styleUrl: './cab-single-page-detail.scss',
    imports: [CurrencySymbolPipe]
})
export class CabSinglePageDetail {

  public hotelService = inject(HotelService);

  readonly cabDetails = input<cabDetail[]>();

}
