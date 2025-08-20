import { Component, input } from '@angular/core';
import { brand } from '../../../../../shared/interface/cab-modern';
import { CommanBrand } from '../../widgets/comman-brand/comman-brand';

@Component({
    selector: 'app-cab-classic-brand',
    templateUrl: './cab-classic-brand.html',
    styleUrls: ['./cab-classic-brand.scss'],
    imports: [CommanBrand]
})
export class CabClassicBrand {

  readonly brand = input<brand[]>();

}
