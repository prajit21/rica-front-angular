import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cab-breadcrumb',
  templateUrl: './cab-breadcrumb.html',
  styleUrl: './cab-breadcrumb.scss',
})
export class CabBreadcrumb {
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly child = input<string>();
}
