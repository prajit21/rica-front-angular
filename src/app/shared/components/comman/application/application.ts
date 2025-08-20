import { Component, input } from '@angular/core';

import { ApplicationOne } from './application-one/application-one';
import { ApplicationTwo } from './application-two/application-two';

@Component({
  selector: 'app-application',
  templateUrl: './application.html',
  styleUrls: ['./application.scss'],
  imports: [ApplicationOne, ApplicationTwo],
})
export class Application {
  readonly type = input<string>();
}
