import { Component, inject, input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Blog } from '../../../../../shared/components/comman/blog/blog';
import { Title } from '../../../../../shared/components/comman/title/title';

@Component({
    selector: 'app-flight-modern-blog',
    templateUrl: './flight-modern-blog.html',
    styleUrls: ['./flight-modern-blog.scss'],
    imports: [Title, Blog]
})
export class FlightModernBlog {

  private hotelService = inject(HotelService);

  readonly blogs = input<number[]>();

  public description = 'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard.......';

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
