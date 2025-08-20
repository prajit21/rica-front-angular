import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pages-breadcrumb',
  templateUrl: './pages-breadcrumb.html',
  styleUrl: './pages-breadcrumb.scss',
})
export class PagesBreadcrumb {
  readonly bg_image = input<string>();
  readonly title = input<string>();
  readonly parent = input<string>();
  readonly child = input<string>();
  readonly paddingClass = input<boolean>();
}
