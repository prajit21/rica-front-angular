import { Component } from '@angular/core';
import { cabPromoCode } from '../../../../../shared/components/data/data/filter/cab';

@Component({
    selector: 'app-cab-promo-code',
    templateUrl: './cab-promo-code.html',
    styleUrl: './cab-promo-code.scss',
})
export class CabPromoCode {

  public cabPromoCode = cabPromoCode;

}
