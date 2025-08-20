import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-cab-booking-success',
    templateUrl: './cab-booking-success.html',
    styleUrl: './cab-booking-success.scss',
    imports: [Header, Breadcrumbs, Footer, Layout]
})
export class CabBookingSuccess {

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'booking success';
  public parent = 'Home';
  public child = 'booking success';

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
