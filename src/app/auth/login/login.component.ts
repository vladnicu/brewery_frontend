import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.registerUser(this.loginUserData)
    .subscribe(
      res => {
        // localStorage.setItem('token', res.token);
        localStorage.setItem('token', 'test');
        this._router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
