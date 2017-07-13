import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-books-details',
  templateUrl: 'books-details.html',
})
export class BooksDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public back(){
    this.navCtrl.pop();
  }

}
