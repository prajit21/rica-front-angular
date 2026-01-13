import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { cabDetails } from '../../../../../app/shared/interface/cab-modern';
import { specialRoom } from '../../../../../app/shared/interface/hotel-classic';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../pipe/currency.pipe';
import { VideoModal } from '../modal/video-modal/video-modal';

@Component({
  selector: 'app-ticket-section',
  templateUrl: './ticket-section.html',
  styleUrls: ['./ticket-section.scss'],
  imports: [CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class TicketSection {
  private readonly modal = inject(NgbModal);
  readonly hotelService = inject(HotelService);

  readonly ticketSection = input<specialRoom[] | undefined>();
  readonly cabDetails = input<cabDetails[] | undefined>();

  readonly options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openModal(): void {
    this.modal.open(VideoModal, {
      size: 'lg',
      centered: true,
    });
  }
}
