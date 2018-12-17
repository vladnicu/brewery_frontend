import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.registerUser(this.loginUserData)
    .subscribe(
      res => {
        // localStorage.setItem('token', res.token);
        localStorage.setItem('token', 'test');
      },
      err => console.log(err)
    );
  }

}
