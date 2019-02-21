import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IFermentable {
  name: string;
  country?: string;
  category?: string;
  type?: string;
  color?: string;
  ppg?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FermentablesService {

  private fermentablesUrl = 'http://localhost:4200/assets/mocks/mock-fermentables.json';

  constructor(private http: HttpClient) { }

  getFermentables() {
    return this.http.get<any>(this.fermentablesUrl);
  }
}
