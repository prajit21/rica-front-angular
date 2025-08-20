import { Component, inject } from '@angular/core';

import { Blog } from '../../../../shared/components/comman/blog/blog';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../shared/services/hotel.service';

@Component({
  selector: 'app-element-blog',
  templateUrl: './element-blog.html',
  styleUrl: './element-blog.scss',
  imports: [Header, Breadcrumbs, Blog, Footer, Layout],
})
export class ElementBlog {
  private hotelService = inject(HotelService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'blog';
  public parent = 'elements';
  public child = 'blog';

  public hotelBlogId = [1, 2, 3, 4];
  public cabBlogId = [8, 9, 10];
  public flightBlogId = [11, 12, 13, 14];

  public blog: blogs[];
  public hotelBlog: blogs[];
  public cabBlog: blogs[];
  public flightBlog: blogs[];

  constructor() {
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      // Hotel Blog
      if (Array.isArray(this.hotelBlogId)) {
        this.hotelBlog = this.blog?.filter(item => {
          return this.hotelBlogId.includes(item.id);
        });
      }

      // Cab Blog
      if (Array.isArray(this.cabBlogId)) {
        this.cabBlog = this.blog?.filter(item => {
          return this.cabBlogId.includes(item.id);
        });
      }

      // Flight Blog
      if (Array.isArray(this.flightBlogId)) {
        this.flightBlog = this.blog?.filter(item => {
          return this.flightBlogId.includes(item.id);
        });
      }
    });
  }
}
