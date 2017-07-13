import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { phoneNumber: '', password: '' };

  constructor(
    private nav: NavController, private loginService: LoginServiceProvider, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

  }

  public login() {
    this.showLoading();
    this.loginService.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          this.nav.setRoot('BooksPage');
        } else {
          this.showError("Acceso denegado");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Acceso denegado',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
