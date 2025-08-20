import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-restaurant-order-failed',
  templateUrl: './restaurant-order-failed.html',
  styleUrl: './restaurant-order-failed.scss',
  imports: [Header, Footer, Layout],
})
export class RestaurantOrderFailed {
  constructor() {}
}
