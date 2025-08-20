import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantAddressModal } from '../../../../shared/components/comman/modal/restaurant-address-modal/restaurant-address-modal';
import { RestaurantAddress } from '../../../../shared/components/data/data/restaurant';
import { restaurants } from '../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { RestaurantCartItems } from '../../single-page/widgets/restaurant-cart-items/restaurant-cart-items';
import { Booking } from '../../../../shared/components/comman/booking/booking';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-restaurant-checkout',
    templateUrl: './restaurant-checkout.html',
    styleUrl: './restaurant-checkout.scss',
    imports: [Header, Booking, RestaurantCartItems, Footer, Layout]
})
export class RestaurantCheckout {

  private restaurantService = inject(RestaurantService);
  private modal = inject(NgbModal);

  
  public restaurantDetails: restaurants;
  public RestaurantAddress = RestaurantAddress;

  constructor() {
    this.restaurantService.restaurantDetails().subscribe(response => {
      this.restaurantDetails = response;
    })
  }

  openModal(item: number, type: string){
    if(type == 'edit'){
    this.RestaurantAddress.forEach((data) => {
      if(data.id == item){
          data.active = true;
        }else{
          data.active = false;
        }
      })
    }
    const modal = this.modal.open(RestaurantAddressModal, { size : 'm', centered : true, windowClass: 'edit-profile-modal restaurant-modal'})
    modal.componentInstance.modalType = type;
  }

}
