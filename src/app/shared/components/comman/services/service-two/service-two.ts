import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { service } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.html',
  styleUrls: ['./service-two.scss'],
  imports: [RouterLink],
})
export class ServiceTwo {
  readonly service = input<service>();
}
