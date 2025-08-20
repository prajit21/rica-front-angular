import { Component, inject, input } from '@angular/core';

import { Animation } from '../../../../../shared/components/comman/animation/animation';
import { Blog } from '../../../../../shared/components/comman/blog/blog';
import { Title } from '../../../../../shared/components/comman/title/title';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-cab-modern-blog',
  templateUrl: './cab-modern-blog.html',
  styleUrls: ['./cab-modern-blog.scss'],
  imports: [Animation, Title, Blog],
})
export class CabModernBlog {
  private hotelService = inject(HotelService);

  readonly id = input<number[]>();
  readonly title = input<boolean>(true);
  readonly animation = input<boolean>(true);

  public blog: blogs[];

  constructor() {
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.id())) {
        this.blog = this.blog?.filter(item => {
          return this.id()?.includes(item.id);
        });
      }
    });
  }
}
