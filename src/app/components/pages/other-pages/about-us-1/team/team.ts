import { Component, Input, input } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { team } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
  imports: [CarouselModule],
})
export class Team {
  @Input() team: team[];
  readonly classic = input<boolean>(false);

  public options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      999: {
        items: 3,
      },
    },
  };
}
