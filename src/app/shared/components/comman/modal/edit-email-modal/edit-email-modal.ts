import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-email-modal',
    templateUrl: './edit-email-modal.html',
    styleUrl: './edit-email-modal.scss',
    imports: [FormsModule]
})
export class EditEmailModal {

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}
