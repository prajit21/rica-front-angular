import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-skeleton',
  templateUrl: './menu-skeleton.html',
  styleUrls: ['./menu-skeleton.scss'],
  imports: [FormsModule],
})
export class MenuSkeleton {
  readonly skeletonType = input<string>();
}
