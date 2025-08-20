import { Component, inject } from '@angular/core';
import { elementButton } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { NgClass } from '@angular/common';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-element-button',
    templateUrl: './element-button.html',
    styleUrl: './element-button.scss',
    imports: [Header, Breadcrumbs, NgClass, Footer, Layout]
})
export class ElementButton {

  private pageService = inject(PagesService);
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'button';
  public parent = 'elements';
  public child = 'button';

  public button: elementButton[];

  constructor(){
    this.pageService.pages().subscribe(response => {
      this.button = response.elementPages.button;
    })
  }
}
