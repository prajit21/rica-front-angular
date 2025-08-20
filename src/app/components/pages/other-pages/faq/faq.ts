import { Component, HostListener, inject } from '@angular/core';

import { FaqDetails } from './faq-details/faq-details';
import { FaqTab } from './faq-tab/faq-tab';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { faq } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  imports: [Header, Breadcrumbs, FaqTab, FaqDetails, Footer, Layout],
})
export class Faq {
  private pageService = inject(PagesService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'FAQ';
  public parent = 'Home';
  public child = 'FAQ';

  public faq: faq;

  public activeTab: string = 'general';

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener('window: scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;

    if (number > 595) {
      this.isStuck = true;
      this.isNotStuck = false;
    } else {
      this.isStuck = false;
    }
    if (number > 805) {
      this.isNotStuck = true;
      this.isStuck = false;
    }
  }

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.faq = response.otherPages.faq;
    });
  }

  getTabValue(value: string) {
    this.activeTab = value;
  }
}
