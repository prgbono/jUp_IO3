import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {LoginServiceProvider} from "../../providers/login-service/login-service";
import {BooksDetailsPage} from "../books-details/books-details";

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginService: LoginServiceProvider) {
  }

  public buttonClick(){
    this.navCtrl.push(BooksDetailsPage);
  }

  public logOut(){
    this.loginService.logout();
    this.navCtrl.goToRoot(LoginPage);
  }

  public back(){
    this.navCtrl.goToRoot(LoginPage);
  }

}
