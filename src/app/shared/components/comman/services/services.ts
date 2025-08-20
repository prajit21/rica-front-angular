import { Component, input } from '@angular/core';
import { service } from '../../../../shared/interface/hotel-classic';
import { ServiceThree } from './service-three/service-three';
import { ServiceTwo } from './service-two/service-two';
import { ServiceOne } from './service-one/service-one';

@Component({
    selector: 'app-services',
    templateUrl: './services.html',
    styleUrls: ['./services.scss'],
    imports: [ServiceOne, ServiceTwo, ServiceThree]
})
export class Services {

  readonly type = input<string>();
  readonly service = input<service>();

}
