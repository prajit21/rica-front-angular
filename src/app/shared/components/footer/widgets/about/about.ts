import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { footerAbout } from '../../../data/data/footer';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [RouterLink],
})
export class About {
  public footerAbout = footerAbout;
}
