import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IFermentable } from './fermentables.service';
import { IHop } from './hops.service';
import { IYeast } from './yeast.service';
import { IOtherIngredient } from './other.service';

const API_URL = environment.apiUrl;

export interface IReceipe {
  id: number;
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
  private receipesUrl = API_URL + '/receipes';

  private _storeReceipeUrl = 'http://homebrewing.test:8000/api/breweries/';
  private _updateReceipeUrl = 'http://homebrewing.test:8000/api/breweries/6';
  private _deleteReceipeUrl = 'http://homebrewing.test:8000/api/breweries/6';

  constructor(private http: HttpClient) { }

  getReceipes() {
    return this.http.get<IReceipe[]>(this.receipesUrl);
  }

  getReceipeById(receipeId: number) {
    return this.http.get<IReceipe>(this.receipesUrl + '/' + receipeId);
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

  // private handleError (error: Response | any) {
  //   console.error('ApiService::handleError', error);
  //   return Observable.throw(error);
  // }
}
