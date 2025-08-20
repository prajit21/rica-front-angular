import { Component, inject, input } from '@angular/core';

import { Testimonial } from '../../../../../shared/components/comman/testimonial/testimonial';
import { Title } from '../../../../../shared/components/comman/title/title';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-tour-modern-testimonial',
  templateUrl: './tour-modern-testimonial.html',
  styleUrls: ['./tour-modern-testimonial.scss'],
  imports: [Title, Testimonial],
})
export class TourModernTestimonial {
  private hotelService = inject(HotelService);

  readonly id = input<number[]>();

  public description = 'our tourist is satisfied and give best feedback';

  public testimonial: testimonial[];

  constructor() {
    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if (Array.isArray(this.id())) {
        this.testimonial = this.testimonial?.filter(item => {
          return this.id()?.includes(item.id);
        });
      }
    });
  }
}
