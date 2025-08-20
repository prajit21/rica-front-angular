import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { pages } from '../interface/pages';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private http = inject(HttpClient);

  // Pages
  pages(): Observable<pages> {
    return this.http.get<pages>('assets/json/pages/pages.json');
  }
}
