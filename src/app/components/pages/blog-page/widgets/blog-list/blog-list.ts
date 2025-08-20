import { Component, inject, input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { SlicePipe } from '@angular/common';
import { BlogPagination } from '../blog-pagination/blog-pagination';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.html',
    styleUrl: './blog-list.scss',
    imports: [BlogPagination, SlicePipe]
})
export class BlogList {

  private hotelService = inject(HotelService);

  readonly blogDetails = input<number[]>();
  readonly creativeList = input<boolean>(false);
  readonly mixList = input<boolean>(false);

  public blog: blogs[];

  constructor(){
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.blogDetails())) {
        this.blog = this.blog?.filter((item) => {
          return this.blogDetails()?.includes(item.id)
        })
      }
    });
  }
}
