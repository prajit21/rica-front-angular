import { Component, input } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

import { Title } from '../../../../../shared/components/comman/title/title';
import { ricaBenefit } from '../../../../../shared/interface/hotel-minimal';

@Component({
  selector: 'app-cab-classic-rica-benefits',
  templateUrl: './cab-classic-rica-benefits.html',
  styleUrls: ['./cab-classic-rica-benefits.scss'],
  imports: [Title, SvgIconComponent],
})
export class CabClassicRicaBenefits {
  readonly benefits = input<ricaBenefit[]>();

  public description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus quae sit tenetur veniam veritatis voluptate voluptatem!';
}
