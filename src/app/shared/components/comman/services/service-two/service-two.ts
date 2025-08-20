import { Component, input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service-two',
    templateUrl: './service-two.html',
    styleUrls: ['./service-two.scss'],
    imports: [RouterLink]
})
export class ServiceTwo {

  readonly service = input<service>();

}
