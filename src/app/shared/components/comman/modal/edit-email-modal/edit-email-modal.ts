import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-email-modal',
  templateUrl: './edit-email-modal.html',
  styleUrl: './edit-email-modal.scss',
  imports: [FormsModule],
})
export class EditEmailModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
