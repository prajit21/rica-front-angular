import { Component, input } from '@angular/core';

import { brand } from '../../../../../shared/interface/cab-modern';
import { CommanBrand } from '../../widgets/comman-brand/comman-brand';

@Component({
  selector: 'app-cab-modern-brand',
  templateUrl: './cab-modern-brand.html',
  styleUrls: ['./cab-modern-brand.scss'],
  imports: [CommanBrand],
})
export class CabModernBrand {
  readonly brand = input<brand[]>();
  readonly title = input<boolean>(false);
  readonly sectionClass = input<boolean>(true);

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      396: {
        items: 3,
      },
      548: {
        items: 4,
      },
      1100: {
        items: 5,
      },
    },
  };
}
