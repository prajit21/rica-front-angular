import { Component, inject } from '@angular/core';

import { Fact } from './fact/fact';
import { Introduction } from './introduction/introduction';
import { Team } from './team/team';
import { Animation } from '../../../../shared/components/comman/animation/animation';
import { Blog } from '../../../../shared/components/comman/blog/blog';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Testimonial } from '../../../../shared/components/comman/testimonial/testimonial';
import { Title } from '../../../../shared/components/comman/title/title';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { otherPages } from '../../../../shared/interface/pages';
import { HotelService } from '../../../../shared/services/hotel.service';
import { PagesService } from '../../../../shared/services/pages.service';

@Component({
  selector: 'app-about-us-1',
  templateUrl: './about-us-1.html',
  styleUrl: './about-us-1.scss',
  imports: [
    Header,
    Breadcrumbs,
    Animation,
    Title,
    Introduction,
    Team,
    Testimonial,
    Fact,
    Blog,
    Footer,
    Layout,
  ],
})
export class AboutUs1 {
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

      this.aboutDetail.about.forEach(items => {
        this.aboutTestimonial = items.testimonial;
        this.aboutBlog = items.blog;
      });
    });

    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if (Array.isArray(this.aboutTestimonial)) {
        this.testimonial = this.testimonial?.filter(item => {
          return this.aboutTestimonial.includes(item.id);
        });
      }
    });

    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.aboutBlog)) {
        this.blog = this.blog?.filter(item => {
          return this.aboutBlog.includes(item.id);
        });
      }
    });
  }
}
