import { Component, input } from '@angular/core';
import { SubscribeTwo } from './subscribe-two/subscribe-two';
import { SubscribeOne } from './subscribe-one/subscribe-one';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.html',
    styleUrls: ['./subscribe.scss'],
    imports: [SubscribeOne, SubscribeTwo]
})
export class Subscribe {

  readonly type = input<string>();

}
