import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { PortfolioImagesSection } from '../widgets/portfolio-images-section/portfolio-images-section';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-portfolio-grid4',
    templateUrl: './portfolio-grid4.html',
    styleUrl: './portfolio-grid4.scss',
    imports: [Header, Breadcrumbs, PortfolioImagesSection, Footer, Layout]
})
export class PortfolioGrid4 {
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  constructor() {}
  
}
