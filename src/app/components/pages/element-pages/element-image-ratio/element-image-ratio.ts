import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Title } from '../../../../shared/components/comman/title/title';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { imageRatio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';

@Component({
  selector: 'app-element-image-ratio',
  templateUrl: './element-image-ratio.html',
  styleUrl: './element-image-ratio.scss',
  imports: [Header, Breadcrumbs, NgClass, Title, Footer, Layout],
})
export class ElementImageRatio {
  private pageService = inject(PagesService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'image ratio';
  public parent = 'elements';
  public child = 'image ratio';

  public imageRatioDetail: imageRatio;

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.imageRatioDetail = response.elementPages.imageRatio;
    });
  }
}
