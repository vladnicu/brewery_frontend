import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IBrewery } from './brewery.service';

export interface IUser {
  name: string;
  email: string;
  brewery: IBrewery;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://homebrewing.test:8000/api/register';
  private _loginUrl = 'http://homebrewing.test:8000/oauth/token';

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, JSON.stringify(user));
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, JSON.stringify(user));
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/dashboard']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
