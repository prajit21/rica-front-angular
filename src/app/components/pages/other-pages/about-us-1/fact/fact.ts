import { Component, input } from '@angular/core';

import { fact } from '../../../../../shared/interface/pages';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.html',
  styleUrl: './fact.scss',
})
export class Fact {
  readonly fact = input<fact[]>();
}
