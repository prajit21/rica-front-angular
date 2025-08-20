import { Component, input } from '@angular/core';
import { FoodSearchBox } from './food-search-box/food-search-box';
import { CabSearchBox } from './cab-search-box/cab-search-box';
import { FlightSearchBoxTwo } from './flight-search-box-two/flight-search-box-two';
import { HolidaySearchBox } from './holiday-search-box/holiday-search-box';
import { FlightSearchBox } from './flight-search-box/flight-search-box';
import { SearchBoxFive } from './search-box-five/search-box-five';
import { SearchBoxFour } from './search-box-four/search-box-four';
import { SearchBoxThree } from './search-box-three/search-box-three';
import { SearchBoxTwo } from './search-box-two/search-box-two';
import { SearchBoxOne } from './search-box-one/search-box-one';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.html',
    styleUrls: ['./search-box.scss'],
    imports: [SearchBoxOne, SearchBoxTwo, SearchBoxThree, SearchBoxFour, SearchBoxFive, FlightSearchBox, HolidaySearchBox, FlightSearchBoxTwo, CabSearchBox, FoodSearchBox]
})
export class SearchBox {

  readonly type = input<string>();
  readonly text = input<boolean>(false);
  readonly borderClass = input<boolean>(false);
  readonly searchFix = input<boolean>();
  readonly selectedValue = input<string>();
  readonly shadow = input<boolean>(true);

}
