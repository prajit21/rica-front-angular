import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { Details } from '../../../../../shared/components/comman/details/details';
import { CabSearch } from '../../widgets/cab-search/cab-search';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-list-right-sidebar',
    templateUrl: './cab-list-right-sidebar.html',
    styleUrl: './cab-list-right-sidebar.scss',
    imports: [Header, Breadcrumbs, CabSearch, Details, Filter, Footer, Layout]
})
export class CabListRightSidebar {
  
  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab search';
  public parent = 'Home';
  public child = 'cab search';

  public selectedTabValue: string;

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
