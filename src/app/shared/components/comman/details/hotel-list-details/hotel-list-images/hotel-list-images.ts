import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { hotels } from '../../../../../../shared/interface/hotel';

@Component({
  selector: 'app-hotel-list-images',
  templateUrl: './hotel-list-images.html',
  styleUrls: ['./hotel-list-images.scss'],
  imports: [CarouselModule, RouterLink],
})
export class HotelListImages {
  readonly images = input<hotels>();
  readonly imageSlider = input<boolean>();
  readonly thumbnailImages = input<boolean>();
  @Input() thumbnailVideo: boolean;

  public selectedImage: string;

  public options = {
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

  public thumbnailCarouselOptions = {
    items: 4,
    margin: 10,
    center: true,
    loop: false,
    nav: false,
    dots: false,
  };

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
