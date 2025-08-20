import { Component, inject, input } from '@angular/core';

import { Services } from '../../../../../shared/components/comman/services/services';
import { Title } from '../../../../../shared/components/comman/title/title';
import { service } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-tour-modern-service',
  templateUrl: './tour-modern-service.html',
  styleUrls: ['./tour-modern-service.scss'],
  imports: [Title, Services],
})
export class TourModernService {
  private hotelService = inject(HotelService);

  readonly id = input<number[]>();

  public description = 'Trips, experiences, and places. All in one service.';

  public services: service[];

  constructor() {
    this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.id())) {
        this.services = this.services?.filter(item => {
          return this.id()?.includes(item.id);
        });
      }
    });
  }
}
