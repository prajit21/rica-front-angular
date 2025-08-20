import { Component, input } from '@angular/core';
import { ricaBenefit } from '../../../../../shared/interface/hotel-minimal';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
    selector: 'app-hotel-minimal-rica-benifit',
    templateUrl: './hotel-minimal-rica-benifit.html',
    styleUrls: ['./hotel-minimal-rica-benifit.scss'],
    imports: [SvgIconComponent]
})
export class HotelMinimalRicaBenifit {

  readonly benefits = input<ricaBenefit[]>();
  readonly sticky = input<boolean>();

  public description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus quae sit tenetur veniam veritatis voluptate voluptatem!";

}
