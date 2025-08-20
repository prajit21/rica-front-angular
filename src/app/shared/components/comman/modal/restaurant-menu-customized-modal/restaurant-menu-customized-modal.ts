import { Component, inject, Input, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderItems } from '../../../../../shared/interface/restaurant';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-restaurant-menu-customized-modal',
    templateUrl: './restaurant-menu-customized-modal.html',
    styleUrl: './restaurant-menu-customized-modal.scss',
    imports: [FormsModule, CurrencySymbolPipe]
})
export class RestaurantMenuCustomizedModal {

  private modal = inject(NgbActiveModal);
  public hotelService = inject(HotelService);


  @Input() item: OrderItems;

  addToCart(){
    this.modal.close();
    this.item.active = true;
    this.item.itemsValue = 1;
  }

  closeModal(){
    this.modal.close();
  }
}
