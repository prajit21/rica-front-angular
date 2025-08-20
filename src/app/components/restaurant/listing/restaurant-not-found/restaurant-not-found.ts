import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Breadcrumbs } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-restaurant-not-found',
    templateUrl: './restaurant-not-found.html',
    styleUrl: './restaurant-not-found.scss',
    imports: [Header, Breadcrumbs, Footer, Layout]
})
export class RestaurantNotFound {
  
  constructor() {}
  
}
