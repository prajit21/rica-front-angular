import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-cab-classic-home-section',
  templateUrl: './cab-classic-home-section.html',
  styleUrls: ['./cab-classic-home-section.scss'],
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule, NgClass, RouterLink],
})
export class CabClassicHomeSection {
  public selectedValue: string;

  sameLocation(event: Event) {
    this.selectedValue = (event.target as HTMLInputElement).value;
  }
}
