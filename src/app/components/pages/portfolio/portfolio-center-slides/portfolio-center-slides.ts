import { Component, inject } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { portfolio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';

@Component({
  selector: 'app-portfolio-center-slides',
  templateUrl: './portfolio-center-slides.html',
  styleUrl: './portfolio-center-slides.scss',
  imports: [Header, CarouselModule, Footer, Layout],
})
export class PortfolioCenterSlides {
  private pageService = inject(PagesService);

  public portfolio: portfolio[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 3,
      },
    },
  };

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;
    });
  }
}
