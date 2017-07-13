webpackJsonp([0],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageModule", function() { return BooksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BooksPageModule = (function () {
    function BooksPageModule() {
    }
    return BooksPageModule;
}());
BooksPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__books__["a" /* BooksPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__books__["a" /* BooksPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__books__["a" /* BooksPage */]
        ]
    })
], BooksPageModule);

//# sourceMappingURL=books.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_details_books_details__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BooksPage = (function () {
    function BooksPage(navCtrl, navParams, loginService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
    }
    BooksPage.prototype.buttonClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__books_details_books_details__["a" /* BooksDetailsPage */]);
    };
    BooksPage.prototype.logOut = function () {
        this.loginService.logout();
        this.navCtrl.goToRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    BooksPage.prototype.back = function () {
        this.navCtrl.goToRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return BooksPage;
}());
BooksPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-books',template:/*ion-inline-start:"/Applications/MAMP/htdocs/joinUp/joinUp_IO3/src/pages/books/books.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="back()">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Mis reservas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <!--Obviously this should be ...\n  <ion-item *ngFor="let item of items" (click)="buttonClick()">\n    <itemComponent></itemComponent>\n  </ion-item>-->\n\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item (click)="buttonClick()">\n        <h2>EADS Barcelona</h2>\n        <h3>Janssen</h3>\n        <p>Calle Goles 7, Sevilla</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon ios="ios-people" md="md-people"></ion-icon>\n          Passengers\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          JoinUp\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="pin"></ion-icon>\n          Recogida\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item (click)="buttonClick()">\n        <h2>EADS Barcelona</h2>\n        <h3>Janssen</h3>\n        <p>Calle Goles 7, Sevilla</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon ios="ios-people" md="md-people"></ion-icon>\n          Passengers\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          JoinUp\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="pin"></ion-icon>\n          Recogida\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n    <ion-item-sliding>\n      <ion-item (click)="buttonClick()">\n        <h2>EADS Barcelona</h2>\n        <h3>Janssen</h3>\n        <p>Calle Goles 7, Sevilla</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon ios="ios-people" md="md-people"></ion-icon>\n          Passengers\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          JoinUp\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="pin"></ion-icon>\n          Recogida\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n    <ion-item-sliding>\n      <ion-item (click)="buttonClick()">\n        <h2>EADS Barcelona</h2>\n        <h3>Janssen</h3>\n        <p>Calle Goles 7, Sevilla</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon ios="ios-people" md="md-people"></ion-icon>\n          Passengers\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          JoinUp\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="pin"></ion-icon>\n          Recogida\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/joinUp/joinUp_IO3/src/pages/books/books.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
], BooksPage);

//# sourceMappingURL=books.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map