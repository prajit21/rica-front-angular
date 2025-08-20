import { Component, inject, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

import { images } from '../../../../../shared/interface/tour-modern';
import { ImageModal } from '../../modal/image-modal/image-modal';

@Component({
  selector: 'app-gallery-two',
  templateUrl: './gallery-two.html',
  styleUrls: ['./gallery-two.scss'],
})
export class GalleryTwo {
  private modal = inject(NgbModal);
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  readonly images = input<images[]>();

  ngOnInit() {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  open(image: images) {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open();
    lightboxRef.load([new ImageItem({ src: image.url, thumb: image.url })]);
  }

  openModal(img: images) {
    const modalRef = this.modal.open(ImageModal, { size: 'lg', centered: true });
    modalRef.componentInstance.data = img.url;
    modalRef.componentInstance.images = this.images();
  }
}
