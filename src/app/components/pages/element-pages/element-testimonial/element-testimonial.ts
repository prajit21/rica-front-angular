import { Component, inject } from '@angular/core';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../shared/services/hotel.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Testimonial } from '../../../../shared/components/comman/testimonial/testimonial';
import { Title } from '../../../../shared/components/comman/title/title';
import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-element-testimonial',
    templateUrl: './element-testimonial.html',
    styleUrl: './element-testimonial.scss',
    imports: [Header, Breadcrumbs, Animation, Title, Testimonial, Footer, Layout]
})
export class ElementTestimonial {

  private hotelService = inject(HotelService);
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'testimonial';
  public parent = 'elements';
  public child = 'testimonial';
  public description = "our tourist is satisfied and give best feedback";

  public testimonial: testimonial[];
  public hotelTestimonial: testimonial[];
  public tourTestimonial: testimonial[];

  public hotelTestimonialId = [1,2,3];
  public tourTestimonialId = [1,2]

  constructor(){
    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if(Array.isArray(this.hotelTestimonialId)) {
        this.hotelTestimonial = this.testimonial?.filter((item) => {
          return this.hotelTestimonialId.includes(item.id)
        })
      }

      if(Array.isArray(this.tourTestimonialId)) {
        this.tourTestimonial = this.testimonial?.filter((item) => {
          return this.tourTestimonialId.includes(item.id)
        })
      }
    })
  }
}
