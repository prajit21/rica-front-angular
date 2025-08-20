import { Component, inject } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { cabDetails, cabModern } from '../../../../shared/interface/cab-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { CabModernTicketSection } from '../../../home/cab-demo/cab-demo-modern/cab-modern-ticket-section/cab-modern-ticket-section';
import { HotelClassicVideo } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-video/hotel-classic-video';
import { TourModernVideo } from '../../../home/tour-demo/tour-demo-modern/tour-modern-video/tour-modern-video';

@Component({
  selector: 'app-element-video',
  templateUrl: './element-video.html',
  styleUrl: './element-video.scss',
  imports: [Header, CabModernTicketSection, HotelClassicVideo, TourModernVideo, Footer, Layout],
})
export class ElementVideo {
  private cabService = inject(CabService);

  public cabModern: cabModern;
  public cab: cabDetails[];

  constructor() {
    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    });

    this.cabService.cabDetails().subscribe(response => {
      this.cab = response.cab;
    });
  }
}
