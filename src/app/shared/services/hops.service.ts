import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IHop {
  name: string;
  type?: string;
  average_aa?: string;
  use?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HopsService {

  private hopsUrl = 'http://localhost:4200/assets/mocks/mock-hops.json';

  constructor(private http: HttpClient) { }

  getHops() {
    return this.http.get<any>(this.hopsUrl);
  }
}
