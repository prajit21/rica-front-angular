import { Component, input } from '@angular/core';

import { BannerOne } from './banner-one/banner-one';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.html',
  styleUrls: ['./banner.scss'],
  imports: [BannerOne],
})
export class Banner {
  readonly type = input<string>();
}
