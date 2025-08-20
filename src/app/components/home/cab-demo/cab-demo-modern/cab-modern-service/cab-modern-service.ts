import { Component, inject, input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Services } from '../../../../../shared/components/comman/services/services';
import { Title } from '../../../../../shared/components/comman/title/title';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-cab-modern-service',
    templateUrl: './cab-modern-service.html',
    styleUrls: ['./cab-modern-service.scss'],
    imports: [Animation, Title, Services]
})
export class CabModernService {

  private hotelService = inject(HotelService);


  readonly id = input<number[]>();

  public services: service[];

  constructor(){
     this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.id())) {
       this.services = this.services?.filter((item) => {
         return this.id()?.includes(item.id)
       })
     }
    })
  }
}
