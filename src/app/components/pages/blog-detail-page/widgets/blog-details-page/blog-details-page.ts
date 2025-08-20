import { Component, inject, input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { VideoModal } from '../../../../../shared/components/comman/modal/video-modal/video-modal';
import { blogComments, blogDetail } from '../../../../../shared/interface/pages';
import { BlogDetailsComments } from '../blog-details-comments/blog-details-comments';
import { BlogDetailsLeaveComment } from '../blog-details-leave-comment/blog-details-leave-comment';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.html',
  styleUrl: './blog-details-page.scss',
  imports: [CarouselModule, BlogDetailsComments, BlogDetailsLeaveComment],
})
export class BlogDetailsPage {
  private modal = inject(NgbModal);

  readonly blogDetails = input<blogDetail>();
  readonly blogComments = input<blogComments[]>();
  readonly imageSlider = input<boolean>(false);
  readonly video = input<boolean>(false);

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  openVideoModal() {
    this.modal.open(VideoModal, { size: 'lg', centered: true });
  }
}
