import { Routes } from '@angular/router';

import { PortfolioCenterSlides } from './portfolio-center-slides/portfolio-center-slides';
import { PortfolioCreative1 } from './portfolio-creative1/portfolio-creative1';
import { PortfolioCreative2 } from './portfolio-creative2/portfolio-creative2';
import { PortfolioCreative3 } from './portfolio-creative3/portfolio-creative3';
import { PortfolioCreative4 } from './portfolio-creative4/portfolio-creative4';
import { PortfolioGrid2 } from './portfolio-grid2/portfolio-grid2';
import { PortfolioGrid2Title } from './portfolio-grid2-title/portfolio-grid2-title';
import { PortfolioGrid3 } from './portfolio-grid3/portfolio-grid3';
import { PortfolioGrid3Title } from './portfolio-grid3-title/portfolio-grid3-title';
import { PortfolioGrid4 } from './portfolio-grid4/portfolio-grid4';
import { PortfolioGrid4Title } from './portfolio-grid4-title/portfolio-grid4-title';
import { PortfolioMasonry3 } from './portfolio-masonry3/portfolio-masonry3';
import { PortfolioMasonry4 } from './portfolio-masonry4/portfolio-masonry4';
import { PortfolioParallaxImage } from './portfolio-parallax-image/portfolio-parallax-image';

export default [
  {
    path: '2-grid',
    component: PortfolioGrid2,
  },
  {
    path: '3-grid',
    component: PortfolioGrid3,
  },
  {
    path: '4-grid',
    component: PortfolioGrid4,
  },
  {
    path: '2-grid-title',
    component: PortfolioGrid2Title,
  },
  {
    path: '3-grid-title',
    component: PortfolioGrid3Title,
  },
  {
    path: '4-grid-title',
    component: PortfolioGrid4Title,
  },
  {
    path: '3-masonry',
    component: PortfolioMasonry3,
  },
  {
    path: '4-masonry',
    component: PortfolioMasonry4,
  },
  {
    path: 'parallax',
    component: PortfolioParallaxImage,
  },
  {
    path: 'center-slide',
    component: PortfolioCenterSlides,
  },
  {
    path: 'creative-1',
    component: PortfolioCreative1,
  },
  {
    path: 'creative-2',
    component: PortfolioCreative2,
  },
  {
    path: 'creative-3',
    component: PortfolioCreative3,
  },
  {
    path: 'creative-4',
    component: PortfolioCreative4,
  },
] as Routes;
