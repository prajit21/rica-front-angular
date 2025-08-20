import { Component } from '@angular/core';
import { Layout } from '../../../../../shared/components/ui/layout/layout';
import { Footer } from '../../../../../shared/components/footer/footer';
import { Details } from '../../../../../shared/components/comman/details/details';
import { Filter } from '../../../../../shared/components/comman/filter/filter';
import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';
import { Breadcrumbs } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs';
import { Header } from '../../../../../shared/components/header/header';

@Component({
    selector: 'app-hotel-list-multiple-image',
    templateUrl: './hotel-list-multiple-image.html',
    styleUrls: ['./hotel-list-multiple-image.scss'],
    imports: [Header, Breadcrumbs, SearchBox, Filter, Details, Footer, Layout]
})
export class HotelListMultipleImage {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

  constructor() {}
  
}
