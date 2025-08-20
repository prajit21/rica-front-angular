import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-element-title',
  templateUrl: './element-title.html',
  styleUrl: './element-title.scss',
  imports: [Header, Breadcrumbs, Footer, Layout],
})
export class ElementTitle {
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'title';
  public parent = 'elements';
  public child = 'title';

  constructor() {}
}
