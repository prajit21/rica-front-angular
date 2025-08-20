import { Component, input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';

@Component({
    selector: 'app-service-one',
    templateUrl: './service-one.html',
    styleUrls: ['./service-one.scss'],
    
})
export class ServiceOne {

  readonly service = input<service>();

}
