import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EnquireModal } from '../../../../../shared/components/comman/modal/enquire-modal/enquire-modal';

@Component({
  selector: 'app-hotel-single-page-modal',
  templateUrl: './hotel-single-page-modal.html',
  styleUrl: './hotel-single-page-modal.scss',
})
export class HotelSinglePageModal {
  private modal = inject(NgbModal);

  openEnquireModal() {
    this.modal.open(EnquireModal, { size: 'lg', centered: true });
  }
}
