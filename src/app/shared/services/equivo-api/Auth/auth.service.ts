import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CurrentUser } from 'src/app/shared/data-types/shared-data-types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointBase = environment.endpointBase;

  constructor(private _httpClient: HttpClient) { }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token) return null;

    const helper = new JwtHelperService();
    return helper.decodeToken(token) as CurrentUser;
  }

  signIn(payload) {
    return this._httpClient
      .post(this.endpointBase.concat("HelpDeskAccount/SignIn"), payload, { reportProgress: true, observe: 'events' });
  }

  signOut() {
    localStorage.removeItem('token');
  }

  isSignedIn() {
    let token = localStorage.getItem('token');
    if (!token) return false;

    const helper = new JwtHelperService();
    if (helper.isTokenExpired(token)) return false;

    return true;
  }

}
