import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IYeast {
  name: string;
  laboratory?: string;
  code?: string;
  type?: string;
  alcohol_tol?: string;
  flocculation?: string;
  attenuation?: string;
  min_temp?: string;
  max_temp?: string;
}

@Injectable({
  providedIn: 'root'
})
export class YeastService {

  private yeastUrl = 'http://localhost:4200/assets/mocks/mock-yeast.json';

  constructor(private http: HttpClient) { }

  getYeast() {
    return this.http.get<any>(this.yeastUrl);
  }
}
