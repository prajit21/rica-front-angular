import { Component, input, output } from '@angular/core';
import { tabs } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-faq-tab',
    templateUrl: './faq-tab.html',
    styleUrl: './faq-tab.scss',
    
})
export class FaqTab {

  readonly tabs = input<tabs[]>();

  readonly tabValue = output<string>();

  public activeTab = 'general';

  changeTab(value: string){
    this.activeTab = value;
    this.tabValue.emit(this.activeTab)
  }
}
