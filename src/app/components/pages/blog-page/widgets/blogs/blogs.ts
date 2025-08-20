import { NgClass, SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';

import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogPagination } from '../blog-pagination/blog-pagination';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
  imports: [NgClass, NgxMasonryModule, BlogPagination, SlicePipe],
})
export class Blogs {
  private hotelService = inject(HotelService);

  readonly blogDetails = input<number[]>();
  readonly gridType = input<string>();
  readonly masonry = input<boolean>(false);
  readonly mix = input<boolean>(false);

  public blog: blogs[];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
    resize: true,
  };

  constructor() {
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.blogDetails())) {
        this.blog = this.blog?.filter(item => {
          return this.blogDetails()?.includes(item.id);
        });
      }
    });
  }
}
