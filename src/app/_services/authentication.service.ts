import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Subject} from "rxjs/Subject";

@Injectable()
export class AuthenticationService {
  private loggedIn: Subject<boolean> = new Subject<boolean>();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
    constructor(private http: HttpClient) {
      // this.loggedIn.next(this._sessionService.isSetUserSession())
    }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
