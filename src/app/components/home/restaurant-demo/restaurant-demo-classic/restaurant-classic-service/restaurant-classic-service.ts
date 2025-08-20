import { Component, inject, input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Services } from '../../../../../shared/components/comman/services/services';
import { Title } from '../../../../../shared/components/comman/title/title';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-restaurant-classic-service',
    templateUrl: './restaurant-classic-service.html',
    styleUrls: ['./restaurant-classic-service.scss'],
    imports: [Animation, Title, Services]
})
export class RestaurantClassicService {

  private hotelService = inject(HotelService);

  readonly id = input<number[]>([]);

  public services: service[];

  constructor(){
     this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.id())) {
       this.services = this.services?.filter((item) => {
         return this.id().includes(item.id)
       })
     }
    })
  }
}
