import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { CabModernApplication } from '../../../home/cab-demo/cab-demo-modern/cab-modern-application/cab-modern-application';
import { TourModernApp } from '../../../home/tour-demo/tour-demo-modern/tour-modern-app/tour-modern-app';

@Component({
  selector: 'app-element-application',
  templateUrl: './element-application.html',
  styleUrl: './element-application.scss',
  imports: [Header, CabModernApplication, TourModernApp, Footer, Layout],
})
export class ElementApplication {
  constructor() {}
}
