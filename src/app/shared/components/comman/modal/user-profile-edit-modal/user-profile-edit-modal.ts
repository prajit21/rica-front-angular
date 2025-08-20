import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile-edit-modal',
  templateUrl: './user-profile-edit-modal.html',
  styleUrl: './user-profile-edit-modal.scss',
  imports: [FormsModule, NgbInputDatepicker],
})
export class UserProfileEditModal {
  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
