import { Component, inject } from '@angular/core';
import { cabDetails } from '../../../../shared/interface/cab';
import { CabService } from '../../../../shared/services/cab.service';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { CabSinglePageContact } from '../widgets/cab-single-page-contact/cab-single-page-contact';
import { CabSinglePageFilter } from '../widgets/cab-single-page-filter/cab-single-page-filter';
import { CabSinglePageDetail } from '../widgets/cab-single-page-detail/cab-single-page-detail';
import { CabGallery } from '../widgets/cab-gallery/cab-gallery';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-single-detail',
    templateUrl: './cab-single-detail.html',
    styleUrl: './cab-single-detail.scss',
    imports: [Header, Breadcrumbs, CabGallery, CabSinglePageDetail, CabSinglePageFilter, CabSinglePageContact, Footer, Layout]
})
export class CabSingleDetail {

  private cabService = inject(CabService);

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab detail';
  public parent = 'Home';
  public child = 'cab detail';

  public cabDetails: cabDetails;

  constructor(){
    this.cabService.cabPage().subscribe(response => {
      this.cabDetails = response
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
