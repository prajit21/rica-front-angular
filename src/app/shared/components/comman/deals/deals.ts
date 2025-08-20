import { Component, input } from '@angular/core';

import { DealsOne } from './deals-one/deals-one';
import { deal } from '../../../../shared/interface/tour-trending';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.html',
  styleUrls: ['./deals.scss'],
  imports: [DealsOne],
})
export class Deals {
  readonly type = input<string>();
  readonly deals = input<deal[]>();
  readonly text = input<boolean>(false);
}
