import { Component, inject, Input } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { hotelGallery } from '../../../../../shared/interface/hotel';

@Component({
  selector: 'app-hotel-gallery',
  templateUrl: './hotel-gallery.html',
  styleUrls: ['./hotel-gallery.scss'],
  imports: [CarouselModule, GallerizeDirective],
})
export class HotelGallery {
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  @Input() hotelGallery: hotelGallery[];

  public images: hotelGallery[];
  public items: GalleryItem[];

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

  public galleryOptions = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openLightBox() {
    this.images = [];
    this.hotelGallery.forEach(image => {
      this.images.push(image);
    });

    this.items = this.images.map(item => new ImageItem({ src: item.image, thumb: item.image }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    this.lightbox.open();
    lightboxRef.load(this.items);
  }
}
