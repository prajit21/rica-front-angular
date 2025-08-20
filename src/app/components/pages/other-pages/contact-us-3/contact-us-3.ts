import { Component, inject } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { otherPages } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { ContactDetails } from '../contact-us-1/contact-details/contact-details';
import { ContactForm } from '../contact-us-1/contact-form/contact-form';

@Component({
  selector: 'app-contact-us-3',
  templateUrl: './contact-us-3.html',
  styleUrl: './contact-us-3.scss',
  imports: [Header, Breadcrumbs, ContactForm, ContactDetails, Footer, Layout],
})
export class ContactUs3 {
  private pageService = inject(PagesService);

  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'contact us';
  public parent = 'Home';
  public child = 'contact us';

  public contactDetails: otherPages;

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.contactDetails = response.otherPages;
    });
  }
}
