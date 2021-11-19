(self["webpackChunkScrape"] = self["webpackChunkScrape"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 5089);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ 2768);






let HomePage = class HomePage {
    constructor(socket, toastCtrl) {
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.message = '';
        this.messages = [];
        this.currentUser = '';
    }
    ngOnInit() {
        this.socket.connect();
        let name = `User-${new Date().getTime()}`;
        this.currentUser = name;
        this.socket.emit('set-name', name);
        this.socket.fromEvent('users-changed')
            .subscribe(socketData => {
            console.log('socket data: ', socketData);
            let user = socketData['user'];
            if (socketData['event'] === 'left') {
                this.showToast(`User left: ${user}`);
            }
            else {
                this.showToast(`User joined: ${user}`);
            }
        });
        this.socket.fromEvent('message')
            .subscribe(messsage => {
            console.log('New: ', messsage);
            this.messages.push(messsage);
        });
    }
    sendMessage() {
        this.socket.emit('send-message', { text: this.message });
        this.message = '';
    }
    showToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    ionViewWillLeave() {
        this.socket.disconnect();
    }
};
HomePage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__.Socket },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\nion-content {\n  --background: white;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: red;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #172e9f;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  margin-top: 0px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  color: red;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBjb2xvcjogcmVkO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogIzE3MmU5Zjtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogI2RmZGZkZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tc2ctYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Chat with Arduino\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-text color=\"medium\" text-center>\n      <p>You joined the chat as {{ currentUser }}</p>\n    </ion-text>\n    <ion-row *ngFor=\"let message of messages\">\n\n      <ion-col size=\"9\" *ngIf=\"message.user !== currentUser\" class=\"message other-message\">\n        <b>{{ message.user }}</b><br>\n        <span>{{ message.msg }}</span>\n        <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n\n      <ion-col offset=\"3\" size=\"9\" *ngIf=\"message.user === currentUser\" class=\"message my-message\">\n        <b>{{ message.user }}</b><br>\n        <span>{{ message.msg }}</span>\n        <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row align-items-center>\n      <ion-col size=\"10\">\n        <ion-textarea auto-grow class=\"message-input\" rows=\"1\" [(ngModel)]=\"message\"></ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"message === ''\" class=\"msg-btn\"\n          (click)=\"sendMessage()\">\n          Send<!-- <ion-icon name=\"ios-send\" slot=\"icon-only\"></ion-icon> -->\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map