import { Component, Input, input } from '@angular/core';
import { team } from '../../../../../shared/interface/pages';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team',
    templateUrl: './team.html',
    styleUrl: './team.scss',
    imports: [CarouselModule]
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
        items: 1
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    }
  }
}
