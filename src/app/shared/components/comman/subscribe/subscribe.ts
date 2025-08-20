import { Component, input } from '@angular/core';

import { SubscribeOne } from './subscribe-one/subscribe-one';
import { SubscribeTwo } from './subscribe-two/subscribe-two';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.html',
  styleUrls: ['./subscribe.scss'],
  imports: [SubscribeOne, SubscribeTwo],
})
export class Subscribe {
  readonly type = input<string>();
}
