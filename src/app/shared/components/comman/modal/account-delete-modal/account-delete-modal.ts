import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-account-delete-modal',
    templateUrl: './account-delete-modal.html',
    styleUrl: './account-delete-modal.scss',
    imports: [FormsModule]
})
export class AccountDeleteModal {

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}
