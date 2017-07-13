import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  phoneNumber: string;
  pass: string;

  constructor(phoneNumber: string, pass: string) {
    this.phoneNumber = phoneNumber;
    this.pass = pass;
  }
}

@Injectable()
export class LoginServiceProvider {
  currentUser: User;

  public login(credentials) {
    if (credentials.phoneNumber === null || credentials.password === null) {
      return Observable.throw("Por favor, introduce tus datos");
    } else {
      return Observable.create(observer => {
        // Here is where the backend is called to let or deny the login. (login.controller.js)
        let access = (credentials.password === "678889110" && credentials.phoneNumber === "+34678889110");
        this.currentUser = new User('+34678889110', '678889110');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
