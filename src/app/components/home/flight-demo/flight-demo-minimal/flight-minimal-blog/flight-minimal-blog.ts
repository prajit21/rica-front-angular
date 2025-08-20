import { Component, inject, input } from '@angular/core';

import { Blog } from '../../../../../shared/components/comman/blog/blog';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-flight-minimal-blog',
  templateUrl: './flight-minimal-blog.html',
  styleUrls: ['./flight-minimal-blog.scss'],
  imports: [Blog],
})
export class FlightMinimalBlog {
  private hotelService = inject(HotelService);

  readonly id = input<number[]>();

  public blog: blogs[];

  constructor() {
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.id())) {
        this.blog = this.blog?.filter(item => {
          return this.id()?.includes(item.id);
        });
      }
    });
  }
}
