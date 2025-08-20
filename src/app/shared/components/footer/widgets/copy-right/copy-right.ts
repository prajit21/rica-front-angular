import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.html',
  styleUrls: ['./copy-right.scss'],
})
export class CopyRight {
  public year = new Date().getFullYear();
}
