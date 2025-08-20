import { Component } from '@angular/core';
import { footerNewTopic } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-new-topic',
    templateUrl: './new-topic.html',
    styleUrls: ['./new-topic.scss'],
    imports: [RouterLink]
})
export class NewTopic {

  public footerNewTopic = footerNewTopic;

}
