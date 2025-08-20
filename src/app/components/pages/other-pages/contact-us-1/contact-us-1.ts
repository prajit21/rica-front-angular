import { Component, inject } from '@angular/core';

import { ContactDetails } from './contact-details/contact-details';
import { ContactForm } from './contact-form/contact-form';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { otherPages } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';

@Component({
  selector: 'app-contact-us-1',
  templateUrl: './contact-us-1.html',
  styleUrl: './contact-us-1.scss',
  imports: [Header, ContactForm, ContactDetails, Footer, Layout],
})
export class ContactUs1 {
  private pageService = inject(PagesService);

  public contactDetails: otherPages;

  constructor() {
    this.pageService.pages().subscribe(response => {
      this.contactDetails = response.otherPages;
    });
  }
}
