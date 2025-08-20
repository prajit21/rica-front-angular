import { Component, inject, input } from '@angular/core';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Testimonial } from '../../../../../shared/components/comman/testimonial/testimonial';
import { Title } from '../../../../../shared/components/comman/title/title';
import { Animation } from '../../../../../shared/components/comman/animation/animation';

@Component({
    selector: 'app-restaurant-classic-testimonial',
    templateUrl: './restaurant-classic-testimonial.html',
    styleUrls: ['./restaurant-classic-testimonial.scss'],
    imports: [Animation, Title, Testimonial]
})
export class RestaurantClassicTestimonial {

  private hotelService = inject(HotelService);

  readonly id = input<number[]>();

  public testimonial: testimonial[];

  constructor(){
    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;
    })
  }

  ngOnChanges(){
    if (Array.isArray(this.id())) {
     this.testimonial = this.testimonial?.filter((item) => {
       return this.id()?.includes(item.id)
     })
   }
  }
}
