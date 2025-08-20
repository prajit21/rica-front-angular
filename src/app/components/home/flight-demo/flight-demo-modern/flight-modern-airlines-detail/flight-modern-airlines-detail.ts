import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { airlines } from '../../../../../shared/interface/flight-modern';

@Component({
  selector: 'app-flight-modern-airlines-detail',
  templateUrl: './flight-modern-airlines-detail.html',
  styleUrls: ['./flight-modern-airlines-detail.scss'],
  imports: [RouterLink],
})
export class FlightModernAirlinesDetail {
  readonly airlines = input<airlines[]>();
}
