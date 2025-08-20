import { Component, Input, input } from '@angular/core';
import { tours } from '../../../../../../shared/interface/tour';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-tour-list-images',
    templateUrl: './tour-list-images.html',
    styleUrls: ['./tour-list-images.scss'],
    imports: [CarouselModule, RouterLink]
})
export class TourListImages {

  readonly images = input<tours>();
  readonly imageSlider = input<boolean>();
  readonly thumbnailImages = input<boolean>();
  @Input() thumbnailVideo: boolean;

  public selectedImage: string;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
  }

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
