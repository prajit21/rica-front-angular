import { Component, input } from '@angular/core';
import { airlines } from '../../../../../shared/interface/flight-modern';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-flight-modern-airlines-detail',
    templateUrl: './flight-modern-airlines-detail.html',
    styleUrls: ['./flight-modern-airlines-detail.scss'],
    imports: [RouterLink]
})
export class FlightModernAirlinesDetail {

  readonly airlines = input<airlines[]>();

}
