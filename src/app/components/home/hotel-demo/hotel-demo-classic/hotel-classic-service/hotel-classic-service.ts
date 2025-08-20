import { Component, inject, input } from '@angular/core';

import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { Services } from '../../../../../shared/components/comman/services/services';
import { Title } from '../../../../../shared/components/comman/title/title';
import { service } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-classic-service',
  templateUrl: './hotel-classic-service.html',
  styleUrls: ['./hotel-classic-service.scss'],
  imports: [Animation, Title, Services],
})
export class HotelClassicService {
  private hotelService = inject(HotelService);

  readonly id = input<number[]>([]);

  public services: service[];

  ngOnInit() {
    this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.id())) {
        this.services = this.services?.filter(item => {
          return this.id().includes(item.id);
        });
      }
    });
  }
}
