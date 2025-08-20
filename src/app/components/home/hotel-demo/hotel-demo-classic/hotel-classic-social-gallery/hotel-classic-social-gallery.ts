import { Component, Input, input } from '@angular/core';
import { socialGallery } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-classic-social-gallery',
    templateUrl: './hotel-classic-social-gallery.html',
    styleUrls: ['./hotel-classic-social-gallery.scss'],
    imports: [CarouselModule, RouterLink]
})
export class HotelClassicSocialGallery {

  readonly id = input<number[]>();
  @Input() socialGallery: socialGallery[];
  readonly title = input<boolean>(false);
  readonly sectionClass = input<boolean>(true);

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      },
      1367: {
        items: 6
      }
    },
  };
}
