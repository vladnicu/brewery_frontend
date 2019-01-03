import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  private _breweriesUrl = 'http://homebrewing.test:8000/api/breweries/';

  constructor(private http: HttpClient) { }

  getBreweries() {
    return this.http.get<any>(this._breweriesUrl);
  }
}
