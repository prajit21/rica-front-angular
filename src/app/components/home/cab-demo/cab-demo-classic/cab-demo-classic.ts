import { Component, inject } from '@angular/core';

import { CabClassicBanner } from './cab-classic-banner/cab-classic-banner';
import { CabClassicBooking } from './cab-classic-booking/cab-classic-booking';
import { CabClassicBrand } from './cab-classic-brand/cab-classic-brand';
import { CabClassicCarType } from './cab-classic-car-type/cab-classic-car-type';
import { CabClassicHomeSection } from './cab-classic-home-section/cab-classic-home-section';
import { CabClassicRicaBenefits } from './cab-classic-rica-benefits/cab-classic-rica-benefits';
import { CabClassicTestimonial } from './cab-classic-testimonial/cab-classic-testimonial';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { cabClassic } from '../../../../shared/interface/cab-classic';
import { CabService } from '../../../../shared/services/cab.service';

@Component({
  selector: 'app-cab-demo-classic',
  templateUrl: './cab-demo-classic.html',
  styleUrls: ['./cab-demo-classic.scss'],
  imports: [
    Header,
    CabClassicHomeSection,
    CabClassicRicaBenefits,
    CabClassicBooking,
    CabClassicCarType,
    CabClassicBanner,
    CabClassicTestimonial,
    CabClassicBrand,
    Footer,
    Layout,
  ],
})
export class CabDemoClassic {
  private cabService = inject(CabService);

  public cabClassic: cabClassic;

  constructor() {
    this.cabService.cabClassic().subscribe(response => {
      this.cabClassic = response;
    });
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2', '239, 63, 62');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
