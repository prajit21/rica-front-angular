import { Component, input, output } from '@angular/core';
import { SearchTab } from './widgets/search-tab/search-tab';
import { Profile } from './widgets/profile/profile';
import { Language } from './widgets/language/language';
import { Currency } from './widgets/currency/currency';
import { Menu } from '../menu/menu';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
    imports: [NgClass, Menu, Currency, Language, Profile, SearchTab]
})
export class Header {

  readonly headerClass = input<string>();
  readonly couponCode = input<boolean>(false);
  readonly setting = input<boolean>(true);
  readonly containerFluid = input<boolean>(false);
  readonly userClass = input<string>('user-light');
  readonly searchTab = input<boolean>(false);

  readonly searchBoxType = output<string>();

  public isOpen: boolean = false;
  public logo: string = 'assets/images/icon/footer-logo.png';

  openMenu(){
    this.isOpen =! this.isOpen;
  }

  getValue(value: string){
    this.searchBoxType.emit(value)
  }
}
