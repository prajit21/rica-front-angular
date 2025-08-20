import { Routes } from '@angular/router';
import { ElementAbout } from './element-about/element-about';
import { ElementApplication } from './element-application/element-application';
import { ElementBlog } from './element-blog/element-blog';
import { ElementButton } from './element-button/element-button';
import { ElementCategory } from './element-category/element-category';
import { ElementDateTimePicker } from './element-date-time-picker/element-date-time-picker';
import { ElementFullBanner } from './element-full-banner/element-full-banner';
import { ElementGallery } from './element-gallery/element-gallery';
import { ElementImageRatio } from './element-image-ratio/element-image-ratio';
import { ElementOtherElement } from './element-other-element/element-other-element';
import { ElementService } from './element-service/element-service';
import { ElementSubscribe } from './element-subscribe/element-subscribe';
import { ElementTestimonial } from './element-testimonial/element-testimonial';
import { ElementTitle } from './element-title/element-title';
import { ElementVideo } from './element-video/element-video';

export default[
  {
    path: 'image-ratio',
    component: ElementImageRatio
  },
  {
    path: 'about',
    component: ElementAbout
  },
  {
    path: 'application',
    component: ElementApplication
  },
  {
    path: 'blog',
    component: ElementBlog
  },
  {
    path: 'button',
    component: ElementButton
  },
  {
    path: 'category',
    component: ElementCategory
  },
  {
    path: 'date-time-picker',
    component: ElementDateTimePicker
  },
  {
    path: 'full-banner',
    component: ElementFullBanner
  },
  {
    path: 'gallery',
    component: ElementGallery
  },
  {
    path: 'other-element',
    component: ElementOtherElement
  },
  {
    path: 'service',
    component: ElementService
  },
  {
    path: 'subscribe',
    component: ElementSubscribe
  },
  {
    path: 'testimonial',
    component: ElementTestimonial
  },
  {
    path: 'title',
    component: ElementTitle
  },
  {
    path: 'video',
    component: ElementVideo
  }
] as Routes;
