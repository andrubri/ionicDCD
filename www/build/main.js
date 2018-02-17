webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.redireccionar = function (page) {
        if (page == 'L')
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        //else
        //this.navCtrl.setRoot(RegistroPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bienvenido</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="fondo">\n  <h3 class="titulo">Diario De Campo Digital</h3>\n  <button ion-button full color="primary" (click)="redireccionar(\'L\')">Iniciar Sesión</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__note_note__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = (function () {
    function ListPage(navCtrl, navParams, toastCtrl, storage, fireDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.fireDatabase = fireDatabase;
        this.estado = "0";
        this.tipo = "0";
        var self = this;
        this.storage.get("login").then(function (val) {
            if (val == "true") {
                _this.notas = _this.fireDatabase.list('/notas');
                for (var x = 0; x < _this.notas.length; x++) {
                    var nota = _this.notas[x];
                    nota.fecha = __WEBPACK_IMPORTED_MODULE_5_moment__(nota.fecha).format('DD/MM/YYYY hh:mm:ss');
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Debe hacer login primero",
                    duration: 3000,
                    position: "top"
                });
                _this.navCtrl.goToRoot({});
                toast.present();
            }
        });
    }
    ListPage.prototype.gotoNew = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__note_note__["a" /* NotePage */]);
    };
    ListPage.prototype.gotoDetail = function (element) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__note_note__["a" /* NotePage */]);
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notas del Diario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button small color="danger" (click)="gotoNew()">Nuevo</button>\n  <ion-grid>\n    <ion-row>\n      <ion-col>Fecha Nota</ion-col>\n      <ion-col>Acciones</ion-col>\n    </ion-row>\n    <ion-row wrap *ngFor="let nota of Notas">\n      <ion-col width-25> {{ nota.fecha }}</ion-col>\n      <ion-col width-25> <button ion-button small color="danger" (click)="gotoDetails(nota)"> Ver</button></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], ListPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.email = "";
        this.clave = "";
    }
    LoginPage.prototype.ingresar = function () {
        var loguear = false;
        /*
        this.storage.get(this.email).then((val) =>{
          val = JSON.parse(val);
          if(val){
            if(val.email == this.email && val.clave == this.clave){
              loguear = true;
            }
    
            if (loguear){
              let loader = this.loadingCtrl.create({
                content: "Ingresando..",
                duration: 3000
              });
              loader.present().then(x => {
        */
        this.storage.set("login", "true");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], {});
        /*
              });
            }else{
              let toast = this.toastCtrl.create({
                message: "Datos ingresados incorrectos",
                duration: 3000,
                position: "top"
              });
              this.storage.set("login", "false");
              toast.present();
            }
          }else{
            let toast = this.toastCtrl.create({
              message: "Datos ingresados incorrectos",
              duration: 3000,
              position: "top"
            });
            this.storage.set("login", "false");
            toast.present();
          }
        });
        */
    };
    LoginPage.prototype.redireccionar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Iniciar Sesión</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="redireccionar()">\n        <ion-icon name="md-exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="fondo">\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label color="primary" floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Clave</ion-label>\n        <ion-input type="password" [(ngModel)]="clave"></ion-input>\n      </ion-item>\n      <ion-item>\n      </ion-item>\n      <button ion-button full color="primary" (click)="ingresar()">Aceptar</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		544,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotePage = (function () {
    function NotePage(navCtrl, navParams, toastCtrl, storage, media) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.media = media;
        this.estado = "0";
        this.tipo = "0";
        this.inRecord = false;
        this.Notas = new Array();
        var self = this;
        this.storage.get("login").then(function (val) {
            if (val == "true") {
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "Debe hacer login primero",
                    duration: 3000,
                    position: "top"
                });
                _this.navCtrl.goToRoot({});
                toast.present();
            }
        });
    }
    NotePage.prototype.dataURItoBlob = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    NotePage.prototype.startAudio = function () {
        var fecha = new Date();
        this.NewAudio = this.media.create(fecha.getTime() + '.mp3');
        this.NewAudio.startRecord();
        this.inRecord = true;
    };
    NotePage.prototype.stopAudio = function () {
        this.NewAudio.stopRecord();
        this.inRecord = false;
    };
    return NotePage;
}());
NotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-note',template:/*ion-inline-start:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\note\note.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notas del Diario</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button small color="danger" (click)="startAudio()" ng-hide="inRecord">Grabar Audio</button>\n  <button ion-button small color="danger" (click)="stopAudio()" ng-show="inRecord">Finalizar Audio</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\pages\note\note.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */]) === "function" && _e || Object])
], NotePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=note.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_note_note__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyCa4GG9OvWVAo6YMGbK-BzkJrjlUBKLHNQ",
    authDomain: "ionicdcd.firebaseapp.com",
    databaseURL: "https://ionicdcd.firebaseio.com",
    projectId: "ionicdcd",
    storageBucket: "ionicdcd.appspot.com",
    messagingSenderId: "766134435873"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_note_note__["a" /* NotePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['DOmingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
                dayShortNames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'ionicdcd'),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_note_note__["a" /* NotePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            Storage,
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 235,
	"./af.js": 235,
	"./ar": 236,
	"./ar-dz": 237,
	"./ar-dz.js": 237,
	"./ar-kw": 238,
	"./ar-kw.js": 238,
	"./ar-ly": 239,
	"./ar-ly.js": 239,
	"./ar-ma": 240,
	"./ar-ma.js": 240,
	"./ar-sa": 241,
	"./ar-sa.js": 241,
	"./ar-tn": 242,
	"./ar-tn.js": 242,
	"./ar.js": 236,
	"./az": 243,
	"./az.js": 243,
	"./be": 244,
	"./be.js": 244,
	"./bg": 245,
	"./bg.js": 245,
	"./bm": 246,
	"./bm.js": 246,
	"./bn": 247,
	"./bn.js": 247,
	"./bo": 248,
	"./bo.js": 248,
	"./br": 249,
	"./br.js": 249,
	"./bs": 250,
	"./bs.js": 250,
	"./ca": 251,
	"./ca.js": 251,
	"./cs": 252,
	"./cs.js": 252,
	"./cv": 253,
	"./cv.js": 253,
	"./cy": 254,
	"./cy.js": 254,
	"./da": 255,
	"./da.js": 255,
	"./de": 256,
	"./de-at": 257,
	"./de-at.js": 257,
	"./de-ch": 258,
	"./de-ch.js": 258,
	"./de.js": 256,
	"./dv": 259,
	"./dv.js": 259,
	"./el": 260,
	"./el.js": 260,
	"./en-au": 261,
	"./en-au.js": 261,
	"./en-ca": 262,
	"./en-ca.js": 262,
	"./en-gb": 263,
	"./en-gb.js": 263,
	"./en-ie": 264,
	"./en-ie.js": 264,
	"./en-nz": 265,
	"./en-nz.js": 265,
	"./eo": 266,
	"./eo.js": 266,
	"./es": 267,
	"./es-do": 268,
	"./es-do.js": 268,
	"./es-us": 269,
	"./es-us.js": 269,
	"./es.js": 267,
	"./et": 270,
	"./et.js": 270,
	"./eu": 271,
	"./eu.js": 271,
	"./fa": 272,
	"./fa.js": 272,
	"./fi": 273,
	"./fi.js": 273,
	"./fo": 274,
	"./fo.js": 274,
	"./fr": 275,
	"./fr-ca": 276,
	"./fr-ca.js": 276,
	"./fr-ch": 277,
	"./fr-ch.js": 277,
	"./fr.js": 275,
	"./fy": 278,
	"./fy.js": 278,
	"./gd": 279,
	"./gd.js": 279,
	"./gl": 280,
	"./gl.js": 280,
	"./gom-latn": 281,
	"./gom-latn.js": 281,
	"./gu": 282,
	"./gu.js": 282,
	"./he": 283,
	"./he.js": 283,
	"./hi": 284,
	"./hi.js": 284,
	"./hr": 285,
	"./hr.js": 285,
	"./hu": 286,
	"./hu.js": 286,
	"./hy-am": 287,
	"./hy-am.js": 287,
	"./id": 288,
	"./id.js": 288,
	"./is": 289,
	"./is.js": 289,
	"./it": 290,
	"./it.js": 290,
	"./ja": 291,
	"./ja.js": 291,
	"./jv": 292,
	"./jv.js": 292,
	"./ka": 293,
	"./ka.js": 293,
	"./kk": 294,
	"./kk.js": 294,
	"./km": 295,
	"./km.js": 295,
	"./kn": 296,
	"./kn.js": 296,
	"./ko": 297,
	"./ko.js": 297,
	"./ky": 298,
	"./ky.js": 298,
	"./lb": 299,
	"./lb.js": 299,
	"./lo": 300,
	"./lo.js": 300,
	"./lt": 301,
	"./lt.js": 301,
	"./lv": 302,
	"./lv.js": 302,
	"./me": 303,
	"./me.js": 303,
	"./mi": 304,
	"./mi.js": 304,
	"./mk": 305,
	"./mk.js": 305,
	"./ml": 306,
	"./ml.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 308,
	"./ms-my": 309,
	"./ms-my.js": 309,
	"./ms.js": 308,
	"./mt": 310,
	"./mt.js": 310,
	"./my": 311,
	"./my.js": 311,
	"./nb": 312,
	"./nb.js": 312,
	"./ne": 313,
	"./ne.js": 313,
	"./nl": 314,
	"./nl-be": 315,
	"./nl-be.js": 315,
	"./nl.js": 314,
	"./nn": 316,
	"./nn.js": 316,
	"./pa-in": 317,
	"./pa-in.js": 317,
	"./pl": 318,
	"./pl.js": 318,
	"./pt": 319,
	"./pt-br": 320,
	"./pt-br.js": 320,
	"./pt.js": 319,
	"./ro": 321,
	"./ro.js": 321,
	"./ru": 322,
	"./ru.js": 322,
	"./sd": 323,
	"./sd.js": 323,
	"./se": 324,
	"./se.js": 324,
	"./si": 325,
	"./si.js": 325,
	"./sk": 326,
	"./sk.js": 326,
	"./sl": 327,
	"./sl.js": 327,
	"./sq": 328,
	"./sq.js": 328,
	"./sr": 329,
	"./sr-cyrl": 330,
	"./sr-cyrl.js": 330,
	"./sr.js": 329,
	"./ss": 331,
	"./ss.js": 331,
	"./sv": 332,
	"./sv.js": 332,
	"./sw": 333,
	"./sw.js": 333,
	"./ta": 334,
	"./ta.js": 334,
	"./te": 335,
	"./te.js": 335,
	"./tet": 336,
	"./tet.js": 336,
	"./th": 337,
	"./th.js": 337,
	"./tl-ph": 338,
	"./tl-ph.js": 338,
	"./tlh": 339,
	"./tlh.js": 339,
	"./tr": 340,
	"./tr.js": 340,
	"./tzl": 341,
	"./tzl.js": 341,
	"./tzm": 342,
	"./tzm-latn": 343,
	"./tzm-latn.js": 343,
	"./tzm.js": 342,
	"./uk": 344,
	"./uk.js": 344,
	"./ur": 345,
	"./ur.js": 345,
	"./uz": 346,
	"./uz-latn": 347,
	"./uz-latn.js": 347,
	"./uz.js": 346,
	"./vi": 348,
	"./vi.js": 348,
	"./x-pseudo": 349,
	"./x-pseudo.js": 349,
	"./yo": 350,
	"./yo.js": 350,
	"./zh-cn": 351,
	"./zh-cn.js": 351,
	"./zh-hk": 352,
	"./zh-hk.js": 352,
	"./zh-tw": 353,
	"./zh-tw.js": 353
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 525;

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.statusBar.backgroundColorByHexString("#7ea23e");
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Listar Notas', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icon: 'arrow-round-forward' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="dark">\n    <ion-list class="list">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\andres.brizuela\Desktop\Cursos\Ionic\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[395]);
//# sourceMappingURL=main.js.map