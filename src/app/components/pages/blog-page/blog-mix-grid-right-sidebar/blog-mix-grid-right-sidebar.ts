import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { BlogFilter } from '../widgets/blog-filter/blog-filter';
import { Blogs } from '../widgets/blogs/blogs';

@Component({
  selector: 'app-blog-mix-grid-right-sidebar',
  templateUrl: './blog-mix-grid-right-sidebar.html',
  styleUrl: './blog-mix-grid-right-sidebar.scss',
  imports: [Header, Breadcrumbs, Blogs, BlogFilter, Footer, Layout],
})
export class BlogMixGridRightSidebar {
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
