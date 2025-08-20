import { Component } from '@angular/core';
import { flightPromoCode } from '../../../../../shared/components/data/data/filter/flight';

@Component({
    selector: 'app-flight-promo-code',
    templateUrl: './flight-promo-code.html',
    styleUrl: './flight-promo-code.scss',
})
export class FlightPromoCode {

  public flightPromoCode = flightPromoCode;

}
