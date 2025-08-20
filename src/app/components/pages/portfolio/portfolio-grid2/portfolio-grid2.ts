import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { PortfolioImagesSection } from '../widgets/portfolio-images-section/portfolio-images-section';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-portfolio-grid2',
    templateUrl: './portfolio-grid2.html',
    styleUrl: './portfolio-grid2.scss',
    imports: [Header, Breadcrumbs, PortfolioImagesSection, Footer, Layout]
})
export class PortfolioGrid2 {
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  constructor() {}
  
}
