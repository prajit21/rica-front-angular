import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { PortfolioImagesSection } from '../widgets/portfolio-images-section/portfolio-images-section';

@Component({
  selector: 'app-portfolio-grid3',
  templateUrl: './portfolio-grid3.html',
  styleUrl: './portfolio-grid3.scss',
  imports: [Header, Breadcrumbs, PortfolioImagesSection, Footer, Layout],
})
export class PortfolioGrid3 {
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  constructor() {}
}
