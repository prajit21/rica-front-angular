import { Component, inject } from '@angular/core';

import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Services } from '../../../../shared/components/comman/services/services';
import { Title } from '../../../../shared/components/comman/title/title';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { cabClassic } from '../../../../shared/interface/cab-classic';
import { service } from '../../../../shared/interface/hotel-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CabClassicRicaBenefits } from '../../../home/cab-demo/cab-demo-classic/cab-classic-rica-benefits/cab-classic-rica-benefits';

@Component({
  selector: 'app-element-service',
  templateUrl: './element-service.html',
  styleUrl: './element-service.scss',
  imports: [
    Header,
    Breadcrumbs,
    Animation,
    Title,
    Services,
    CabClassicRicaBenefits,
    Footer,
    Layout,
  ],
})
export class ElementService {
  private hotelService = inject(HotelService);
  private cabService = inject(CabService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'service';
  public parent = 'elements';
  public child = 'service';
  public description = 'Trips, experiences, and places. All in one service.';

  public services: service[];
  public cabServices: service[];
  public hotelServices: service[];
  public tourService: service[];
  public cabClassic: cabClassic;

  public cabServiceId = [10, 11, 12];
  public hotelServiceId = [1, 2, 3, 4, 5, 6];
  public tourServiceId = [7, 8, 9];

  constructor() {
    this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.cabServiceId)) {
        this.cabServices = this.services?.filter(item => {
          return this.cabServiceId.includes(item.id);
        });
      }

      if (Array.isArray(this.hotelServiceId)) {
        this.hotelServices = this.services?.filter(item => {
          return this.hotelServiceId.includes(item.id);
        });
      }

      if (Array.isArray(this.tourServiceId)) {
        this.tourService = this.services?.filter(item => {
          return this.tourServiceId.includes(item.id);
        });
      }
    });

    this.cabService.cabClassic().subscribe(response => {
      this.cabClassic = response;
    });
  }
}
