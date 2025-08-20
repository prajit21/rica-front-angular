import { Component, inject } from '@angular/core';
import { blogFilter } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { BlogFilter } from '../widgets/blog-filter/blog-filter';
import { Blogs } from '../widgets/blogs/blogs';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-blog-masonry-right-sidebar',
    templateUrl: './blog-masonry-right-sidebar.html',
    styleUrl: './blog-masonry-right-sidebar.scss',
    imports: [Header, Breadcrumbs, Blogs, BlogFilter, Footer, Layout]
})
export class BlogMasonryRightSidebar {

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
