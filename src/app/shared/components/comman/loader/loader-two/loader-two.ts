import { Component } from '@angular/core';

@Component({
    selector: 'app-loader-two',
    templateUrl: './loader-two.html',
    styleUrls: ['./loader-two.scss'],
    
})
export class LoaderTwo {

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
