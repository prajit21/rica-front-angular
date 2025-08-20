import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';

@Component({
  selector: 'app-error-page-404',
  templateUrl: './error-page-404.html',
  styleUrl: './error-page-404.scss',
  imports: [Header, Footer, Layout],
})
export class ErrorPage404 {
  constructor() {}
}
