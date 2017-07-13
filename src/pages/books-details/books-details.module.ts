import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksDetailsPage } from './books-details';

@NgModule({
  declarations: [
    BooksDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksDetailsPage),
  ],
  exports: [
    BooksDetailsPage
  ]
})
export class BooksDetailsPageModule {}
