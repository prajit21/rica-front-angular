import { Component, inject, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { GallerizeDirective, Lightbox } from 'ng-gallery/lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { cabGallery } from '../../../../../shared/interface/cab';

@Component({
    selector: 'app-cab-gallery',
    templateUrl: './cab-gallery.html',
    styleUrl: './cab-gallery.scss',
    imports: [CarouselModule, GallerizeDirective]
})
export class CabGallery {

  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);


  @Input() cabGallery: cabGallery[];

  public images: cabGallery[];
  public items: GalleryItem[];

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1
      }
    }
  }

  openLightBox(){
    this.images = [];
    this.cabGallery.forEach((image) => {
        this.images.push(image)
    })

    this.items = this.images.map((item) => new ImageItem({ src: item.image, thumb: item.image }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    this.lightbox.open()
    lightboxRef.load(this.items)
  }
}
