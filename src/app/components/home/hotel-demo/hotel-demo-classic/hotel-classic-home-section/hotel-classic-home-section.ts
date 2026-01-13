import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { homeSection } from '../../../../../shared/interface/hotel-classic';

@Component({
  selector: 'app-hotel-classic-home-section',
  templateUrl: './hotel-classic-home-section.html',
  styleUrls: ['./hotel-classic-home-section.scss'],
  imports: [CarouselModule, RouterLink, SearchBox],
})
export class HotelClassicHomeSection {
  readonly homeSection = input<homeSection[]>();

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
