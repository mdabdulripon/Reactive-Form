webpackJsonp([2],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n<!-- <div class=\"well\">\n    <h1 class=\"text-center\">\n        {{ title }}\n    </h1>\n</div>\n\n <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n\n        <div class=\"well\">\n            <h3>\n                CUSTOMER INFO\n            </h3>\n        </div> -->\n<!-- \n        <form [formGroup]=\"userForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n            <div class=\"form-group\">\n                <label for=\"name\">Name:</label>\n                <br>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"email\">Email:</label>\n                <br>\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n            </div> \n\n            <div class=\"form-group\">\n                <label for=\"phone\">Phone:</label>\n                <br>\n                <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n            </div> \n\n            <div formArrayName=\"addresses\">\n                <div *ngFor=\"let address of userForm.controls.addresses.controls; let i = index\">\n\n                    <div class=\"well\" style=\"background: #C00C00\">\n                        <b>Address {{i + 1}}</b>\n                        <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"userForm.controls.addresses.controls.length > 1\" (click)=\"removeAddress(i)\"></span>\n                    </div>\n\n                    <div [formGroupName]=\"i\" class=\"well\">\n                        <div class=\"form-group\">\n                            <label for=\"street\">Street:</label>\n                            <br>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"street\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"city\">City:</label>\n                            <br>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"city\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"state\">State:</label>\n                            <br>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"state\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"zipcode\">Zipcode:</label>\n                            <br>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"zipcode\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"numberOfChildren\">Number Of Children:</label>\n                            <br>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"numberOfChildren\">\n                        </div>\n\n\n                        <div class=\"form-group\">\n                            <label for=\"children\">Children List:</label>\n                            <br>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"children\">\n                        </div>\n\n\n\n                    </div>\n                </div>\n            </div>\n            <button type=\"button\"  class=\"btn btn-warning\" (click)=\"addAddress()\" style=\"cursor: pointer\">\n                Add another address\n            </button>\n            \n            <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!userForm.valid\" style=\"cursor: pointer\">SUBMIT</button>\n        </form> -->\n        <!-- <br> -->\n        <!-- <pre>{{ userForm.value | json }}</pre>  -->\n    <!-- </div> \n</div>  -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  padding: 20px;\n  font-size: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Passenger } from './model/passenger';
var AppComponent = (function () {
    // public userForm: FormGroup;
    function AppComponent(fb) {
        this.fb = fb;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.userForm = this.fb.group({
        //     name: ['', [Validators.required, Validators.minLength(5)]],
        //     email: [''],
        //     phone: [''],
        //     addresses: this.fb.array([
        //         this.initAddress(),
        //     ])
        // });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__company_data__ = __webpack_require__("../../../../../src/app/company.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__company_service_service__ = __webpack_require__("../../../../../src/app/company-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__list_list_component__["a" /* ListComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_8_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__company_data__["a" /* CompanyData */]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__company_service_service__["a" /* companyServiceService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");


var routes = [
    {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full'
    },
    {
        path: 'company',
        component: __WEBPACK_IMPORTED_MODULE_0__list_list_component__["a" /* ListComponent */]
    },
    {
        path: 'company/create',
        component: __WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */]
    },
    {
        path: 'company/edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */]
    }
    //  { path: 'product/:id',
    //     canActivate: [ ProductDetailGuard],
    //     component: ProductDetailComponent
    //   },
    //   { path: 'productEdit/:id',
    //     canDeactivate: [ ProductEditGuard ],
    //     component: ProductEditComponent },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/company-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return companyServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var companyServiceService = (function () {
    function companyServiceService(http) {
        this.http = http;
        this.baseUrl = 'api/companies';
    }
    companyServiceService.prototype.getCompanies = function () {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(function (data) { return console.log('getCompanies: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    companyServiceService.prototype.getCompany = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http.get(url)
            .map(this.extractData)
            .do(function (data) { return console.log('getCompany: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    companyServiceService.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    companyServiceService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return companyServiceService;
}());
companyServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], companyServiceService);

var _a;
//# sourceMappingURL=company-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/company.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyData; });
var CompanyData = (function () {
    function CompanyData() {
    }
    CompanyData.prototype.createDb = function () {
        var companies = [
            {
                'id': 1,
                'companyName': 'Aamplify',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Aamplifynz',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'categories': ['rake', 'leaf', 'yard', 'home'],
                'cities': [{
                        'cityName': 'Ohio',
                        'state': 'OH',
                        'places': ['Bronx', 'Quuens', 'Staten Island'],
                    }, {
                        'cityName': 'New York',
                        'state': 'NY',
                        'places': ['Queens Village', 'Jamaica'],
                    }]
            },
            {
                'id': 2,
                'companyName': 'Bluescape',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://twitter.com/Bluescape',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'categories': ['rake', 'leaf', 'yard', 'home', 'kazi'],
                'cities': [{
                        'cityName': 'New Jerssy',
                        'state': 'NJ',
                        'places': ['Newark', 'Essex', 'Passaic'],
                    }]
            },
            {
                'id': 3,
                'companyName': 'Celtra',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://twitter.com/Celtra',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'categories': ['rake', 'leaf', 'yard', 'home'],
                'cities': [{
                        'cityName': 'New York',
                        'state': 'NY',
                        'places': ['Staten Island', 'Brooklyn'],
                    }]
            },
            {
                'id': 4,
                'companyName': 'Zinith',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Zinith',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'categories': ['rake', 'leaf', 'yard', 'home'],
                'cities': [{
                        'cityName': 'Pennsylvania',
                        'state': 'PA',
                        'places': ['Fire Field', 'Philadephia'],
                    }]
            },
            {
                'id': 5,
                'companyName': 'Apex',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Apex',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'categories': ['rake', 'leaf', 'yard', 'home'],
                'cities': [{
                        'cityName': 'New Jersey',
                        'state': 'NJ',
                        'places': ['Jersey City', 'Hoboken'],
                    }]
            },
            {
                'id': 6,
                'companyName': 'Ajax',
                'companyUrl': 'http://www.aamplify.partners/',
                'companyBio': 'Outsource marketing & digital expertise.',
                'facebook': 'https://facebook.com/Ajax',
                'twitter': 'https://twitter.com/Aamplifynz',
                'linkedin': 'https://nz.linkedin.com/company/aamplify',
                'categories': ['rake', 'leaf', 'yard', 'home'],
                'cities': [{
                        'cityName': 'New York',
                        'state': 'NY',
                        'places': ['Queens', 'Garden State'],
                    }]
            }
        ];
        return { companies: companies };
    };
    return CompanyData;
}());

//# sourceMappingURL=company.data.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n\t<h3 class=\"text-center\">\n\t\t{{ title }}\n\t</h3>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\n\t\t<form [formGroup]=\"companyForm\" novalidate (ngSubmit)=\"onSubmit(companyForm.value)\">\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"companyName\">Company Name :</label>\n\t\t\t\t<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"companyName\" required>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"companyUrl\">Company URL :</label>\n\t\t\t\t<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"companyUrl\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"companyBio\">Company Bio :</label>\n\t\t\t\t<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"companyBio\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"facebook\">Facebook :</label>\n\t\t\t\t<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"facebook\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"twitter\">Twitter:</label>\n\t\t\t\t<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"twitter\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"linkedin\">Linkdine :</label>\n\t\t\t\t<br>\n\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"linkedin\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\" formArrayName=\"categories\">\n\t\t\t\t<span *ngFor=\"let categorie of categories.controls; let i=index\">\n\t\t\t\t\t<label for=\"linkedin\">Categories :</label>\n\t\t\t\t\t<br>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [formControlName]=\"i\">\n\t\t\t\t</span>\n\t\t\t</div>\n\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>City</th>\n\t\t\t\t\t\t\t<th>State</th>\n\t\t\t\t\t\t\t<th>Place</th>\n\t\t\t\t\t\t\t<th style=\"width: 50px\">Actions</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody formArrayName=\"cities\">\n\t\t\t\t\t\t<tr *ngFor=\"let city of companyForm.controls.cities.controls; let j=index\" [formGroupName]=\"j\">\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"cityName\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"state\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"places\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<!--<td formArrayName=\"places\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let place of city.controls.places.controls; let k=index\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [formControlName]=\"k\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>-->\n\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs\" type=\"button\" (click)=\"removeCity(j)\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-warning btn-xs\" type=\"button\" (click)=\"addCity()\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<button class=\"btn btn-warning\" [routerLink]=\"['/']\">Cancel</button>\n\t\t\t\t\t<button type=\"submit\" *ngIf=\"!isEditing\" class=\"btn btn-primary\" [disabled]=\"!companyForm.valid\">Save</button>\n\t\t\t\t\t<button type=\"submit\" *ngIf=\"isEditing\" class=\"btn btn-primary\" [disabled]=\"!companyForm.valid\">Update</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<br>\n<br>\n\n<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<h3>Form Validity: {{companyForm.valid}}</h3>\n\t\t<pre>{{ companyForm.value | json }}</pre>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_service_service__ = __webpack_require__("../../../../../src/app/company-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Service

var FormComponent = (function () {
    function FormComponent(_fb, route, router, _httpService) {
        this._fb = _fb;
        this.route = route;
        this.router = router;
        this._httpService = _httpService;
        this.title = 'Create Company';
        this.displayMessage = {};
        this.show = false;
        this.validationMessage = {};
    }
    Object.defineProperty(FormComponent.prototype, "cities", {
        get: function () {
            return this.companyForm.get('cities');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "places", {
        get: function () {
            return this.companyForm.get('places');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "categories", {
        get: function () {
            return this.companyForm.get('categories');
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function (form) {
        form.cities = form.cities.map(function (city) {
            if (typeof (city.places) == "string") {
                city.places = city.places.split(/(?:,| )+/);
            }
            return city;
        });
        console.log(form);
    };
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyForm = this._fb.group({
            companyName: [''],
            companyUrl: [''],
            companyBio: [''],
            facebook: [''],
            twitter: [''],
            linkedin: [''],
            categories: this._fb.array([]),
            cities: this._fb.array([
                this.initCities()
            ]),
        });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getCompany(id);
        });
    };
    FormComponent.prototype.setCities = function (cities) {
        // const city = cities.map(cities => this._fb.control(cities));
        // const citiesFormArray = this._fb.array(city);
        // this.companyForm.setControl('cities', citiesFormArray);
        var formCities = this._fb.array([]);
        for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
            var city = cities_1[_i];
            var CITY = this._fb.group({
                cityName: this._fb.control(city.cityName),
                state: this._fb.control(city.state),
                places: this._fb.control(city.places.join(", "))
            });
            formCities.push(CITY);
        }
        this.companyForm.setControl('cities', formCities);
        this.show = true;
    };
    FormComponent.prototype.setPlace = function (places) {
        var _this = this;
        var place = places.map(function (places) { return _this._fb.array(places); });
        var placeFormArray = this._fb.array(place);
        this.companyForm.setControl('places', placeFormArray);
    };
    FormComponent.prototype.initCities = function () {
        return this._fb.group({
            cityName: [''],
            state: [''],
            places: [''],
        });
    };
    FormComponent.prototype.initPlaces = function () {
        return this._fb.array(['']);
    };
    FormComponent.prototype.addCity = function () {
        // alert('Adding');
        var control = this.companyForm.controls['cities'];
        control.push(this.initCities());
    };
    FormComponent.prototype.removeCity = function (j) {
        // alert('removing');
        var control = this.companyForm.controls['cities'];
        control.removeAt(j);
    };
    FormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FormComponent.prototype.addPlace = function () {
        this.places.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]());
    };
    FormComponent.prototype.addCategories = function () {
        this.places.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]());
    };
    FormComponent.prototype.getCompany = function (id) {
        var _this = this;
        this._httpService.getCompany(id).subscribe(function (companies) {
            _this.onCompanyRetrive(companies);
        }, function (error) { return _this.errorMessage = error; });
    };
    FormComponent.prototype.onCompanyRetrive = function (companies) {
        if (this.companyForm) {
            this.companyForm.reset();
        }
        this.companies = companies;
        if (this.companies.id === 0) {
            this.title = 'Add Company Profile';
        }
        else {
            this.title = 'Edit Company Profile';
        }
        this.companyForm.patchValue({
            companyName: this.companies.companyName,
            companyUrl: this.companies.companyUrl,
            companyBio: this.companies.companyBio,
            facebook: this.companies.facebook,
            twitter: this.companies.twitter,
            linkedin: this.companies.linkedin,
        });
        this.companyForm.setControl('categories', this._fb.array(this.companies.categories));
        this.setCities(companies.cities);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__company_service_service__["a" /* companyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__company_service_service__["a" /* companyServiceService */]) === "function" && _d || Object])
], FormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t\t<h1>\n\t\t\t\t{{ pageTitle }}\n\t\t\t\t<button class=\"pull-right btn btn-sm btn-info\">\n\t\t\t\t\t<a [routerLink]=\"['/company/create/']\">Add Product</a>\n\t\t\t\t</button>\n\t\t\t</h1>\n\t\n\t\t\t<hr>\n\n\t\t\t<div class=\"table-responsive\">          \n\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t<thead class=\"thead-inverse\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Company Name</th>\n\t\t\t\t\t\t\t<th>Company URL</th>\n\t\t\t\t\t\t\t<th>Company Bio</th>\n\t\t\t\t\t\t\t<th>Facebook</th>\n\t\t\t\t\t\t\t<th>Twitter</th>\n\t\t\t\t\t\t\t<th>Linkedin</th>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\" let profile of companies\">\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{ profile.companyName }}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{ profile.companyUrl }}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{ profile.companyBio }}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{ profile.facebook}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{ profile.twitter }}\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t{{ profile.linkedin }}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/company/edit', profile.id]\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service_service__ = __webpack_require__("../../../../../src/app/company-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(companyService) {
        this.companyService = companyService;
        this.pageTitle = 'Company Info:';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__company_service_service__["a" /* companyServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service_service__["a" /* companyServiceService */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map