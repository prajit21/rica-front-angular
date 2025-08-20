import { Component, inject } from '@angular/core';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { otherPages } from '../../../../shared/interface/pages';
import { HotelService } from '../../../../shared/services/hotel.service';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Blog } from '../../../../shared/components/comman/blog/blog';
import { Team } from '../about-us-1/team/team';
import { Testimonial } from '../../../../shared/components/comman/testimonial/testimonial';
import { AboutService } from './about-service/about-service';
import { Introduction } from '../about-us-1/introduction/introduction';
import { Title } from '../../../../shared/components/comman/title/title';
import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Header } from '../../../../shared/components/header/header';


@Component({
    selector: 'app-about-us-2',
    templateUrl: './about-us-2.html',
    styleUrl: './about-us-2.scss',
    imports: [Header, Animation, Title, Introduction, AboutService, Testimonial, Team, Blog, Footer, Layout]
})
export class AboutUs2 {

  private pageService = inject(PagesService); 
  private hotelService = inject(HotelService);
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'about us';
  public parent = 'Home';
  public child = 'about us';

  public aboutDetail: otherPages;
  public testimonial: testimonial[];
  public aboutTestimonial: number[];
  public aboutBlog: number[];
  public blog: blogs[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.aboutDetail = response.otherPages;

       this.aboutDetail.about.forEach((items) => {
        this.aboutTestimonial = items.testimonial;
        this.aboutBlog = items.blog;
      })
    })

    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if (Array.isArray(this.aboutTestimonial)) {
       this.testimonial = this.testimonial?.filter((item) => {
         return this.aboutTestimonial.includes(item.id)
       })
     }
    })

    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.aboutBlog)) {
       this.blog = this.blog?.filter((item) => {
         return this.aboutBlog.includes(item.id)
       })
     }
    });
  }
}
