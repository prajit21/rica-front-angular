import { Component } from '@angular/core';

import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightModernBanner } from '../../../home/flight-demo/flight-demo-modern/flight-modern-banner/flight-modern-banner';
import { TourModernBanner } from '../../../home/tour-demo/tour-demo-modern/tour-modern-banner/tour-modern-banner';

@Component({
  selector: 'app-element-full-banner',
  templateUrl: './element-full-banner.html',
  styleUrl: './element-full-banner.scss',
  imports: [Header, TourModernBanner, FlightModernBanner, Footer, Layout],
})
export class ElementFullBanner {
  constructor() {}
}
