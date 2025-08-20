import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { cabDetails } from '../../../../../app/shared/interface/cab-modern';
import { specialRoom } from '../../../../../app/shared/interface/hotel-classic';
import { VideoModal } from '../modal/video-modal/video-modal';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-ticket-section',
    templateUrl: './ticket-section.html',
    styleUrls: ['./ticket-section.scss'],
    imports: [CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class TicketSection {

  private modal = inject(NgbModal);
  public hotelService = inject(HotelService);


  @Input() ticketSection: specialRoom[];
  @Input() cabDetails: cabDetails[];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openModal(){
    this.modal.open(VideoModal, { size: 'lg', centered: true })
  }
}
