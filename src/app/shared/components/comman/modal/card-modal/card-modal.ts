import { Component, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-card-modal',
    templateUrl: './card-modal.html',
    styleUrl: './card-modal.scss',
    imports: [FormsModule]
})
export class CardModal {

  readonly modalType = input<string>();

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }

}
