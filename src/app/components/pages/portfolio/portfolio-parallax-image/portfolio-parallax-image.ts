import { Component, inject } from '@angular/core';
import { portfolio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-portfolio-parallax-image',
    templateUrl: './portfolio-parallax-image.html',
    styleUrl: './portfolio-parallax-image.scss',
    imports: [Header, Footer, Layout]
})
export class PortfolioParallaxImage {

  private pageService = inject(PagesService); 
  
  public portfolio: portfolio[];

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;
    });
  }
}
