import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-one',
  templateUrl: './loader-one.html',
  styleUrls: ['./loader-one.scss'],
})
export class LoaderOne {
  public loaderHide: boolean = false;

  constructor() {
    setTimeout(() => {
      this.loaderHide = true;
    }, 4000);
  }
}
