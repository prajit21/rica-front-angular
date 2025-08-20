import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { blogDetailPage, blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { BlogDetailsPage } from '../widgets/blog-details-page/blog-details-page';

@Component({
  selector: 'app-blog-detail-no-sidebar',
  templateUrl: './blog-detail-no-sidebar.html',
  styleUrl: './blog-detail-no-sidebar.scss',
  imports: [Header, Breadcrumbs, BlogDetailsPage, Footer, Layout],
})
export class BlogDetailNoSidebar {
  private pageService = inject(PagesService);

  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'blog';
  public parent = 'Home';
  public child = 'blog';

  public blogDetails: blogDetailPage;
  public blogFilter: blogFilter[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      response.blogDetailPage.forEach(data => {
        this.blogDetails = data;

        response.blogPage.forEach(data => {
          this.blogFilter = data.blogFilter;
        });
      });
    });
  }
}
