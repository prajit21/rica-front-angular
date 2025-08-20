import { Component, inject, input } from '@angular/core';

import { Gallery, GalleryComponent, GalleryItem, ImageItem } from 'ng-gallery';

import { hotelGallery } from '../../../../../shared/interface/hotel';

@Component({
  selector: 'app-hotel-thumbnail-images',
  templateUrl: './hotel-thumbnail-images.html',
  styleUrls: ['./hotel-thumbnail-images.scss'],
  imports: [GalleryComponent],
})
export class HotelThumbnailImages {
  public gallery = inject(Gallery);

  readonly hotelGallery = input<hotelGallery[]>();

  public images: hotelGallery[];
  public items: GalleryItem[];

  ngOnInit() {
    this.images = [];
    this.hotelGallery()?.forEach(image => {
      this.images.push(image);
    });

    this.items = this.images.map(item => new ImageItem({ src: item.image, thumb: item.image }));
  }
}
