import { Component, inject, input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Blog } from '../../../../../shared/components/comman/blog/blog';

@Component({
    selector: 'app-tour-vector-blog',
    templateUrl: './tour-vector-blog.html',
    styleUrls: ['./tour-vector-blog.scss'],
    imports: [Blog]
})
export class TourVectorBlog {

  private hotelService = inject(HotelService);

  readonly blogs = input<number[]>();

  public blog: blogs[];

  constructor(){
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.blogs())) {
        this.blog = this.blog?.filter((item) => {
          return this.blogs()?.includes(item.id)
        })
      }
    });
  }
}
