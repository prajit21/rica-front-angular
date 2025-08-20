import { Component, inject } from '@angular/core';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { tourModern } from '../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../shared/services/hotel.service';
import { TourService } from '../../../../shared/services/tour.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { TourModernGallery } from '../../../home/tour-demo/tour-demo-modern/tour-modern-gallery/tour-modern-gallery';
import { HotelClassicGallery } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-gallery/hotel-classic-gallery';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-element-gallery',
    templateUrl: './element-gallery.html',
    styleUrl: './element-gallery.scss',
    imports: [Header, Breadcrumbs, HotelClassicGallery, TourModernGallery, Footer, Layout]
})
export class ElementGallery {

  private hotelService = inject(HotelService);
  private tourService = inject(TourService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'gallery';
  public parent = 'elements';
  public child = 'gallery';

  public homeSectionData: homeSectionModel;
  public tourModern: tourModern;

  constructor(){
    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });

    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    })
  }
}
