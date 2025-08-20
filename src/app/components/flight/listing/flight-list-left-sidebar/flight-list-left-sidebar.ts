import { Component } from '@angular/core';

import { Details } from '../../../../shared/components/comman/details/details';
import { Filter } from '../../../../shared/components/comman/filter/filter';
import { Footer } from '../../../../shared/components/footer/footer';
import { Header } from '../../../../shared/components/header/header';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { FlightSearch } from '../../widgets/flight-search/flight-search';

@Component({
  selector: 'app-flight-list-left-sidebar',
  templateUrl: './flight-list-left-sidebar.html',
  styleUrl: './flight-list-left-sidebar.scss',
  imports: [Header, FlightSearch, Filter, Details, Footer, Layout],
})
export class FlightListLeftSidebar {}
