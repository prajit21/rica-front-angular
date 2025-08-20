import { Routes } from '@angular/router';
import { BlogCreativeLeftSidebar } from './blog-creative-left-sidebar/blog-creative-left-sidebar';
import { BlogCreativeNoSidebar } from './blog-creative-no-sidebar/blog-creative-no-sidebar';
import { BlogCreativeRightSidebar } from './blog-creative-right-sidebar/blog-creative-right-sidebar';
import { BlogLeftSidebar } from './blog-left-sidebar/blog-left-sidebar';
import { BlogListLeftSidebar } from './blog-list-left-sidebar/blog-list-left-sidebar';
import { BlogListNoSidebar } from './blog-list-no-sidebar/blog-list-no-sidebar';
import { BlogListRightSidebar } from './blog-list-right-sidebar/blog-list-right-sidebar';
import { BlogMasonryLeftSidebar } from './blog-masonry-left-sidebar/blog-masonry-left-sidebar';
import { BlogMasonryNoSidebar } from './blog-masonry-no-sidebar/blog-masonry-no-sidebar';
import { BlogMasonryRightSidebar } from './blog-masonry-right-sidebar/blog-masonry-right-sidebar';
import { BlogMixGridLeftSidebar } from './blog-mix-grid-left-sidebar/blog-mix-grid-left-sidebar';
import { BlogMixGridRightSidebar } from './blog-mix-grid-right-sidebar/blog-mix-grid-right-sidebar';
import { BlogMixListLeftSidebar } from './blog-mix-list-left-sidebar/blog-mix-list-left-sidebar';
import { BlogMixListRightSidebar } from './blog-mix-list-right-sidebar/blog-mix-list-right-sidebar';
import { BlogNoSidebar } from './blog-no-sidebar/blog-no-sidebar';
import { BlogRightSidebar } from './blog-right-sidebar/blog-right-sidebar';

export default[
  {
    path: 'left-sidebar',
    component: BlogLeftSidebar
  },
  {
    path: 'right-sidebar',
    component: BlogRightSidebar
  },
  {
    path: 'no-sidebar',
    component: BlogNoSidebar
  },
  {
    path: 'creative-left-sidebar',
    component: BlogCreativeLeftSidebar
  },
  {
    path: 'creative-right-sidebar',
    component: BlogCreativeRightSidebar
  },
  {
    path: 'creative-no-sidebar',
    component: BlogCreativeNoSidebar
  },
  {
    path: 'list-left-sidebar',
    component: BlogListLeftSidebar
  },
  {
    path: 'list-right-sidebar',
    component: BlogListRightSidebar
  },
  {
    path: 'list-no-sidebar',
    component: BlogListNoSidebar
  },
  {
    path: 'masonry-left-sidebar',
    component: BlogMasonryLeftSidebar
  },
  {
    path: 'masonry-right-sidebar',
    component: BlogMasonryRightSidebar
  },
  {
    path: 'masonry-no-sidebar',
    component: BlogMasonryNoSidebar
  },
  {
    path: 'mix-list-left-sidebar',
    component: BlogMixListLeftSidebar
  },
  {
    path: 'mix-list-right-sidebar',
    component: BlogMixListRightSidebar
  },
  {
    path: 'mix-grid-left-sidebar',
    component: BlogMixGridLeftSidebar
  },
  {
    path: 'mix-grid-right-sidebar',
    component: BlogMixGridRightSidebar
  }
] as Routes;

