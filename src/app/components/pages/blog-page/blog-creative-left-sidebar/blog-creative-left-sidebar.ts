import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { BlogFilter } from '../widgets/blog-filter/blog-filter';
import { BlogList } from '../widgets/blog-list/blog-list';

@Component({
  selector: 'app-blog-creative-left-sidebar',
  templateUrl: './blog-creative-left-sidebar.html',
  styleUrl: './blog-creative-left-sidebar.scss',
  imports: [Header, Breadcrumbs, BlogFilter, BlogList, Footer, Layout],
})
export class BlogCreativeLeftSidebar {
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
