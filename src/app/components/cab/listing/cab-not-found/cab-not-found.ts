import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { RouterLink } from '@angular/router';
import { CabSearch } from '../widgets/cab-search/cab-search';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-not-found',
    templateUrl: './cab-not-found.html',
    styleUrl: './cab-not-found.scss',
    imports: [Header, Breadcrumbs, CabSearch, RouterLink, Footer, Layout]
})
export class CabNotFound {

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'no result';
  public parent = 'Home';
  public child = 'no result';

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
