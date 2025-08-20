import { Component } from '@angular/core';
import { Layout } from '../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../shared/components/footer/footer';
import { Details } from '../../../../shared/components/comman/details/details';
import { Filter } from '../../../../shared/components/comman/filter/filter';
import { FlightSearch } from '../../widgets/flight-search/flight-search';
import { Header } from '../../../../shared/components/header/header';

@Component({
    selector: 'app-flight-list-left-sidebar',
    templateUrl: './flight-list-left-sidebar.html',
    styleUrl: './flight-list-left-sidebar.scss',
    imports: [Header, FlightSearch, Filter, Details, Footer, Layout]
})
export class FlightListLeftSidebar {
  
}
