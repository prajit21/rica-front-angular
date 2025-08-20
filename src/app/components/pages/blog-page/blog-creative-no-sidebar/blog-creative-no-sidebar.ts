import { Component, inject } from '@angular/core';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { BlogList } from '../widgets/blog-list/blog-list';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-blog-creative-no-sidebar',
    templateUrl: './blog-creative-no-sidebar.html',
    styleUrl: './blog-creative-no-sidebar.scss',
    imports: [Header, Breadcrumbs, BlogList, Footer, Layout]
})
export class BlogCreativeNoSidebar {

  private pageService = inject(PagesService);
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'blog';
  public parent = 'Home';
  public child = 'blog';

  public blogDetails: number[];
  public blogFilter: blogFilter[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      response.blogPage.forEach((data) => {
        this.blogDetails = data.blog;

        this.blogFilter = data.blogFilter;
      })
    })
  }
}
