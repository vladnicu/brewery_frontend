import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IBrewery {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  // TODO improve the URLS later
  private _breweriesUrl = 'http://homebrewing.test:8000/api/breweries/';
  private _storeBreweryUrl = 'http://homebrewing.test:8000/api/breweries/';
  private _updateBreweryUrl = 'http://homebrewing.test:8000/api/breweries/6';
  private _deleteBreweryUrl = 'http://homebrewing.test:8000/api/breweries/6';

  constructor(private http: HttpClient) { }

  getBreweries() {
    return this.http.get<any>(this._breweriesUrl);
  }

  storeBrewery(brewery) {
    return this.http.post<any>(this._storeBreweryUrl, JSON.stringify(brewery));
  }

  updateBrewery(brewery) {
    return this.http.patch<any>(this._updateBreweryUrl, JSON.stringify(brewery));
  }

  deleteBrewery() {
    return this.http.delete<any>(this._deleteBreweryUrl);
  }
}
