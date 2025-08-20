import { Routes } from '@angular/router';

import { BlogDetailGallery } from './blog-detail-gallery/blog-detail-gallery';
import { BlogDetailLeftSidebar } from './blog-detail-left-sidebar/blog-detail-left-sidebar';
import { BlogDetailNoSidebar } from './blog-detail-no-sidebar/blog-detail-no-sidebar';
import { BlogDetailRightSidebar } from './blog-detail-right-sidebar/blog-detail-right-sidebar';
import { BlogDetailVideo } from './blog-detail-video/blog-detail-video';

export default [
  {
    path: 'left-sidebar',
    component: BlogDetailLeftSidebar,
  },
  {
    path: 'right-sidebar',
    component: BlogDetailRightSidebar,
  },
  {
    path: 'no-sidebar',
    component: BlogDetailNoSidebar,
  },
  {
    path: 'detail-with-gallery',
    component: BlogDetailGallery,
  },
  {
    path: 'detail-with-video',
    component: BlogDetailVideo,
  },
] as Routes;
