import { Component, input } from '@angular/core';
import { bookmark } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-user-dashboard-bookmark',
    templateUrl: './user-dashboard-bookmark.html',
    styleUrl: './user-dashboard-bookmark.scss',
    
})
export class UserDashboardBookmark {

  readonly bookmark = input<bookmark[]>();

}
