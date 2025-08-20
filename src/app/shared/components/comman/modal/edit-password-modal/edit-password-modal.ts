import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-password-modal',
    templateUrl: './edit-password-modal.html',
    styleUrl: './edit-password-modal.scss',
    imports: [FormsModule]
})
export class EditPasswordModal {

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}

