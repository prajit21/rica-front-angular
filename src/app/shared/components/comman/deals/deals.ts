import { Component, input } from '@angular/core';
import { deal } from '../../../../shared/interface/tour-trending';
import { DealsOne } from './deals-one/deals-one';

@Component({
    selector: 'app-deals',
    templateUrl: './deals.html',
    styleUrls: ['./deals.scss'],
    imports: [DealsOne]
})
export class Deals {

  readonly type = input<string>();
  readonly deals = input<deal[]>();
  readonly text = input<boolean>(false);

}
