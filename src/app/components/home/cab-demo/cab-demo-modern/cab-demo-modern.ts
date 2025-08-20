import { Component, inject } from '@angular/core';

import { CabModernApplication } from './cab-modern-application/cab-modern-application';
import { CabModernBlog } from './cab-modern-blog/cab-modern-blog';
import { CabModernBookingDeals } from './cab-modern-booking-deals/cab-modern-booking-deals';
import { CabModernBrand } from './cab-modern-brand/cab-modern-brand';
import { CabModernCall } from './cab-modern-call/cab-modern-call';
import { CabModernCategory } from './cab-modern-category/cab-modern-category';
import { CabModernHomeSection } from './cab-modern-home-section/cab-modern-home-section';
import { CabModernService } from './cab-modern-service/cab-modern-service';
import { CabModernTicketSection } from './cab-modern-ticket-section/cab-modern-ticket-section';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { cabDetails, cabModern } from '../../../../shared/interface/cab-modern';
import { CabService } from '../../../../shared/services/cab.service';

@Component({
  selector: 'app-cab-demo-modern',
  templateUrl: './cab-demo-modern.html',
  styleUrls: ['./cab-demo-modern.scss'],
  imports: [
    Header,
    CabModernHomeSection,
    CabModernCategory,
    CabModernTicketSection,
    CabModernService,
    CabModernBookingDeals,
    CabModernCall,
    CabModernApplication,
    CabModernBlog,
    CabModernBrand,
    Footer,
    Layout,
  ],
})
export class CabDemoModern {
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
