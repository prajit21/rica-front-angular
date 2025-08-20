import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AccountDeleteModal } from '../../../../../shared/components/comman/modal/account-delete-modal/account-delete-modal';

@Component({
  selector: 'app-user-dashboard-security',
  templateUrl: './user-dashboard-security.html',
  styleUrl: './user-dashboard-security.scss',
})
export class UserDashboardSecurity {
  private modal = inject(NgbModal);

  openModal() {
    this.modal.open(AccountDeleteModal, {
      size: 'm',
      centered: true,
      windowClass: 'edit-profile-modal',
    });
  }
}
