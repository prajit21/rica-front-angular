import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Details } from '../../../../shared/components/comman/details/details';
import { GridPanel } from '../../../../shared/components/comman/grid-panel/grid-panel';
import { CabSearch } from '../widgets/cab-search/cab-search';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-slider',
    templateUrl: './cab-slider.html',
    styleUrl: './cab-slider.scss',
    imports: [Header, Breadcrumbs, CabSearch, GridPanel, Details, Footer, Layout]
})
export class CabSlider {

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
