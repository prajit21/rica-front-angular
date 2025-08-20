import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-password-modal',
  templateUrl: './edit-password-modal.html',
  styleUrl: './edit-password-modal.scss',
  imports: [FormsModule],
})
export class EditPasswordModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
