import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-loader',
  templateUrl: './flight-loader.html',
  styleUrl: './flight-loader.scss',
})
export class FlightLoader {
  public loaderHide: boolean = false;

  constructor() {
    setTimeout(() => {
      this.loaderHide = true;
    }, 4000);
  }
}
