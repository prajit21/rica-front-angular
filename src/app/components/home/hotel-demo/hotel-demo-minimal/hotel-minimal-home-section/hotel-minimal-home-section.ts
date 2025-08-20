import { Component } from '@angular/core';

import { interval } from 'rxjs';

import { SearchBox } from '../../../../../shared/components/comman/search-box/search-box';

@Component({
  selector: 'app-hotel-minimal-home-section',
  templateUrl: './hotel-minimal-home-section.html',
  styleUrls: ['./hotel-minimal-home-section.scss'],
  imports: [SearchBox],
})
export class HotelMinimalHomeSection {
  public view: { type: string } = { type: '' };
  public wordList: string[] = ['hotels.', 'homes.', 'hostels.', 'villas.', 'apts.'];

  ngOnInit() {
    let idx = 0;
    let n = 0;
    let up = true;

    interval(200).subscribe(() => {
      const word = this.wordList[idx];
      const ln = word.length;

      if (up) {
        this.view.type = word.slice(0, n);
        n++;
      }
      if (n === ln + 1) {
        up = false;
      }
      if (!up) {
        this.view.type = word.slice(0, n);
        n--;
      }
      if (n === 0) {
        up = true;
        idx++;
      }
      if (idx === this.wordList.length) {
        idx = 0;
      }
    });
  }
}
