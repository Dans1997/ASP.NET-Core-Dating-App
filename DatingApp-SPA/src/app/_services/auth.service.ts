import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
  export class AuthService {

    baseUrl = environment.apiUrl + 'auth/';
    jwtHelper = new JwtHelperService();
    decodedToken: any;

    constructor(private http: HttpClient) { }

    login(model: any): Observable<void> {
      return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
    }

    register(model: any): Observable<object> {
      return this.http.post(this.baseUrl + 'register', model);
    }

    loggedIn(): boolean {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    }
}
