import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Blogs } from '../widgets/blogs/blogs';

@Component({
  selector: 'app-blog-masonry-no-sidebar',
  templateUrl: './blog-masonry-no-sidebar.html',
  styleUrl: './blog-masonry-no-sidebar.scss',
  imports: [Header, Breadcrumbs, Blogs, Footer, Layout],
})
export class BlogMasonryNoSidebar {
  private pageService = inject(PagesService);

  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'blog';
  public parent = 'Home';
  public child = 'blog';

  public blogDetails: number[];
  public blogFilter: blogFilter[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      response.blogPage.forEach(data => {
        this.blogDetails = data.blog;

        this.blogFilter = data.blogFilter;
      });
    });
  }
}
