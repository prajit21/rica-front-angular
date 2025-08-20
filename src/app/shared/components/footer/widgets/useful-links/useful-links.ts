import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { footerUsefulLink } from '../../../data/data/footer';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.html',
  styleUrls: ['./useful-links.scss'],
  imports: [RouterLink],
})
export class UsefulLinks {
  public footerUsefulLink = footerUsefulLink;
}
