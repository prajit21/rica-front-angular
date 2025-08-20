import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Details } from '../../../../../shared/components/comman/details/details';
import { CabSearch } from '../../widgets/cab-search/cab-search';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-no-sidebar',
    templateUrl: './cab-no-sidebar.html',
    styleUrl: './cab-no-sidebar.scss',
    imports: [Header, Breadcrumbs, CabSearch, Details, Footer, Layout]
})
export class CabNoSidebar {
  
  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab search';
  public parent = 'Home';
  public child = 'cab search';

  public selectedTabValue: string;

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');

    this.selectedTabValue = 'all';
  }


  getTabValue(value: string){
    this.selectedTabValue = value;
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
