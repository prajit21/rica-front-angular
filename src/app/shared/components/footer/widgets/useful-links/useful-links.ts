import { Component } from '@angular/core';
import { footerUsefulLink } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-useful-links',
    templateUrl: './useful-links.html',
    styleUrls: ['./useful-links.scss'],
    imports: [RouterLink]
})
export class UsefulLinks {

  public footerUsefulLink = footerUsefulLink;

}
