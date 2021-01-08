import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/equivo-api/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  get UserName() {
    return this.loginForm.get('UserName');
  }
  get Password() {
    return this.loginForm.get('Password');
  }

  errorMessage = "";
  showLoadingEndicator = false;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
    loginFb: FormBuilder
  ) {
    this.loginForm = loginFb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }

  signIn() {
    this.errorMessage = "";

    if (this.loginForm.valid) {
      this._authService.signIn(this.loginForm.value)
        .subscribe(event => {
          if (event.type === HttpEventType.Sent) {
            this.showLoadingEndicator = true;
          }
          if (event.type === HttpEventType.Response) {
            this.showLoadingEndicator = false;
            localStorage.setItem('token', event.body['token']);
            let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');

            if (this._authService.currentUser.UserRole == "admin".toLowerCase()) {
              this._router.navigate([returnUrl || '/admin/dashboard']);
            }
            if (this._authService.currentUser.UserRole == "supportmember".toLowerCase()) {
              this._router.navigate([returnUrl || '/tickets/dashboard']);
            }
          }
        },
          error => {
            this.showLoadingEndicator = false;
            this.errorMessage = error.error.message;
          })
    }

  }

  forgotPassword() {

  }
}
