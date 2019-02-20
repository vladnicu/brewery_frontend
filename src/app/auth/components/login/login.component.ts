import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = { grant_type: 'password', client_id: '2', client_secret: '89tqIzrrCwZMpuMWheP1rlXM2NjeXvQsCpFT0g1Z', scope: '*'};

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.access_token);
        this._router.navigate(['/dashboard']);
      },
      err => console.log(err)
    );
  }

}
