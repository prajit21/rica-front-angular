import { Component, inject, input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantMenuCustomizedModal } from '../../../../../../shared/components/comman/modal/restaurant-menu-customized-modal/restaurant-menu-customized-modal';
import { OrderItems, restaurantOrders } from '../../../../../../shared/interface/restaurant';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../../shared/pipe/currency.pipe';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-menu-items',
    templateUrl: './restaurant-menu-items.html',
    styleUrl: './restaurant-menu-items.scss',
    imports: [NgClass, CurrencySymbolPipe]
})
export class RestaurantMenuItems {

  private modal = inject(NgbModal); 
  public hotelService = inject(HotelService); 


  readonly restaurantOrders = input<restaurantOrders[]>();

  open(item: OrderItems){
    if(!item.customized){
      item.active = true;
      item.itemsValue = 1;
    }else{
      const modalRef = this.modal.open(RestaurantMenuCustomizedModal, { size: 's', centered: true, windowClass: 'customized'});
      modalRef.componentInstance.item = item;
    }
  }

  setValue(item: OrderItems, type: number){
      if(type == 1){
        item.itemsValue += 1;
      }else if(type == -1){
        if(item.itemsValue >= 1){
          item.itemsValue -= 1;
        }

        if(item.itemsValue == 0){
          item.active = false
        }
      }
  }
}
