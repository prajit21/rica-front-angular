import { Component, input } from '@angular/core';

import { ServiceOne } from './service-one/service-one';
import { ServiceThree } from './service-three/service-three';
import { ServiceTwo } from './service-two/service-two';
import { service } from '../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
  imports: [ServiceOne, ServiceTwo, ServiceThree],
})
export class Services {
  readonly type = input<string>();
  readonly service = input<service>();
}
