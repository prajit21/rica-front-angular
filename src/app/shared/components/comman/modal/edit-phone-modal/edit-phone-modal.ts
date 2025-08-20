import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-phone-modal',
  templateUrl: './edit-phone-modal.html',
  styleUrl: './edit-phone-modal.scss',
  imports: [FormsModule],
})
export class EditPhoneModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
