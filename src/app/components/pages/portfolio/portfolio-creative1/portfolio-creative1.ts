import { Component, inject } from '@angular/core';
import { portfolio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-portfolio-creative1',
    templateUrl: './portfolio-creative1.html',
    styleUrl: './portfolio-creative1.scss',
    imports: [Header, Breadcrumbs, Footer, Layout]
})
export class PortfolioCreative1 {

  private pageService = inject(PagesService); 
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  public portfolio: portfolio[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;
    });
  }
}
