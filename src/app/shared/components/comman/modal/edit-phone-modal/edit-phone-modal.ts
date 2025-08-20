import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-phone-modal',
    templateUrl: './edit-phone-modal.html',
    styleUrl: './edit-phone-modal.scss',
    imports: [FormsModule]
})
export class EditPhoneModal {

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}
