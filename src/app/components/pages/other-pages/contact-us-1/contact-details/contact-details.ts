import { Component, input } from '@angular/core';

import { contact } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.scss',
})
export class ContactDetails {
  readonly contact = input<contact>();
}
