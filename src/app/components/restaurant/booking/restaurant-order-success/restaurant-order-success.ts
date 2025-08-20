import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-restaurant-order-success',
  templateUrl: './restaurant-order-success.html',
  styleUrl: './restaurant-order-success.scss',
  imports: [Header, Footer, Layout],
})
export class RestaurantOrderSuccess {
  constructor() {}
}
