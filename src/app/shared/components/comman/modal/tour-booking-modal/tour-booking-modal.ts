import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../../../directives/outside.directive';

@Component({
    selector: 'app-tour-booking-modal',
    templateUrl: './tour-booking-modal.html',
    styleUrl: './tour-booking-modal.scss',
    imports: [ClickOutsideDirective, FormsModule]
})
export class TourBookingModal {

  public adults = 1;
  public child = 1;

  public isShow: boolean = false;

  private modal = inject(NgbActiveModal);

  closeModal(){
    this.modal.close();
  }

  open(){
    this.isShow =! this.isShow;
  }

  changeValue(value: string, number:number){
    if(number == -1){
      if(value == 'adult' && this.adults > 1){
        this.adults -= 1;
      }else if(value == 'children' && this.child > 1){
        this.child -= 1;
      }
    }else if(number == 1){
      if(value == 'adult'){
        this.adults += 1;
      }else if(value == 'children'){
        this.child += 1;
      }
    }
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
