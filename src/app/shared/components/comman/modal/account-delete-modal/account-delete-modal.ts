import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-delete-modal',
  templateUrl: './account-delete-modal.html',
  styleUrl: './account-delete-modal.scss',
  imports: [FormsModule],
})
export class AccountDeleteModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
