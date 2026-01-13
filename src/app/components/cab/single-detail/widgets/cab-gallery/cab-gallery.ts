import { Component, inject, input } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { GallerizeDirective, Lightbox } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { cabGallery } from '../../../../../shared/interface/cab';

@Component({
  selector: 'app-cab-gallery',
  templateUrl: './cab-gallery.html',
  styleUrl: './cab-gallery.scss',
  imports: [CarouselModule, GallerizeDirective],
})
export class CabGallery {
  readonly gallery = inject(Gallery);
  readonly lightbox = inject(Lightbox);

  readonly cabGallery = input<cabGallery[] | null>(null);

  items: GalleryItem[] = [];

  readonly options = {
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

  openLightBox(): void {
    const images = this.cabGallery();
    if (!images?.length) return;

    this.items = images.map(item => new ImageItem({ src: item.image, thumb: item.image }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
    this.lightbox.open();
  }
}
