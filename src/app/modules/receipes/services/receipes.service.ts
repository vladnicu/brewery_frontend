import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceipesService {

  // TODO improve the URLS later
  private _receipesUrl = 'http://homebrewing.test:8000/api/breweries/3/receipes';
  // private _storeReceipeUrl = 'http://homebrewing.test:8000/api/breweries/';
  // private _updateReceipeUrl = 'http://homebrewing.test:8000/api/breweries/6';
  // private _deleteReceipeUrl = 'http://homebrewing.test:8000/api/breweries/6';

  constructor(private http: HttpClient) { }

  getReceipes() {
    return this.http.get<any>(this._receipesUrl);
  }

  // storeReceipe(receipe) {
  //   return this.http.post<any>(this._storeReceipeUrl, JSON.stringify(receipe));
  // }

  // updateReceipe(receipe) {
  //   return this.http.patch<any>(this._updateReceipeUrl, JSON.stringify(receipe));
  // }

  // deleteReceipe() {
  //   return this.http.delete<any>(this._deleteReceipeUrl);
  // }
}
