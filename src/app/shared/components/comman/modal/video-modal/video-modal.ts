import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.html',
  styleUrls: ['./video-modal.scss'],
})
export class VideoModal {
  private modal = inject(NgbModal);

  closeModal() {
    this.modal.dismissAll();
  }
}
