import { Component } from '@angular/core';

import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-cab-booking-failed',
  templateUrl: './cab-booking-failed.html',
  styleUrl: './cab-booking-failed.scss',
  imports: [Header, Breadcrumbs, Footer, Layout],
})
export class CabBookingFailed {
  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'payment failed';
  public parent = 'Home';
  public child = 'payment failed';

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color1', '233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2', '233, 179, 14');
  }

  ngOnDestroy() {
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
