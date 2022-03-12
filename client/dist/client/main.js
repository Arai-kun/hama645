"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dmtool_dmtool_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dmtool/dmtool.component */ 7173);
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log/log.component */ 8380);
/* harmony import */ var _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oauth/oauth.component */ 51);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ 2226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    { path: 'oauth', component: _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_2__.OauthComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
        children: [
            { path: 'account', component: _dmtool_dmtool_component__WEBPACK_IMPORTED_MODULE_0__.DmtoolComponent },
            { path: 'log', component: _log_log_component__WEBPACK_IMPORTED_MODULE_1__.LogComponent },
            //{ path: 'dm/:id', component: DmListComponent },
            { path: 'dm/:id/:dmUser', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__.ChatComponent }
        ]
    },
    { path: "**", redirectTo: "home" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'タイトル未定';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navi_navi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navi/navi.component */ 2285);
/* harmony import */ var _dmtool_dmtool_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dmtool/dmtool.component */ 7173);
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log/log.component */ 8380);
/* harmony import */ var _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oauth/oauth.component */ 51);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _dmtool_register_dmtool_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dmtool-register/dmtool-register.component */ 5230);
/* harmony import */ var _dmtool_delete_dmtool_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dmtool-delete/dmtool-delete.component */ 2273);
/* harmony import */ var _dmtool_register_sp_dmtool_register_sp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dmtool-register-sp/dmtool-register-sp.component */ 2325);
/* harmony import */ var _dmtool_delete_sp_dmtool_delete_sp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dmtool-delete-sp/dmtool-delete-sp.component */ 9371);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./summary/summary.component */ 6155);
/* harmony import */ var _navi_delete_navi_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navi-delete/navi-delete.component */ 2078);
/* harmony import */ var _mat_paginator_jp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mat-paginator-jp */ 5881);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat/chat.component */ 2226);
/* harmony import */ var _dm_list_dm_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dm-list/dm-list.component */ 5066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);









/* Material */



















/* Component */














/* Class */




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorIntl, useClass: _mat_paginator_jp__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorIntlJa }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_37__.MatCardModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__.MatDividerModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__.MatAutocompleteModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__.MatSortModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__.MatProgressSpinnerModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__.TextFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _navi_navi_component__WEBPACK_IMPORTED_MODULE_2__.NaviComponent,
        _dmtool_dmtool_component__WEBPACK_IMPORTED_MODULE_3__.DmtoolComponent,
        _log_log_component__WEBPACK_IMPORTED_MODULE_4__.LogComponent,
        _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_5__.OauthComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent,
        _dmtool_register_dmtool_register_component__WEBPACK_IMPORTED_MODULE_9__.DmtoolRegisterComponent,
        _dmtool_delete_dmtool_delete_component__WEBPACK_IMPORTED_MODULE_10__.DmtoolDeleteComponent,
        _dmtool_register_sp_dmtool_register_sp_component__WEBPACK_IMPORTED_MODULE_11__.DmtoolRegisterSpComponent,
        _dmtool_delete_sp_dmtool_delete_sp_component__WEBPACK_IMPORTED_MODULE_12__.DmtoolDeleteSpComponent,
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_13__.SummaryComponent,
        _navi_delete_navi_delete_component__WEBPACK_IMPORTED_MODULE_14__.NaviDeleteComponent,
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__.ChatComponent,
        _dm_list_dm_list_component__WEBPACK_IMPORTED_MODULE_17__.DmListComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_37__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__.MatDividerModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__.MatAutocompleteModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_40__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_42__.MatProgressSpinnerModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__.TextFieldModule] }); })();


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => {
            if (!result) {
                this.router.navigate(['login'], { queryParams: { redirectTo: state.url } });
            }
            return result;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class AuthService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    login(user) {
        return this.http.post('user/login', user, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    }
    create(user) {
        return this.http.post('user/create', user, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    }
    exist(kind, id) {
        const url = `/${kind}/exist/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    isAuthenticated() {
        return this.http.get('user/check', this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    logout() {
        return this.http.get('user/logout', this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    requestToken(screen_name) {
        return this.http.get(`oauth/requestToken/${screen_name}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError()));
    }
    checkToken(screen_name, oauth_token) {
        return this.http.post('oauth/checkToken', JSON.stringify({
            screen_name: screen_name, oauth_token: oauth_token
        }), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    exchangeToken(screen_name, oauth_verifier) {
        return this.http.post('oauth/exchangeToken', JSON.stringify({
            screen_name: screen_name, oauth_verifier: oauth_verifier
        }), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    handleError(result) {
        return (error) => {
            console.log(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5977:
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class ChatService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' }),
        };
    }
    create(id) {
        return this.http.get(`/chat/create/${id}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.shareReplay)(1));
    }
    send(id, text, sub_id) {
        return this.http.post(`/chat/send/${id}/${sub_id}`, JSON.stringify({ text: text }), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    update(id, sub_id) {
        return this.http.get(`/chat/update/${id}/${sub_id}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError([])));
    }
    delete(id) {
        return this.http.delete(`/chat/delete/${id}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    getdmUserList(id) {
        return this.http.get(`/chat/dmUserList/${id}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError([])));
    }
    getScreenName(id, sub_id) {
        return this.http.get(`/chat/screenName/${id}/${sub_id}`, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError()));
    }
    handleError(result) {
        return (error) => {
            console.error(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2226:
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat.service */ 5977);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 5590);














function ChatComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.timestamp);
} }
function ChatComponent_div_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.timestamp);
} }
function ChatComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponent_div_11_div_1_Template, 6, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatComponent_div_11_ng_template_2_Template, 6, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.self)("ngIfElse", _r4);
} }
class ChatComponent {
    //@ViewChild('scroll', {read: ElementRef}) scroll!: ElementRef;
    constructor(route, snackBar, location, chatService, router) {
        this.route = route;
        this.snackBar = snackBar;
        this.location = location;
        this.chatService = chatService;
        this.router = router;
        this.messages = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.screen_name = '';
        this.opposite = {
            name: '',
            id: ''
        };
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        this.text = '';
    }
    ngOnInit() {
        if (!this.route.snapshot.paramMap.get('id') || !this.route.snapshot.paramMap.get('dmUser')) {
            this.failed();
        }
        else {
            this.screen_name = this.route.snapshot.paramMap.get('id');
            this.opposite.id = this.route.snapshot.paramMap.get('dmUser');
            this.chatService.create(this.screen_name)
                .subscribe(result => {
                if (result) {
                    this.initMsg();
                    this.getScreenName();
                    this.recieveMsg();
                    this.subscription = this.polling().subscribe(data => {
                        this.subject.next(data);
                    });
                }
                else {
                    // Already created, means it haven't deleted correctly
                    this.snackBar.open('エラーが発生しました。やり直してください', '閉じる', { duration: 8000 });
                    this.onExit();
                }
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(this.scrollToBottom, 100);
    }
    scrollToBottom() {
        console.log(document.querySelector('mat-sidenav-content').scrollTop);
        console.log(document.querySelector('mat-sidenav-content').scrollHeight);
        document.querySelector('mat-sidenav-content').scrollTop = document.querySelector('mat-sidenav-content').scrollHeight;
    }
    recieveMsg() {
        this.subject.subscribe({
            next: msgs => {
                //console.log(msgs);
                for (let msg of msgs) {
                    let date = new Date(Number(msg.timestamp));
                    if (!this.messages.map(msg => msg.id).includes(msg.id)) {
                        this.messages.push({
                            id: msg.id,
                            self: msg.self,
                            text: msg.text,
                            timestamp: `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
                        });
                        setTimeout(this.scrollToBottom, 100);
                    }
                }
            },
            error: e => console.log('error: ', e),
            complete: () => {
                console.log('disconnected');
                this.subscription.unsubscribe();
            }
        });
    }
    sendMsg() {
        this.chatService.send(this.screen_name, this.text, this.opposite.id)
            .subscribe(result => {
            if (!result) {
                this.snackBar.open('送信できませんでした', '閉じる', { duration: 5000 });
            }
            else {
                this.text = '';
            }
        });
    }
    initMsg() {
        this.chatService.update(this.screen_name, this.opposite.id)
            .subscribe(messages => {
            messages.forEach(msg => {
                let date = new Date(Number(msg.timestamp));
                this.messages.push({
                    id: msg.id,
                    self: msg.self,
                    text: msg.text,
                    timestamp: `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
                });
            });
            this.messages.sort((x, y) => Number(x.timestamp) - Number(y.timestamp));
        });
    }
    getScreenName() {
        this.chatService.getScreenName(this.screen_name, this.opposite.id)
            .subscribe(screen_name => this.opposite.name = screen_name.text);
    }
    polling() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.chatService.update(this.screen_name, this.opposite.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeWhile)(() => true));
    }
    failed() {
        this.snackBar.open('エラーが発生しました', '閉じる', { duration: 7000 });
        this.onExit();
    }
    onExit() {
        this.router.navigate(['/home']);
    }
    ngOnDestroy() {
        this.subject.complete();
        this.chatService.delete(this.screen_name)
            .subscribe(result => {
            if (result) {
                console.log('Deleted');
            }
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 18, vars: 3, consts: [[1, "chat-inner-container"], [1, "toolbar"], [1, "mat-title"], ["fxLayout", "row", "fxFlexOffset", "auto"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "end stretch", 1, "chat-content"], [1, "scroll-area"], ["scrollArea", ""], [1, "messages-container"], ["class", "chat-message", "fxLayout", "column", "fxLayoutAlign", "end start", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "chat-respond"], ["fxFlex", ""], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5", "placeholder", "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "accent", "type", "button", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "end start", 1, "chat-message"], ["class", "partner", "fxFlexAlign", "start", "fxLayout", "row", "fxLayoutAlign", "start start", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["fxFlexAlign", "start", "fxLayout", "row", "fxLayoutAlign", "start start", 1, "partner"], ["fxLayout", "column", "fxLayoutAlign", "start start"], [1, "message", "mat-elevation-z1"], [1, "mat-small-partner"], ["fxFlexAlign", "end", "fxLayout", "row", "fxLayoutAlign", "end start", 1, "me"], ["fxLayout", "column", "fxLayoutAlign", "start end"], [1, "mat-small-me"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_5_listener() { return ctx.onExit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u7D42\u4E86");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6, 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ChatComponent_div_11_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_textarea_ngModelChange_14_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_15_listener() { return ctx.sendMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.opposite.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.text);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexOffsetDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__.CdkTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px;\n}\n\n.full-with[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 8px;\n  bottom: 0;\n  position: relative;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n.mat-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.mat-small-partner[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-top: 1px;\n  font-size: 0.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mat-small-me[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  margin-top: 1px;\n  font-size: 0.5rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  position: relative;\n  box-shadow: 0 0px 0px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  white-space: pre-wrap;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .partner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: white;\n  margin-left: 12px;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .partner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #fff transparent transparent;\n  top: 2px;\n  left: -10px;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background: #8bdeff;\n  margin-right: 12px;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #8bdeff;\n  top: 2px;\n  right: -10px;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .chat-respond[_ngcontent-%COMP%] {\n  background: white;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  padding: 6px 18px;\n  border-top: 1px solid #EEE;\n  position: sticky;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .chat-respond[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.chat-inner-container[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .chat-respond[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUU1JUE0JUE3JUU2JUEwJTg0JUU0JUI4JThEJUU1JThCJTk1JUU3JTk0JUEzJUU2JUEwJUFBJUU1JUJDJThGJUU0JUJDJTlBJUU3JUE0JUJFXFxXb3JrXFxoYW1hNjQ1XFxjbGllbnRcXHNyY1xcYXBwXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFFQSxTQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLFNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURHQSxVQUFBOztBQUlJO0VBQ0ksa0JBQUE7QUNIUjs7QURLUTtFQUNBLGFBQUE7QUNIUjs7QURLUTtFQUNJLGNBQUE7QUNIWjs7QURLWTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNIWjs7QURPWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNMaEI7O0FET2dCO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0RBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0xoQjs7QURXWTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNUaEI7O0FEV2dCO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseURBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ1RoQjs7QURnQlE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFFQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ2ZSOztBRGlCUTtFQUNJLFlBQUE7QUNmWjs7QURrQlE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDaEJaIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG4uZnVsbC13aXRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgLy93aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1hdC10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tYXQtc21hbGwtcGFydG5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxufVxyXG5cclxuLm1hdC1zbWFsbC1tZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbn1cclxuXHJcbi8qKioqKioqKiovXHJcbi5jaGF0LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICBcclxuICAgIC5jaGF0LWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuXHJcbiAgICAgICAgLmNoYXQtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwO1xyXG5cclxuICAgICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCAwcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGFydG5lciB7XHJcbiAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tZSB7XHJcbiAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4YmRlZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM4YmRlZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYXQtcmVzcG9uZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFRUU7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5mdWxsLXdpdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbjogOHB4O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1jYXJkIHtcbiAgd2lkdGg6IDQwdnc7XG59XG5cbi50b29sYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubWF0LXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LXNtYWxsLXBhcnRuZXIge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtc21hbGwtbWUge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4vKioqKioqKioqL1xuLmNoYXQtaW5uZXItY29udGFpbmVyIC5jaGF0LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhdC1pbm5lci1jb250YWluZXIgLmNoYXQtY29udGVudCAubWVzc2FnZXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbn1cbi5jaGF0LWlubmVyLWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlcy1jb250YWluZXIgLmNoYXQtbWVzc2FnZSB7XG4gIG1hcmdpbjogMjRweCAwO1xufVxuLmNoYXQtaW5uZXItY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2VzLWNvbnRhaW5lciAuY2hhdC1tZXNzYWdlIC5tZXNzYWdlIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAwcHggMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5jaGF0LWlubmVyLWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlcy1jb250YWluZXIgLmNoYXQtbWVzc2FnZSAucGFydG5lciAubWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5jaGF0LWlubmVyLWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlcy1jb250YWluZXIgLmNoYXQtbWVzc2FnZSAucGFydG5lciAubWVzc2FnZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IC0xMHB4O1xufVxuLmNoYXQtaW5uZXItY29udGFpbmVyIC5jaGF0LWNvbnRlbnQgLm1lc3NhZ2VzLWNvbnRhaW5lciAuY2hhdC1tZXNzYWdlIC5tZSAubWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICM4YmRlZmY7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5jaGF0LWlubmVyLWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5tZXNzYWdlcy1jb250YWluZXIgLmNoYXQtbWVzc2FnZSAubWUgLm1lc3NhZ2U6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMHB4IDAgMTBweCAxMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM4YmRlZmY7XG4gIHRvcDogMnB4O1xuICByaWdodDogLTEwcHg7XG59XG4uY2hhdC1pbm5lci1jb250YWluZXIgLmNoYXQtY29udGVudCAuY2hhdC1yZXNwb25kIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDZweCAxOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VFRTtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cbi5jaGF0LWlubmVyLWNvbnRhaW5lciAuY2hhdC1jb250ZW50IC5jaGF0LXJlc3BvbmQgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG4uY2hhdC1pbm5lci1jb250YWluZXIgLmNoYXQtY29udGVudCAuY2hhdC1yZXNwb25kIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ 2728:
/*!*******************************!*\
  !*** ./src/app/db.service.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbService": () => (/* binding */ DbService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class DbService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' }),
        };
    }
    get(kind, id) {
        const url = `db/${kind}/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError()));
    }
    getAll(kind) {
        const url = `db/${kind}`;
        return this.http.get(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError([])));
    }
    add(kind, data) {
        const url = `db/${kind}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    delete(kind, id) {
        const url = `db/${kind}/${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError(false)));
    }
    getEmail() {
        return this.http.get('db/email', this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError('')));
    }
    handleError(result) {
        return (error) => {
            console.error(error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
        };
    }
}
DbService.ɵfac = function DbService_Factory(t) { return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
DbService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DbService, factory: DbService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5066:
/*!**********************************************!*\
  !*** ./src/app/dm-list/dm-list.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmListComponent": () => (/* binding */ DmListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat.service */ 5977);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);









function DmListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmListComponent_div_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const dmUser_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onDM(dmUser_r1.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const dmUser_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](dmUser_r1.screenName);
} }
class DmListComponent {
    constructor(dialogRef, screen_name, router, chatService) {
        this.dialogRef = dialogRef;
        this.screen_name = screen_name;
        this.router = router;
        this.chatService = chatService;
        this.dmUserList = [];
    }
    ngOnInit() {
        this.getDmUserList();
    }
    getDmUserList() {
        this.chatService.getdmUserList(this.screen_name)
            .subscribe(dmUserList => this.dmUserList = dmUserList);
    }
    onDM(dmUser) {
        this.router.navigate([`/home/dm/${this.screen_name}/${dmUser}`]);
        this.dialogRef.close();
    }
    onCancel() {
        this.dialogRef.close();
    }
}
DmListComponent.ɵfac = function DmListComponent_Factory(t) { return new (t || DmListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService)); };
DmListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DmListComponent, selectors: [["app-dm-list"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["fxLayout", "column"], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", 1, "dialog-buttons"], ["mat-button", "", 1, "cancel-btn", 3, "click"], [3, "click"]], template: function DmListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DM\u3092\u958B\u59CB\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u3092\u9078\u629E\u3057\u307E\u3059");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DmListComponent_div_4_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmListComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dmUserList);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRtLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUU1JUE0JUE3JUU2JUEwJTg0JUU0JUI4JThEJUU1JThCJTk1JUU3JTk0JUEzJUU2JUEwJUFBJUU1JUJDJThGJUU0JUJDJTlBJUU3JUE0JUJFXFxXb3JrXFxoYW1hNjQ1XFxjbGllbnRcXHNyY1xcYXBwXFxkbS1saXN0XFxkbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJkbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNhbmNlbC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 9371:
/*!****************************************************************!*\
  !*** ./src/app/dmtool-delete-sp/dmtool-delete-sp.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmtoolDeleteSpComponent": () => (/* binding */ DmtoolDeleteSpComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);







class DmtoolDeleteSpComponent {
    constructor(dialogRef, screen_name, dbService, snackBar) {
        this.dialogRef = dialogRef;
        this.screen_name = screen_name;
        this.dbService = dbService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
    onDelete() {
        this.dbService.delete('special', this.screen_name)
            .subscribe(result => {
            if (result) {
                this.snackBar.open('削除しました', '閉じる', { duration: 5000 });
                this.dialogRef.close();
            }
            else {
                this.snackBar.open('削除できませんでした', '閉じる', { duration: 7000 });
            }
        });
    }
}
DmtoolDeleteSpComponent.ɵfac = function DmtoolDeleteSpComponent_Factory(t) { return new (t || DmtoolDeleteSpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
DmtoolDeleteSpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DmtoolDeleteSpComponent, selectors: [["app-dmtool-delete-sp"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "dialog-buttons"], ["mat-button", "", 3, "click"], ["fxFlexOffset", "auto"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DmtoolDeleteSpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmtoolDeleteSpComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmtoolDeleteSpComponent_Template_button_click_8_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u524A\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", ctx.screen_name, " \u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexOffsetDirective], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRtdG9vbC1kZWxldGUtc3AuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUU1JUE0JUE3JUU2JUEwJTg0JUU0JUI4JThEJUU1JThCJTk1JUU3JTk0JUEzJUU2JUEwJUFBJUU1JUJDJThGJUU0JUJDJTlBJUU3JUE0JUJFXFxXb3JrXFxoYW1hNjQ1XFxjbGllbnRcXHNyY1xcYXBwXFxkbXRvb2wtZGVsZXRlLXNwXFxkbXRvb2wtZGVsZXRlLXNwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJkbXRvb2wtZGVsZXRlLXNwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufSIsIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn0iXX0= */"] });


/***/ }),

/***/ 2273:
/*!**********************************************************!*\
  !*** ./src/app/dmtool-delete/dmtool-delete.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmtoolDeleteComponent": () => (/* binding */ DmtoolDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);







class DmtoolDeleteComponent {
    constructor(dialogRef, screen_name, dbService, snackBar) {
        this.dialogRef = dialogRef;
        this.screen_name = screen_name;
        this.dbService = dbService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
    onDelete() {
        this.dbService.delete('twitter', this.screen_name)
            .subscribe(result => {
            if (result) {
                this.snackBar.open('削除しました', '閉じる', { duration: 5000 });
                this.dialogRef.close();
            }
            else {
                this.snackBar.open('削除できませんでした', '閉じる', { duration: 7000 });
            }
        });
    }
}
DmtoolDeleteComponent.ɵfac = function DmtoolDeleteComponent_Factory(t) { return new (t || DmtoolDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
DmtoolDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DmtoolDeleteComponent, selectors: [["app-dmtool-delete"]], decls: 11, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "dialog-buttons"], ["mat-button", "", 3, "click"], ["fxFlexOffset", "auto"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DmtoolDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u9023\u643A\u3082\u89E3\u9664\u3055\u308C\u307E\u3059");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmtoolDeleteComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmtoolDeleteComponent_Template_button_click_9_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u524A\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@", ctx.screen_name, " \u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexOffsetDirective], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRtdG9vbC1kZWxldGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUU1JUE0JUE3JUU2JUEwJTg0JUU0JUI4JThEJUU1JThCJTk1JUU3JTk0JUEzJUU2JUEwJUFBJUU1JUJDJThGJUU0JUJDJTlBJUU3JUE0JUJFXFxXb3JrXFxoYW1hNjQ1XFxjbGllbnRcXHNyY1xcYXBwXFxkbXRvb2wtZGVsZXRlXFxkbXRvb2wtZGVsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJkbXRvb2wtZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufSIsIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn0iXX0= */"] });


/***/ }),

/***/ 2325:
/*!********************************************************************!*\
  !*** ./src/app/dmtool-register-sp/dmtool-register-sp.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmtoolRegisterSpComponent": () => (/* binding */ DmtoolRegisterSpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);











function DmtoolRegisterSpComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Twitter ID \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class DmtoolRegisterSpComponent {
    constructor(dialogRef, fb, snackBar, dbService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dbService = dbService;
        this.screenNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    }
    ngOnInit() {
        this.form = this.fb.group({
            screenName: this.screenNameControl
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    onSubmit() {
        var _a;
        let special = {
            screen_name: (_a = this.form.get('screenName')) === null || _a === void 0 ? void 0 : _a.value,
        };
        this.dbService.get('special', special.screen_name)
            .subscribe(exist => {
            if (exist) {
                this.snackBar.open('このTwitter IDは既に登録済みです', '閉じる', { duration: 7000 });
            }
            else {
                this.dbService.add('special', special)
                    .subscribe(result => {
                    if (result) {
                        this.snackBar.open('登録しました', '閉じる', { duration: 5000 });
                        this.dialogRef.close();
                    }
                    else {
                        this.snackBar.open('登録できませんでした', '閉じる', { duration: 7000 });
                    }
                });
            }
        });
    }
}
DmtoolRegisterSpComponent.ɵfac = function DmtoolRegisterSpComponent_Factory(t) { return new (t || DmtoolRegisterSpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService)); };
DmtoolRegisterSpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DmtoolRegisterSpComponent, selectors: [["app-dmtool-register-sp"]], decls: 15, vars: 3, consts: [["mat-dialog-title", ""], ["novalidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], [1, "example-full-width"], ["matInput", "", "placeholder", "abc123", "formControlName", "screenName", "autocomplete", "off"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"], ["fxLayout", "row", "fxFlexOffset", "auto"], ["mat-raised-button", "", "color", "accent", "type", "submit", 1, "btn-block", 3, "disabled"]], template: function DmtoolRegisterSpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Twitter ID \u3092\u767B\u9332\u3057\u307E\u3059");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DmtoolRegisterSpComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Twitter ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DmtoolRegisterSpComponent_mat_error_8_Template, 3, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmtoolRegisterSpComponent_Template_button_click_10_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.screenNameControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexOffsetDirective], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.example-form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRtdG9vbC1yZWdpc3Rlci1zcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwlRTUlQTQlQTclRTYlQTAlODQlRTQlQjglOEQlRTUlOEIlOTUlRTclOTQlQTMlRTYlQTAlQUElRTUlQkMlOEYlRTQlQkMlOUElRTclQTQlQkVcXFdvcmtcXGhhbWE2NDVcXGNsaWVudFxcc3JjXFxhcHBcXGRtdG9vbC1yZWdpc3Rlci1zcFxcZG10b29sLXJlZ2lzdGVyLXNwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJkbXRvb2wtcmVnaXN0ZXItc3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCVcclxufSIsIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLmV4YW1wbGUtZm9ybSAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 5230:
/*!**************************************************************!*\
  !*** ./src/app/dmtool-register/dmtool-register.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmtoolRegisterComponent": () => (/* binding */ DmtoolRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);











function DmtoolRegisterComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Twitter ID \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class DmtoolRegisterComponent {
    constructor(dialogRef, fb, snackBar, dbService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.dbService = dbService;
        this.screenNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    }
    ngOnInit() {
        this.form = this.fb.group({
            screenName: this.screenNameControl
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    onSubmit() {
        var _a;
        let twitter = {
            screen_name: (_a = this.form.get('screenName')) === null || _a === void 0 ? void 0 : _a.value,
            authorized: false,
            subsc: false
        };
        this.dbService.get('twitter', twitter.screen_name)
            .subscribe(exist => {
            if (exist) {
                this.snackBar.open('このTwitter IDは既に登録済みです', '閉じる', { duration: 7000 });
            }
            else {
                this.dbService.add('twitter', twitter)
                    .subscribe(result => {
                    if (result) {
                        this.snackBar.open('登録しました', '閉じる', { duration: 5000 });
                        this.dialogRef.close();
                    }
                    else {
                        this.snackBar.open('登録できませんでした', '閉じる', { duration: 7000 });
                    }
                });
            }
        });
    }
}
DmtoolRegisterComponent.ɵfac = function DmtoolRegisterComponent_Factory(t) { return new (t || DmtoolRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService)); };
DmtoolRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DmtoolRegisterComponent, selectors: [["app-dmtool-register"]], decls: 15, vars: 3, consts: [["mat-dialog-title", ""], ["novalidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], [1, "example-full-width"], ["matInput", "", "placeholder", "abc123", "formControlName", "screenName", "autocomplete", "off"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "type", "button", 3, "click"], ["fxLayout", "row", "fxFlexOffset", "auto"], ["mat-raised-button", "", "color", "accent", "type", "submit", 1, "btn-block", 3, "disabled"]], template: function DmtoolRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Twitter ID \u3092\u767B\u9332\u3057\u307E\u3059");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DmtoolRegisterComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Twitter ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DmtoolRegisterComponent_mat_error_8_Template, 3, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DmtoolRegisterComponent_Template_button_click_10_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.screenNameControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexOffsetDirective], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.example-form[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRtdG9vbC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwlRTUlQTQlQTclRTYlQTAlODQlRTQlQjglOEQlRTUlOEIlOTUlRTclOTQlQTMlRTYlQTAlQUElRTUlQkMlOEYlRTQlQkMlOUElRTclQTQlQkVcXFdvcmtcXGhhbWE2NDVcXGNsaWVudFxcc3JjXFxhcHBcXGRtdG9vbC1yZWdpc3RlclxcZG10b29sLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJkbXRvb2wtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCVcclxufSIsIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLmV4YW1wbGUtZm9ybSAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });


/***/ }),

/***/ 7173:
/*!********************************************!*\
  !*** ./src/app/dmtool/dmtool.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DmtoolComponent": () => (/* binding */ DmtoolComponent)
/* harmony export */ });
/* harmony import */ var _dmtool_register_dmtool_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dmtool-register/dmtool-register.component */ 5230);
/* harmony import */ var _dmtool_delete_dmtool_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dmtool-delete/dmtool-delete.component */ 2273);
/* harmony import */ var _dmtool_register_sp_dmtool_register_sp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dmtool-register-sp/dmtool-register-sp.component */ 2325);
/* harmony import */ var _dmtool_delete_sp_dmtool_delete_sp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dmtool-delete-sp/dmtool-delete-sp.component */ 9371);
/* harmony import */ var _dm_list_dm_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dm-list/dm-list.component */ 5066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat.service */ 5977);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 9975);


















function DmtoolComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_div_7_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const twitter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.onDestroy(twitter_r2.screen_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "DM\u304C\u6B63\u5E38\u306B\u7D42\u4E86\u3067\u304D\u3066\u3044\u307E\u305B\u3093! \u5DE6\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u89E6\u3063\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function DmtoolComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u9023\u643A\u6E08\u307F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} }
function DmtoolComponent_div_7_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u672A\u9023\u643A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DmtoolComponent_div_7_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_div_7_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const twitter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.onOAuth(twitter_r2.screen_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u9023\u643A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DmtoolComponent_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_div_7_ng_template_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const twitter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.onDM(twitter_r2.screen_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "DM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const twitter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", twitter_r2.subsc);
} }
function DmtoolComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-content")(5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DmtoolComponent_div_7_div_6_Template, 6, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DmtoolComponent_div_7_div_7_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DmtoolComponent_div_7_ng_template_8_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-card-actions")(12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_div_7_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const twitter_r2 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.onDelete(twitter_r2.screen_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\u524A\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, DmtoolComponent_div_7_button_15_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, DmtoolComponent_div_7_ng_template_16_Template, 2, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const twitter_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" @", twitter_r2.screen_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", twitter_r2.subsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", twitter_r2.authorized)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !twitter_r2.authorized)("ngIfElse", _r8);
} }
function DmtoolComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card-actions")(6, "span", 19)(7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_div_16_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const special_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.onDeleteSP(special_r22.screen_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u524A\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const special_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("@", special_r22.screen_name, "");
} }
class DmtoolComponent {
    constructor(router, dialog, dbService, chatService, snackBar) {
        this.router = router;
        this.dialog = dialog;
        this.dbService = dbService;
        this.chatService = chatService;
        this.snackBar = snackBar;
        this.twitters = [];
        this.specials = [];
    }
    ngOnInit() {
        this.getTwitters();
        this.getSpecials();
    }
    onDM(screen_name) {
        let dialogRef = this.dialog.open(_dm_list_dm_list_component__WEBPACK_IMPORTED_MODULE_4__.DmListComponent, {
            width: '400px',
            data: screen_name
        });
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    onOAuth(screen_name) {
        this.router.navigate(['/oauth'], { queryParams: { screen_name: screen_name } });
    }
    onDelete(screen_name) {
        let dialogRef = this.dialog.open(_dmtool_delete_dmtool_delete_component__WEBPACK_IMPORTED_MODULE_1__.DmtoolDeleteComponent, {
            width: '400px',
            data: screen_name
        });
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    onDestroy(screen_name) {
        this.chatService.delete(screen_name)
            .subscribe(result => {
            if (result) {
                this.snackBar.open('正常に終了できました', '閉じる', { duration: 5000 });
                this.ngOnInit();
            }
            else {
                this.snackBar.open('エラーが発生しました', '閉じる', { duration: 7000 });
            }
        });
    }
    onRegister() {
        let dialogRef = this.dialog.open(_dmtool_register_dmtool_register_component__WEBPACK_IMPORTED_MODULE_0__.DmtoolRegisterComponent, {
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    getTwitters() {
        this.dbService.getAll('twitters')
            .subscribe(twitters => this.twitters = twitters);
    }
    onRegisterSP() {
        let dialogRef = this.dialog.open(_dmtool_register_sp_dmtool_register_sp_component__WEBPACK_IMPORTED_MODULE_2__.DmtoolRegisterSpComponent, {
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    onDeleteSP(screen_name) {
        let dialogRef = this.dialog.open(_dmtool_delete_sp_dmtool_delete_sp_component__WEBPACK_IMPORTED_MODULE_3__.DmtoolDeleteSpComponent, {
            width: '400px',
            data: screen_name
        });
        dialogRef.afterClosed().subscribe(() => {
            this.ngOnInit();
        });
    }
    getSpecials() {
        this.dbService.getAll('specials')
            .subscribe(spcials => this.specials = spcials);
    }
}
DmtoolComponent.ɵfac = function DmtoolComponent_Factory(t) { return new (t || DmtoolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_5__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_6__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
DmtoolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DmtoolComponent, selectors: [["app-dmtool"]], decls: 17, vars: 2, consts: [["label", "\u4E00\u89A7"], ["fxLayout", "column"], ["fxLayout", "row", "fxFlexOffset", "auto", 1, "register-btn"], ["mat-raised-button", "", "color", "accent", 3, "click"], [4, "ngFor", "ngForOf"], ["label", "\u7279\u6B8A"], [1, "mat-small"], ["fxLayout", "column", "fxLayoutGap", "8px"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["inset", ""], ["mat-button", "", 3, "click"], ["fxlayout", "row", "fxFlexOffset", "auto", "fxLayoutGap", "8px"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf", "ngIfElse"], ["elseBlock2", ""], ["mat-icon-button", "", "type", "button", "color", "warn", 3, "click"], [1, "warn"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["fxLayout", "row", "fxFlexOffset", "auto"]], template: function DmtoolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 0)(2, "div", 1)(3, "div")(4, "span", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_Template_button_click_5_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DmtoolComponent_div_7_Template, 18, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-tab", 5)(9, "div", 1)(10, "div")(11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u306EDM\u306F\u7279\u6B8A\u901A\u77E5\u306B\u306A\u308A\u307E\u3059");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 2)(14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DmtoolComponent_Template_button_click_14_listener() { return ctx.onRegisterSP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, DmtoolComponent_div_16_Template, 9, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.twitters);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.specials);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexOffsetDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardActions], styles: [".register-btn[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\n.warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.mat-small[_ngcontent-%COMP%] {\n  margin: 16px;\n  vertical-align: middle;\n}\n\n.mat-card-actions[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRtdG9vbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwlRTUlQTQlQTclRTYlQTAlODQlRTQlQjglOEQlRTUlOEIlOTUlRTclOTQlQTMlRTYlQTAlQUElRTUlQkMlOEYlRTQlQkMlOUElRTclQTQlQkVcXFdvcmtcXGhhbWE2NDVcXGNsaWVudFxcc3JjXFxhcHBcXGRtdG9vbFxcZG10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBRUksYUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxTQUFBO0FDREoiLCJmaWxlIjoiZG10b29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWJ0biB7XHJcbiAgICAvL21hcmdpbjogOHB4IDhweCAwcHggOHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG4ud2FybiB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNlxyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gICAgLy9tYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm1hdC1zbWFsbCB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbiwgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWNhcmQtYWN0aW9ucyAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4iLCIucmVnaXN0ZXItYnRuIHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4ud2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWNhcmQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ubWF0LXNtYWxsIHtcbiAgbWFyZ2luOiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbiwgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWNhcmQtYWN0aW9ucyAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _navi_navi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navi/navi.component */ 2285);



class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        /* Initial display */
        let initial = '/home/account';
        console.log(this.router.routerState.snapshot.url);
        if (this.router.routerState.snapshot.url !== '/home') {
            this.router.navigate([this.router.routerState.snapshot.url]);
        }
        else {
            this.router.navigate([initial]);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-navi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_navi_navi_component__WEBPACK_IMPORTED_MODULE_0__.NaviComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8380:
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogComponent": () => (/* binding */ LogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinner.service */ 8250);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../summary/summary.component */ 6155);














function LogComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LogComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r11.no, " ");
} }
function LogComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u65E5\u4ED8");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LogComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r12.date, " ");
} }
function LogComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LogComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r13.screen_name, " ");
} }
function LogComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u30A4\u30D9\u30F3\u30C8");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LogComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.event, " ");
} }
function LogComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 19);
} }
function LogComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 20);
} }
function LogComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-summary");
} }
const _c0 = function () { return [50, 200, 1000]; };
class LogComponent {
    constructor(dbService, snackBar, spinnerService) {
        this.dbService = dbService;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.displayedColumns = [
            'no',
            'date',
            'screen_name',
            'event'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
    }
    ngOnInit() {
        this.getLogs();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getLogs() {
        this.spinnerService.attach();
        this.dbService.getAll('logs')
            .subscribe(logs => {
            if (logs.length === 0) {
                this.snackBar.open('イベントがありません', '閉じる', { duration: 5000 });
                this.spinnerService.detach();
                return;
            }
            let displaylogs = [];
            logs.forEach(log => {
                let time = new Date(Number(log.timestamp));
                let event = '';
                switch (log.event) {
                    case 1:
                        event = 'DMリクエスト';
                        break;
                    case 2:
                        event = 'DM受信';
                        break;
                    case 3:
                        event = '特殊DM受信';
                        break;
                    default:
                        break;
                }
                displaylogs.push({
                    no: log.no,
                    date: `${time.getFullYear()}/${this.pad(time.getMonth() + 1)}/${this.pad(time.getDate())}`,
                    //time: `${this.pad(time.getHours())}:${this.pad(time.getMinutes())}:${this.pad(time.getSeconds())}`,
                    screen_name: log.screen_name,
                    event: event
                });
            });
            this.dataSource.data = displaylogs;
            this.spinnerService.detach();
        });
    }
    pad(number) {
        let str = `${('0' + String(number)).slice(-2)}`;
        return str;
    }
    onRefresh() {
        this.ngOnInit();
    }
}
LogComponent.ɵfac = function LogComponent_Factory(t) { return new (t || LogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__.SpinnerService)); };
LogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LogComponent, selectors: [["app-log"]], viewQuery: function LogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 5, consts: [["label", "\u4E00\u89A7"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", "matSortActive", "no", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "screen_name"], ["matColumnDef", "event"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-fab", "", "color", "primary", 1, "refresh-btn", 3, "click"], ["label", "\u96C6\u8A08"], ["matTabContent", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function LogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 0)(2, "div", 1)(3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LogComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LogComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LogComponent_th_8_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LogComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LogComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LogComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LogComponent_th_14_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LogComponent_td_15_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LogComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LogComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LogComponent_Template_button_click_19_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, LogComponent_ng_template_23_Template, 1, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabContent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__.SummaryComponent], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  margin: 8px 8px 16px 8px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: fixed;\n  bottom: 64px;\n  right: 24px;\n}\n\n.mat-paginator-range-label[_ngcontent-%COMP%] {\n  margin: 0 24px 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwlRTUlQTQlQTclRTYlQTAlODQlRTQlQjglOEQlRTUlOEIlOTUlRTclOTQlQTMlRTYlQTAlQUElRTUlQkMlOEYlRTQlQkMlOUElRTclQTQlQkVcXFdvcmtcXGhhbWE2NDVcXGNsaWVudFxcc3JjXFxhcHBcXGxvZ1xcbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6ImxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgICBtYXJnaW46IDhweCA4cHggMTZweCA4cHg7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnJlZnJlc2gtYnRuIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDY0cHg7XHJcbiAgICByaWdodDogMjRweDtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwIDI0cHggMCAxNnB4O1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBtYXJnaW46IDhweCA4cHggMTZweCA4cHg7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5yZWZyZXNoLWJ0biB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2NHB4O1xuICByaWdodDogMjRweDtcbn1cblxuLm1hdC1wYWdpbmF0b3ItcmFuZ2UtbGFiZWwge1xuICBtYXJnaW46IDAgMjRweCAwIDE2cHg7XG59Il19 */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function LoginComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class LoginComponent {
    constructor(fb, router, authService, snackBar, route) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.route = route;
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email
        ]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.redirectTo = null;
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: this.emailControl,
            password: this.passwordControl
        });
        this.redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');
    }
    onSubmit() {
        var _a, _b;
        let user = {
            email: (_a = this.form.get('email')) === null || _a === void 0 ? void 0 : _a.value,
            password: (_b = this.form.get('password')) === null || _b === void 0 ? void 0 : _b.value
        };
        this.authService.login(user)
            .subscribe(result => {
            if (result) {
                if (!this.redirectTo) {
                    this.router.navigate(['/home']);
                }
                else {
                    this.router.navigate([this.redirectTo]);
                }
            }
            else {
                this.loginFailed();
            }
        });
    }
    loginFailed() {
        this.snackBar.open('ログインできませんでした', '閉じる', { duration: 7000 });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "img_logo"], ["src", "assets/icon96.png"], ["novalidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "placeholder", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", "type", "email", "name", "email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "\u30D1\u30B9\u30EF\u30FC\u30C9", "type", "password", "name", "password", "formControlName", "password", "autocomplete", "off"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-button", "", "routerLink", "/register", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header")(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DM\u7BA1\u7406\u30C4\u30FC\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Twitter\u9023\u643A\u30B7\u30B9\u30C6\u30E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content")(11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u65B0\u898F\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailControl.hasError("required") || ctx.emailControl.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: [".login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 16px;\n}\n\n.positronx[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  margin-bottom: 24px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 30px 50px 40px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.door-icon[_ngcontent-%COMP%] {\n  transform: scale(3);\n}\n\n.img_logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXCVFNSVBNCVBNyVFNiVBMCU4NCVFNCVCOCU4RCVFNSU4QiU5NSVFNyU5NCVBMyVFNiVBMCVBQSVFNSVCQyU4RiVFNCVCQyU5QSVFNyVBNCVCRVxcV29ya1xcaGFtYTY0NVxcY2xpZW50XFxzcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFOztFQUVFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsdUJBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc2l0cm9ueCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYm94LmJhY2sge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3g6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLFxyXG4gIC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHggNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC44Mzc1ZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLmRvb3ItaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gIH1cclxuICBcclxuICAuaW1nX2xvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH0iLCIubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4ucG9zaXRyb254IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHotaW5kZXg6IDU7XG4gIG1heC13aWR0aDogMzMwcHg7XG59XG5cbi5ib3guYmFjayB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRvcDogLTIwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcbi5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xuICBwYWRkaW5nOiAzMHB4IDUwcHggNDBweDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY3RkE7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xufVxuXG4uZG9vci1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbn1cblxuLmltZ19sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59Il19 */"] });


/***/ }),

/***/ 5881:
/*!*************************************!*\
  !*** ./src/app/mat-paginator-jp.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatPaginatorIntlJa": () => (/* binding */ MatPaginatorIntlJa)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 6439);

class MatPaginatorIntlJa extends _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl {
    constructor() {
        super(...arguments);
        this.itemsPerPageLabel = '件数';
        this.nextPageLabel = '次へ';
        this.previousPageLabel = '戻る';
        this.getRangeLabel = (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return `${length} 件中 0`;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return `全 ${length} 件中 ${startIndex + 1} - ${endIndex} 件表示`;
        };
    }
}


/***/ }),

/***/ 2078:
/*!******************************************************!*\
  !*** ./src/app/navi-delete/navi-delete.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NaviDeleteComponent": () => (/* binding */ NaviDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinner.service */ 8250);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);









class NaviDeleteComponent {
    constructor(dialogRef, email, dbService, snackBar, spinnerService, router) {
        this.dialogRef = dialogRef;
        this.email = email;
        this.dbService = dbService;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.router = router;
    }
    ngOnInit() {
    }
    onCancel() {
        this.dialogRef.close();
    }
    onDelete() {
        this.spinnerService.attach();
        this.dbService.delete('user', this.email)
            .subscribe(result => {
            if (result) {
                this.spinnerService.detach();
                this.snackBar.open('削除しました', '閉じる', { duration: 5000 });
                this.router.navigate(['/home']);
                this.dialogRef.close();
            }
            else {
                this.spinnerService.detach();
                this.snackBar.open('削除できませんでした', '閉じる', { duration: 7000 });
            }
        });
    }
}
NaviDeleteComponent.ɵfac = function NaviDeleteComponent_Factory(t) { return new (t || NaviDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
NaviDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NaviDeleteComponent, selectors: [["app-navi-delete"]], decls: 13, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "dialog-buttons"], ["mat-button", "", 3, "click"], ["fxFlexOffset", "auto"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function NaviDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u672C\u5F53\u306B\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "p")(4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u306E\u5168\u3066\u306E\u30C7\u30FC\u30BF\u304C\u524A\u9664\u3055\u308C\u307E\u3059");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NaviDeleteComponent_Template_button_click_8_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u30AD\u30E3\u30F3\u30BB\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 4)(11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NaviDeleteComponent_Template_button_click_11_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u524A\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexOffsetDirective], styles: [".mat-dialog-actions[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmktZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXCVFNSVBNCVBNyVFNiVBMCU4NCVFNCVCOCU4RCVFNSU4QiU5NSVFNyU5NCVBMyVFNiVBMCVBQSVFNSVCQyU4RiVFNCVCQyU5QSVFNyVBNCVCRVxcV29ya1xcaGFtYTY0NVxcY2xpZW50XFxzcmNcXGFwcFxcbmF2aS1kZWxldGVcXG5hdmktZGVsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJuYXZpLWRlbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbn0iLCIubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59Il19 */"] });


/***/ }),

/***/ 2285:
/*!****************************************!*\
  !*** ./src/app/navi/navi.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NaviComponent": () => (/* binding */ NaviComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _navi_delete_navi_delete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navi-delete/navi-delete.component */ 2078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 9975);



















const _c0 = ["drawer"];

function NaviComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NaviComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

      return _r0.toggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

const _c1 = ["*"];
class NaviComponent {
  constructor(breakpointObserver, router, authService, snackBar, dbService, dialog) {
    this.breakpointObserver = breakpointObserver;
    this.router = router;
    this.authService = authService;
    this.snackBar = snackBar;
    this.dbService = dbService;
    this.dialog = dialog;
    this.email = '';
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)(1));
  }

  ngOnInit() {
    this.getEmail();
  }

  onLogout() {
    this.authService.logout().subscribe(result => {
      if (result) {
        this.router.navigate(['/login']);
      } else {
        this.snackBar.open('ログアウトできませんでした', '閉じる', {
          duration: 5000
        });
      }
    });
  }

  onDelete() {
    this.dialog.open(_navi_delete_navi_delete_component__WEBPACK_IMPORTED_MODULE_0__.NaviDeleteComponent, {
      width: '400px',
      data: this.email
    });
  }

  onRouter(place) {
    this.router.navigate([`/${place}`]);
    this.isHandset$.subscribe(result => {
      if (result) {
        this.drawer.close();
      }
    });
  }

  getEmail() {
    this.dbService.getEmail().subscribe(email => this.email = email);
  }

}

NaviComponent.ɵfac = function NaviComponent_Factory(t) {
  return new (t || NaviComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};

NaviComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NaviComponent,
  selectors: [["app-navi"]],
  viewQuery: function NaviComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    }
  },
  ngContentSelectors: _c1,
  decls: 40,
  vars: 14,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", 3, "click"], [1, "list-icon"], ["scroll", ""], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxFlexOffset", "auto", 1, "navi-email"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "user-profile"], ["userMenu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]],
  template: function NaviComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "DM\u7BA1\u7406\u30C4\u30FC\u30EB");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-nav-list")(9, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NaviComponent_Template_a_click_9_listener() {
        return ctx.onRouter("home/account");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Twitter ID \u9023\u643A");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NaviComponent_Template_a_click_13_listener() {
        return ctx.onRouter("home/log");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u30A4\u30D9\u30F3\u30C8\u30ED\u30B0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-sidenav-content", null, 5)(19, "mat-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, NaviComponent_button_20_Template, 3, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 7)(23, "button", 8)(24, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "keyboard_arrow_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-menu", 9, 10)(28, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NaviComponent_Template_button_click_31_listener() {
        return ctx.onLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " \u30ED\u30B0\u30A2\u30A6\u30C8 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NaviComponent_Template_button_click_35_listener() {
        return ctx.onDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "delete_forever");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " \u30A2\u30AB\u30A6\u30F3\u30C8\u524A\u9664 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, ctx.isHandset$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, ctx.isHandset$) ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 12, ctx.isHandset$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.email);
    }
  },
  directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexOffsetDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #3f51b5;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n  color: #FFFFFF;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-headline[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n}\n\n.navi-email[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.email[_ngcontent-%COMP%] {\n  margin: 24px 16px 24px 16px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  border-top-color: #FFFFFF;\n}\n\n.list-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUU1JUE0JUE3JUU2JUEwJTg0JUU0JUI4JThEJUU1JThCJTk1JUU3JTk0JUEzJUU2JUEwJUFBJUU1JUJDJThGJUU0JUJDJTlBJUU3JUE0JUJFXFxXb3JrXFxoYW1hNjQ1XFxjbGllbnRcXHNyY1xcYXBwXFxuYXZpXFxuYXZpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJuYXZpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4gIFxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGxpbmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ubmF2aS1lbWFpbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmVtYWlsIHtcclxuICAgIG1hcmdpbjogMjRweCAxNnB4IDI0cHggMTZweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC1kaXZpZGVyIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICNGRkZGRkZcclxufVxyXG5cclxuLmxpc3QtaWNvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn0iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWF0LWhlYWRsaW5lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5uYXZpLWVtYWlsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uZW1haWwge1xuICBtYXJnaW46IDI0cHggMTZweCAyNHB4IDE2cHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5saXN0LWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59Il19 */"]
});

/***/ }),

/***/ 51:
/*!******************************************!*\
  !*** ./src/app/oauth/oauth.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OauthComponent": () => (/* binding */ OauthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinner.service */ 8250);





class OauthComponent {
    constructor(route, router, authService, snackBar, spinnerService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.params = {};
        this.iframe = false;
    }
    ngOnInit() {
        this.spinnerService.attach();
        this.params = this.route.snapshot.queryParams;
        if (this.params['screen_name'] && !this.params['oauth_token'] && !this.params['oauth_verifier']) {
            if (this.params['denied']) {
                this.spinnerService.detach();
                this.router.navigate(['/home']);
                return;
            }
            /* Step1: Request Token */
            this.authService.requestToken(this.params['screen_name'])
                .subscribe(result => {
                if (result.oauth_callback_confirmed) {
                    window.location.href = encodeURI(`https://api.twitter.com/oauth/authorize?oauth_token=${result.oauth_token}&force_login=true&screen_name=${this.params['screen_name']}`);
                }
                else {
                    console.log('Request token failed');
                    this.failed();
                }
            });
        }
        else if (this.params['screen_name'] && this.params['oauth_token'] && this.params['oauth_verifier']) {
            /* Step2: Authorize token */
            this.authService.checkToken(this.params['screen_name'], this.params['oauth_token'])
                .subscribe(result => {
                if (result) {
                    /* Step3: Exchange token */
                    this.authService.exchangeToken(this.params['screen_name'], this.params['oauth_verifier'])
                        .subscribe(result => {
                        if (result) {
                            this.spinnerService.detach();
                            this.snackBar.open('連携に成功しました', '閉じる', { duration: 5000 });
                            this.router.navigate(['home']);
                        }
                        else {
                            console.log('Exchange token failed');
                            this.failed();
                        }
                    });
                }
                else {
                    console.log('Check token failed');
                    this.failed();
                }
            });
        }
    }
    failed() {
        this.spinnerService.detach();
        this.snackBar.open('連携に失敗しました', '閉じる', { duration: 7000 });
        this.router.navigate(['home']);
    }
}
OauthComponent.ɵfac = function OauthComponent_Factory(t) { return new (t || OauthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__.SpinnerService)); };
OauthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OauthComponent, selectors: [["app-oauth"]], decls: 0, vars: 0, template: function OauthComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function RegisterComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function RegisterComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function RegisterComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u30D1\u30B9\u30EF\u30FC\u30C9(\u78BA\u8A8D)\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class RegisterComponent {
    constructor(fb, router, authService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email
        ]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.password2Control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: this.emailControl,
            password: this.passwordControl,
            password2: this.password2Control
        });
    }
    onSubmit() {
        var _a, _b, _c, _d;
        let user = {
            email: (_a = this.form.get('email')) === null || _a === void 0 ? void 0 : _a.value,
            password: (_b = this.form.get('password')) === null || _b === void 0 ? void 0 : _b.value
        };
        if (user.password !== ((_c = this.form.get('password2')) === null || _c === void 0 ? void 0 : _c.value)) {
            this.snackBar.open('パスワードが一致していません', '閉じる', { duration: 7000 });
            (_d = this.form.get('password2')) === null || _d === void 0 ? void 0 : _d.setValue(null);
            return;
        }
        else {
            this.authService.exist('user', user.email)
                .subscribe(exist => {
                if (exist) {
                    this.snackBar.open('このアドレスは既に登録済みです', '閉じる', { duration: 7000 });
                }
                else {
                    this.authService.create(user)
                        .subscribe(result => {
                        if (result) {
                            this.authService.login(user)
                                .subscribe(() => {
                                if (result) {
                                    this.router.navigate(['home']);
                                }
                                else {
                                    this.snackBar.open('ログインできませんでした', '閉じる', { duration: 7000 });
                                }
                            });
                        }
                        else {
                            this.snackBar.open('登録できませんでした', '閉じる', { duration: 7000 });
                        }
                    });
                }
            });
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 25, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-wrapper"], [1, "box"], [1, "img_logo"], ["src", "assets/icon96.png"], ["novalidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "placeholder", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", "type", "email", "name", "email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "\u30D1\u30B9\u30EF\u30FC\u30C9", "type", "password", "name", "password", "formControlName", "password", "autocomplete", "off"], ["matInput", "", "placeholder", "\u30D1\u30B9\u30EF\u30FC\u30C9(\u78BA\u8A8D)", "type", "password", "name", "password2", "formControlName", "password2", "autocomplete", "off"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-button", "", "routerLink", "/login", "routerLinkActive", "active"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header")(5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "DM\u7BA1\u7406\u30C4\u30FC\u30EB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Twitter\u9023\u643A\u30B7\u30B9\u30C6\u30E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content")(11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_mat_error_13_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RegisterComponent_mat_error_16_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 10)(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u30ED\u30B0\u30A4\u30F3\u3078");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailControl.hasError("required") || ctx.emailControl.hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password2Control.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: [".login-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 16px;\n}\n\n.positronx[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box.back[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.6);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  margin-bottom: 24px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 30px 50px 40px;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  border: 1px solid currentColor;\n  line-height: 54px;\n  background: #FFF7FA;\n}\n\n.login-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.8375em 0;\n}\n\n.door-icon[_ngcontent-%COMP%] {\n  transform: scale(3);\n}\n\n.img_logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXCVFNSVBNCVBNyVFNiVBMCU4NCVFNCVCOCU4RCVFNSU4QiU5NSVFNyU5NCVBMyVFNiVBMCVBQSVFNSVCQyU4RiVFNCVCQyU5QSVFNyVBNCVCRVxcV29ya1xcaGFtYTY0NVxcY2xpZW50XFxzcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFOztFQUVFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsdUJBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUVBLFNBQUE7QUNBSiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnBvc2l0cm9ueCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYm94LmJhY2sge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3g6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLFxyXG4gIC5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHggNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMC44Mzc1ZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLmRvb3ItaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gIH1cclxuICBcclxuICAuaW1nX2xvZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy9wYWRkaW5nOiA4cHggOHB4IDI0cHggOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH0iLCIubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4ucG9zaXRyb254IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHotaW5kZXg6IDU7XG4gIG1heC13aWR0aDogMzMwcHg7XG59XG5cbi5ib3guYmFjayB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRvcDogLTIwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcbi5sb2dpbi13cmFwcGVyIC5idG4tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmQge1xuICBwYWRkaW5nOiAzMHB4IDUwcHggNDBweDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY3RkE7XG59XG5cbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xufVxuXG4uZG9vci1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbn1cblxuLmltZ19sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59Il19 */"] });


/***/ }),

/***/ 8250:
/*!************************************!*\
  !*** ./src/app/spinner.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerService": () => (/* binding */ SpinnerService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);




class SpinnerService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy: this.overlay
                .position().global().centerHorizontally().centerVertically()
        });
    }
    attach() {
        this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.ComponentPortal(_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatSpinner));
    }
    detach() {
        this.overlayRef.detach();
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay)); };
SpinnerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6155:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.service */ 2728);
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spinner.service */ 8250);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);












function SummaryComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "DM\u53D7\u4FE1\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SummaryComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16.screen_name, " ");
} }
function SummaryComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.date[4]);
} }
function SummaryComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.date[4], " ");
} }
function SummaryComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.date[3]);
} }
function SummaryComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.date[3], " ");
} }
function SummaryComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.date[2]);
} }
function SummaryComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r19.date[2], " ");
} }
function SummaryComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.date[1]);
} }
function SummaryComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r20.date[1], " ");
} }
function SummaryComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.date[0]);
} }
function SummaryComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r21.date[0], " ");
} }
function SummaryComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u5F53\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SummaryComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r22.sum, " ");
} }
function SummaryComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 19);
} }
function SummaryComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
} }
const _c0 = function () { return [50, 200, 1000]; };
class SummaryComponent {
    constructor(dbService, spinnerService, snackBar) {
        this.dbService = dbService;
        this.spinnerService = spinnerService;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'screen_name',
            'date4',
            'date3',
            'date2',
            'date1',
            'date0',
            'sum'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
        this.date = new Array(5);
        this.disableAnimation = true;
    }
    ngOnInit() {
        this.date[0] = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
        for (let i = 1; i < this.date.length; i++) {
            let time = new Date(Date.now() - (24 * (i - 1) * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000);
            this.date[i] = `${time.getMonth() + 1}/${time.getDate()}`;
        }
        this.getSummary();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        setTimeout(() => this.disableAnimation = false);
    }
    getSummary() {
        this.spinnerService.attach();
        this.dbService.getAll('summary')
            .subscribe(summary => {
            if (summary.length === 0) {
                this.snackBar.open('連携しているTwitter ID がありません', '閉じる', { duration: 5000 });
                this.spinnerService.detach();
                return;
            }
            let displaylogs = [];
            let sum_date = new Array(5);
            sum_date.fill(0);
            let sum_month = 0;
            summary.forEach(el => {
                for (let i = 0; i < el.date.length; i++) {
                    sum_date[i] += el.date[i];
                }
                sum_month += el.sum;
                displaylogs.push({
                    screen_name: el.screen_name,
                    date: el.date,
                    sum: el.sum
                });
            });
            displaylogs.unshift({
                screen_name: '全アカウント',
                date: sum_date,
                sum: sum_month
            });
            this.dataSource.data = displaylogs;
            this.spinnerService.detach();
        });
    }
    onRefresh() {
        this.ngOnInit();
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_db_service__WEBPACK_IMPORTED_MODULE_0__.DbService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
SummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], viewQuery: function SummaryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 30, vars: 6, consts: [[1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "screen_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date4"], ["matColumnDef", "date3"], ["matColumnDef", "date2"], ["matColumnDef", "date1"], ["matColumnDef", "date0"], ["matColumnDef", "sum"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-fab", "", "color", "primary", 1, "refresh-btn", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SummaryComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SummaryComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SummaryComponent_th_6_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SummaryComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SummaryComponent_th_9_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SummaryComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SummaryComponent_th_12_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SummaryComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SummaryComponent_th_15_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SummaryComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SummaryComponent_th_18_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SummaryComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SummaryComponent_th_21_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SummaryComponent_td_22_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SummaryComponent_tr_23_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SummaryComponent_tr_24_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_27_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@.disabled", ctx.disableAnimation);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  margin: 8px 8px 16px 8px;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: fixed;\n  bottom: 64px;\n  right: 24px;\n}\n\n.mat-paginator-range-label[_ngcontent-%COMP%] {\n  margin: 0 24px 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcJUU1JUE0JUE3JUU2JUEwJTg0JUU0JUI4JThEJUU1JThCJTk1JUU3JTk0JUEzJUU2JUEwJUFBJUU1JUJDJThGJUU0JUJDJTlBJUU3JUE0JUJFXFxXb3JrXFxoYW1hNjQ1XFxjbGllbnRcXHNyY1xcYXBwXFxzdW1tYXJ5XFxzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDE2cHggOHB4O1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0biB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA2NHB4O1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLXJhbmdlLWxhYmVsIHtcclxuICAgIG1hcmdpbjogMCAyNHB4IDAgMTZweDtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIG1hcmdpbjogOHB4IDhweCAxNnB4IDhweDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnJlZnJlc2gtYnRuIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY0cHg7XG4gIHJpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LXBhZ2luYXRvci1yYW5nZS1sYWJlbCB7XG4gIG1hcmdpbjogMCAyNHB4IDAgMTZweDtcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map