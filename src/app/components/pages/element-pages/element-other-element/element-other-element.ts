import { Component, inject } from '@angular/core';
import { cabModern } from '../../../../shared/interface/cab-modern';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { CabModernBrand } from '../../../home/cab-demo/cab-demo-modern/cab-modern-brand/cab-modern-brand';
import { HotelClassicSocialGallery } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-social-gallery/hotel-classic-social-gallery';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-element-other-element',
    templateUrl: './element-other-element.html',
    styleUrl: './element-other-element.scss',
    imports: [Header, Breadcrumbs, HotelClassicSocialGallery, CabModernBrand, Footer, Layout]
})
export class ElementOtherElement {

  private hotelService = inject(HotelService);
  private cabService = inject(CabService);
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'other element';
  public parent = 'elements';
  public child = 'other element';

  public homeSectionData: homeSectionModel;
  public cabModern: cabModern;

  constructor(){
    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });

    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    })
  }
}
