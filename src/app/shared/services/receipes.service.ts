import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFermentable } from './fermentables.service';
import { IHop } from './hops.service';
import { IYeast } from './yeast.service';
import { IOtherIngredient } from './other.service';

export interface IReceipe {
  title: string;
  style?: string;
  method?: string;
  boil_time?: string;
  boil_size?: string;
  o_gravity?: string;
  f_gravity?: string;
  abv?: string;
  ibu?: string;
  srm?: string;
  fermentables?: IFermentable[];
  hops?: IHop[];
  yeast?: IYeast[];
  otherIngredients?: IOtherIngredient[];
}

@Injectable({
  providedIn: 'root'
})
export class ReceipesService {

  // TODO improve the URLS later
  // private _receipesUrl = 'http://homebrewing.test:8000/api/breweries/3/receipes';
  private _receipesUrl = 'http://localhost:4200/assets/mocks/mock-receipes.json';

  private _storeReceipeUrl = 'http://homebrewing.test:8000/api/breweries/';
  private _updateReceipeUrl = 'http://homebrewing.test:8000/api/breweries/6';
  private _deleteReceipeUrl = 'http://homebrewing.test:8000/api/breweries/6';

  constructor(private http: HttpClient) { }

  getReceipes() {
    return this.http.get<any>(this._receipesUrl);
  }

  storeReceipe(receipe) {
    return this.http.post<any>(this._storeReceipeUrl, JSON.stringify(receipe));
  }

  updateReceipe(receipe) {
    return this.http.patch<any>(this._updateReceipeUrl, JSON.stringify(receipe));
  }

  deleteReceipe() {
    return this.http.delete<any>(this._deleteReceipeUrl);
  }

}
