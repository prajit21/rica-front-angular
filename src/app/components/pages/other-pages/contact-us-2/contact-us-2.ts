import { Component, inject } from '@angular/core';
import { otherPages } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { ContactForm } from '../contact-us-1/contact-form/contact-form';
import { ContactDetails } from '../contact-us-1/contact-details/contact-details';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-contact-us-2',
    templateUrl: './contact-us-2.html',
    styleUrl: './contact-us-2.scss',
    imports: [Header, Breadcrumbs, ContactDetails, ContactForm, Footer, Layout]
})
export class ContactUs2 {

  private pageService = inject(PagesService); 
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'contact us';
  public parent = 'Home';
  public child = 'contact us';

  public contactDetails: otherPages;

  constructor(){
    this.pageService.pages().subscribe(response => {
      this.contactDetails = response.otherPages
    })
  }
}
