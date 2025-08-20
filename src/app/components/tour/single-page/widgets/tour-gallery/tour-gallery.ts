import { Component, inject, input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { tourGallery } from '../../../../../shared/interface/tour';

@Component({
    selector: 'app-tour-gallery',
    templateUrl: './tour-gallery.html',
    styleUrl: './tour-gallery.scss',
    
})
export class TourGallery {

  public galleryImage = inject(Gallery); 
  public lightbox = inject(Lightbox); 

  readonly gallery = input<tourGallery[]>();

  public images: tourGallery[];
  public items: GalleryItem[];

  openLightBox(){
    this.images = [];
    this.gallery()?.forEach((image) => {
        this.images.push(image)
    })

    this.items = this.images.map((item) => new ImageItem({ src: item.url, thumb: item.url }));

    const lightboxRef = this.galleryImage.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    this.lightbox.open()
    lightboxRef.load(this.items)
  }

}
