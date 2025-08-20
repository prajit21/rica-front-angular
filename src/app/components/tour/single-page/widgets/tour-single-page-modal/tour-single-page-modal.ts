import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnquireModal } from '../../../../../shared/components/comman/modal/enquire-modal/enquire-modal';
import { TourBookingModal } from '../../../../../shared/components/comman/modal/tour-booking-modal/tour-booking-modal';

@Component({
    selector: 'app-tour-single-page-modal',
    templateUrl: './tour-single-page-modal.html',
    styleUrl: './tour-single-page-modal.scss',
    
})
export class TourSinglePageModal {

  private modal = inject(NgbModal); 

  openBookingModal(){
    this.modal.open(TourBookingModal, { size: 'lg', centered: true })
  }
  openEnquireModal(){
    this.modal.open(EnquireModal, { size: 'lg', centered: true })
  }
}
