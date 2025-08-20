import { SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

import { hotelGallery } from '../../../../../shared/interface/hotel';

@Component({
  selector: 'app-hotel-image-box',
  templateUrl: './hotel-image-box.html',
  styleUrls: ['./hotel-image-box.scss'],
  imports: [SlicePipe],
})
export class HotelImageBox {
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  readonly hotelGallery = input<hotelGallery[]>();

  public images: hotelGallery[];
  public items: GalleryItem[];

  openLightBox() {
    this.images = [];
    this.hotelGallery()?.forEach(image => {
      if (image.id <= 5) {
        this.images.push(image);
      }
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
