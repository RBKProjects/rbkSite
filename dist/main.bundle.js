webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 115;


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(138);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'RBK';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(218),
        styles: [__webpack_require__(192)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_user_auth_signup_signup_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_user_auth_signin_signin_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_user_auth_facebook_log_in_facebook_log_in_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_user_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_employee_employeehome_employeehome_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_employee_signinemployee_signinemployee_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_facebook__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_employee_eAuth_e_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footbar_footbar_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__navbar_navbar_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__interview_interview_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_user_auth_mindest_ass_mindest_ass_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_user_auth_ana_ass_ana_ass_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__con_user_guard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__update_info_update_info_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_user_auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_user_auth_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_user_auth_facebook_log_in_facebook_log_in_component__["a" /* FacebookLogInComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__["a" /* UserhomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_employee_employeehome_employeehome_component__["a" /* EmployeehomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_employee_signinemployee_signinemployee_component__["a" /* SigninemployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__["a" /* TestviewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__["a" /* EmployeeFbLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footbar_footbar_component__["a" /* FootbarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__interview_interview_component__["a" /* InterviewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_user_auth_mindest_ass_mindest_ass_component__["a" /* MindestAssComponent */],
            __WEBPACK_IMPORTED_MODULE_24__home_user_auth_ana_ass_ana_ass_component__["a" /* AnaAssComponent */],
            __WEBPACK_IMPORTED_MODULE_26__update_info_update_info_component__["a" /* UpdateInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__["a" /* UserhomeComponent */] },
                { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__home_user_auth_signup_signup_component__["a" /* SignupComponent */] },
                { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_9__home_user_auth_signin_signin_component__["a" /* SigninComponent */] },
                { path: 'uhome', component: __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__["a" /* UserhomeComponent */] },
                { path: 'ehome', component: __WEBPACK_IMPORTED_MODULE_13__home_employee_employeehome_employeehome_component__["a" /* EmployeehomeComponent */] },
                { path: 'esignin', component: __WEBPACK_IMPORTED_MODULE_14__home_employee_signinemployee_signinemployee_component__["a" /* SigninemployeeComponent */] },
                { path: 'fbUsignin', component: __WEBPACK_IMPORTED_MODULE_10__home_user_auth_facebook_log_in_facebook_log_in_component__["a" /* FacebookLogInComponent */] },
                { path: 'test', component: __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__["a" /* TestviewComponent */] },
                { path: 'interview', component: __WEBPACK_IMPORTED_MODULE_22__interview_interview_component__["a" /* InterviewComponent */] },
                { path: 'minAss', component: __WEBPACK_IMPORTED_MODULE_23__home_user_auth_mindest_ass_mindest_ass_component__["a" /* MindestAssComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__con_user_guard__["a" /* ConUserGuard */]] },
                { path: 'anaAss', component: __WEBPACK_IMPORTED_MODULE_24__home_user_auth_ana_ass_ana_ass_component__["a" /* AnaAssComponent */] },
                { path: 'esignin', component: __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__["a" /* EmployeeFbLoginComponent */] },
                { path: 'test', component: __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__["a" /* TestviewComponent */] },
                { path: 'updateinfo', component: __WEBPACK_IMPORTED_MODULE_26__update_info_update_info_component__["a" /* UpdateInfoComponent */] }
            ])
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_11__home_user_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__home_employee_eAuth_e_auth_service__["a" /* EAuthService */], __WEBPACK_IMPORTED_MODULE_25__con_user_guard__["a" /* ConUserGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConUserGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConUserGuard = (function () {
    function ConUserGuard() {
    }
    ConUserGuard.prototype.canActivate = function (next, state) {
        return this.isLogin();
    };
    ConUserGuard.prototype.isLogin = function () {
        if (localStorage.getItem('id_token').length) {
            return true;
        }
        else {
            return false;
        }
    };
    return ConUserGuard;
}());
ConUserGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ConUserGuard);

//# sourceMappingURL=con-user.guard.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FootbarComponent = (function () {
    function FootbarComponent(router) {
        this.router = router;
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    FootbarComponent.prototype.signUp = function () {
        this.router.navigate(['/signup']);
    };
    return FootbarComponent;
}());
FootbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-footbar',
        template: __webpack_require__(219),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FootbarComponent);

var _a;
//# sourceMappingURL=footbar.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eAuth_e_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeFbLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeFbLoginComponent = (function () {
    function EmployeeFbLoginComponent(fb, _ngZone, auth, http, router) {
        this.fb = fb;
        this._ngZone = _ngZone;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.name = "";
        this.isUser = false;
        this.id = "";
        this.email = "";
        this.no = false;
        this.firstName = "";
        this.lastName = "";
        var initParams = {
            appId: "820622594754755",
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    EmployeeFbLoginComponent.prototype.ngOnInit = function () { };
    EmployeeFbLoginComponent.prototype.loginWithFacebook = function () {
        this.fb.login()
            .then(function (response) { return console.log('Logged in', response); })
            .catch(function (e) { return console.error('Error logging in'); });
    };
    EmployeeFbLoginComponent.prototype.getEmpInfo = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            var promise = _this.fb.api('/me'); //function give data from fb...
            var emp = " ";
            promise.then(function (res) {
                //variables to save the data that come from fb ...
                _this.id = res.id;
                _this.name = res.name;
                _this.email = res.email;
                _this.isUser = true;
                _this.firstName = _this.name.slice(0, _this.name.indexOf(emp));
                _this.lastName = _this.name.slice(_this.name.indexOf(emp));
                _this.auth.eFacebookLogin({ FbID: _this.id, userName: _this.name, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                    if (data.token) {
                        _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                        _this.router.navigate(['/ehome']);
                    }
                    else {
                        _this.auth.eFacebookSignup({ FbID: _this.id, userName: _this.name, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                            if (data) {
                                console.log("insid the sigin");
                                _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                                _this.router.navigate(['/ehome']);
                            }
                            else {
                                console.log("error");
                                _this.router.navigate(['/esignin']); // if the user is not in DB first go to signup page to registe ...
                            }
                        }); //close of the signup ...
                    } // else close..
                }); //close of first subscribe ...
                console.log(res);
            }); //close of promise ...
        }); //close of fb.login...
    }; // close of the function ...
    EmployeeFbLoginComponent.prototype.logOut = function () {
        this.auth.logout();
    }; //logout function from fb && all the app...
    return EmployeeFbLoginComponent;
}());
EmployeeFbLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-employee-fb-login',
        template: __webpack_require__(220),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__eAuth_e_auth_service__["a" /* EAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eAuth_e_auth_service__["a" /* EAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], EmployeeFbLoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=employee-fb-login.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeehomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeehomeComponent = (function () {
    function EmployeehomeComponent() {
    }
    EmployeehomeComponent.prototype.ngOnInit = function () {
    };
    return EmployeehomeComponent;
}());
EmployeehomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-employeehome',
        template: __webpack_require__(221),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], EmployeehomeComponent);

//# sourceMappingURL=employeehome.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninemployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninemployeeComponent = (function () {
    function SigninemployeeComponent() {
    }
    SigninemployeeComponent.prototype.ngOnInit = function () {
    };
    return SigninemployeeComponent;
}());
SigninemployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signinemployee',
        template: __webpack_require__(222),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [])
], SigninemployeeComponent);

//# sourceMappingURL=signinemployee.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(223),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnaAssComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnaAssComponent = (function () {
    function AnaAssComponent() {
        this.qusArr = ["do as you would be done by!", "As you saw , so will you reap!", "life what ever will continue !!!"];
    }
    AnaAssComponent.prototype.ngOnInit = function () {
    };
    return AnaAssComponent;
}());
AnaAssComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-ana-ass',
        template: __webpack_require__(224),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [])
], AnaAssComponent);

//# sourceMappingURL=ana-ass.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacebookLogInComponent = (function () {
    function FacebookLogInComponent(fb, _ngZone, auth, http, router) {
        this.fb = fb;
        this._ngZone = _ngZone;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.name = "";
        this.isUser = false;
        this.id = "";
        this.email = "";
        this.no = false;
        this.firstName = "";
        this.lastName = "";
        var initParams = {
            appId: "820622594754755",
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    FacebookLogInComponent.prototype.ngOnInit = function () { };
    FacebookLogInComponent.prototype.loginWithFacebook = function () {
        this.fb.login()
            .then(function (response) { return console.log('Logged in', response); })
            .catch(function (e) { return console.error('Error logging in'); });
    };
    FacebookLogInComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            var promise = _this.fb.api('/me'); //function give data from fb...
            var emp = " ";
            promise.then(function (res) {
                //variables to save the data that come from fb ...
                _this.id = res.id;
                _this.name = res.name;
                _this.email = res.email;
                _this.isUser = true;
                _this.firstName = _this.name.slice(0, _this.name.indexOf(emp));
                _this.lastName = _this.name.slice(_this.name.indexOf(emp));
                _this.auth.facebookLogin({ FbID: _this.id, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                    if (data.token) {
                        _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                        _this.router.navigate(['/uhome']);
                    }
                    else {
                        _this.auth.facebookSignup({ FbID: _this.id, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                            if (data) {
                                console.log("insid the sigin");
                                _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                                _this.router.navigate(['/uhome']);
                            }
                            else {
                                console.log("error");
                                _this.router.navigate(['/signin']); // if the user is not in DB first go to signup page to registe ...
                            }
                        }); //close of the signup ...
                    } // else close..
                }); //close of first subscribe ...
                console.log(res);
            }); //close of promise ...
        }); //close of fb.login...
    }; // close of the function ...
    FacebookLogInComponent.prototype.logOut = function () {
        this.auth.logout();
    }; //logout function from fb && all the app...
    return FacebookLogInComponent;
}()); //close of the class ...
FacebookLogInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-facebook-log-in',
        template: __webpack_require__(225),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], FacebookLogInComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=facebook-log-in.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindestAssComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MindestAssComponent = (function () {
    function MindestAssComponent() {
        this.qusArr = ["do as you would be done by!", "As you saw , so will you reap!", "life what ever will continue !!!"];
    }
    MindestAssComponent.prototype.ngOnInit = function () {
        console.log(this.qusArr);
    };
    return MindestAssComponent;
}());
MindestAssComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-mindest-ass',
        template: __webpack_require__(226),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [])
], MindestAssComponent);

//# sourceMappingURL=mindest-ass.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.signinCom = new __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */](router, authService, formBuilder);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators__["a" /* emailValidator */]])],
            conEmail: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        }, { validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__validators__["b" /* matching */])('email', 'conEmail', 'password', 'confirmPassword') });
    };
    SignupComponent.prototype.addNewUser = function (value) {
        var _this = this;
        this.user = value;
        console.log(value);
        this.authService.signup({ user: this.user }).subscribe(function (data) {
            if (data) {
                _this.signinCom.submitSignIn(value);
                _this.authService.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                _this.router.navigate(['/uhome']);
            }
            else {
                _this.router.navigate(['/signup']);
            }
        });
    }; //end of signup function ...
    SignupComponent.prototype.fbLogin = function () {
        this.fbulogin.getUserInfo();
    };
    return SignupComponent;
}()); //end of the class ...
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(228),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserhomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserhomeComponent = (function () {
    function UserhomeComponent(route) {
        this.route = route;
        this.testflag = false;
        this.but1flag = true;
        this.tests = [];
    }
    UserhomeComponent.prototype.ngOnInit = function () {
        this.tests = [{ id: "123", name: "btata" }, { id: "333", name: "lol" }];
        // 'bank' is the name of the route parameter
        this.bankName = this.route.snapshot.params['bank'];
    };
    UserhomeComponent.prototype.testshow = function () {
        this.testflag = !this.testflag;
    };
    return UserhomeComponent;
}());
UserhomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-userhome',
        template: __webpack_require__(229),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], UserhomeComponent);

var _a;
//# sourceMappingURL=userhome.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InterviewComponent = (function () {
    function InterviewComponent() {
    }
    InterviewComponent.prototype.ngOnInit = function () {
    };
    return InterviewComponent;
}());
InterviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-interview',
        template: __webpack_require__(230),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [])
], InterviewComponent);

//# sourceMappingURL=interview.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_user_service_auth_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.flage = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.callSignup = function () {
        this.flage = false;
        this.router.navigate(['/signup']);
    };
    NavbarComponent.prototype.testUser = function () {
        console.log(localStorage.getItem('id_token'));
        if (localStorage.getItem('id_token').length) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logOut = function () {
        this.flage = true;
        this.auth.logout();
        this.router.navigate(['/signin']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(231),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__home_user_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_user_service_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestviewComponent = (function () {
    function TestviewComponent() {
    }
    TestviewComponent.prototype.ngOnInit = function () {
    };
    return TestviewComponent;
}());
TestviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-testview',
        template: __webpack_require__(232),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [])
], TestviewComponent);

//# sourceMappingURL=testview.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_user_service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateInfoComponent = (function () {
    function UpdateInfoComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.genders = [
            'Female',
            'Male',
            'Other'
        ];
        this.englishAbility = [
            '1-No English',
            '2-I can speak & read a little',
            '3-I can watch movies with no subtitles',
            '4-I can have a technical conversation with a native speaker',
            "5-I'm a native speaker"
        ];
        this.educationLevel = [
            'Some High School',
            'High School Graduate',
            'Vocational Training',
            'Some University',
            'University Graduate (4+ Year Undergraduate Degree) ',
            'Masters Degree ', 'PhD ', 'Other',
        ];
        this.knowRBK = [
            'From a Friend', 'Email', 'Event', 'Posters', 'Facebook', 'Web Search (Google, ect.)'
        ];
        this.codeExperience = ['Yes', 'No'];
        this.isRefugee = ['Yes', 'No'];
    }
    UpdateInfoComponent.prototype.ngOnInit = function () {
        this.updateInfo = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            nationality: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            englishAbility: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            knowRBK: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            educationLevel: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            codeExperience: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            isRefugee: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    UpdateInfoComponent.prototype.updateCandidateInfo = function (value) {
        var _this = this;
        console.log(value);
        this.authService.updateInfo(value, localStorage.getItem('user-id')).subscribe(function (data) {
            if (data) {
                console.log(data);
                // this.router.navigate(['/next']);
            }
            else {
                _this.router.navigate(['/signup']);
            }
        });
    };
    return UpdateInfoComponent;
}());
UpdateInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-update-info',
        template: __webpack_require__(233),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_user_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_user_service_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], UpdateInfoComponent);

var _a, _b, _c;
//# sourceMappingURL=update-info.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, fb) {
        this.http = http;
        this.fb = fb;
        this.userToken = "x";
    }
    AuthService.prototype.signin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json'); //add the type of data to the header...
        return this.http.post('api/user/signin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.signup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/signup', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeInLocalStorage = function (token, id, name) {
        localStorage.setItem('id_token', token); //store the user token in the localStorage ... 
        localStorage.setItem('user-id', id); //store the user _id in the localStorage ... 
        localStorage.setItem('user-name', name); //store the user name in the localStorage ... 
        this.userToken = token;
    };
    AuthService.prototype.facebookLogin = function (user) {
        console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json'); //add the type of data to the header...
        return this.http.post('api/user/facebookLogin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.facebookSignup = function (user) {
        console.log("hiiiii", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/facbookSignup', { user: user }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.userToken = null;
        localStorage.clear();
        this.fb.logout().then(function () { return console.log('Logged out!'); });
    };
    AuthService.prototype.updateInfo = function (user, params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/update/' + params, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userLoginTest = function () {
        console.log(localStorage.getItem('id_token'));
        if (localStorage.getItem('id_token').length) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "body{\r\n  overflow: auto;\r\n}\r\n#b{\r\n  background-color:#C71585;\r\n  color:white;\r\n  padding: 12px 28px;\r\n  \r\n}\r\nimg{\r\n  float: left;\r\n}\r\n#navbarCollapse{\r\n  float: right;\r\n  align: center;\r\n  margin-top: 0px;\r\n  padding-right:25px;\r\n}\r\n.fm{\r\n   margin-right: 0px;\r\n}\r\n#d{\r\n  float: right;\r\n}\r\n#sign{\r\n  background-color: none;\r\n  border:1px solid white;\r\n  width: 110px;\r\n}\r\np{\r\n  left: 20%;\r\n  color: white;\r\n}\r\nsmall{\r\n  color:#F0F0F0;\r\n  padding-right: 60px;\r\n}\r\n#last{\r\n  left:30%;\r\n}\r\n.wf-container{\r\nborder: 1px solid #FFFFFF;\r\nbackground-color: #C71585; \r\nmin-height:200px;\r\nmin-width:150px\r\n}\r\n#hr{\r\n   border-top: 1px solid #DCDCDC;\r\n}\r\n.ri{\r\n  padding-left: 20px;\r\n}\r\n#ri{\r\n  padding-top: 7px;\r\n}\r\n#foot{\r\n   border:1px solid;\r\n   border-top-color: #DCDCDC;\r\n   background:#b31277 !important; \r\n   padding-left: 30px;  \r\n}\r\ninput[type=submit]:focus {\r\n  border-size:2px;\r\n    border-color:white;\r\n}\r\ninput[type=\"submit\"], textarea {\r\n  padding-top: 2px;\r\n  border: 2px solid #DCDCDC;\r\n  color:white;\r\n  background-color : #C71585;\r\n}\r\n.receive1 small{\r\n  padding-right: 0px;\r\n  vertical-align:bottom;\r\n  border: none !important ;\r\n  padding-left: 825px;\r\n  \r\n}\r\n.receive2{\r\n  padding-right: 0px;\r\n  padding-left: 780px;\r\n  text-align: center;\r\n}\r\n#r{\r\n   position: fixed;\r\n  bottom: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background: #f1f1f1;\r\n  font-family: 'Merriweather', sans-serif;\r\n  padding: 1em;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #a8a8a8;\r\n  text-shadow: 1px 1px 0 white;\r\n}\r\n\r\nform {\r\n  max-width: 600px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n}\r\nform input,\r\nform textarea {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 1em;\r\n  border-radius: 8px;\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 1em;\r\n  font-family: 'Merriweather', sans-serif;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  resize: none;\r\n}\r\nform input:focus,\r\nform textarea:focus {\r\n  box-shadow: 0 0px 2px #8100b4 !important;\r\n}\r\nform #input-submit {\r\n  color: white;\r\n  background: #8100b4 ;\r\n  cursor: pointer;\r\n}\r\nform #input-submit:hover {\r\n  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\r\n}\r\nform textarea {\r\n  height: 126px;\r\n}\r\n\r\n.half {\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.left {\r\n  margin-right: 2%;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .half {\r\n    width: 100%;\r\n    float: none;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n/* Clearfix */\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  /* 1 */\r\n  display: table;\r\n  /* 2 */\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n  .error {\r\n    color: #FF4500;\r\n    font-size: small;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h3{ \r\n\t\r\n\tcolor:#C71585;\r\n\tpadding-left: 15px;\r\n}\r\n.inside{\r\n\tpadding: 25px;\r\n}\r\n.inside2{\r\n\tpadding: 37px;\r\n}\r\n.col-md-2{\r\n\ttext-align: center;\r\n}\r\n.x{\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n}\r\n.y{\r\n display: block;\r\n}\r\n.r1{\r\n\tcolor:#C71585;\r\n\tmargin-left: 130px;\r\n}\r\n.r{\r\n   color:#C71585;\r\n   margin-left: 14px;\r\n}\r\n.con{\r\n  border:1px solid #778899;\r\n}\r\ninput[type='radio'] {\r\n  -webkit-appearance:none;\r\n  width: 15px;\r\n  height: 15px;\r\n  border:1px solid #C71585;\r\n  border-radius:50%;\r\n  outline:none;\r\n\r\n}\r\ninput,label{\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\nform{\r\n\tmargin-left: 15px;\r\n}\r\np{\r\n\tmargin-left: 15px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\nbutton{\r\n   border: none;\r\n      }\r\n\r\ninput{\r\n padding:  0px 0px;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h3{ \r\n\t\r\n\tcolor:#C71585;\r\n\tpadding-left: 15px;\r\n}\r\n.inside{\r\n\tpadding: 25px;\r\n}\r\n.inside2{\r\n\tpadding: 37px;\r\n}\r\n.con{\r\n  border:1px solid #778899;\r\n}\r\n.col-md-2{\r\n\ttext-align: center;\r\n}\r\n.x{\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n}\r\n.y{\r\n display: block;\r\n}\r\n.r1{\r\n\tcolor:#C71585;\r\n\tmargin-left: 130px;\r\n}\r\n.r{\r\n   color:#C71585;\r\n   margin-left: 14px;\r\n}\r\ninput[type='radio'] {\r\n  -webkit-appearance:none;\r\n  width: 15px;\r\n  height: 15px;\r\n  border:1px solid #C71585;\r\n  border-radius:50%;\r\n  outline:none;\r\n\r\n}\r\ninput,label{\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\nform{\r\n\tmargin-left: 15px;\r\n}\r\np{\r\n\tmargin-left: 15px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h3{\r\n   color:#C71585;\r\n}\r\n#image{\r\n   position: relative;\r\n     -webkit-filter: brightness(50%);\r\n             filter: brightness(50%);\r\n     background-repeat: no-repeat;\r\n\r\n}\r\n.sign{\r\n  color:#C71585;\r\n}\r\n#conBorder{\r\n  border: 0.5px solid #DCDCDC;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nlabel span{\r\n    color:#C71585;\r\n}\r\n.btn-primary {\r\n    background: #C71585;\r\n    color: white;\r\n    border:none;\r\n}\r\nh2.texth2{\r\n   color:white; \r\n   position: absolute; \r\n   text-align: center;\r\n   top: 100px;\r\n   left: 180px; \r\n}\r\np.texth2{\r\n   color:white; \r\n   position: absolute; \r\n   text-align: center;\r\n   top: 190px; \r\n   left: 100px;\r\n   }\r\n.btn-default{\r\n   background: #3B5998;\r\n   color:white;\r\n   width:100%;\r\n}\r\n.inside{\r\n   padding-left: 5px;\r\n   padding-right: 30px;\r\n}\r\n#fb{\r\n  padding-top: 0px;\r\n   width:230px;\r\n   height: 30px;\r\n  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\n#x{\r\n  color: white;\r\n}\r\nh5{\r\n  padding-left: 15px;\r\n   color:#C71585;\r\n}\r\nh3{\r\n  color:#C71585;\r\n}\r\nlabel span{\r\n    color:#C71585;\r\n}\r\ndiv{\r\n  padding-bottom: 0px;\r\n}\r\n.hp{\r\n  display: inline-block;\r\n}\r\n#sign{\r\n  color:#C71585;\r\n}\r\n\r\n#already{\r\n  margin-left:0px;\r\n  display:inline-block;\r\n}\r\n#conBorder{\r\n  border: 1px solid #DCDCDC;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n#d{\r\n  padding-right: 0px;\r\n}\r\n#image{\r\n  position: relative;\r\n  -webkit-filter: brightness(50%);\r\n          filter: brightness(50%);\r\n  background-repeat: no-repeat;\r\n }\r\n small{\r\n  padding-top: 0px;\r\n }\r\n #already{\r\n  padding-top: 0px;\r\n }\r\n.inside{\r\n  margin-top: 10px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  padding-top: 0px;\r\n  margin-bottom: 10px;\r\n\r\n}\r\nh2.texth2{\r\n   color:white; \r\n   position: absolute; \r\n   text-align: center;\r\n   top: 100px;\r\n   left: 180px; \r\n}\r\np.texth2{\r\n   color:white; \r\n   position: absolute; \r\n   text-align: center;\r\n   top: 190px; \r\n   left: 100px;\r\n   }\r\n.btn-primary {\r\n    background: #C71585;\r\n    color: white;\r\n    border:none;\r\n}\r\n#fb{\r\n  padding-top: 0px;\r\n   width:230px;\r\n   height: 30px;\r\n  \r\n}\r\n.col-md-6{\r\n  padding-right: 35px;\r\n}\r\n#input-submit{\r\n padding-top: 5px;\r\n padding-right: 40px;\r\n width:96.5%; \r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "body {\r\n  padding-top:70px;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  p,.btn,input,div,span,h4 {\r\n    font-size: 95%;\r\n  }\r\n  h1 {\r\n    font-size: 24px;  \r\n  }\r\n  h2 {\r\n    font-size: 22px;  \r\n  }\r\n  h6 {\r\n    font-size: 12px;  \r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  p,.btn,input,div,span,h4 {\r\n    font-size: 90%;\r\n  }\r\n  h1 {\r\n    font-size: 20px;  \r\n  }\r\n  h2 {\r\n    font-size: 18px;  \r\n  }\r\n  h6 {\r\n    font-size: 10px;  \r\n  }\r\n}\r\n.under{\r\nheight:35px;\r\npadding-top: 10px;\r\ntext-align: center;\r\n\r\n}\r\n\r\n#image{\r\n   \r\n     -webkit-filter: brightness(50%);\r\n   \r\n             filter: brightness(50%);\r\n     background-repeat: no-repeat;\r\n }\r\n.texth0{\r\n   position: absolute; \r\n   text-align: center;\r\n   top: 185px;\r\n   left: 640px; \r\n   color: white;\r\n}\r\n.texth1{\r\n   position: absolute; \r\n   text-align: center;\r\n   top: 205px;\r\n   left: 570px; \r\n   color: white;\r\n}\r\n.texth2{\r\n   position: absolute; \r\n   text-align: center;\r\n   top: 320px;\r\n   left: 320px; \r\n   color: white;\r\n}\r\n.texth2 span{\r\n  color:#C71585;\r\n}\r\n\r\n\r\n\r\n\r\n/* The side navigation menu */\r\n.sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 200px; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #8100b4; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 60px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover, .offcanvas a:focus{\r\n    color: #f1f1f1;\r\n}\r\n\r\n/* Position and style the close button (top right corner) */\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\nform {\r\n  max-width: 600px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n}\r\nform input,\r\nform textarea {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 1em;\r\n  border-radius: 8px;\r\n  display: block;\r\n  width: 30%;\r\n  margin-top: 1em;\r\n  font-family: 'Merriweather', sans-serif;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  resize: none;\r\n}\r\nform input:focus,\r\nform textarea:focus {\r\n  box-shadow: 0 0px 2px #8100b4 !important;\r\n}\r\nform #input-submit {\r\n  color: white;\r\n  background: #8100b4 ;\r\n  cursor: pointer;\r\n}\r\nform #input-submit:hover {\r\n  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div.card {\r\n  width: 1130px;\r\n  height: 450px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-color:#B0B0B0;  \r\n}\r\n.inter{\r\n  font-size:150px;\r\n  color:#B0B0B0;\r\n  text-align: center;\r\n}\r\n.ex1{\r\n    padding-left: 2cm;\r\n    color:#C71585;\r\n    font-size:30px;\r\n}\r\n.ex2{\r\n\tpadding-left: 3cm;\r\n\tfont-size:20px;\r\n\tcolor:#B0B0B0;\r\n}\r\n.ex2 span{\r\n\tcolor:#C71585;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".btn{\r\n  background-color: #C71585;\r\n  width: 110px;\r\n  margin-top: 10px;\r\n  height: 30px;\r\n  line-height: 5px;\r\n}\r\n\r\n#b{\r\n  background-color:#C71585;\r\n  color:white;\r\n  padding: 12px 28px;\r\n  \r\n}\r\n#rbk{\r\n  float: left;\r\n  max-width:18%; \r\n  margin-top: 0px;\r\n  padding-left: 0px;\r\n  height:auto;\r\n}\r\n#navbarCollapse{\r\n  float: right;\r\n  align: center;\r\n  margin-top: 0px;\r\n  padding-right:25px;\r\n}\r\n.fm{\r\n   margin-right: 0px;\r\n}\r\n#d{\r\n  float: right;\r\n}\r\n#sign{\r\n  background-color: none;\r\n  border: white;\r\n}\r\np{\r\n  left: 20%;\r\n  color: white;\r\n}\r\n#last{\r\n  left:30%;\r\n}\r\n.navbar-header{\r\n  border: 0 !important;\r\n  background: 0 !important; \r\n  color: #333 !important;\r\n  background: none !important;\r\n  box-shadow: none !important;\r\n  background-color: white;\r\n}\r\n.navbar-default{\r\n   border: 0 !important;\r\n   background: none !important;\r\n   box-shadow: none !important;\r\n   background-color:white;\r\n   border-color: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br>\r\n<br>\r\n<router-outlet></router-outlet>\r\n<br>\r\n<app-footbar></app-footbar>\r\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<footer>\n\n  <div class=\"wf-container\" >\n  <div class=\"container\">\n  <div class=\"row\">\n  <br>\n   <img style=\"max-width:15%; margin-top: 5px;padding-left: 50px;\n        \" src=\"assets/white_logo.png\" >\n    \n    <div class=\"receive2\">\n    <small>Receive the Latest News & Upcoming Events</small>\n    <form class=\"form-inline\" >\n     <div class=\"form-group\">\n     <input type=\"text\" class=\"form-control\" >\n     <input type=\"submit\" class=\"form-control\" value=\"sigin up\" id=\"sign\" (click)=\"signUp()\">\n     </div>\n    </form>\n    </div>\n\n  </div>\n  <hr id=\"hr\">\n  </div>\n       \n\n  <div class=\"container\">\n  <div class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" ><p class=\"ri\" >STUDENTS</p></div>\n    <div class=\"col-md-3\" ><p>COMPANY</p></div>\n    <div class=\"col-md-3\" ><p>MORE</p></div>\n    <div class=\"col-md-3\" ><p>SOCIAL</p></div>\n    </div>\n  </div><br>\n  <div class=\"col-md-12\">\n     <div class=\"row\">\n    <div class=\"col-md-3\" ><small class=\"ri\" >Tuition</small></div>\n    <div class=\"col-md-3\" ><small>About</small></div>\n    <div class=\"col-md-3\" ><small>Contact us</small></div>\n    <div class=\"col-md-3\" >\n    <div class=\"row\"><a href=\"https://web.facebook.com/RBK.org/?ref=ts&fref=ts\"><img src=\"assets/facebook.png\" style=\"max-width:15%; padding-left: 15px;\"></a>\n    <a href=\"https://www.instagram.com/rebootkamprbk/\"><img src=\"assets/instagram.png\" style=\"max-width:10%;\"></a>\n    <a href=\"https://www.linkedin.com/company-beta/10224156/\"><img src=\"assets/linkedin.png\" style=\"max-width:10%;\"></a>\n    <a href=\"https://twitter.com/ReBootKAMP/status/860987653872898049\"><img src=\"assets/twitter.png\" style=\"max-width:10%;\"></a>\n    <a href=\"https://www.youtube.com/watch?v=OZuF5x5Ob_c\"><img src=\"assets/youtube.png\" style=\"max-width:10%;\"></a></div></div>\n    </div>\n  </div><br>\n    <div class=\"col-md-12\">\n     <div class=\"row\">\n    <div class=\"col-md-3\" ><small class=\"ri\" >Scholarships</small></div>\n    <div class=\"col-md-3\" ><small>Team</small></div>\n    <div class=\"col-md-3\" ><small>FAQ</small></div>\n    </div>\n  </div><br>\n    <div class=\"col-md-12\">\n     <div class=\"row\">\n    <div class=\"col-md-3\" ><small class=\"ri\" >Student Projects</small></div>\n    <div class=\"col-md-3\" ><small>Blog</small></div>\n    </div>\n  </div><br>\n    <div class=\"col-md-12\">\n     <div class=\"row\">\n     <div class=\"col-md-3\" ><small class=\"ri\" >Grads</small></div>\n    </div>\n  </div>\n  </div>\n  <div  id=\"foot\">\n  <div  class=\"container\">\n  <p class=\"ri\" id=\"ri\" >&copy; <small>2017 RBK. All rights reserved.</small></p>\n  </div>\n  </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<form action=\"/action_page.php\">\r\n<input  type=\"image\"  (click)=\"logOut()\" src=\"../../../../../assets/logout.png\" width=\"40\" height=\"40\"/>\r\n<input  type=\"image\"  (click)=\"getEmpInfo()\" src=\"../../../../../assets/fb.png\" width=\"180\" height=\"50\"/>\r\n</form>\r\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employeehome works!\r\n</p>\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signinemployee works!\r\n</p>\r\n<div  class=\"cf\">\r\n  <h1>Sign In</h1>\r\n \r\n  <div class='col-xs-12'>\r\n   \r\n    <form [formGroup]=\"signinForm\"  (ngSubmit)=\"signinForm.valid && submitSignIn(signinForm.value)\" novalidate>\r\n      \r\n\r\n      \r\n      <fieldset class=\"form-group\">\r\n        \r\n        <input type=\"email\" id=\"input\" placeholder=\"E-mail\" formControlName=\"email\">\r\n        <div class=\"form-text error\" *ngIf=\"signinForm.controls.email.touched\">\r\n          <div *ngIf=\"signinForm.controls.email.hasError('required')\">Email is required.</div>\r\n          <div *ngIf=\"signinForm.controls.email.hasError('invalidEmail')\">Email is invalid.</div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        \r\n        <input type=\"password\" id=\"input\" placeholder=\"Password\" minlength='6' formControlName=\"password\">\r\n        <div class='form-text error' *ngIf=\"signinForm.controls.password.touched\">\r\n          <div *ngIf=\"signinForm.controls.password.hasError('required')\">Password is required.</div>\r\n          <!--<div *ngIf=\"signinForm.controls.password.hasError('minlength')\">Password isn't long enough.</div>-->\r\n        </div>\r\n      </fieldset>\r\n  \r\n\r\n    <input id=\"input-submit\" type='submit' [disabled]='!signinForm.valid' value=\"Submit\">\r\n    <!--<input id=\"input-submit\" type='submit'  routerLink=\"/\" value=\"facebook LogIn\">-->\r\n    \r\n       <a routerLink = \"/signup\" >dont have account? register now</a> \r\n   \r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"con\">\n   <div >\n  \t <img src=\"assets/analytical.jpg\" class=\"img-responsive\"/>\n   </div>\n   <div class=\"inside\">\n\t   <div class=\"col-md-12\">\n\t\t   <h3 >Analytical Assessment</h3>\n       <br>\n\t   </div>\n     <div class=\"inside2\">\n\t  \t<div *ngFor=\"let qus of qusArr; let i=index\" >{{i+1}}{{\". \"}}{{qus}}\n        <br> \n            <label class=\"r1\" >1 </label> \n            <label class=\"r\">2 </label>\n            <label class=\"r\">3 </label>\n            <label class=\"r\" >4 </label>\n            <label class=\"r\" >5 </label>\n        <br>\n         <div class=\"x\">\n          <p>Strongly Agree</p> \n            <form>\n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">\n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\"> \n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">   \n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">\n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">  \n            </form>\n         <p>Strongly Disagree</p>\n\n       </div>\n        <br>\n        <br>\n      </div>\n      <br>\n    </div>\n    </div>\n</div>\n</div>\n\n     \n\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "\r\n<form action=\"/action_page.php\">\r\n<input  type=\"image\"  (click)=\"logOut()\" src=\"../../../../../assets/logout.png\" width=\"40\" height=\"40\"/>\r\n<input  type=\"image\"  (click)=\"getUserInfo()\" src=\"../../../../../assets/fb.png\" width=\"180\" height=\"50\"/>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n  \r\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"con\">\n   <div>\n  \t <img src=\"assets/mindset.jpg\" class=\"img-responsive\"/>\n   </div>\n   <div class=\"container\">\n   <div class=\"inside\">\n\t   <div class=\"col-md-12\">\n\t\t   <h3 >Mindset Assessment</h3>\n       <br>\n\t   </div>\n     <div class=\"inside2\">\n\t  \t<div *ngFor=\"let qus of qusArr; let i=index\" >{{i+1}}{{\". \"}}{{qus}}\n        <br> \n            <label class=\"r1\" >1 </label> \n            <label class=\"r\">2 </label>\n            <label class=\"r\">3 </label>\n            <label class=\"r\" >4 </label>\n            <label class=\"r\" >5 </label>\n        <br>\n         <div class=\"x\">\n          <p>Strongly Agree</p> \n            <form>\n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">\n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\"> \n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">   \n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">\n             <input type=\"radio\" name=\"optradio\" class=\"radio-inline\">  \n            </form>\n         <p>Strongly Disagree</p>\n\n       </div>\n        <br>\n        <br>\n      </div>\n      <br>\n    </div>\n   </div>\n  </div>\n </div>\n</div>\n\n     \n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md-12\">\r\n  </div>\r\n     <div id=\"conBorder\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n          <div class=\"x\">\r\n             <img id=\"image\" src=\"assets/rbkStu2.jpg\" class=\"img-responsive\" />\r\n             <h2 class=\"texth2\"> Apply to RBK</h2>\r\n             <p class=\"texth2\">From here you can being your \r\n             application to <br>join the first code bootcamp \r\n             in the Arab World in <br>Amman and Mafraq, Jordan.</p>\r\n          </div>\r\n          </div>\r\n             <div id=\"d\">\r\n             <div class=\"col-md-6\">\r\n             <div class=\"inside\">\r\n                 <br>\r\n                 <br>\r\n                  \r\n                  <h3 class=\"sign\">Sign In</h3>\r\n                  <div class=\"col-md-12\">\r\n                  <form class=\"form-inline\" >\r\n                  <div class=\"form-group\">\r\n                      <label id=\"already\"><small>Don't have an account?</small></label>\r\n                      <a routerLink = \"/signup\"><label class=\"sign\">Create an account</label></a>\r\n                  </div>\r\n                  </form>\r\n                  </div>\r\n                  <form [formGroup]=\"signinForm\"  (ngSubmit)=\"signinForm.valid && submitSignIn(signinForm.value)\" novalidate>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"exampleInputEmail1\">Email<span>*</span></label>\r\n                          <input type=\"email\" class=\"form-control\" id=\"input\" placeholder=\"Email\" formControlName=\"email\">\r\n                           <div class=\"form-text error\" *ngIf=\"signinForm.controls.email.touched\">\r\n                            <div *ngIf=\"signinForm.controls.email.hasError('required')\">Email is required.</div>\r\n                            <div *ngIf=\"signinForm.controls.email.hasError('invalidEmail')\">Email is invalid.</div>\r\n                           </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"exampleInputPassword1\">Password<span>*</span></label>\r\n                          <input type=\"password\" class=\"form-control\" id=\"input\" placeholder=\"Password\" minlength='6' formControlName=\"password\" >\r\n                       </div>\r\n                       <div class='form-text error' *ngIf=\"signinForm.controls.password.touched\">\r\n                       <div *ngIf=\"signinForm.controls.password.hasError('required')\">Password is required.</div>\r\n                       <div *ngIf=\"signinForm.controls.password.hasError('minlength')\">Password isn't long enough.</div></div>\r\n                       <p class=\"sign\">Forget your password?</p>\r\n                    <input type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]='!signinForm.valid' value=\"Sign In\">\r\n                  </form>\r\n                  <br>\r\n                  <div class=\"form-group\">\r\n                      <div class=\"col-md-6\"><h5>OR One click sign in Facebook</h5></div>\r\n                      <div class=\"col-md-6\">\r\n                       <a>\r\n                       <img id=\"fb\" src=\"assets/Screen Shot 2017-05-14 at 3.53.18 PM.png\" /> \r\n                        </a>\r\n                     </div>\r\n                </div>\r\n                \r\n             </div>\r\n            </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"col-md-12\">\r\n</div>\r\n  <div id=\"conBorder\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"x\">\r\n             <img id=\"image\" src=\"assets/rbkStu2.jpg\" class=\"img-responsive\" />\r\n             <h2 class=\"texth2\"> Apply to RBK</h2>\r\n             <p class=\"texth2\">From here you can being your \r\n             application to <br>join the first code bootcamp \r\n             in the Arab World in <br>Amman and Mafraq, Jordan.</p>\r\n          </div>\r\n        </div>\r\n          <div id=\"d\">\r\n           <div class=\"col-md-6\">\r\n             <div class=\"inside\">\r\n                <h3>Create Acount</h3>\r\n                 <div class=\"col-md-12\" id=\"already\">\r\n                  <form class=\"form-inline\" >\r\n                     <div class=\"form-group\">\r\n                         <label id=\"already\"><small>Already have an account?</small></label>\r\n                         <a routerLink = \"/signin\"><label id=\"sign\">Sign in</label></a>\r\n                     </div>\r\n                  </form>\r\n                 </div>\r\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && addNewUser(registerForm.value)\" novalidate>\r\n                   <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                     <div class=\"form-group\">\r\n                      <label >First name <span>*</span></label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"input\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n                      <div class='form-text error' *ngIf='registerForm.controls.firstName.touched'>\r\n                      <div *ngIf=\"registerForm.controls.firstName.hasError('required')\"><small>First name is required.</small></div>\r\n                     </div>\r\n                    </div>\r\n                   </div>\r\n                  <div class=\"col-md-6\">\r\n                   <div class=\"form-group\">\r\n                    <label >Last name <span>*</span></label>\r\n                     <input type=\"text\" class=\"form-control\" id=\"input\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n                     <div class='form-text error' *ngIf='registerForm.controls.lastName.touched'>\r\n                     <div *ngIf=\"registerForm.controls.lastName.hasError('required')\"><span>Last name is required.</span></div>\r\n                      </div>\r\n                   </div>\r\n                  </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                   <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                     <label >Email <span>*</span></label>\r\n                     <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" formControlName=\"email\">\r\n                     <div class=\"form-text error\" *ngIf=\"registerForm.controls.email.touched\">\r\n                     <div *ngIf=\"registerForm.controls.email.hasError('required')\"><small>Email is required.</small></div>\r\n                     <div *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\"><small>Email is invalid.</small></div>\r\n                     </div>\r\n                    </div>\r\n                   </div>\r\n                 <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label >Confirm Email <span>*</span></label>\r\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Comfirm your email\"  formControlName=\"conEmail\">\r\n                    <div class='form-text error' *ngIf=\"registerForm.controls.conEmail.touched\">\r\n                    <div *ngIf=\"registerForm.hasError('mismatched')\"><small>Emails do not match.</small></div>\r\n                    </div>\r\n                  </div>\r\n                 </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label >Password <span>*</span></label>\r\n                      <input type=\"password\" class=\"form-control\"  placeholder=\"Password\" minlength='6' formControlName=\"password\">\r\n                      <div class='form-text error' *ngIf=\"registerForm.controls.password.touched\">\r\n                      <div *ngIf=\"registerForm.controls.password.hasError('required')\"><small>Password is required.</small></div>\r\n                      <div *ngIf=\"registerForm.controls.password.hasError('minlength')\"><small>Password isn't long enough.</small></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <label >Confirm Password <span>*</span></label>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n                        <div class='form-text error' *ngIf=\"registerForm.controls.confirmPassword.touched\">\r\n                        <div *ngIf=\"registerForm.hasError('mismatchedpass')\"><small>Passwords do not match.</small></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                    <input type=\"submit\" class=\"btn btn-primary btn-block\" id=\"input-submit\" type='submit' [disabled]='!registerForm.valid' value=\"Sign Up\">\r\n                    <br>\r\n                    <div class=\"col-md-12\">\r\n                     <div class=\"col-md-6\"><h5>Sign up with one click</h5></div>\r\n                      <div class=\"col-md-6\">\r\n                       <a>\r\n                       <img id=\"fb\" src=\"assets/Screen Shot 2017-05-14 at 3.53.18 PM.png\" /> \r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  userhome works!\r\n</p>\r\n<div>\r\n\r\n<form class=\"cf\">\r\n<input *ngIf=\"!testflag\" id=\"input-submit\" type='submit' (click)=\"testshow()\" value=\"view testsss\">\r\n</form>\r\n\r\n<div *ngIf=\"testflag\" class=\"sidenav\">\r\n<a (click)=\"testshow()\"> close</a>\r\n <div *ngFor=\"let test of tests\">\r\n <!-<a routerLink = \"/test\" routerLinkActive=\"active\" >{{test.name}}</a>-->\r\n<!--  <a [routerLink]=\"['/test', { _id: test.id }]\">{{test.name}}</a>\r\n\r\n sending test id from user home component to test iew controller\r\n </div>\r\n  <a href=\"#\">About</a>\r\n \r\n\r\n</div>\r\n\r\n\r\n\r\n</div> --> \r\n<div class=\"contant\">\r\n  <div class=\"upper\">\r\n     <h6 class=\"texth0\">Founding Partner</h6>\r\n     <img id=\"image\" src=\"assets/header.jpg\" class=\"img-responsive\" />\r\n      <h6 class=\"texth0\">Founding Partner</h6>\r\n      <div class=\"texth1\"> <img  src=\"assets/ReactorCore-Logo_RGB_small.png\" class=\"img-responsive\"/>\r\n      </div>\r\n      <h2 class=\"texth2\">Become <span>Software Engineer </span>& Get a Job in 18 Weeks Only</h2>\r\n     </div>\r\n  <div class=\"under\">\r\n     <p>The rest of the website : We will work on the content and design later!!</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div></div>\n  <div class=\"card\">\n    <p class=\"inter\">Interview</p>\n    <br>\n   <div class=\"foot\">\n     <p class=\"ex1\">Interview</p>\n     <p class=\"ex2\">Dear RBK future software engineer, congratulation! <span> Click Here </span>to choose an appointment </p>\n   </div>\n   <br>\n   <br>\n   <br>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<nav class=\"navbar navbar-default\">\n    <div class=\"row\">\n   \n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n           <img style=\"max-width:18%; margin-top: -7px;padding-left:40px; margin-left: 20px;\n\n        height:auto;\" src=\"assets/logo.png\"   />\n       \n        \n       \n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" >\n            <ul class=\"nav navbar-nav\" >\n                 <li><a href=\"#\" target=\"_blank\">The Program</a></li>\n                 <li><a href=\"#\" target=\"_blank\"> Curiculum</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Volunteers</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Partners</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Hire our Grads</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Alumni Outcome</a></li>\n                 <li><a href=\"#\" target=\"_blank\">FAQ</a></li>\n                 <li *ngIf=\"estUser()\"><button type=\"button\" id=\"b\" class=\"btn\" (click)=\"callSignup()\">Apply</button></li>\n                 <li *ngIf=\"testUser()\"><button type=\"button\" id=\"b\" class=\"btn\" (click)=\"logOut()\">logout</button></li>\n            </ul>\n           \n          </div> \n         </div>\n </div>\n\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  testview works!\r\n</p>\r\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"form-group\"  >\r\n  <form [formGroup]=\"updateInfo\" novalidate (ngSubmit)=\"updateInfo.valid && updateCandidateInfo(updateInfo.value)\"> \r\n            <label>First Name </label>\r\n            <input id=\"firstName\"  type=\"textbox\" class=\"form-control\"  formControlName=\"firstName\" placeholder=\"First name..\">\r\n      \r\n        <div class=\"form-group\">\r\n            <label >Last Name </label>\r\n            <input  id=\"lastName\" type=\"textbox\" class=\"form-control\"  formControlName=\"lastName\" placeholder=\"Last name..\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label >Phone </label>\r\n            <input id=\"phone\" type=\"number\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone..\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Date of Birth </label>\r\n            <input type=\"date\" id=\"date\"  class=\"form-control\"  formControlName=\"dateOfBirth\" placeholder=\"Date..\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Nationality </label>\r\n            <input type=\"textbox\" id=\"nationality\" class=\"form-control\" formControlName=\"nationality\" placeholder=\"Nationality..\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>City of Residence </label>\r\n            <input type=\"textbox\" id=\"city\" class=\"form-control\"  formControlName=\"city\" placeholder=\"City..\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Gender </label>\r\n           <select name=\"gender\" class=\"form-control\"   formControlName=\"gender\">\r\n               <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>English Ability</label>\r\n            <p>1 is The Worst, 5 is The Best</p>\r\n             <select name=\"englishAbility\" class=\"form-control\" formControlName=\"englishAbility\">\r\n               <option *ngFor=\"let eA of englishAbility\" [ngValue]=\"eA\">{{eA}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Education Level </label>\r\n          <select name=\"educationLevel\" class=\"form-control\"  formControlName=\"educationLevel\">\r\n               <option *ngFor=\"let ed of educationLevel\" [ngValue]=\"ed\">{{ed}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>How Did You Hear About RBK?</label>\r\n         <select name=\"knowRBK\" class=\"form-control\" formControlName=\"knowRBK\">\r\n               <option *ngFor=\"let kR of knowRBK\" [ngValue]=\"kR\">{{kR}}</option>\r\n            </select>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Do You Have Coding Experience? </label>\r\n            <select name=\"codeExperience\" class=\"form-control\" formControlName=\"codeExperience\">\r\n               <option *ngFor=\"let cE of codeExperience\" [ngValue]=\"cE\">{{cE}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Are You a Refugee? </label>\r\n          <select name=\"isRefugee\" class=\"form-control\" formControlName=\"isRefugee\">\r\n               <option *ngFor=\"let iR of isRefugee\" [ngValue]=\"iR\">{{iR}}</option>\r\n            </select>\r\n        </div>\r\n        <input class=\"btn btn-default btn-block\"   [disabled]='!updateInfo.valid' type='submit' value=\"Update\">\r\n        </form>\r\n         </div>\r\n\r\n       \r\n "

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EAuthService = (function () {
    function EAuthService(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    EAuthService.prototype.storeInLocalStorage = function (token, id, name) {
        localStorage.setItem('id_token', token); //store the user token in the localStorage ... 
        localStorage.setItem('user-id', id); //store the user _id in the localStorage ... 
        localStorage.setItem('user-name', name); //store the user name in the localStorage ... 
    };
    EAuthService.prototype.eFacebookLogin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json'); //add the type of data to the header...
        return this.http.post('api/user/facebookLogin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EAuthService.prototype.eFacebookSignup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/facbookSignup', { user: user }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EAuthService.prototype.logout = function () {
        localStorage.clear();
        this.fb.logout().then(function () { return console.log('Logged out!'); });
    };
    return EAuthService;
}());
EAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object])
], EAuthService);

var _a, _b;
//# sourceMappingURL=e-auth.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = (function () {
    function SigninComponent(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__validators__["a" /* emailValidator */]])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
        });
    };
    SigninComponent.prototype.submitSignIn = function (value) {
        var _this = this;
        console.log(value);
        this.user = value;
        this.authService.signin(this.user).subscribe(function (data) {
            if (data.isUser === false) {
                console.log(data); // if the user is not in DB first go to signup page to registe ...
            }
            else if (data.isValidPass === false) {
                console.log(data); //send msg wrong pass
            }
            else {
                _this.authService.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                _this.router.navigate(['/uhome']);
            }
        });
    };
    SigninComponent.prototype.fbLogin = function () {
        this.fbulogin.getUserInfo();
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__(227),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = matching;
// SINGLE FIELD VALIDATORS
function emailValidator(control) {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
// FORM GROUP VALIDATORS matching emails || passwords
function matching(emailKey, conEmailKey, passwordKey, confirmPasswordKey) {
    return function (group) {
        var email = group.controls[emailKey];
        var conEmail = group.controls[conEmailKey];
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedpass: true
            };
        }
        if (email.value !== conEmail.value) {
            return {
                mismatched: true
            };
        }
    };
}
//# sourceMappingURL=validators.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.bundle.js.map