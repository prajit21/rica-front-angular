import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CardModal } from '../../../../../shared/components/comman/modal/card-modal/card-modal';
import { cards } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-user-dashboard-cards',
  templateUrl: './user-dashboard-cards.html',
  styleUrl: './user-dashboard-cards.scss',
  imports: [NgClass],
})
export class UserDashboardCards {
  private modal = inject(NgbModal);

  readonly card = input<cards[]>();

  openModal(value: string) {
    const modal = this.modal.open(CardModal, {
      size: 'm',
      centered: true,
      windowClass: 'edit-profile-modal',
    });
    modal.componentInstance.modalType = value;
  }
}
