import { Component, inject, input } from '@angular/core';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Testimonial } from '../../../../../shared/components/comman/testimonial/testimonial';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-cab-classic-testimonial',
    templateUrl: './cab-classic-testimonial.html',
    styleUrls: ['./cab-classic-testimonial.scss'],
    imports: [Title, Testimonial]
})
export class CabClassicTestimonial {

  private hotelService = inject(HotelService);


  readonly id = input<number[]>();

  public testimonial: testimonial[];

  constructor(){
    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if (Array.isArray(this.id())) {
       this.testimonial = this.testimonial?.filter((item) => {
         return this.id()?.includes(item.id)
       })
     }
    })
  }
}
