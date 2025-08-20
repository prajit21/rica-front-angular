import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-enquire-modal',
    templateUrl: './enquire-modal.html',
    styleUrl: './enquire-modal.scss',
    imports: [FormsModule]
})
export class EnquireModal {

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }
}
