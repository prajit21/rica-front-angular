import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { blogDetailPage, blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { BlogFilter } from '../../blog-page/widgets/blog-filter/blog-filter';
import { BlogDetailsPage } from '../widgets/blog-details-page/blog-details-page';

@Component({
  selector: 'app-blog-detail-gallery',
  templateUrl: './blog-detail-gallery.html',
  styleUrl: './blog-detail-gallery.scss',
  imports: [Header, Breadcrumbs, BlogDetailsPage, BlogFilter, Footer, Layout],
})
export class BlogDetailGallery {
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
