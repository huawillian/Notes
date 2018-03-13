webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\"> New Note </button>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__("./src/app/add/add.component.html"),
            styles: [__webpack_require__("./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a routerLink=\"/\"> Notes List </a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes_component__ = __webpack_require__("./src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_note_component__ = __webpack_require__("./src/app/note/note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_add_component__ = __webpack_require__("./src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details_component__ = __webpack_require__("./src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__ = __webpack_require__("./src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__notes_notes_component__["a" /* NotesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__note_note_component__["a" /* NoteComponent */],
                __WEBPACK_IMPORTED_MODULE_5__add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_6__details_details_component__["a" /* DetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_api_service__["a" /* ApiService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"note\" class=\"card\">\n  <h1 *ngIf=\"!isEdit\" class=\"title-view\"> {{note.title}} </h1>\n  <input *ngIf=\"isEdit\" type=\"text\" class=\"edit-title\" [(ngModel)]=\"editTitle\">\n  \n  <pre *ngIf=\"!isEdit\" class=\"content-view\"> {{note.content}} </pre>\n  <button *ngIf=\"!isEdit\" class=\"btn btn-secondary edit-btn\" (click)=\"onEdit()\"> Edit </button>\n  \n  <textarea rows=\"5\" *ngIf=\"isEdit\" class=\"edit-content\" [(ngModel)]=\"editContent\"></textarea>  \n  <button *ngIf=\"isEdit\" class=\"btn btn-primary save-btn\" (click)=\"onSave()\"> Save </button>\n  <button *ngIf=\"isEdit\" class=\"btn btn-danger cancel-btn\" (click)=\"onCancel()\"> Cancel </button>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.isEdit = false;
    }
    DetailsComponent.prototype.retrieveDetails = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get('id');
            _this.note = _this.apiService.get(_this.id);
        });
    };
    DetailsComponent.prototype.ngOnInit = function () {
        this.retrieveDetails();
    };
    DetailsComponent.prototype.onEdit = function () {
        this.editContent = this.note.content;
        this.editTitle = this.note.title;
        this.isEdit = true;
    };
    DetailsComponent.prototype.onSave = function () {
        this.note.content = this.editContent;
        this.note.title = this.editTitle;
        this.isEdit = false;
        this.apiService.change(this.id, this.note);
    };
    DetailsComponent.prototype.onCancel = function () {
        this.editContent = this.note.content;
        this.editTitle = this.note.title;
        this.isEdit = false;
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/models/note.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = /** @class */ (function () {
    function Note(title, content) {
        if (title === void 0) { title = "Untitled"; }
        if (content === void 0) { content = "No content added..."; }
        this.title = title;
        this.content = content;
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/note/note.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note/note.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h1 class=\"note-title\"> {{note.title}} </h1>\n  <button class=\"btn btn-danger remove-btn\" (click)=\"removeEvent.emit()\"> Remove </button>\n  <button class=\"btn btn-success view-btn\" (click)=\"viewEvent.emit()\"> View </button>\n</div>"

/***/ }),

/***/ "./src/app/note/note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_note_model__ = __webpack_require__("./src/app/models/note.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteComponent = /** @class */ (function () {
    function NoteComponent() {
        this.viewEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.removeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NoteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('note'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_note_model__["a" /* Note */])
    ], NoteComponent.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('view'),
        __metadata("design:type", Object)
    ], NoteComponent.prototype, "viewEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('remove'),
        __metadata("design:type", Object)
    ], NoteComponent.prototype, "removeEvent", void 0);
    NoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-note',
            template: __webpack_require__("./src/app/note/note.component.html"),
            styles: [__webpack_require__("./src/app/note/note.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Notes </h1>\n<app-note class=\"note\" *ngFor=\"let note of notes; let i = index\" [note]=\"note\" (remove)=\"remove(i)\" (view)=\"view(i)\"> </app-note>\n<app-add class=\"new\" (click)=\"addNew()\"> </app-add>"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_note_model__ = __webpack_require__("./src/app/models/note.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesComponent = /** @class */ (function () {
    function NotesComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.notes = this.apiService.get();
    };
    NotesComponent.prototype.view = function (i) {
        // route to idx to show details
        this.router.navigate(['details', i]);
    };
    NotesComponent.prototype.remove = function (i) {
        this.apiService.remove(i);
        this.notes = this.apiService.get();
    };
    NotesComponent.prototype.addNew = function () {
        var idx = this.apiService.add(new __WEBPACK_IMPORTED_MODULE_3__models_note_model__["a" /* Note */]());
        this.notes = this.apiService.get();
    };
    NotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notes',
            template: __webpack_require__("./src/app/notes/notes.component.html"),
            styles: [__webpack_require__("./src/app/notes/notes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notes_notes_component__ = __webpack_require__("./src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details_component__ = __webpack_require__("./src/app/details/details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* DetailsComponent */] },
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__notes_notes_component__["a" /* NotesComponent */],
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__notes_notes_component__["a" /* NotesComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_note_model__ = __webpack_require__("./src/app/models/note.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService() {
        this.notes = [];
    }
    ApiService.prototype.add = function (note) {
        this.notes.push(note);
        return this.notes.length - 1;
    };
    ApiService.prototype.remove = function (idx) {
        this.notes.splice(idx, 1);
    };
    ApiService.prototype.change = function (idx, note) {
        this.notes[idx] = note;
    };
    ApiService.prototype.get = function (idx) {
        if (idx === undefined) {
            return this.notes.slice().map(function (v) { return new __WEBPACK_IMPORTED_MODULE_1__models_note_model__["a" /* Note */](v.title, v.content); });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1__models_note_model__["a" /* Note */](this.notes[idx].title, this.notes[idx].content);
        }
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map