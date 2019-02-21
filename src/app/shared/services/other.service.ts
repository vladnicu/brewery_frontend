import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IOtherIngredient {
  name: string;
  type?: string;
  use?: string;
}

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  private otherUrl = 'http://localhost:4200/assets/mocks/mock-other.json';

  constructor(private http: HttpClient) { }

  getOtherIngredients() {
    return this.http.get<any>(this.otherUrl);
  }

}
