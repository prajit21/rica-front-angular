import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mixClassic } from '../interface/mix-classic';

@Injectable({
  providedIn: 'root'
})
export class MixService {

  private http = inject(HttpClient);

  // Mix Classic
  mixClassic(): Observable<mixClassic> {
    return this.http.get<mixClassic>('assets/json/theme/mix-classic.json');
  }
}
