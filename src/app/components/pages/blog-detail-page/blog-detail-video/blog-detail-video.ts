import { Component, inject } from '@angular/core';
import { blogDetailPage, blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { BlogFilter } from '../../blog-page/widgets/blog-filter/blog-filter';
import { BlogDetailsPage } from '../widgets/blog-details-page/blog-details-page';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-blog-detail-video',
    templateUrl: './blog-detail-video.html',
    styleUrl: './blog-detail-video.scss',
    imports: [Header, Breadcrumbs, BlogDetailsPage, BlogFilter, Footer, Layout]
})
export class BlogDetailVideo {

  private pageService = inject(PagesService);
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'blog';
  public parent = 'Home';
  public child = 'blog';

  public blogDetails: blogDetailPage;
  public blogFilter: blogFilter[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      response.blogDetailPage.forEach((data) => {
        this.blogDetails = data;

        response.blogPage.forEach((data) => {
          this.blogFilter = data.blogFilter;
        })
      })
    })
  }
}
