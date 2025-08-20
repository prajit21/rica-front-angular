import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { footerNewTopic } from '../../../data/data/footer';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.html',
  styleUrls: ['./new-topic.scss'],
  imports: [RouterLink],
})
export class NewTopic {
  public footerNewTopic = footerNewTopic;
}
