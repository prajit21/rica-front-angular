import { Component, inject, Input, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { images } from '../../../../../shared/interface/tour-modern';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.html',
  styleUrls: ['./image-modal.scss'],
})
export class ImageModal {
  private modal = inject(NgbModal);

  @Input() data: string = '';
  readonly images = input<images[]>();

  closeModal() {
    this.modal.dismissAll();
  }

  selectedImage(i: string) {
    this.data = i;
  }
}
