import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant-address-modal',
  templateUrl: './restaurant-address-modal.html',
  styleUrl: './restaurant-address-modal.scss',
  imports: [FormsModule],
})
export class RestaurantAddressModal {
  readonly modalType = input<string>();

  private modal = inject(NgbActiveModal);

  closeModal() {
    this.modal.close();
  }
}
