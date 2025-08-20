import { Component, inject } from '@angular/core';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Blogs } from '../widgets/blogs/blogs';
import { BlogFilter } from '../widgets/blog-filter/blog-filter';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-blog-masonry-left-sidebar',
    templateUrl: './blog-masonry-left-sidebar.html',
    styleUrl: './blog-masonry-left-sidebar.scss',
    imports: [Header, Breadcrumbs, BlogFilter, Blogs, Footer, Layout]
})
export class BlogMasonryLeftSidebar {

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
