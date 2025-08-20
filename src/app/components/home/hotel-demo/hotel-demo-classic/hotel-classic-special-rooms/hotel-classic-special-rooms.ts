import { Component, inject, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { Title } from '../../../../../shared/components/comman/title/title';
import { specialRoom } from '../../../../../shared/interface/hotel-classic';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-hotel-classic-special-rooms',
  templateUrl: './hotel-classic-special-rooms.html',
  styleUrls: ['./hotel-classic-special-rooms.scss'],
  imports: [Animation, Title, CarouselModule, RouterLink, CurrencySymbolPipe],
})
export class HotelClassicSpecialRooms {
  public hotelService = inject(HotelService);

  readonly id = input<number[]>();
  @Input() specialRooms: specialRoom[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      999: {
        items: 3,
      },
    },
  };

  ngOnChanges() {
    if (Array.isArray(this.id())) {
      this.specialRooms = this.specialRooms?.filter(item => {
        return this.id()?.includes(item.id);
      });
    }
  }
}
