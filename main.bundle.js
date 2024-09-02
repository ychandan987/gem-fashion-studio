webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/abstract-reasoning/abstract-reasoning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/abstract-reasoning/abstract-reasoning.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"top-content\" *ngIf=\"!isSubmit\">\n  <div class=\"inner-bg\"  style=\"margin-left: 20px;\">\n<div>\n <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 3</span>\n</div><hr>\n<div class=\"row\">\n<div class=\"col-md-8 col-xs-12\" style=\"padding-bottom: 30px;border-right: 1px solid #ddd;\">\n\n <div class=\"container-fluid\" >\n  <div class=\"row\">\n   <div class=\"col-md-7 col-xs-6\">\n     <span><b>Question No.{{currQuesNo+1}}</b></span>\n   </div>\n     <div class=\"col-md-5 col-xs-6\">\n     <span  class=\"hd-all pull-right\">Remaining Time:- <b><countdown [config]=\"{leftTime:timer, template:'$!m!:$!s!'}\" (finished) = \"onFinish()\"></countdown></b></span>\n   </div>\n </div>\n <!--\t<button type=\"button\" class=\"btn btn-purple\">Question No.1</button> --><hr>\n   \n </div>\n  <div class=\"container-fluid\">\n   \n    <div *ngFor=\"let post of posts, let i = index\">\n      <div *ngIf=\"currQuesNo == i\">\n        <!-- <p>{{post.que_desc}}</p> -->\n        <img src=\"../assets/{{posts[i].question}}\" class=\"ques-img\" alt=\"question\">\n        <br>\n        <div class=\"well\">\n            <label class=\"radio-container\"> a\n              <input type=\"radio\" name=\"quiz-ans\" value=\"a\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\"> b\n              <input type=\"radio\" name=\"quiz-ans\" value=\"b\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\"> c\n              <input type=\"radio\" name=\"quiz-ans\" value=\"c\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\"> d\n              <input type=\"radio\" name=\"quiz-ans\" value=\"d\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\"> e\n              <input type=\"radio\" name=\"quiz-ans\" value=\"e\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-xs-6\"> \n              <button class=\"btn btn-primary action-btn\" (click)=\"getPrevQues()\" [hidden]=\"currQuesNo==0\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Previous</button>\n            </div>\n            <div class=\"col-md-8 col-xs-6\">\n              <button class=\"pull-right btn btn-primary action-btn\"  (click)=\"getNextQues()\" [hidden]=\"currQuesNo==49\">Next <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n              <!-- <button class=\"pull-right btn btn-info action-btn\">Skip</button> -->\n              <!-- <button (click)=\"submit()\" class=\"pull-right btn btn-danger action-btn\">Submit</button> -->\n              <button class=\"pull-right btn btn-danger action-btn\" data-toggle=\"modal\" data-target=\"#arModal\">Submit</button>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-4 col-xs-12\" style=\"padding-left: 0px;\">\n <div class=\"container-fluid\" style=\"background-color: #ddd;padding: 5px;\">\n   <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 3</span>\n </div><br>\n  <div class=\"col-md-12\">\n    <button type=\"button\" *ngFor=\"let ques of posts; let i = index\" (click)=\"getCurrentQuestion(i)\" class=\"round-button {{isActive(i)}} {{isAttempted(i)}}\">{{i+1}}</button>\n  </div>\n  <hr>\n  <div class=\"col-md-12\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#007ef3\"></i> - Current Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#212529\"></i> - Attempted Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#d6d6d6\"></i> - Unattempted Question\n  </div>\n  \n</div>\n\n</div>\n</div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"arModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"arModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Submit</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure, you want to submit?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"submit()\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/abstract-reasoning/abstract-reasoning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractReasoningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__ = __webpack_require__("../../../../ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbstractReasoningComponent = (function () {
    function AbstractReasoningComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
        this.currentQuestion = {};
        this.currQuesNo = 0;
        this.userAns = [];
        this.selected = 0;
        this.crtAnswers = 0;
        this.atmtAnswers = 0;
        this.wrngAnswers = 0;
        this.totalQues = 0;
        this.isSubmit = false;
    }
    AbstractReasoningComponent.prototype.resetTimer = function () {
        this.counter.restart();
        this.counter.stop();
        this.counter.pause();
        this.counter.resume();
    };
    AbstractReasoningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.checkTnC();
        this.currentuser = JSON.parse(sessionStorage.getItem("currentUser"));
        this._DataService.getAllQuestionsAR().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            _this.totalQues = _this.posts.length;
            _this.currentQuestion = _this.posts[_this.currQuesNo];
            _this.isActive(_this.currQuesNo);
            for (var i = 0; i < _this.posts.length; i++) {
                var userObj = {
                    questionId: '',
                    ans: '',
                    isCorrect: ''
                };
                userObj.questionId = _this.posts[i].que_id;
                _this.userAns.push(userObj);
            }
            _this.resetTimer();
            _this.timer = 1800;
        });
    };
    AbstractReasoningComponent.prototype.checkTnC = function () {
        if (sessionStorage.getItem("isTnCAgreed") != 'true') {
            this.router.navigate(['module']);
        }
    };
    // Next question
    AbstractReasoningComponent.prototype.getNextQues = function () {
        this.currQuesNo++;
    };
    // Previous question
    AbstractReasoningComponent.prototype.getPrevQues = function () {
        this.currQuesNo--;
    };
    // For getting current question
    AbstractReasoningComponent.prototype.getCurrentQuestion = function (qNo) {
        this.currentQuestion = this.posts[qNo];
        this.currQuesNo = qNo;
        // this.select(qNo);
    };
    //For adding active class
    AbstractReasoningComponent.prototype.select = function (item) {
        this.selected = item;
    };
    ;
    //For adding active class
    AbstractReasoningComponent.prototype.isActive = function (item) {
        return this.currQuesNo === item ? 'active' : '';
    };
    ;
    AbstractReasoningComponent.prototype.isAttempted = function (item) {
        return this.userAns[item].ans == '' ? 'skipped' : '';
    };
    ;
    // For getting the result
    AbstractReasoningComponent.prototype.submit = function () {
        var _this = this;
        this.checkAnswers();
        var data = {
            "email": this.currentuser.email,
            "username": this.currentuser.username,
            "totalQuestions": this.totalQues,
            "totalAttempted": this.atmtAnswers,
            "totalCorrect": this.crtAnswers,
            "totalWrong": this.wrngAnswers
        };
        // this._DataService.triggerMail(data).subscribe(res =>{
        //   console.log("Mail Sent!");
        // });
        data["testtime"] = this.getCurrentDateTime();
        console.log("Data: ", data);
        this._DataService.postUserResultAR(data).subscribe(function (res) {
            if (res.success == true) {
                _this.router.navigate(['module/4']);
            }
        });
    };
    // Function for getting current datetime 
    AbstractReasoningComponent.prototype.getCurrentDateTime = function () {
        var d = new Date();
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var month = d.getMonth();
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var year = d.getFullYear();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return year + "-" + months[month] + "-" + day + " " + hr + ":" + min + ":" + sec;
    };
    ;
    // For checking the answers
    AbstractReasoningComponent.prototype.checkAnswers = function () {
        for (var i = 0; i < this.posts.length; i++) {
            if ((this.posts[i].true_ans == this.userAns[i].ans)) {
                this.crtAnswers++;
            }
            else if ((this.userAns[i].ans != '') && (this.posts[i].true_ans != this.userAns[i].ans)) {
                this.wrngAnswers++;
            }
            if ((this.userAns[i].ans != '') && (this.userAns[i].ans != undefined)) {
                this.atmtAnswers++;
            }
        }
    };
    AbstractReasoningComponent.prototype.onFinish = function () {
        this.submit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownComponent"])
    ], AbstractReasoningComponent.prototype, "counter", void 0);
    AbstractReasoningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-abstract-reasoning',
            template: __webpack_require__("../../../../../src/app/abstract-reasoning/abstract-reasoning.component.html"),
            styles: [__webpack_require__("../../../../../src/app/abstract-reasoning/abstract-reasoning.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AbstractReasoningComponent);
    return AbstractReasoningComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-userview/admin-userview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-userview/admin-userview.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n\n<div class=\"container-fluid\">\n  <!-- Example DataTables Card-->\n  <div class=\"card mb-3\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-table\"></i> All Registered Users</div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-dark table-hover\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>Sr.No.</th>\n              <th>Name</th>\n              <th>Results</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of posts | paginate: { itemsPerPage: 10, currentPage: p }, let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{post.username}}</td>\n              <td><a routerLink=\"/admin/result/{{post.username}}\">View</a></td>\n            </tr>\n          </tbody>\n        </table>\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-userview/admin-userview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUserviewComponent = (function () {
    function AdminUserviewComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
    }
    AdminUserviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this._DataService.getAllUsers().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            console.log(_this.posts);
        });
    };
    AdminUserviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-userview',
            template: __webpack_require__("../../../../../src/app/admin-userview/admin-userview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-userview/admin-userview.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AdminUserviewComponent);
    return AdminUserviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = (function () {
    function AdminGuard(router) {
        this.router = router;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.isAdmin = sessionStorage.getItem('isAdmin');
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        console.log("Admin Guard");
        if (sessionStorage.getItem('isAdmin') == 'true') {
            console.log('Admin');
            return true;
        }
        else {
            if (this.currentUser == undefined) {
                console.log('User');
                this.router.navigate(['login']);
            }
            else {
                this.router.navigate(['dashboard']);
            }
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/admin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_guard__ = __webpack_require__("../../../../../src/app/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_userview_admin_userview_component__ = __webpack_require__("../../../../../src/app/admin-userview/admin-userview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_result_user_result_component__ = __webpack_require__("../../../../../src/app/user-result/user-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_display_result_display_component__ = __webpack_require__("../../../../../src/app/result-display/result-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__allusers_allusers_component__ = __webpack_require__("../../../../../src/app/allusers/allusers.component.ts");






var ADMIN_ROUTES = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/registered-users', component: __WEBPACK_IMPORTED_MODULE_2__admin_userview_admin_userview_component__["a" /* AdminUserviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/result/:uId', component: __WEBPACK_IMPORTED_MODULE_3__user_result_user_result_component__["a" /* UserResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/result/:uId/:modId/:levId', component: __WEBPACK_IMPORTED_MODULE_4__result_display_result_display_component__["a" /* ResultDisplayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__admin_guard__["a" /* AdminGuard */]] },
    { path: 'admin/allusers', component: __WEBPACK_IMPORTED_MODULE_5__allusers_allusers_component__["a" /* AllusersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__admin_guard__["a" /* AdminGuard */]] },
];


/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n\n<div class=\"content-wrapper\">\n      <router-outlet></router-outlet>\n</div>\n\n<!-- Footer -->\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/allusers/allusers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allusers/allusers.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n\n<div class=\"container-fluid\">\n  <!-- Example DataTables Card-->\n  <div class=\"card mb-3\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-table\"></i><b>All User Profile</b></div>\n\n      <div class=\"card-header\">\n          <i class=\"fa fa-table\"></i><b>No. Of Total Users - [{{usercount.TotalUserCount}}] </b></div>\n     \n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover table-dark\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Sr.No.</th>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Address</th>\n              \n              <th scope=\"col\">Phone</th>\n              <th scope=\"col\">Email</th>\n              <th scope=\"col\">Adhar Card</th>\n              <th scope=\"col\">High Educational qualification</th>\n              <th scope=\"col\">Date of Birth</th>\n              <th scope=\"col\" >Gender</th>\n              <th scope=\"col\" >Status</th>\n              <th scope=\"col\" >Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of posts | paginate: { itemsPerPage: 10, currentPage: p }, let i = index\">\n              <th  scope=\"row\">{{i+1}}</th>\n              <td>{{post.username}}</td>\n              <td>{{post.address}}</td>\n              \n              <td>{{post.phone}}</td>\n              <td>{{post.email}}</td>\n              <td>{{post.adhar}}</td>\n              <td>{{post.high_edu_quali}}</td>\n              <td>{{post.dob}}</td>\n              <td>{{post.gender}}</td>\n              <td>{{post.status}}</td>\n              <td><button type=\"button\" class=\"btn btn-info\" (click)=\"changeStatus(post.email,post.status)\">Change Status</button></td>\n              <!-- <td><a routerLink=\"/profile/profile-edit/{{post.username}}\">Edit</a></td> -->\n            </tr>\n          </tbody>\n        </table>\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/allusers/allusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllusersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllusersComponent = (function () {
    function AllusersComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
    }
    AllusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(sessionStorage.getItem("currentUser"));
        // console.log(this.user.username);
        this.spinnerService.show();
        this._DataService.getAllUsers().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            // console.log("cu",this.posts);
        });
        this._DataService.getAllUsersCount().subscribe(function (res) {
            _this.usercount = res[0];
            console.log("cu", _this.usercount);
        });
    };
    AllusersComponent.prototype.changeStatus = function (email, status) {
        var _this = this;
        if (status == "Active") {
            status = "Deactive";
        }
        else {
            status = "Active";
        }
        var sts = {
            "status": status
        };
        this._DataService.updateSingleUserStatus(email, sts).subscribe(function (res) {
            // this.status = res[0].email; 
            console.log("status change result", res);
            _this._DataService.getAllUsers().subscribe(function (res) {
                _this.posts = res;
            });
        });
    };
    AllusersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-allusers',
            template: __webpack_require__("../../../../../src/app/allusers/allusers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/allusers/allusers.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AllusersComponent);
    return AllusersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__ = __webpack_require__("../../../../ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_guard__ = __webpack_require__("../../../../../src/app/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_snotify__ = __webpack_require__("../../../../ng-snotify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_charts_ng4_charts__ = __webpack_require__("../../../../ng4-charts/ng4-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_charts_ng4_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng4_charts_ng4_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__public_public_component__ = __webpack_require__("../../../../../src/app/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__secure_secure_component__ = __webpack_require__("../../../../../src/app/secure/secure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__module_module_component__ = __webpack_require__("../../../../../src/app/module/module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ppq_ppq_component__ = __webpack_require__("../../../../../src/app/ppq/ppq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__task_maturity_task_maturity_component__ = __webpack_require__("../../../../../src/app/task-maturity/task-maturity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__abstract_reasoning_abstract_reasoning_component__ = __webpack_require__("../../../../../src/app/abstract-reasoning/abstract-reasoning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__eng_comm_eng_comm_component__ = __webpack_require__("../../../../../src/app/eng-comm/eng-comm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__na_finance_na_finance_component__ = __webpack_require__("../../../../../src/app/na-finance/na-finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__final_final_component__ = __webpack_require__("../../../../../src/app/final/final.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_userview_admin_userview_component__ = __webpack_require__("../../../../../src/app/admin-userview/admin-userview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__user_result_user_result_component__ = __webpack_require__("../../../../../src/app/user-result/user-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__result_display_result_display_component__ = __webpack_require__("../../../../../src/app/result-display/result-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__profileedit_profileedit_component__ = __webpack_require__("../../../../../src/app/profileedit/profileedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__allusers_allusers_component__ = __webpack_require__("../../../../../src/app/allusers/allusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__na_gujrati_na_gujrati_component__ = __webpack_require__("../../../../../src/app/na-gujrati/na-gujrati.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__excel_search_excel_search_component__ = __webpack_require__("../../../../../src/app/excel-search/excel-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_17__public_public_component__["a" /* PublicComponent */],
                __WEBPACK_IMPORTED_MODULE_18__secure_secure_component__["a" /* SecureComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__module_module_component__["a" /* ModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_23__ppq_ppq_component__["a" /* PpqComponent */],
                __WEBPACK_IMPORTED_MODULE_24__task_maturity_task_maturity_component__["a" /* TaskMaturityComponent */],
                __WEBPACK_IMPORTED_MODULE_25__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_26__abstract_reasoning_abstract_reasoning_component__["a" /* AbstractReasoningComponent */],
                __WEBPACK_IMPORTED_MODULE_27__eng_comm_eng_comm_component__["a" /* EngCommComponent */],
                __WEBPACK_IMPORTED_MODULE_28__na_finance_na_finance_component__["a" /* NaFinanceComponent */],
                __WEBPACK_IMPORTED_MODULE_29__final_final_component__["a" /* FinalComponent */],
                __WEBPACK_IMPORTED_MODULE_30__admin_userview_admin_userview_component__["a" /* AdminUserviewComponent */],
                __WEBPACK_IMPORTED_MODULE_31__user_result_user_result_component__["a" /* UserResultComponent */],
                __WEBPACK_IMPORTED_MODULE_32__result_display_result_display_component__["a" /* ResultDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_33__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_34__profileedit_profileedit_component__["a" /* ProfileeditComponent */],
                __WEBPACK_IMPORTED_MODULE_35__allusers_allusers_component__["a" /* AllusersComponent */],
                __WEBPACK_IMPORTED_MODULE_36__na_gujrati_na_gujrati_component__["a" /* NaGujratiComponent */],
                __WEBPACK_IMPORTED_MODULE_37__excel_search_excel_search_component__["a" /* ExcelSearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng_snotify__["a" /* SnotifyModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng4_charts_ng4_charts__["ChartsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_5__authguard_guard__["a" /* AuthguardGuard */],
                __WEBPACK_IMPORTED_MODULE_6__admin_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["Location"],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_8__angular_common__["HashLocationStrategy"] },
                { provide: 'SnotifyToastConfig', useValue: __WEBPACK_IMPORTED_MODULE_9_ng_snotify__["c" /* ToastDefaults */] },
                __WEBPACK_IMPORTED_MODULE_9_ng_snotify__["b" /* SnotifyService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_public_component__ = __webpack_require__("../../../../../src/app/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secure_secure_component__ = __webpack_require__("../../../../../src/app/secure/secure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_routing__ = __webpack_require__("../../../../../src/app/public.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__secure_routing__ = __webpack_require__("../../../../../src/app/secure.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_routing__ = __webpack_require__("../../../../../src/app/admin.routing.ts");







// import { AuthguardGuard } from './authguard.guard';
// import { AdminGuard } from './admin.guard';
var appRouter = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__public_public_component__["a" /* PublicComponent */], children: __WEBPACK_IMPORTED_MODULE_4__public_routing__["a" /* PUBLIC_ROUTES */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__secure_secure_component__["a" /* SecureComponent */], children: __WEBPACK_IMPORTED_MODULE_5__secure_routing__["a" /* SECURE_ROUTES */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */], children: __WEBPACK_IMPORTED_MODULE_6__admin_routing__["a" /* ADMIN_ROUTES */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRouter);


/***/ }),

/***/ "../../../../../src/app/authguard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardGuard = (function () {
    function AuthguardGuard(router) {
        this.router = router;
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.usertype = JSON.parse(sessionStorage.getItem('currentUser')).user_type;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        console.log('Current user: ', JSON.parse(sessionStorage.getItem('currentUser')).user_type);
        if (this.currentUser == undefined) {
            this.router.navigate(['login']);
            return false;
        }
        else {
            if (sessionStorage.getItem('isAdmin') == 'true') {
                this.router.navigate(['admin']);
            }
            else {
                return true;
            }
        }
    };
    AuthguardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n\n<div class=\"container-fluid\">\n  \n  <!-- Example DataTables Card-->\n  <div class=\"card mb-3\">\n    <div class=\"card-header\">\n      <!-- <i class=\"fa fa-table\"></i> {{user.username}} Profile</div> -->\n      <h1>Excel Search Box</h1>\n      <div class=\"box\">\n          <i class=\"fa-brands fa-searching\"></i>\n          <input type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" id=\"search\" value=\"\">\n          <button (click)=\"myClickFunction(searchText)\">\n            Click Me\n         </button>\n      </div>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th>Sr.No.</th>\n              <th>SearchValue</th>\n              <th>FilePath</th>\n              <th>SheetName</th>\n              <th>CellRef</th>\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of posts , let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{post.searchValue}}</td>\n              <td>{{post.filePath}}</td>\n              <td>{{post.sheetName}}</td>\n              <td>{{post.cellRef}}</td>\n              <!-- <td><a routerLink=\"/profile/profile-edit/{{post.username}}\">Edit</a></td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
    }
    DashboardComponent.prototype.myClickFunction = function (event) {
        var _this = this;
        //just added console.log which will display the event details in browser on click of the button.
        alert("Keyword that you are searching with: " + event);
        if (event) {
            this.spinnerService.show();
            this._DataService.getSingleUser(event).subscribe(function (res) {
                _this.spinnerService.hide();
                _this.posts = res;
                console.log("cu:", _this.posts);
            });
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // this.spinnerService.show();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datagateway.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatagatewayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatagatewayService = (function () {
    function DatagatewayService(http) {
        this.http = http;
    }
    DatagatewayService.prototype.getAllQuestions = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/allquestions')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllQuestionsTM = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/task_maturity')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllQuestionsPPQ = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/questions2')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllQuestionsAR = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ar_question')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllPassages = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/passage')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllECQuestions = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ec_ques')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllQuestionsNA = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/na_ques')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAnswersPPQ = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ppq')
            .map(function (res) { return res.json(); });
    };
    ;
    // Admin 
    DatagatewayService.prototype.getAllUsers = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/allusers')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getAllUsersCount = function () {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/user_count_total')
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getSingleUser = function (uId) {
        return this.http.get('http://localhost:3001/excel_report?address=' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getUserPPQScore = function (uId) {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/score/' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getSingleUserResult = function (uId) {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/result/' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getSingleUserResultNA = function (uId) {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/na_result/' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getSingleUserResultAR = function (uId) {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ar_result/' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getSingleUserResultEC = function (uId) {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ec_result/' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.getSingleUserStatus = function (uId) {
        return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/singleuserstatus/' + uId)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.updateSingleUserStatus = function (uId, json) {
        return this.http.put('http://sweetlimedigital.in/projects/ccmc_apis/public/api/singleuserstatus/update/' + uId, json)
            .map(function (res) { return res.json(); });
    };
    ;
    // Admins Ends Here
    // getOneUser(){
    //   return this.http.get('http://sweetlimedigital.in/projects/ccmc_apis/public/api/singleuser/')
    //   .map(res=>res.json());
    // };
    DatagatewayService.prototype.userAuthentication = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/login', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.userRegistration = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/user/register', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.postUserResult = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/result/add', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.postUserResultEC = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ec_result/add', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.postPPQResult = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/score/add', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.postUserResultAR = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/ar_result/add', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.postUserResultNA = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/na_result/add', json)
            .map(function (res) { return res.json(); });
    };
    ;
    DatagatewayService.prototype.triggerMail = function (json) {
        return this.http.post('http://sweetlimedigital.in/projects/ccmc_apis/public/api/sendmail', json)
            .map(function (res) { return res; });
    };
    ;
    DatagatewayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DatagatewayService);
    return DatagatewayService;
}());



/***/ }),

/***/ "../../../../../src/app/eng-comm/eng-comm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/eng-comm/eng-comm.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"top-content\" *ngIf=\"!isSubmit\">\n  <div class=\"inner-bg\"  style=\"margin-left: 20px;\">\n<div>\n <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 4</span>\n</div><hr>\n<div class=\"row\">\n<div class=\"col-md-8 col-xs-12\" style=\"padding-bottom: 30px;border-right: 1px solid #ddd;\">\n\n <div class=\"container-fluid\" >\n  <div class=\"row\">\n   <div class=\"col-md-7 col-xs-6\">\n     <b *ngIf=\"currQuesNo<8\">Passage 1</b>\n     <b *ngIf=\"currQuesNo>=8\">Passage 2</b>\n   </div>\n     <div class=\"col-md-5 col-xs-6\">\n     <span  class=\"hd-all pull-right\">Remaining Time:- <b><countdown [config]=\"{leftTime:timer, template:'$!m!:$!s!'}\" (finished) = \"onFinish()\"></countdown></b></span>\n   </div>\n </div>\n <!--\t<button type=\"button\" class=\"btn btn-purple\">Question No.1</button> --><hr>\n   \n </div>\n  <div class=\"container-fluid\">\n    \n    \n    <div>\n      <div *ngFor=\"let para of currentPassage\">\n        <p>{{para}}</p>\n      </div>\n      <!-- {{currentPassage}} -->\n\n      <hr>\n    </div>\n\n\n    <div *ngFor=\"let post of posts, let i = index\">\n      <div *ngIf=\"currQuesNo == i\">\n        <p><b><span *ngIf=\"currQuesNo<8\">Question No.{{currQuesNo+1}}:</span>\n          <span *ngIf=\"currQuesNo>=8\">Question No.{{currQuesNo+1-8}}:</span>\n          <!-- <br>\n          {{post.que_desc}}</b> -->\n\n          <p *ngIf=\"currQuesNo!=4\">{{post.que_desc}}</p>\n          <p *ngIf=\"currQuesNo==4\">\n            <span *ngFor=\"let line of fifth_ques\">\n              {{line}}<br>\n            </span>\n          </p></b>\n        </p>\n         \n          <div class=\"well\">\n            <label class=\"radio-container\">{{post.ans1}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"1\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans2}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"2\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans3}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"3\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans4}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"4\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-xs-6\"> \n              <button class=\"btn btn-primary action-btn\" (click)=\"getPrevQues()\" [hidden]=\"currQuesNo==0\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Previous</button>\n            </div>\n            <div class=\"col-md-8 col-xs-6\">\n              <button class=\"pull-right btn btn-primary action-btn\"  (click)=\"getNextQues()\" [hidden]=\"currQuesNo==13\">Next <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n              <!-- <button (click)=\"submit()\" class=\"pull-right btn btn-danger action-btn\" [disabled]=\"!checkIfAllAttempted()\">Submit</button> -->\n              <button class=\"pull-right btn btn-danger action-btn\" data-toggle=\"modal\" data-target=\"#ecModal\" [disabled]=\"!checkIfAllAttempted()\">Submit</button>\n            </div>\n          </div>\n      </div>\n    </div>\n\n    \n\n  </div>\n</div>\n<div class=\"col-md-4 col-xs-12\" style=\"padding-left: 0px;\">\n <div class=\"container-fluid\" style=\"background-color: #ddd;padding: 5px;\">\n   <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 4</span>\n </div><br>\n  <div class=\"col-md-12\">\n    <p>Passage 1</p>\n    <hr>\n    <button type=\"button\" *ngFor=\"let ques of p1_ques; let i = index\" (click)=\"getCurrentQuestion(i)\" class=\"round-button {{isActive(i)}} {{isAttempted(i)}}\">{{i+1}}</button>\n  </div>\n  <hr>\n  <div class=\"col-md-12\">\n      <p>Passage 2</p>\n      <hr>\n      <button type=\"button\" *ngFor=\"let ques of p2_ques; let i = index\" (click)=\"getCurrentQuestion(i+8)\" class=\"round-button {{isActive(i+8)}} {{isAttempted(i+8)}}\">{{i+1}}</button>\n    </div>\n    <hr>\n  <div class=\"col-md-12\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#007ef3\"></i> - Current Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#212529\"></i> - Attempted Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#d6d6d6\"></i> - Unattempted Question\n  </div>\n  \n</div>\n\n</div>\n</div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"ecModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ecModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Submit</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure, you want to submit?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"submit()\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/eng-comm/eng-comm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EngCommComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__ = __webpack_require__("../../../../ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EngCommComponent = (function () {
    function EngCommComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
        this.passages = [];
        this.currentPassage = [];
        this.p1_ques = [];
        this.p2_ques = [];
        this.fifth_ques = [];
        this.currentQuestion = {};
        this.currQuesNo = 0;
        this.userAns = [];
        this.selected = 0;
        this.crtAnswers = 0;
        this.atmtAnswers = 0;
        this.wrngAnswers = 0;
        this.totalQues = 0;
        this.isSubmit = false;
    }
    EngCommComponent.prototype.resetTimer = function () {
        this.counter.restart();
        this.counter.stop();
        this.counter.pause();
        this.counter.resume();
    };
    EngCommComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.checkTnC();
        this.currentuser = JSON.parse(sessionStorage.getItem("currentUser"));
        this._DataService.getAllPassages().subscribe(function (res) {
            _this.passages = res;
            _this.currentPassage = _this.passages[0].passage.split('+');
            console.log(_this.passages[0].passage.split('+'));
            for (var i = 0; i < _this.currentPassage.length; i++) {
                if (_this.currentPassage[i].indexOf("+") != -1) {
                    _this.currentPassage[i].replace("+", "");
                }
            }
        });
        this._DataService.getAllECQuestions().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            _this.totalQues = _this.posts.length;
            _this.currentQuestion = _this.posts[_this.currQuesNo];
            _this.isActive(_this.currQuesNo);
            _this.fifth_ques = _this.posts[4].que_desc.split("  ");
            console.log("Fifth ques: ", _this.fifth_ques);
            for (var i = 0; i < _this.posts.length; i++) {
                if (_this.posts[i].passage_id == '1') {
                    _this.p1_ques.push(_this.posts[i]);
                }
                else {
                    _this.p2_ques.push(_this.posts[i]);
                }
                ;
            }
            ;
            for (var i_1 = 0; i_1 < _this.posts.length; i_1++) {
                var userObj = {
                    questionId: '',
                    ans: '',
                    isCorrect: ''
                };
                userObj.questionId = _this.posts[i_1].que_id;
                _this.userAns.push(userObj);
            }
            _this.resetTimer();
            _this.timer = 1800;
        });
    };
    // displayPassage(c){
    //   if(){
    //     return true;
    //   } else return false;
    // };
    EngCommComponent.prototype.checkTnC = function () {
        if (sessionStorage.getItem("isTnCAgreed") != 'true') {
            this.router.navigate(['module']);
        }
    };
    // Next question
    EngCommComponent.prototype.getNextQues = function () {
        this.currQuesNo++;
    };
    // Previous question
    EngCommComponent.prototype.getPrevQues = function () {
        this.currQuesNo--;
    };
    // For getting current question
    EngCommComponent.prototype.getCurrentQuestion = function (qNo) {
        this.currentQuestion = this.posts[qNo];
        this.currQuesNo = qNo;
        if (qNo < 8) {
            this.currentPassage = this.passages[0].passage.split('+');
        }
        else
            this.currentPassage = this.passages[1].passage.split('+');
        for (var i = 0; i < this.currentPassage.length; i++) {
            if (this.currentPassage[i].indexOf("+") != -1) {
                this.currentPassage[i].replace("+", "");
            }
        }
        // this.select(qNo);
    };
    //For adding active class
    EngCommComponent.prototype.select = function (item) {
        this.selected = item;
    };
    ;
    //For adding active class
    EngCommComponent.prototype.isActive = function (item) {
        return this.currQuesNo === item ? 'active' : '';
    };
    ;
    EngCommComponent.prototype.isAttempted = function (item) {
        return this.userAns[item].ans == '' ? 'skipped' : '';
    };
    ;
    // For getting the result
    EngCommComponent.prototype.submit = function () {
        var _this = this;
        this.checkAnswers();
        var data = {
            "email": this.currentuser.email,
            "user_id": this.currentuser.username,
            "totalQuestions": this.totalQues,
            "totalAttempted": this.atmtAnswers,
            "totalCorrect": this.crtAnswers,
            "totalWrong": this.wrngAnswers
        };
        data["testtime"] = this.getCurrentDateTime();
        this._DataService.postUserResultEC(data).subscribe(function (res) {
            if (res.success == true) {
                _this.router.navigate(['module/5']);
            }
        });
    };
    // Function for getting current datetime 
    EngCommComponent.prototype.getCurrentDateTime = function () {
        var d = new Date();
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var month = d.getMonth();
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var year = d.getFullYear();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return year + "-" + months[month] + "-" + day + " " + hr + ":" + min + ":" + sec;
    };
    ;
    // For checking the answers
    EngCommComponent.prototype.checkAnswers = function () {
        for (var i = 0; i < this.posts.length; i++) {
            if ((this.posts[i].true_ans == this.userAns[i].ans)) {
                this.crtAnswers++;
            }
            else if ((this.userAns[i].ans != '') && (this.posts[i].true_ans != this.userAns[i].ans)) {
                this.wrngAnswers++;
            }
            if ((this.userAns[i].ans != '') && (this.userAns[i].ans != undefined)) {
                this.atmtAnswers++;
            }
        }
    };
    EngCommComponent.prototype.checkIfAllAttempted = function () {
        var totalAttempted = 0;
        for (var i = 0; i < this.userAns.length; i++) {
            if (this.userAns[i].ans != '') {
                totalAttempted++;
            }
        }
        ;
        if (totalAttempted == this.posts.length) {
            return true;
        }
        ;
    };
    EngCommComponent.prototype.onFinish = function () {
        this.submit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownComponent"])
    ], EngCommComponent.prototype, "counter", void 0);
    EngCommComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eng-comm',
            template: __webpack_require__("../../../../../src/app/eng-comm/eng-comm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/eng-comm/eng-comm.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], EngCommComponent);
    return EngCommComponent;
}());



/***/ }),

/***/ "../../../../../src/app/excel-search/excel-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/excel-search/excel-search.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n\n<div class=\"container-fluid\">\n  <!-- Example DataTables Card-->\n  <div class=\"card mb-3\">\n    <div class=\"card-header\">\n      <!-- <i class=\"fa fa-table\"></i> {{user.username}} Profile</div> -->\n     \n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n          <thead>\n            <tr>\n              <th>Sr.No.</th>\n              <th>SearchValue</th>\n              <th>FilePath</th>\n              <th>SheetName</th>\n              <th>CellRef</th>\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let post of posts , let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{post.searchValue}}</td>\n              <td><a href=\"{{post.filePath}}\" target=\"_blank\">{{post.filePath}}</a></td>\n              <td>{{post.sheetName}}</td>\n              <td>{{post.cellRef}}</td>\n              <!-- <td><a routerLink=\"/profile/profile-edit/{{post.username}}\">Edit</a></td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/excel-search/excel-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExcelSearchComponent = (function () {
    function ExcelSearchComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
    }
    ExcelSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.user=JSON.parse(sessionStorage.getItem("currentUser"));
        // console.log(this.user.username);
        this.spinnerService.show();
        this._DataService.getSingleUser("Preeta").subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            console.log("cu:", _this.posts);
        });
    };
    ExcelSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-excel-search',
            template: __webpack_require__("../../../../../src/app/excel-search/excel-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/excel-search/excel-search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ExcelSearchComponent);
    return ExcelSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/final/final.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/final/final.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Congratulations!</h1>\n    <p class=\"lead\">You have completed the test successfully!</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/final/final.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinalComponent = (function () {
    function FinalComponent() {
    }
    FinalComponent.prototype.ngOnInit = function () {
    };
    FinalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-final',
            template: __webpack_require__("../../../../../src/app/final/final.component.html"),
            styles: [__webpack_require__("../../../../../src/app/final/final.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinalComponent);
    return FinalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © CCMC 2018</small>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n  <span class=\"navbar-brand mr-auto\" href=\"index.html\">\n    <img src=\"../assets/images/logo/mobile_logo.png\" class=\"ccmc-logo\">\n  </span>\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\">\n          <i class=\"fa fa-fw fa-dashboard\"></i>\n          <span class=\"nav-link-text\">Dashboard</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Users\" *ngIf=\"isAdmin=='true'\">\n        <a class=\"nav-link\" routerLink=\"/admin/registered-users\">\n          <i class=\"fa fa-fw fa-user\"></i>\n          <span class=\"nav-link-text\">All registered users(Results)</span>\n        </a>\n      </li>\n\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Users\" *ngIf=\"isAdmin=='true'\">\n        <a class=\"nav-link\" routerLink=\"/admin/allusers\">\n          <i class=\"fa fa-fw fa-user\"></i>\n          <span class=\"nav-link-text\">All registered users(Details)</span>\n        </a>\n      </li>\n\n\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"profile\">\n        <a class=\"nav-link\" routerLink=\"/profile\">\n          <i class=\"fa fa-fw fa-comments-o\"></i>\n          <span class=\"nav-link-text\">Profile</span>\n        </a>\n      </li>\n      <!-- <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Feedback\">\n        <a class=\"nav-link\">\n          <i class=\"fa fa-fw fa-comments-o\"></i>\n          <span class=\"nav-link-text\">Feedback</span>\n        </a>\n      </li> -->\n    </ul>\n    <ul class=\"navbar-nav sidenav-toggler\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" id=\"sidenavToggler\">\n          <i class=\"fa fa-fw fa-angle-left\"></i>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      \n      <li class=\"nav-item \">\n        <a class=\"nav-link mr-lg-2\" id=\"alertsDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-fw fa-user\"></i>{{user.username}}\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"logout()\">\n          <i class=\"fa fa-fw fa-sign-out\"></i>Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<!-- Logout Modal-->\n<!-- <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n        <button class=\"btn btn-primary\"  >Logout</button>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.isAdmin = sessionStorage.getItem('isAdmin');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(sessionStorage.getItem("currentUser")); // converting string data to JS object
    };
    HeaderComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate(['login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"container\">\n  <div class=\"card card-login mx-auto mt-5\">\n      <img src=\"../assets/images/logo/logo_new.png\" class=\"brand-image\">\n    <div class=\"card-header text-center\">Login</div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login($event)\" ngNativeValidate>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid': loginForm.controls.email.invalid && (loginForm.controls.email.dirty || loginForm.controls.email.touched)}\" id=\"exampleInputEmail1\" type=\"email\" aria-describedby=\"emailHelp\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid email address.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input formControlName=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': loginForm.controls.password.invalid && (loginForm.controls.password.dirty || loginForm.controls.password.touched)}\" id=\"exampleInputPassword1\" type=\"password\" placeholder=\"Password\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid password.\n          </div>\n        </div>\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"errMsg!=''\">\n          <strong>{{errMsg}}!</strong><br> The email or password you entered is incorrect! \n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <!-- <div class=\"form-group\">\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\"> Remember Password</label>\n          </div>\n        </div> -->\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" href=\"\">Login</button>\n      </form>\n      <div class=\"text-center\">\n        <a class=\"d-block small mt-3\" routerLink=\"/register\">Register an Account</a>\n        <!-- <a class=\"d-block small\" href=\"\">Forgot Password?</a> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_DataService, fb, router, spinnerService) {
        this._DataService = _DataService;
        this.fb = fb;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
        this.errMsg = "";
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    }
    LoginComponent.prototype.login = function (user) {
        this.spinnerService.show();
        this.router.navigate(['dashboard']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/module/module.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".borderless td, .borderless th {\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/module/module.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- Breadcrumbs-->\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a routerLink=\"/dashboard\">Dashboard</a>\n    </li>\n    <li class=\"breadcrumb-item active\">Module</li>\n  </ol>\n  <h1 class=\"text-center\">Directions</h1>\n  <hr>\n\n  \n  <div class=\"container\" *ngIf=\"moduleNo==1\">\n    <p style=\"text-align:center\"><b>NA</b></p>\n    <p><b>General Instructions:</b> </p>\n    <p>1. The Clock will be set at the server.The countdown timer at the top right corner of screen will display the remaining time available time available for you to complete the examination.When the timer reaches zero ,the examination will end by itself.</p>\n    <p>2. All 20 Question no. of buttons displayed on the right side of the screen.</p>\n    <p>3. Candidates are not permitted to bring mobile phones into\n      the examination hall.  </p>\n    <p>4. Candidates are prohibited from appearing at the examination\n      at the centre other than the one opted by them at the time of\n      applying for examination, provided they are specifically\n      permitted to do so. </p>\n    <p>5. Language of the exam once selected before start of exam cannot\n      be changed.</p>\n    <p>6. The duration of the examination is 20 min. No extra time for whatsoever\n      reason would be allowed to attempt question paper after the stipulated\n      time of 20 min is over. </p>\n    <p>7. The examination will consist of only Objective type (multiple choice)\n      questions requiring candidates to Mouse-click their correct choice of\n      alternatives against the related question number.\n      </p>\n    <p>8. There will no negative marking for wrong answers.</p>\n    <p>9. After completing the Examination, click the 'Submit' button.</p>\n    \n      <u><b>Example A</b></u>:<br>\n      What is the total weight of four boxes of nails if each box weighs 100 grams?<br><br>\n     <table>\n       <tbody>\n         <tr>\n          <td><input type=\"radio\" name=\"que\" disabled></td>\n          <td>150g</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que\" disabled></td>\n          <td>200g</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\"  name=\"que\" checked></td>\n          <td>400g</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que\" disabled></td>\n          <td>800g</td>\n         </tr>\n\n       </tbody>\n\n     </table>\n     <br>\n     <u><b>Example B</b></u>:<br>\n     There are 8 litres of water in a tank which can hold 16.5 litres. How many litres can be added to this tank?<br><br>\n     <table>\n       <tbody>\n        <tr>\n          <td><input type=\"radio\" name=\"que1\" disabled></td>\n          <td>5 litres</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que1\" checked></td>\n          <td>8.5 litres</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que1\" disabled></td>\n          <td>10.5 litres</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que1\" disabled></td>\n          <td>16.5 litres</td>\n         </tr>\n       </tbody>\n\n     </table>\n     <br>\n\n     <u><b>Example C</b></u>:<br>\n     How many feet are there in 100 inches?<br><br>\n     <table>\n       <tbody>\n        <tr>\n          <td><input type=\"radio\" name=\"que2\" disabled></td>\n          <td>5 1/3 ft</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que2\" disabled></td>\n          <td>7 1/3 ft</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que2\" disabled></td>\n          <td>9 1/3 ft</td>\n         </tr>\n\n         <tr>\n          <td><input type=\"radio\" name=\"que2\" checked></td>\n          <td>8 1/3 ft</td>\n         </tr>\n       </tbody>\n\n     </table>\n     \n     <p><b>Please note that, for on-line examination, only one question\n        will be displayed on the computer screen at a time. For\n        moving to the next question, click-on \"next button\" at the\n        bottom of the screen.</b></p>\n     <p style=\"text-align:center\"><b> WORK AS RAPIDLY AS YOU CAN</b></p>\n    <p style=\"text-align:center\"><b> You have 20 minutes to complete the test</b></p>\n      \n    <!-- Please note that, for on-line examination, only one question\n        will be displayed on the computer screen at a time. For\n        moving to the next question, click-on \"next button\" at the\n        bottom of the screen. -->\n    \n    <div>\n      <input type=\"checkbox\" name=\"vehicle\" value=\"agree\" [(ngModel)]=\"terms\"> <b>I agree to the Terms and Conditions</b>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!terms\" (click)=\"submit(moduleNo)\" style=\"margin-bottom:20px\">I am ready to begin</button>\n    </div>\n  </div>\n  \n  \n  <div class=\"container\" *ngIf=\"moduleNo==5\">\n    <p style=\"text-align:center\"><b>Social Skills</b></p>\n    <p><b>General Instructions:</b> </p>\n    <p>1. In this test, there are a number of descriptions of personal characteristics of people. These descriptions are grouped in sets of four. </p>\n    <p>2. You are to examine each set of four statements and find the one description that is <b>most like you</b>. Click the button along side that statement, in the column headed <b>Most</b>.</p>\n    <p>3. Next examine the other three statements in the set and find the one description that is <b>least like you</b>. Again, click the button along side that statement, in the column headed <b>Least</b>. </p>\n    <p><i>Here is an example set:</i></p>\n    <table class=\"table borderless\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">Most</th>\n          <th class=\"text-center\">Least</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td class=\"text-center\"><i class=\"fa fa-circle-o\"></i></td>\n          <td class=\"text-center\"><i class=\"fa fa-circle-o\"></i></td>\n          <td>a). Has an excellent appetite\t</td>\n        </tr>\n        <tr>\n          <td class=\"text-center\"><i class=\"fa fa-circle-o\"></i></td>\n          <td class=\"text-center\"><i class=\"fa fa-circle\"></i></td>\n          <td>b). Gets sick very often\t</td>\n        </tr>\n        <tr>\n          <td class=\"text-center\"><i class=\"fa fa-circle-o\"></i></td>\n          <td class=\"text-center\"><i class=\"fa fa-circle-o\"></i></td>\n          <td>c. Follows a well-balanced diet</td>\n        </tr>\n        <tr>\n          <td class=\"text-center\"><i class=\"fa fa-circle\"></i></td>\n          <td class=\"text-center\"><i class=\"fa fa-circle-o\"></i></td>\n          <td>d). Doesn’t get enough exercise\t</td>\n        </tr>\n      </tbody>\n    </table>\n    <p>5. Suppose that you have read the four descriptive statements in the sample and have decided that, although several of the statements may apply to you to some degree, ‘<i>doesn’t get enough exercise</i>’ is <b>more like you</b> than any of the others. You would click on the button alongside <b>d</b> in the column headed <b>Most</b> as shown in the example above.</p>\n    <p>6. You would then examine the other three statements to decide which one is least like you. Suppose that ‘<i>gets sick very often</i>’ is <b>less like you</b> than the other two. You would click on the button alongside <b>b</b> in the column headed <b>Least</b>, as shown in the example above.</p>\n    <p>7. For every set of four statements, you should click <b>one</b> and <b>only one</b> button in the column marked <b>Most</b>. Likewise click <b>one</b> and <b>only one</b> button in the column marked <b>Least</b>. The remaining two buttons should not be clicked.</p>\n    <p>8. In some cases, you may find it difficult to decide which statements to choose. Make the best decisions you can. There are no right or wrong answers. In each set, you are to choose two statements in the way in which they most nearly apply to you. Be sure to click <b>one</b> statement as being <b>most like you</b> and <b>one</b> being <b>least like you</b>. Leave the remaining two statements in the set unmarked. Do this for every set. Do not <b>skip</b> any set.</p>\n    <br>\n    <br>\n    <p><b> Please note that, for on-line examination, only one question\n        will be displayed on the computer screen at a time. For\n        moving to the next question, click-on \"next button\" at the\n        bottom of the screen.</b></p>\n    <div>\n      <input type=\"checkbox\" name=\"vehicle\" value=\"agree\" [(ngModel)]=\"terms\"> <b>I agree to the Terms and Conditions</b>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!terms\" (click)=\"submit(moduleNo)\" style=\"margin-bottom:20px\">I am ready to begin</button>\n    </div>\n  </div>\n  \n  <div class=\"container\" *ngIf=\"moduleNo==3\">\n    <p style=\"text-align:center\"><b>Abstract Reasoning</b></p>\n    <h5><b>General Instructions:</b> </h5>\n    <p>In this test you will see rows of designs or figures. </p>\n    <p>Each row has four designs called Problem Figures. These are followed by five designs called Answer figures. The four problems Figures make a series. That means, they follow each other in special order, the fifth figure is missing. It is shown in first example by a question mark (?). What should this fifth picture be? You will find the right picture among the five Answer Figures. Then, you are to click on the radio button corresponding to your answer as shown in the examples below: </p>\n    <h5>EXAMPLE - I</h5>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <P>Problem Figures</P>\n        <img src=\"../assets/images/directions/Capture1.PNG\">\n      </div>\n      <div class=\"col-md-6\">\n        <P>Answer Figures</P>\n          <img src=\"../assets/images/directions/Capture2.PNG\">\n      </div>\n    </div>\n    <br>\n    <p>Note what is happening to the lines in the Problem Figures, as you move from one picture to the next. The first box has 5 short lines and no long lines, the second box: 4 short & 1 long, the third box: 3 short & 2 long, the fourth box -2 short and 3 long. So each time there is one more long line and one less short line, so in the fifth box, the one with the question mark in it, there will be 1 short and 4 long lines: the answer is <b>a</b></p>\n   <p>You would click on the button near <b>a</b>, as is shown in the sample below:</p>\n   \n   <p><b>EXAMPLE - I</b></p>\n   <img src=\"../assets/images/directions/Capture3.PNG\">\n   <br> <br>\n  <p>Each row of Problem Figures has the last figure missing. The question mark, however, have been left out in the actual test. But the figure is missing from the same place, i.e. the end of each Problem row, the fifth picture.</p>\n  <h5>EXAMPLE - II</h5>\n  <p>Study the position of the dot. Note that it keeps moving from one side to the other side of the arrow. First it is in the left of the arrow, then on the right of the arrow and so on. Also note that the arrow points up and then down alternately. Which picture belongs to the next, the fifth square? The dot would come back to the left of the arrow and the arrow would point upwards. Therefore, <b>d</b> is the answer. You would click on the button near <b>d</b>, as is shown in the sample below:</p>\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <P>Problem Figures</P>\n        <img src=\"../assets/images/directions/Capture4.PNG\">\n      </div>\n      <div class=\"col-md-6\">\n        <P>Answer Figures</P>\n          <img src=\"../assets/images/directions/Capture5.PNG\">\n      </div>\n    </div>  \n  <br>\n  <p><b>EXAMPLE - II</b></p>\n  <img src=\"../assets/images/directions/Capture6.PNG\">\n <br>\n <h5 class=\"text-center txt-line\">Note that there is a negative marking.</h5>\n <p class=\"text-center\">For every correct answer you will get 1 mark and for every wrong answer, ¼ mark will be deducted.</p>\n <br>\n <br>\n <h5 class=\"text-center\">After you START you get 30 minutes to complete the test.</h5>\n <br>\n <br>\n  <div>\n      <input type=\"checkbox\" name=\"vehicle\" value=\"agree\" [(ngModel)]=\"terms\"> <b>I agree to the Terms and Conditions</b>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!terms\" (click)=\"submit(moduleNo)\" style=\"margin-bottom:20px\">I am ready to begin</button>\n    </div>\n  </div>\n\n  <div class=\"container\" *ngIf=\"moduleNo==4\">\n    <p style=\"text-align:center\"><b>English Communication</b></p>\n    <p><b>General Instructions:</b><br>\n      Read the two Passage and answer the questions. Each question has 4 answer option A, B, C D. Select the correct option and click the appropriate radio button.<br>\n      You have 30 minutes to read the passages and answer the question.</p>\n    <p><b> Please note that, for on-line examination, only one question\n        will be displayed on the computer screen at a time. For\n        moving to the next question, click-on \"next button\" at the\n        bottom of the screen.</b></p>\n    <div>\n      <input type=\"checkbox\" name=\"vehicle\" value=\"agree\" [(ngModel)]=\"terms\"> <b>I agree to the Terms and Conditions</b>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!terms\" (click)=\"submit(moduleNo)\" style=\"margin-bottom:20px\">I am ready to begin</button>\n    </div>\n  </div>\n\n  <div class=\"container\" *ngIf=\"moduleNo==2\">\n    <p style=\"text-align:center\"><b>NA-Finance</b></p>\n    <p><b>General Instructions:</b> </p>\n    <p>1. The Clock will be set at the server.The countdown timer at the top right corner of screen will display the remaining time available time available for you to complete the examination.When the timer reaches zero ,the examination will end by itself.</p>\n    <p>2. All 10 Question no. of buttons displayed on the right side of the screen.</p>\n    <p>3. Candidates are not permitted to bring mobile phones into\n      the examination hall.  </p>\n    <p>4. Candidates are prohibited from appearing at the examination\n      at the centre other than the one opted by them at the time of\n      applying for examination, provided they are specifically\n      permitted to do so. </p>\n    <p>5. Language of the exam once selected before start of exam cannot\n      be changed.</p>\n    <p>6. The duration of the examination is 10 min. No extra time for whatsoever\n      reason would be allowed to attempt question paper after the stipulated\n      time of 10 min is over. </p>\n    <p>7. The examination will consist of only Objective type (multiple choice)\n      questions requiring candidates to Mouse-click their correct choice of\n      alternatives against the related question number.\n      </p>\n    <p>8. There will no negative marking for wrong answers.</p>\n    <p>9. After completing the Examination, click the 'Submit' button.</p>\n    \n      \n     \n     <p><b>Please note that, for on-line examination, only one question\n        will be displayed on the computer screen at a time. For\n        moving to the next question, click-on \"next button\" at the\n        bottom of the screen.</b></p>\n     <p style=\"text-align:center\"><b> WORK AS RAPIDLY AS YOU CAN</b></p>\n    <p style=\"text-align:center\"><b> You have 10 minutes to complete the test</b></p>\n      \n    <p><b> Please note that, for on-line examination, only one question\n        will be displayed on the computer screen at a time. For\n        moving to the next question, click-on \"next button\" at the\n        bottom of the screen.</b></p>\n    <div>\n      <input type=\"checkbox\" name=\"vehicle\" value=\"agree\" [(ngModel)]=\"terms\"> <b>I agree to the Terms and Conditions</b>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!terms\" (click)=\"submit(moduleNo)\" style=\"margin-bottom:20px\">I am ready to begin</button>\n    </div>\n  </div>\n\n\n  <div class=\"container\" *ngIf=\"moduleNo==6\">\n    <p style=\"text-align:center\"><b>NA-Gujrati</b></p>\n    \n    <div>\n      <input type=\"checkbox\" name=\"vehicle\" value=\"agree\" [(ngModel)]=\"terms\"> <b>I agree to the Terms and Conditions</b>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"!terms\" (click)=\"submit(moduleNo)\" style=\"margin-bottom:20px\">I am ready to begin</button>\n    </div>\n  </div>\n\n  <div style=\"height: 100%;\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/module/module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleComponent = (function () {
    function ModuleComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.terms = false;
    }
    ModuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.moduleNo = params['id'];
        });
    };
    ModuleComponent.prototype.submit = function (id) {
        // console.log('value',this.terms);
        switch (id) {
            case "1":
                sessionStorage.setItem("isTnCAgreed", 'true');
                this.router.navigate(['module/1/quiz']);
                break;
            case "2":
                sessionStorage.setItem("isTnCAgreed", 'true');
                this.router.navigate(['module/2/na-finance']);
                break;
            case "3":
                sessionStorage.setItem("isTnCAgreed", 'true');
                this.router.navigate(['module/3/a-r']);
                break;
            case "4":
                sessionStorage.setItem("isTnCAgreed", 'true');
                this.router.navigate(['module/4/e-c']);
                break;
            case "5":
                sessionStorage.setItem("isTnCAgreed", 'true');
                this.router.navigate(['module/5/ppq']);
                break;
        }
        ;
    };
    ModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-module',
            template: __webpack_require__("../../../../../src/app/module/module.component.html"),
            styles: [__webpack_require__("../../../../../src/app/module/module.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/na-finance/na-finance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/na-finance/na-finance.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"top-content\" *ngIf=\"!isSubmit\">\n  <div class=\"inner-bg\"  style=\"margin-left: 20px;\">\n<div>\n <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 2</span>\n</div><hr>\n<div class=\"row\">\n<div class=\"col-md-8 col-xs-12\" style=\"padding-bottom: 30px;border-right: 1px solid #ddd;\">\n\n <div class=\"container-fluid\" >\n  <div class=\"row\">\n   <div class=\"col-md-7 col-xs-6\">\n     <span><b>Question No.{{currQuesNo+1}}</b></span>\n   </div>\n     <div class=\"col-md-5 col-xs-6\">\n     <span  class=\"hd-all pull-right\">Remaining Time:- <b><countdown [config]=\"{leftTime:timer, template:'$!m!:$!s!'}\"  (finished) = \"onFinish()\"></countdown></b></span>\n   </div>\n </div>\n <hr>\n   \n </div>\n  <div class=\"container-fluid\">\n    \n   \n    <div *ngFor=\"let post of posts, let i = index\">\n      <div *ngIf=\"currQuesNo == i\">\n        <p>{{post.que_desc}}</p>\n        <div class=\"well\">\n            <label class=\"radio-container\">{{post.ans1}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"1\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans2}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"2\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\" *ngIf=\"post.ans3\">{{post.ans3}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"3\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\" *ngIf=\"post.ans4\">{{post.ans4}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"4\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-xs-6\"> \n              <button class=\"btn btn-primary action-btn\" (click)=\"getPrevQues()\" [hidden]=\"currQuesNo==0\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Previous</button>\n            </div>\n            <div class=\"col-md-8 col-xs-6\">\n              <button class=\"pull-right btn btn-primary action-btn\"  (click)=\"getNextQues()\" [hidden]=\"currQuesNo==7\">Next <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n              <!-- <button class=\"pull-right btn btn-info action-btn\">Skip</button> -->\n              <!-- <button (click)=\"submit()\" class=\"pull-right btn btn-danger action-btn\">Submit</button> -->\n              <button class=\"pull-right btn btn-danger action-btn\" data-toggle=\"modal\" data-target=\"#naModal\">Submit</button>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-4 col-xs-12\" style=\"padding-left: 0px;\">\n <div class=\"container-fluid\" style=\"background-color: #ddd;padding: 5px;\">\n   <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 2</span>\n </div><br>\n  <div class=\"col-md-12\">\n    <button type=\"button\" *ngFor=\"let ques of posts; let i = index\" (click)=\"getCurrentQuestion(i)\" class=\"round-button {{isActive(i)}} {{isAttempted(i)}}\">{{i+1}}</button>\n  </div>\n  <hr>\n  <div class=\"col-md-12\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#007ef3\"></i> - Current Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#212529\"></i> - Attempted Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#d6d6d6\"></i> - Unattempted Question\n  </div>\n  \n</div>\n\n</div>\n</div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"naModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"naModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Submit</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure, you want to submit?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"submit()\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/na-finance/na-finance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaFinanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__ = __webpack_require__("../../../../ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NaFinanceComponent = (function () {
    function NaFinanceComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
        this.currentQuestion = {};
        this.currQuesNo = 0;
        this.userAns = [];
        this.selected = 0;
        this.crtAnswers = 0;
        this.atmtAnswers = 0;
        this.wrngAnswers = 0;
        this.totalQues = 0;
        this.isSubmit = false;
    }
    NaFinanceComponent.prototype.resetTimer = function () {
        this.counter.restart();
        this.counter.stop();
        this.counter.pause();
        this.counter.resume();
    };
    NaFinanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        // this.checkTnC();
        this.currentuser = JSON.parse(sessionStorage.getItem("currentUser"));
        this._DataService.getAllQuestionsNA().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            _this.totalQues = _this.posts.length;
            _this.currentQuestion = _this.posts[_this.currQuesNo];
            _this.isActive(_this.currQuesNo);
            for (var i = 0; i < _this.posts.length; i++) {
                var userObj = {
                    questionId: '',
                    ans: '',
                    isCorrect: ''
                };
                userObj.questionId = _this.posts[i].que_id;
                _this.userAns.push(userObj);
            }
            _this.resetTimer();
            _this.timer = 600;
        });
    };
    // checkTnC(){
    //   if(sessionStorage.getItem("isTnCAgreed") != 'true'){
    //     this.router.navigate(['module']);
    //   }
    // }
    // Next question
    NaFinanceComponent.prototype.getNextQues = function () {
        this.currQuesNo++;
        console.log("User Ans:", this.userAns);
    };
    // Previous question
    NaFinanceComponent.prototype.getPrevQues = function () {
        this.currQuesNo--;
    };
    // For getting current question
    NaFinanceComponent.prototype.getCurrentQuestion = function (qNo) {
        this.currentQuestion = this.posts[qNo];
        this.currQuesNo = qNo;
        // this.select(qNo);
    };
    //For adding active class
    NaFinanceComponent.prototype.select = function (item) {
        this.selected = item;
    };
    ;
    //For adding active class
    NaFinanceComponent.prototype.isActive = function (item) {
        return this.currQuesNo === item ? 'active' : '';
    };
    ;
    NaFinanceComponent.prototype.isAttempted = function (item) {
        return this.userAns[item].ans == '' ? 'skipped' : '';
    };
    ;
    // For getting the result
    NaFinanceComponent.prototype.submit = function () {
        var _this = this;
        this.checkAnswers();
        var data = {
            "email": this.currentuser.email,
            "user_id": this.currentuser.username,
            "totalQuestions": this.totalQues,
            "totalAttempted": this.atmtAnswers,
            "totalCorrect": this.crtAnswers,
            "totalWrong": this.wrngAnswers
        };
        data["testtime"] = this.getCurrentDateTime();
        this._DataService.postUserResultNA(data).subscribe(function (res) {
            if (res.success == true) {
                _this.router.navigate(['module/3']);
            }
        });
    };
    // Function for getting current datetime 
    NaFinanceComponent.prototype.getCurrentDateTime = function () {
        var d = new Date();
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var month = d.getMonth();
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var year = d.getFullYear();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return year + "-" + months[month] + "-" + day + " " + hr + ":" + min + ":" + sec;
    };
    ;
    // For checking the answers
    NaFinanceComponent.prototype.checkAnswers = function () {
        for (var i = 0; i < this.posts.length; i++) {
            if ((this.posts[i].true_ans == this.userAns[i].ans)) {
                this.crtAnswers++;
            }
            else if ((this.userAns[i].ans != '') && (this.posts[i].true_ans != this.userAns[i].ans)) {
                this.wrngAnswers++;
            }
            if ((this.userAns[i].ans != '') && (this.userAns[i].ans != undefined)) {
                this.atmtAnswers++;
            }
        }
    };
    NaFinanceComponent.prototype.onFinish = function () {
        this.submit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ngx_countdown__["CountdownComponent"])
    ], NaFinanceComponent.prototype, "counter", void 0);
    NaFinanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-na-finance',
            template: __webpack_require__("../../../../../src/app/na-finance/na-finance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/na-finance/na-finance.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], NaFinanceComponent);
    return NaFinanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/na-gujrati/na-gujrati.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/na-gujrati/na-gujrati.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  na-gujrati works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/na-gujrati/na-gujrati.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaGujratiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NaGujratiComponent = (function () {
    function NaGujratiComponent() {
    }
    NaGujratiComponent.prototype.ngOnInit = function () {
    };
    NaGujratiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-na-gujrati',
            template: __webpack_require__("../../../../../src/app/na-gujrati/na-gujrati.component.html"),
            styles: [__webpack_require__("../../../../../src/app/na-gujrati/na-gujrati.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NaGujratiComponent);
    return NaGujratiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ppq/ppq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ppq/ppq.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n<!-- Notification -->\r\n<ng-snotify></ng-snotify>\r\n\r\n<div class=\"top-content\" *ngIf=\"!isSubmit\">\r\n  <div class=\"inner-bg\"  style=\"margin-left: 20px;\">\r\n<div>\r\n <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 5</span>\r\n</div><hr>\r\n<div class=\"row\">\r\n<div class=\"col-md-8 col-xs-12\" style=\"padding-bottom: 30px;border-right: 1px solid #ddd;\">\r\n\r\n <div class=\"container-fluid\" >\r\n  <div class=\"row\">\r\n   <div class=\"col-md-7 col-xs-6\">\r\n     <span><b>Set No.{{currQuesNo+1}}</b></span>\r\n   </div>\r\n   <div class=\"col-md-5 col-xs-6\">\r\n   </div>\r\n </div>\r\n <hr>\r\n   \r\n </div>\r\n  <div class=\"container-fluid\">\r\n    \r\n    <div *ngFor=\"let post of posts, let i = index\">\r\n      <div *ngIf=\"currQuesNo == i\">\r\n        <p>{{post.statement}}</p>\r\n        <div class=\"well\">\r\n            \r\n\r\n\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\">Most</th>\r\n                        <th scope=\"col\">Least</th>\r\n                    </tr>\r\n                </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-most\" [(ngModel)]=\"userAns[i].most\" value=\"a\" [disabled]=\"checkIfSameAsLeast(i,'a')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-least\" [(ngModel)]=\"userAns[i].least\" value=\"a\" [disabled]=\"checkIfSameAsMost(i,'a')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:80%\"><b>a)</b> {{post.ans1}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-most\" [(ngModel)]=\"userAns[i].most\" value=\"b\" [disabled]=\"checkIfSameAsLeast(i,'b')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-least\" [(ngModel)]=\"userAns[i].least\" value=\"b\" [disabled]=\"checkIfSameAsMost(i,'b')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:80%\"><b>b)</b> {{post.ans2}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-most\" [(ngModel)]=\"userAns[i].most\" value=\"c\" [disabled]=\"checkIfSameAsLeast(i,'c')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-least\" [(ngModel)]=\"userAns[i].least\" value=\"c\" [disabled]=\"checkIfSameAsMost(i,'c')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:80%\"><b>c)</b> {{post.ans3}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-most\" [(ngModel)]=\"userAns[i].most\" value=\"d\" [disabled]=\"checkIfSameAsLeast(i,'d')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:10%\">\r\n                    <label class=\"radio-container\">\r\n                        <input type=\"radio\" name=\"option-least\" [(ngModel)]=\"userAns[i].least\" value=\"d\" [disabled]=\"checkIfSameAsMost(i,'d')\">\r\n                        <span class=\"checkmark\"></span>\r\n                    </label> \r\n                  </td>\r\n                  <td class=\"text-left\" style=\"width:80%\"><b>d)</b> {{post.ans4}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-xs-6\"> \r\n              <button class=\"btn btn-primary action-btn\" (click)=\"getPrevQues()\" [hidden]=\"currQuesNo==0\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Previous</button>\r\n            </div>\r\n            <div class=\"col-md-8 col-xs-6\">\r\n              <button class=\"pull-right btn btn-primary action-btn\"  (click)=\"getNextQues()\" [hidden]=\"currQuesNo==37\">Next <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\r\n              \r\n              <!-- <button (click)=\"submit()\" class=\"pull-right btn btn-danger action-btn\" [disabled]=\"!checkIfAllAttempted()\">Submit</button> -->\r\n              <button class=\"pull-right btn btn-danger action-btn\" data-toggle=\"modal\" data-target=\"#ppqModal\" [disabled]=\"!checkIfAllAttempted()\">Submit</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-4 col-xs-12\" style=\"padding-left: 0px;\">\r\n <div class=\"container-fluid\" style=\"background-color: #ddd;padding: 5px;\">\r\n   <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 5</span>\r\n </div><br>\r\n  <div class=\"col-md-12\">\r\n    <button type=\"button\" *ngFor=\"let ques of posts; let i = index\" (click)=\"getCurrentQuestion(i)\" class=\"round-button {{isActive(i)}} {{isAttempted(i)}}\">{{i+1}}</button>\r\n  </div>\r\n  <hr>\r\n  <div class=\"col-md-12\">\r\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#007ef3\"></i> - Current Question<br>\r\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#212529\"></i> - Attempted Question<br>\r\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#d6d6d6\"></i> - Unattempted Question\r\n  </div>\r\n  \r\n</div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"ppqModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ppqModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Submit</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure, you want to submit?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"submit()\" >Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ppq/ppq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PpqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_snotify__ = __webpack_require__("../../../../ng-snotify/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_countdown__ = __webpack_require__("../../../../ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PpqComponent = (function () {
    function PpqComponent(_DataService, router, spinnerService, snotifyService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.snotifyService = snotifyService;
        this.posts = [];
        this.ppqAnswers = [];
        this.section_A = [];
        this.section_B = [];
        this.section_C = [];
        this.section_D = [];
        this.currentQuestion = {};
        this.currQuesNo = 0;
        this.isAllAttempted = false;
        this.userAns = [];
        this.selected = 0;
        this.A_crtAnswers = 0;
        this.R_crtAnswers = 0;
        this.F_crtAnswers = 0;
        this.S_crtAnswers = 0;
        this.C_crtAnswers = 0;
        this.O_crtAnswers = 0;
        this.P_crtAnswers = 0;
        this.V_crtAnswers = 0;
        this.isBothSelected = false;
        this.score = {
            'A': { 'desc': 'Assertive, Self-assured', 'value': 0 },
            'R': { 'desc': 'Reliable, Concientious', 'value': 0 },
            'F': { 'desc': 'Frustration & Stree Tolerance', 'value': 0 },
            'S': { 'desc': 'Social, Interactive', 'value': 0 },
            'C': { 'desc': 'Careful & not impulsive', 'value': 0 },
            'O': { 'desc': 'Enjoys dealing with New & Original Ideas', 'value': 0 },
            'P': { 'desc': 'Faith & Trust in People', 'value': 0 },
            'V': { 'desc': 'Vitality & Energy', 'value': 0 }
        };
        this.totalQues = 0;
        this.isSubmit = false;
    }
    PpqComponent.prototype.resetTimer = function () {
        this.counter.restart();
        this.counter.stop();
        this.counter.pause();
        this.counter.resume();
    };
    PpqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.checkTnC();
        this.currentuser = JSON.parse(sessionStorage.getItem("currentUser"));
        this._DataService.getAllQuestionsPPQ().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            _this.totalQues = _this.posts.length;
            _this.currentQuestion = _this.posts[_this.currQuesNo];
            _this.isActive(_this.currQuesNo);
            for (var i = 0; i < _this.posts.length; i++) {
                var userObj = {
                    questionId: '',
                    most: '',
                    least: ''
                };
                userObj.questionId = _this.posts[i].que_id;
                _this.userAns.push(userObj);
            }
        });
        this._DataService.getAnswersPPQ().subscribe(function (res) {
            _this.ppqAnswers = res;
            for (var i = 0; i < _this.ppqAnswers.length; i++) {
                // if(this.ppqAnswers[i].section == "A"){
                //   this.section_A.push(this.ppqAnswers[i]);
                // };
                switch (_this.ppqAnswers[i].section) {
                    case "A":
                        _this.section_A.push(_this.ppqAnswers[i]);
                        break;
                    case "B":
                        _this.section_B.push(_this.ppqAnswers[i]);
                        break;
                    case "C":
                        _this.section_C.push(_this.ppqAnswers[i]);
                        break;
                    case "D":
                        _this.section_D.push(_this.ppqAnswers[i]);
                        break;
                }
                ;
            }
        });
    };
    PpqComponent.prototype.checkTnC = function () {
        if (sessionStorage.getItem("isTnCAgreed") != 'true') {
            this.router.navigate(['module']);
        }
    };
    // Next question
    PpqComponent.prototype.getNextQues = function () {
        if (this.checkIfBothSelected(this.currQuesNo)) {
            this.currQuesNo++;
        }
    };
    // Previous question
    PpqComponent.prototype.getPrevQues = function () {
        if (this.checkIfBothSelected(this.currQuesNo)) {
            this.currQuesNo--;
        }
    };
    PpqComponent.prototype.checkIfBothSelected = function (i) {
        if ((this.userAns[i].most != '') && (this.userAns[i].least != '')) {
            this.isBothSelected = false;
            return true;
        }
        else {
            this.isBothSelected = true;
            this.snotifyService.warning('It is compulsory to select one each in both Most and Least columns', 'Warning', {
                timeout: 3000,
                showProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true
            });
            return false;
        }
        ;
    };
    // For getting current question
    PpqComponent.prototype.getCurrentQuestion = function (qNo) {
        this.currentQuestion = this.posts[qNo];
        this.currQuesNo = qNo;
        // this.select(qNo);
    };
    //For adding active class
    PpqComponent.prototype.select = function (item) {
        this.selected = item;
    };
    ;
    //For adding active class
    PpqComponent.prototype.isActive = function (item) {
        return this.currQuesNo === item ? 'active' : '';
    };
    ;
    PpqComponent.prototype.isAttempted = function (item) {
        // return ((this.userAns[item].most == '') && (this.userAns[item].least == '')) ? 'skipped': '';
        if ((this.userAns[item].most != '') && (this.userAns[item].least != '')) {
            return '';
        }
        else
            return 'skipped';
    };
    ;
    // For getting the result and sending the mail.
    PpqComponent.prototype.submit = function () {
        var _this = this;
        this.checkAnswers();
        var data = {
            "user_id": this.currentuser.username,
            "Assertive_A": this.score.A.value,
            "Reliable_R": this.score.R.value,
            "Frustration_F": this.score.F.value,
            "Social_S": this.score.S.value,
            "Careful_C": this.score.C.value,
            "Original_Ideas_O": this.score.O.value,
            "People_P": this.score.P.value,
            "Vitality_V": this.score.V.value,
            "datetime": this.getCurrentDateTime()
        };
        this._DataService.postPPQResult(data).subscribe(function (res) {
            if (res.success == true) {
                _this.router.navigate(['thank-you']);
            }
        });
    };
    // For checking the answers
    PpqComponent.prototype.checkAnswers = function () {
        for (var i = 0; i < this.ppqAnswers.length; i++) {
            if (i < 18) {
                // console.log(i);
                if ((this.ppqAnswers[i].A_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.A_crtAnswers++;
                }
                if ((this.ppqAnswers[i].A_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.A_crtAnswers++;
                }
                if ((this.ppqAnswers[i].R_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.R_crtAnswers++;
                }
                if ((this.ppqAnswers[i].R_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.R_crtAnswers++;
                }
                if ((this.ppqAnswers[i].F_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.F_crtAnswers++;
                }
                if ((this.ppqAnswers[i].F_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.F_crtAnswers++;
                }
                if ((this.ppqAnswers[i].S_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.S_crtAnswers++;
                }
                if ((this.ppqAnswers[i].S_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.S_crtAnswers++;
                }
                ;
            }
            else {
                if ((this.ppqAnswers[i].C_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.C_crtAnswers++;
                }
                if ((this.ppqAnswers[i].C_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.C_crtAnswers++;
                }
                if ((this.ppqAnswers[i].O_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.O_crtAnswers++;
                }
                if ((this.ppqAnswers[i].O_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.O_crtAnswers++;
                }
                if ((this.ppqAnswers[i].P_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.P_crtAnswers++;
                }
                if ((this.ppqAnswers[i].P_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.P_crtAnswers++;
                }
                if ((this.ppqAnswers[i].V_most.indexOf(this.userAns[i].most) != -1 ? true : false) && (this.userAns[i].most != '')) {
                    this.V_crtAnswers++;
                }
                if ((this.ppqAnswers[i].V_least.indexOf(this.userAns[i].least) != -1 ? true : false) && (this.userAns[i].least != '')) {
                    this.V_crtAnswers++;
                }
                ;
            }
        }
        this.score.A.value = Math.round(this.A_crtAnswers * 100 / 36);
        this.score.R.value = Math.round(this.R_crtAnswers * 100 / 36);
        this.score.F.value = Math.round(this.F_crtAnswers * 100 / 36);
        this.score.S.value = Math.round(this.S_crtAnswers * 100 / 36);
        this.score.C.value = Math.round(this.C_crtAnswers * 100 / 40);
        this.score.O.value = Math.round(this.O_crtAnswers * 100 / 40);
        this.score.P.value = Math.round(this.P_crtAnswers * 100 / 40);
        this.score.V.value = Math.round(this.V_crtAnswers * 100 / 40);
    };
    PpqComponent.prototype.roundOf = function (num) {
        return parseFloat(num).toFixed(2);
    };
    ;
    // For making the radio button with same value inactive
    PpqComponent.prototype.checkIfSameAsLeast = function (i, ele) {
        if ((ele == this.userAns[i].least) && this.userAns[i].least != '') {
            return true;
        }
        else {
            return false;
        }
    };
    // For making the radio button with same value inactive
    PpqComponent.prototype.checkIfSameAsMost = function (i, ele) {
        if ((ele == this.userAns[i].most) && this.userAns[i].most != '') {
            return true;
        }
        else {
            return false;
        }
    };
    PpqComponent.prototype.checkIfAllAttempted = function () {
        var totalAttempted = 0;
        for (var i = 0; i < this.userAns.length; i++) {
            if ((this.userAns[i].most != '') && (this.userAns[i].least != '')) {
                totalAttempted++;
            }
        }
        ;
        if (totalAttempted == this.posts.length) {
            // this.isAllAttempted = true;
            return true;
        }
        ;
    };
    // Function for getting current datetime 
    PpqComponent.prototype.getCurrentDateTime = function () {
        var d = new Date();
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var month = d.getMonth();
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var year = d.getFullYear();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return year + "-" + months[month] + "-" + day + " " + hr + ":" + min + ":" + sec;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ngx_countdown__["CountdownComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ngx_countdown__["CountdownComponent"])
    ], PpqComponent.prototype, "counter", void 0);
    PpqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ppq',
            template: __webpack_require__("../../../../../src/app/ppq/ppq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ppq/ppq.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_4_ng_snotify__["b" /* SnotifyService */]])
    ], PpqComponent);
    return PpqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <!-- Example DataTables Card-->\r\n  <div class=\"card mb-3\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-table\"></i> {{user.username}} Profile</div>\r\n     \r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>Sr.No.</th>\r\n              <th>Name</th>\r\n              <th>Address</th>\r\n              <th>City</th>\r\n              <th>Phone</th>\r\n              <th>Email</th>\r\n              <th>Adhar Card</th>\r\n              <th>High Educational qualification</th>\r\n              <th>Date of Birth</th>\r\n              <th>Gender</th>\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let post of posts , let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{post.username}}</td>\r\n              <td>{{post.address}}</td>\r\n              <td>{{post.city}}</td>\r\n              <td>{{post.phone}}</td>\r\n              <td>{{post.email}}</td>\r\n              <td>{{post.adhar}}</td>\r\n              <td>{{post.high_edu_quali}}</td>\r\n              <td>{{post.dob}}</td>\r\n              <td>{{post.gender}}</td>\r\n              <!-- <td><a routerLink=\"/profile/profile-edit/{{post.username}}\">Edit</a></td> -->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(sessionStorage.getItem("currentUser"));
        // console.log(this.user.username);
        this.spinnerService.show();
        this._DataService.getSingleUser(this.user.username).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            // console.log("cu",this.posts);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profileedit/profileedit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profileedit/profileedit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"container\">\n  <div class=\"card card-register mx-auto mt-5\">\n      <!-- <img src=\"../assets/images/logo/logo_new.png\" class=\"brand-image\"> -->\n    <div class=\"card-header  text-center\">Update an Account</div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"regForm\" (ngSubmit)=\"register($event)\"  class=\"needs-validation\"  ngNativeValidate>\n        <div class=\"form-group\">\n          <div class=\"form-row\">\n            <div class=\"col-md-12\">\n              <label for=\"exampleInputName\">Username</label>\n              <input formControlName=\"username\" class=\"form-control\" id=\"exampleInputName\" type=\"text\" aria-describedby=\"nameHelp\"  required>\n              <div class=\"invalid-feedback\">\n                Please enter a valid username.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input formControlName=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" type=\"email\" aria-describedby=\"emailHelp\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid email address.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputdob\">Date Of Birth</label>\n          <input formControlName=\"dob\" class=\"form-control\" id=\"exampleInputdob\" type=\"Date\" aria-describedby=\"dobHelp\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid Date Of Birth.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputmobile\">Mobile No.</label>\n          <input formControlName=\"mobile\" class=\"form-control\" id=\"exampleInputmobile\" type=\"text\" aria-describedby=\"mobileHelp\"  required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid mobile no.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleInputadhar\">Aadhaar No.</label>\n            <input formControlName=\"adhar\" class=\"form-control\" id=\"exampleInputadhar\" type=\"text\" aria-describedby=\"adharHelp\"   required>\n            <div class=\"invalid-feedback\">\n              Please enter a valid aadhaar no.\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n            <label for=\"exampleInputheq\">Highest Educational Qualification</label>\n            <input formControlName=\"heq\" class=\"form-control\" id=\"exampleInputheq\" type=\"text\" aria-describedby=\"heqHelp\"  required>\n            <div class=\"invalid-feedback\">\n              Please enter a valid Highest Educational Qualification.\n            </div>\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputCity\">City</label>\n          <input formControlName=\"city\" class=\"form-control\" id=\"exampleInputCity\" type=\"text\" aria-describedby=\"CityHelp\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid city.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputaddress\">Address</label>\n          <input formControlName=\"address\" class=\"form-control\" id=\"exampleInputaddress\" type=\"text\" aria-describedby=\"addressHelp\"  required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid address.\n          </div>\n        </div>\n\n       \n\n        <button class=\"btn btn-primary btn-block\" type=\"submit\" href=\"login.html\" [disabled]=\"\">Update</button>\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"msg!=''\">\n          <strong>{{msg}}!</strong>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </form>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profileedit/profileedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileeditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileeditComponent = (function () {
    function ProfileeditComponent(_DataService, fb, router, spinnerService) {
        this._DataService = _DataService;
        this.fb = fb;
        this.router = router;
        this.spinnerService = spinnerService;
        this.msg = "";
        this.passMatch = false;
        this.regForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            adhar: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            heq: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    ProfileeditComponent.prototype.ngOnInit = function () {
    };
    ProfileeditComponent.prototype.register = function (user) {
        var _this = this;
        this.spinnerService.show();
        var formData = {
            'email': this.regForm.value.email,
            'username': this.regForm.value.username,
            'password': this.regForm.value.password,
            'city': this.regForm.value.city,
            'address': this.regForm.value.address,
            'phone': this.regForm.value.mobile,
            'login': this.regForm.value.username,
            'adhar': this.regForm.value.adhar,
            'high_edu_quali': this.regForm.value.heq,
            'dob': this.regForm.value.dob
        };
        // console.log(JSON.stringify(formData));
        this._DataService.userRegistration(formData).subscribe(function (res) {
            _this.spinnerService.hide();
            console.log(res);
            if (res.success == true) {
                _this.msg = "Successfully Registered";
                // this.router.navigate(['quiz']);
            }
            else {
                // console.log("User Authentication Failed")
                _this.msg = res.error.message;
            }
        });
    };
    ProfileeditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profileedit',
            template: __webpack_require__("../../../../../src/app/profileedit/profileedit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profileedit/profileedit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ProfileeditComponent);
    return ProfileeditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUBLIC_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");


var PUBLIC_ROUTES = [
    // { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/public/public.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicComponent = (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public',
            template: __webpack_require__("../../../../../src/app/public/public.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/public.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"top-content\" *ngIf=\"!isSubmit\">\n  <div class=\"inner-bg\"  style=\"margin-left: 20px;\">\n<div>\n <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 1</span>\n</div><hr>\n<div class=\"row\">\n<div class=\"col-md-8 col-xs-12\" style=\"padding-bottom: 30px;border-right: 1px solid #ddd;\">\n\n <div class=\"container-fluid\" >\n  <div class=\"row\">\n   <div class=\"col-md-7 col-xs-6\">\n     <span><b>Question No.{{currQuesNo+1}}</b></span>\n   </div>\n     <div class=\"col-md-5 col-xs-6\">\n     <span  class=\"hd-all pull-right\">Remaining Time:- <b><countdown [config]=\"{leftTime:timer, template:'$!m!:$!s!'}\"  (finished) = \"submit()\"></countdown></b></span>\n   </div>\n </div>\n <!--\t<button type=\"button\" class=\"btn btn-purple\">Question No.1</button> --><hr>\n   \n </div>\n  <div class=\"container-fluid\">\n    \n    \n    <div *ngFor=\"let post of posts, let i = index\">\n      <div *ngIf=\"currQuesNo == i\">\n        <p>{{post.que_desc}}</p>\n        <div class=\"col-md-10\">\n          <img src=\"../assets/{{posts[i].image_path}}\" class=\"ques-img\" alt=\"question\" *ngIf=\"posts[i].image_res!=''\">\n        </div>\n        <div class=\"well\">\n            <label class=\"radio-container\">{{post.ans1}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"1\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans2}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"2\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans3}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"3\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans4}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"4\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-xs-6\"> \n              <button class=\"btn btn-primary action-btn\" (click)=\"getPrevQues()\" [hidden]=\"currQuesNo==0\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Previous</button>\n            </div>\n            <div class=\"col-md-8 col-xs-6\">\n              <button class=\"pull-right btn btn-primary action-btn\"  (click)=\"getNextQues()\" [hidden]=\"currQuesNo==29\">Next <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n              <!-- <button class=\"pull-right btn btn-info action-btn\">Skip</button> -->\n              <!-- <button (click)=\"submit()\" class=\"pull-right btn btn-danger action-btn\">Submit</button> -->\n              <button class=\"pull-right btn btn-danger action-btn\" data-toggle=\"modal\" data-target=\"#quizModal\">Submit</button>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-4 col-xs-12\" style=\"padding-left: 0px;\">\n <div class=\"container-fluid\" style=\"background-color: #ddd;padding: 5px;\">\n   <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 1</span>\n </div><br>\n  <div class=\"col-md-12\">\n    <button type=\"button\" *ngFor=\"let ques of posts; let i = index\" (click)=\"getCurrentQuestion(i)\" class=\"round-button {{isActive(i)}} {{isAttempted(i)}}\">{{i+1}}</button>\n  </div>\n  <hr>\n  <div class=\"col-md-12\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#007ef3\"></i> - Current Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#212529\"></i> - Attempted Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#d6d6d6\"></i> - Unattempted Question\n  </div>\n  \n</div>\n\n</div>\n</div>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"quizModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"quizModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Submit</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure, you want to submit?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"submit()\" >Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = (function () {
    //   @ViewChild(CountdownModule) counter: CountdownModule;
    // resetTimer(){
    //     this.counter.restart();
    //     this.counter.stop();
    //     this.counter.pause();
    //     this.counter.resume();
    // }
    function QuizComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
        this.currentQuestion = {};
        this.currQuesNo = 0;
        this.userAns = [];
        this.selected = 0;
        this.crtAnswers = 0;
        this.atmtAnswers = 0;
        this.wrngAnswers = 0;
        this.totalQues = 0;
        this.isSubmit = false;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.checkTnC();
        this.currentuser = JSON.parse(sessionStorage.getItem("currentUser"));
        this._DataService.getAllQuestions().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            _this.totalQues = _this.posts.length;
            _this.currentQuestion = _this.posts[_this.currQuesNo];
            _this.isActive(_this.currQuesNo);
            for (var i = 0; i < _this.posts.length; i++) {
                var userObj = {
                    questionId: '',
                    ans: '',
                    isCorrect: ''
                };
                userObj.questionId = _this.posts[i].que_id;
                _this.userAns.push(userObj);
            }
            _this.timer = 1200;
        });
    };
    QuizComponent.prototype.checkTnC = function () {
        if (sessionStorage.getItem("isTnCAgreed") != 'true') {
            this.router.navigate(['module']);
        }
    };
    // Next question
    QuizComponent.prototype.getNextQues = function () {
        this.currQuesNo++;
        console.log("User Ans:", this.userAns);
    };
    // Previous question
    QuizComponent.prototype.getPrevQues = function () {
        this.currQuesNo--;
    };
    // For getting current question
    QuizComponent.prototype.getCurrentQuestion = function (qNo) {
        this.currentQuestion = this.posts[qNo];
        this.currQuesNo = qNo;
        // this.select(qNo);
    };
    //For adding active class
    QuizComponent.prototype.select = function (item) {
        this.selected = item;
    };
    ;
    //For adding active class
    QuizComponent.prototype.isActive = function (item) {
        return this.currQuesNo === item ? 'active' : '';
    };
    ;
    QuizComponent.prototype.isAttempted = function (item) {
        return this.userAns[item].ans == '' ? 'skipped' : '';
    };
    ;
    // For getting the result
    QuizComponent.prototype.submit = function () {
        var _this = this;
        this.spinnerService.show();
        this.checkAnswers();
        var data = {
            "email": this.currentuser.email,
            "username": this.currentuser.username,
            "totalQuestions": this.totalQues,
            "totalAttempted": this.atmtAnswers,
            "totalCorrect": this.crtAnswers,
            "totalWrong": this.wrngAnswers
        };
        this._DataService.triggerMail(data).subscribe(function (res) {
            // console.log("Mail Sent!");
        });
        data["testtime"] = this.getCurrentDateTime();
        this._DataService.postUserResult(data).subscribe(function (res) {
            // console.log("Result: ",res);
            if (res.success == true) {
                _this.spinnerService.hide();
                _this.router.navigate(['module/2']);
            }
        });
    };
    // Function for getting current datetime 
    QuizComponent.prototype.getCurrentDateTime = function () {
        var d = new Date();
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var month = d.getMonth();
        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var year = d.getFullYear();
        var hr = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();
        return year + "-" + months[month] + "-" + day + " " + hr + ":" + min + ":" + sec;
    };
    ;
    // For checking the answers
    QuizComponent.prototype.checkAnswers = function () {
        for (var i = 0; i < this.posts.length; i++) {
            if ((this.posts[i].true_ans == this.userAns[i].ans)) {
                this.crtAnswers++;
            }
            else if ((this.userAns[i].ans != '') && (this.posts[i].true_ans != this.userAns[i].ans)) {
                this.wrngAnswers++;
            }
            if ((this.userAns[i].ans != '') && (this.userAns[i].ans != undefined)) {
                this.atmtAnswers++;
            }
        }
    };
    QuizComponent.prototype.onFinish = function () {
        this.submit();
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"container\">\n  <div class=\"card card-register mx-auto mt-5\">\n      <img src=\"../assets/images/logo/logo_new.png\" class=\"brand-image\">\n    <div class=\"card-header  text-center\">Register an Account</div>\n    <div class=\"card-body\">\n      <form [formGroup]=\"regForm\" (ngSubmit)=\"register($event)\"  class=\"needs-validation\"  ngNativeValidate>\n        <div class=\"form-group\">\n          <div class=\"form-row\">\n            <div class=\"col-md-12\">\n              <label for=\"exampleInputName\">Username</label>\n              <input formControlName=\"username\" class=\"form-control\" id=\"exampleInputName\" type=\"text\" aria-describedby=\"nameHelp\" placeholder=\"Enter Username\" required>\n              <div class=\"invalid-feedback\">\n                Please enter a valid username.\n              </div>\n            </div>\n            <!-- <div class=\"col-md-6\">\n              <label for=\"exampleInputLastName\">Last name</label>\n              <input class=\"form-control\" id=\"exampleInputLastName\" type=\"text\" aria-describedby=\"nameHelp\" placeholder=\"Enter last name\">\n            </div> -->\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input formControlName=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" type=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid email address.\n          </div>\n        </div>\n\n        \n        <div class=\"form-group\">\n          <label for=\"exampleInputdob\">Date Of Birth</label>\n          <input formControlName=\"dob\" class=\"form-control\" id=\"exampleInputdob\" type=\"Date\" aria-describedby=\"dobHelp\" required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid Date Of Birth.\n          </div>\n        </div>\n        \n\n        <div class=\"form-group\">\n          <label for=\"exampleInputgender\">Gender</label>\n          <select  formControlName=\"gender\" class=\"form-control\" id=\"exampleInputgender\" aria-describedby=\"genderHelp\" required>\n            <option selected>Select</option>\n            <option value=\"Male\">Male</option>\n            <option value=\"Female\">Female</option>\n          </select>\n          <div class=\"invalid-feedback\">\n            Please enter Gender.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputmobile\">Mobile No.</label>\n          <input formControlName=\"mobile\" class=\"form-control\" id=\"exampleInputmobile\" type=\"text\" aria-describedby=\"mobileHelp\" placeholder=\"Enter mobile no.\"  required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid mobile no.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleInputadhar\">Aadhaar No.</label>\n            <input formControlName=\"adhar\" class=\"form-control\" id=\"exampleInputadhar\" type=\"text\" aria-describedby=\"adharHelp\" placeholder=\"Enter adhar no.\"  required>\n            <div class=\"invalid-feedback\">\n              Please enter a valid aadhaar no.\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n            <label for=\"exampleInputheq\">Highest Educational Qualification</label>\n            <!-- <input formControlName=\"heq\" class=\"form-control\" id=\"exampleInputheq\" type=\"text\" aria-describedby=\"heqHelp\" placeholder=\"Enter Highest Educational Qualification\"  required> -->\n            <select  formControlName=\"heq\" class=\"form-control\" id=\"exampleInputheq\" aria-describedby=\"heqHelp\" required>\n                <option selected>Select</option>\n                <option value=\"below_v\">Below V</option>\n                <option value=\"Below X\">Below X</option>\n                <option value=\"Below XII\">Below XII</option>\n                <option value=\"Graduate\">Graduate</option>\n                <option value=\"PG\">PG</option>\n                <option value=\"Other\">Other</option>\n\n              \n            </select>\n            <div class=\"invalid-feedback\">\n              Please enter a valid Highest Educational Qualification.\n            </div>\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputCity\">City</label>\n          <input formControlName=\"city\" class=\"form-control\" id=\"exampleInputCity\" type=\"text\" aria-describedby=\"CityHelp\" placeholder=\"Enter your city\"  required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid city.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputaddress\">Address</label>\n          <input formControlName=\"address\" class=\"form-control\" id=\"exampleInputaddress\" type=\"text\" aria-describedby=\"addressHelp\" placeholder=\"Enter your address\"  required>\n          <div class=\"invalid-feedback\">\n            Please enter a valid address.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"form-row\">\n            <div class=\"col-md-6\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" type=\"password\" placeholder=\"Password\" required>\n            </div>\n            <div class=\"col-md-6\">\n              <label for=\"exampleConfirmPassword\">Confirm password</label>\n              <input formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"passCheck()\" id=\"exampleConfirmPassword\" type=\"password\" placeholder=\"Confirm password\" required>\n              <div class=\"invalid-feedback\">\n                Passwords doesn't match!\n              </div>\n              <div class=\"valid-feedback\">\n                Passwords match!\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <button class=\"btn btn-primary btn-block\" type=\"submit\" href=\"login.html\" [disabled]=\"!passMatch\">Register</button>\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"msg!=''\">\n          <strong>{{msg}}!</strong>\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <a class=\"d-block small mt-3\"  routerLink=\"/login\">Login Page</a>\n        <!-- <a class=\"d-block small\" href=\"forgot-password.html\">Forgot Password?</a> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_DataService, fb, router, spinnerService) {
        this._DataService = _DataService;
        this.fb = fb;
        this.router = router;
        this.spinnerService = spinnerService;
        this.msg = "";
        this.passMatch = false;
        this.regForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            adhar: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            heq: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        this.spinnerService.show();
        var formData = {
            'email': this.regForm.value.email,
            'username': this.regForm.value.username,
            'password': this.regForm.value.password,
            'city': this.regForm.value.city,
            'address': this.regForm.value.address,
            'phone': this.regForm.value.mobile,
            'login': this.regForm.value.username,
            'adhar': this.regForm.value.adhar,
            'high_edu_quali': this.regForm.value.heq,
            'dob': this.regForm.value.dob,
            'gender': this.regForm.value.gender
        };
        // console.log(JSON.stringify(formData));
        this._DataService.userRegistration(formData).subscribe(function (res) {
            _this.spinnerService.hide();
            console.log(res);
            if (res.success == true) {
                _this.msg = "Successfully Registered";
                // this.router.navigate(['quiz']);
            }
            else {
                // console.log("User Authentication Failed")
                _this.msg = res.error.message;
            }
        });
    };
    RegisterComponent.prototype.passCheck = function () {
        if (this.regForm.value.password != this.regForm.value.confirmPassword && (this.regForm.controls.confirmPassword.dirty || this.regForm.controls.confirmPassword.touched)) {
            this.passMatch = false;
            return "is-invalid";
        }
        else if (this.regForm.value.password == this.regForm.value.confirmPassword && (this.regForm.controls.confirmPassword.dirty || this.regForm.controls.confirmPassword.touched)) {
            this.passMatch = true;
            return "is-valid";
        }
        else
            "";
    };
    ;
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/result-display/result-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result-display/result-display.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"container-fluid\">\n  <!-- Breadcrumbs-->\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a routerLink=\"/dashboard\">Dashboard</a>\n    </li>\n    <li class=\"breadcrumb-item\">\n        <a routerLink=\"../..\">User Results</a>\n      </li>\n    <li class=\"breadcrumb-item active\"><b>Module-{{module}} : Level-{{level}}</b></li>\n  </ol>\n\n  <h1><i>{{user}}</i></h1>\n  \n  <hr>\n<!-- Result Display of NA -->\n  <div class=\"card mb-3\" *ngIf=\"level==1\">\n    {{user}}\n    <table class=\"table table-bordered table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Total Attempted Questions</th>\n          <th scope=\"col\">Total Correct Answers</th>\n          <th scope=\"col\">Total Wrong Answers</th>\n          <th scope=\"col\">Test Time</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let post of posts , let i = index\">\n          <td>{{NA.Total_Attempted_Questions}}</td>\n          <td>{{NA.Total_Correct_Answers}}</td>\n          <td>{{NA.Total_Wrong_Answers}}</td>\n          <td>{{NA.testtime}}</td>\n        </tr>\n        \n        \n      </tbody>\n    </table>\n    \n  </div>\n\n<!-- Result Display of NA Part 2 -->\n  <div class=\"card mb-3\" *ngIf=\"level==2\">\n    {{user}}\n    <table class=\"table table-bordered table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Total Attempted Questions</th>\n          <th scope=\"col\">Total Correct Answers</th>\n          <th scope=\"col\">Total Wrong Answers</th>\n          <th scope=\"col\">Test Time</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let post of posts , let i = index\">\n          <td>{{NA2.total_ques_attemted}}</td>\n          <td>{{NA2.total_right_answer}}</td>\n          <td>{{NA2.total_wrong_answer}}</td>\n          <td>{{NA2.testtime}}</td>\n        </tr>\n        \n        \n      </tbody>\n    </table>\n    \n  </div>\n\n\n  <!-- Result Display of AR -->\n  <div class=\"card mb-3\" *ngIf=\"level==3\">\n    {{user}}\n    <table class=\"table table-bordered table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Total Attempted Questions</th>\n          <th scope=\"col\">Total Correct Answers</th>\n          <th scope=\"col\">Total Wrong Answers</th>\n          <th scope=\"col\">Test Time</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let post of posts , let i = index\">\n          <td>{{AR.total_ques_attemted}}</td>\n          <td>{{AR.total_right_answer}}</td>\n          <td>{{AR.total_wrong_answer}}</td>\n          <td>{{AR.testtime}}</td>\n        </tr>\n        \n        \n      </tbody>\n    </table>\n    \n  </div>\n\n\n  <!-- Result Display of EC -->\n  <div class=\"card mb-3\" *ngIf=\"level==4\">\n    {{user}}\n    <table class=\"table table-bordered table-dark\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Total Attempted Questions</th>\n          <th scope=\"col\">Total Correct Answers</th>\n          <th scope=\"col\">Total Wrong Answers</th>\n          <th scope=\"col\">Test Time</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let post of posts , let i = index\">\n          <td>{{EC.total_ques_attemted}}</td>\n          <td>{{EC.total_right_answer}}</td>\n          <td>{{EC.total_wrong_answer}}</td>\n          <td>{{EC.testtime}}</td>\n        </tr>\n        \n        \n      </tbody>\n    </table>\n    \n  </div>\n\n\n\n  <div class=\"card mb-3\" *ngIf=\"level==5\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-area-chart\"></i> Chart</div>\n    <div class=\"card-body\">\n        <div>\n          <div style=\"display: block\">\n              <canvas baseChart\n              [datasets]=\"barChartData\"\n              [labels]=\"barChartLabels\"\n              [options]=\"barChartOptions\"\n              [legend]=\"barChartLegend\"\n              [chartType]=\"barChartType\"></canvas>\n          </div>\n        </div>\n    </div>\n    <!-- <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div> -->\n  </div>\n\n\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/result-display/result-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultDisplayComponent = (function () {
    function ResultDisplayComponent(_DataService, router, activeRoute, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.spinnerService = spinnerService;
        this.posts = [];
        // Chart.js configurations 
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Assertive', 'Reliable', 'Frustration', 'Social', 'Careful', 'Original Ideas', 'People', 'Vitality'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [], label: 'PPQ' }
        ];
    }
    // Chart.js configurations ends here
    ResultDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show;
        this.activeRoute.params.subscribe(function (params) {
            _this.module = params['modId'];
            _this.level = params['levId'];
            _this.userId = params['uId'];
        });
        this.user = JSON.parse(sessionStorage.getItem("currentUser"));
        console.log(this.user.username);
        this.spinnerService.show();
        this._DataService.getSingleUser(this.user.username).subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            console.log("cu", _this.posts);
        });
        this._DataService.getUserPPQScore(this.userId).subscribe(function (res) {
            console.log(res);
            _this.ppqScore = res[0];
            _this.barChartData = [
                { backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [_this.ppqScore.Assertive_A,
                        _this.ppqScore.Reliable_R,
                        _this.ppqScore.Frustration_F,
                        _this.ppqScore.Social_S,
                        _this.ppqScore.Careful_C,
                        _this.ppqScore.Original_Ideas_O,
                        _this.ppqScore.People_P,
                        _this.ppqScore.Vitality_V], }
            ];
        });
        this._DataService.getSingleUser(this.userId).subscribe(function (res) {
            _this.user = res[0].username;
            _this.spinnerService.hide;
            console.log("cu", _this.posts);
        });
        //Result Displayed for NA
        this._DataService.getSingleUserResult(this.userId).subscribe(function (res) {
            console.log(res);
            _this.NA = res[0];
            _this.NA.Total_Attempted_Questions;
            _this.NA.Total_Correct_Answers;
            _this.NA.Total_Wrong_Answers;
            _this.NA.testtime;
        });
        this._DataService.getSingleUser(this.userId).subscribe(function (res) {
            _this.user = res[0].username;
            _this.spinnerService.hide;
            console.log("cu", _this.posts);
        });
        //Result Displayed for NA Part 2
        this._DataService.getSingleUserResultNA(this.userId).subscribe(function (res) {
            console.log(res);
            _this.NA2 = res[0];
            _this.NA2.total_ques_attemted;
            _this.NA2.total_right_answer;
            _this.NA2.total_wrong_answer;
            _this.NA2.testtime;
        });
        this._DataService.getSingleUser(this.userId).subscribe(function (res) {
            _this.user = res[0].username;
            _this.spinnerService.hide;
            console.log("cu", _this.posts);
        });
        //Result Displayed for AR
        this._DataService.getSingleUserResultAR(this.userId).subscribe(function (res) {
            console.log(res);
            _this.AR = res[0];
            _this.AR.total_ques_attemted;
            _this.AR.total_right_answer;
            _this.AR.total_wrong_answer;
            _this.AR.testtime;
        });
        this._DataService.getSingleUser(this.userId).subscribe(function (res) {
            _this.user = res[0].username;
            _this.spinnerService.hide;
            console.log("cu", _this.posts);
        });
        //Result Displayed for EC
        this._DataService.getSingleUserResultEC(this.userId).subscribe(function (res) {
            console.log(res);
            _this.EC = res[0];
            _this.EC.total_ques_attemted;
            _this.EC.total_right_answer;
            _this.EC.total_wrong_answer;
            _this.EC.testtime;
        });
        this._DataService.getSingleUser(this.userId).subscribe(function (res) {
            _this.user = res[0].username;
            _this.spinnerService.hide;
            console.log("cu", _this.posts);
        });
    };
    ResultDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result-display',
            template: __webpack_require__("../../../../../src/app/result-display/result-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result-display/result-display.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ResultDisplayComponent);
    return ResultDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/secure.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURE_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authguard_guard__ = __webpack_require__("../../../../../src/app/authguard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_module_component__ = __webpack_require__("../../../../../src/app/module/module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ppq_ppq_component__ = __webpack_require__("../../../../../src/app/ppq/ppq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_maturity_task_maturity_component__ = __webpack_require__("../../../../../src/app/task-maturity/task-maturity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abstract_reasoning_abstract_reasoning_component__ = __webpack_require__("../../../../../src/app/abstract-reasoning/abstract-reasoning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eng_comm_eng_comm_component__ = __webpack_require__("../../../../../src/app/eng-comm/eng-comm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__na_finance_na_finance_component__ = __webpack_require__("../../../../../src/app/na-finance/na-finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profileedit_profileedit_component__ = __webpack_require__("../../../../../src/app/profileedit/profileedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__excel_search_excel_search_component__ = __webpack_require__("../../../../../src/app/excel-search/excel-search.component.ts");











// import { DashboardComponent } from './dashboard/dashboard.component';
var SECURE_ROUTES = [
    // { path: 'dashboard', component: DashboardComponent ,canActivate : [AuthguardGuard] },
    { path: 'module/:id', component: __WEBPACK_IMPORTED_MODULE_1__module_module_component__["a" /* ModuleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'module/:id/quiz', component: __WEBPACK_IMPORTED_MODULE_2__quiz_quiz_component__["a" /* QuizComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'module/:id/task-maturity', component: __WEBPACK_IMPORTED_MODULE_4__task_maturity_task_maturity_component__["a" /* TaskMaturityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'module/:id/ppq', component: __WEBPACK_IMPORTED_MODULE_3__ppq_ppq_component__["a" /* PpqComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'module/:id/a-r', component: __WEBPACK_IMPORTED_MODULE_5__abstract_reasoning_abstract_reasoning_component__["a" /* AbstractReasoningComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'module/:id/e-c', component: __WEBPACK_IMPORTED_MODULE_6__eng_comm_eng_comm_component__["a" /* EngCommComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'module/:id/na-finance', component: __WEBPACK_IMPORTED_MODULE_7__na_finance_na_finance_component__["a" /* NaFinanceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'profile/profile-edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__profileedit_profileedit_component__["a" /* ProfileeditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] },
    { path: 'excel/list/:id', component: __WEBPACK_IMPORTED_MODULE_10__excel_search_excel_search_component__["a" /* ExcelSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__authguard_guard__["a" /* AuthguardGuard */]] }
];


/***/ }),

/***/ "../../../../../src/app/secure/secure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/secure/secure.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n\n<div class=\"content-wrapper\">\n      <router-outlet></router-outlet>\n</div>\n\n<!-- Footer -->\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/secure/secure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecureComponent = (function () {
    function SecureComponent(router) {
        this.router = router;
    }
    SecureComponent.prototype.ngOnInit = function () {
    };
    SecureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-secure',
            template: __webpack_require__("../../../../../src/app/secure/secure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/secure/secure.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SecureComponent);
    return SecureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-maturity/task-maturity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-maturity/task-maturity.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"top-content\" *ngIf=\"!isSubmit\">\n  <div class=\"inner-bg\"  style=\"margin-left: 20px;\">\n<div>\n <span class=\"hd-ll\">MODULE 3 </span><span>| </span><span class=\"hd-ll\">LEVEL 1</span>\n</div><hr>\n<div class=\"row\">\n<div class=\"col-md-8 col-xs-12\" style=\"padding-bottom: 30px;border-right: 1px solid #ddd;\">\n\n <div class=\"container-fluid\" >\n  <div class=\"row\">\n   <div class=\"col-md-7 col-xs-6\">\n     <span><b>Statement No.{{currQuesNo+1}}</b></span>\n   </div>\n     <div class=\"col-md-5 col-xs-6\">\n     <span  class=\"hd-all pull-right\">Time Left:- <b><countdown [config]=\"{leftTime:timer, template:'$!m!:$!s!'}\" (finished) = \"onFinish()\"></countdown></b></span>\n   </div>\n </div>\n <!--\t<button type=\"button\" class=\"btn btn-purple\">Question No.1</button> --><hr>\n   \n </div>\n  <div class=\"container-fluid\">\n    \n    <div *ngFor=\"let post of posts, let i = index\">\n      <div *ngIf=\"currQuesNo == i\">\n        <p>{{post.statement}}</p>\n        <div class=\"well\">\n            <!-- <label class=\"radio-container\">{{post.ans1}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"1\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans2}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"2\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans3}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"3\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"radio-container\">{{post.ans4}}\n              <input type=\"radio\" name=\"quiz-ans\" value=\"4\" [(ngModel)]=\"userAns[i].ans\">\n              <span class=\"checkmark\"></span>\n            </label> -->\n\n\n            <table class=\"table table-bordered\">\n              <tbody>\n                <tr>\n                  <th scope=\"row\" style=\"width:10%\">A</th>\n                  <td class=\"text-left\" style=\"width:75%\">{{post.option_1}}</td>\n                  <td class=\"text-left\" style=\"width:15%\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">B</th>\n                  <td class=\"text-left\">{{post.option_2}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">C</th>\n                  <td class=\"text-left\">{{post.option_3}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">D</th>\n                  <td class=\"text-left\">{{post.option_4}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">E</th>\n                  <td class=\"text-left\">{{post.option_5}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">F</th>\n                  <td class=\"text-left\">{{post.option_6}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">G</th>\n                  <td class=\"text-left\">{{post.option_7}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">H</th>\n                  <td class=\"text-left\">{{post.option_8}}</td>\n                  <td class=\"text-left\">\n                    <select class=\"form-control\">\n                      <option value=\"0\">0</option>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                      <option value=\"3\">3</option>\n                      <option value=\"4\">4</option>\n                      <option value=\"5\">5</option>\n                      <option value=\"6\">6</option>\n                      <option value=\"7\">7</option>\n                      <option value=\"8\">8</option>\n                      <option value=\"9\">9</option>\n                      <option value=\"10\">10</option>\n                    </select>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4 col-xs-6\"> \n              <button class=\"btn btn-primary action-btn\" (click)=\"getPrevQues()\" [hidden]=\"currQuesNo==0\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> Previous</button>\n            </div>\n            <div class=\"col-md-8 col-xs-6\">\n              <button class=\"pull-right btn btn-primary action-btn\"  (click)=\"getNextQues()\" [hidden]=\"currQuesNo==29\">Next <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button>\n              <!-- <button class=\"pull-right btn btn-info action-btn\">Skip</button> -->\n              <button (click)=\"submit()\" class=\"pull-right btn btn-danger action-btn\">Submit</button>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-4 col-xs-12\" style=\"padding-left: 0px;\">\n <div class=\"container-fluid\" style=\"background-color: #ddd;padding: 5px;\">\n   <span class=\"hd-ll\">MODULE 1 </span><span>| </span><span class=\"hd-ll\">LEVEL 1</span>\n </div><br>\n  <div class=\"col-md-12\">\n    <button type=\"button\" *ngFor=\"let ques of posts; let i = index\" (click)=\"getCurrentQuestion(i)\" class=\"round-button {{isActive(i)}} {{isAttempted(i)}}\">{{i+1}}</button>\n  </div>\n  <hr>\n  <div class=\"col-md-12\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#007ef3\"></i> - Current Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#212529\"></i> - Attempted Question<br>\n    <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color:#d6d6d6\"></i> - Unattempted Question\n  </div>\n  \n</div>\n\n</div>\n</div>\n</div>\n\n<div class=\"container-fluid\"  *ngIf=\"isSubmit\">\n  <!-- Breadcrumbs-->\n  \n  <h1 class=\"text-center\">Result summary</h1>\n  <hr>\n  <div class=\"container\">\n      <div class=\"alert alert-primary\" role=\"alert\">\n        Total attempted answers: {{atmtAnswers}}\n      </div>\n      <div class=\"alert alert-success\" role=\"alert\">\n        Total correct answers: {{crtAnswers}}\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\">\n        Total wrong answers: {{wrngAnswers}}\n      </div>\n  </div>   \n  <div style=\"height: 100%;\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/task-maturity/task-maturity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskMaturityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskMaturityComponent = (function () {
    function TaskMaturityComponent(_DataService, router, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.posts = [];
        this.currentQuestion = {};
        this.currQuesNo = 0;
        this.userAns = [];
        this.selected = 0;
        this.crtAnswers = 0;
        this.atmtAnswers = 0;
        this.wrngAnswers = 0;
        this.totalQues = 0;
        this.isSubmit = false;
    }
    TaskMaturityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.checkTnC();
        this.currentuser = JSON.parse(sessionStorage.getItem("currentUser"));
        this._DataService.getAllQuestionsTM().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.posts = res;
            _this.totalQues = _this.posts.length;
            _this.currentQuestion = _this.posts[_this.currQuesNo];
            _this.isActive(_this.currQuesNo);
            for (var i = 0; i < _this.posts.length; i++) {
                var userObj = {
                    questionId: '',
                    ans: '',
                    isCorrect: ''
                };
                userObj.questionId = _this.posts[i].que_id;
                _this.userAns.push(userObj);
                _this.timer = 1800;
            }
        });
    };
    TaskMaturityComponent.prototype.checkTnC = function () {
        if (sessionStorage.getItem("isTnCAgreed") != 'true') {
            this.router.navigate(['module']);
        }
    };
    // Next question
    TaskMaturityComponent.prototype.getNextQues = function () {
        this.currQuesNo++;
    };
    // Previous question
    TaskMaturityComponent.prototype.getPrevQues = function () {
        this.currQuesNo--;
    };
    // For getting current question
    TaskMaturityComponent.prototype.getCurrentQuestion = function (qNo) {
        this.currentQuestion = this.posts[qNo];
        this.currQuesNo = qNo;
        // this.select(qNo);
    };
    //For adding active class
    TaskMaturityComponent.prototype.select = function (item) {
        this.selected = item;
    };
    ;
    //For adding active class
    TaskMaturityComponent.prototype.isActive = function (item) {
        return this.currQuesNo === item ? 'active' : '';
    };
    ;
    TaskMaturityComponent.prototype.isAttempted = function (item) {
        return this.userAns[item].ans == '' ? 'skipped' : '';
    };
    ;
    // For getting the result
    TaskMaturityComponent.prototype.submit = function () {
        this.checkAnswers();
        this.isSubmit = true;
        var data = {
            "email": this.currentuser.email,
            "username": this.currentuser.username,
            "totalQuestions": this.totalQues,
            "totalAttempted": this.atmtAnswers,
            "totalCorrect": this.crtAnswers,
            "totalWrong": this.wrngAnswers
        };
        this._DataService.triggerMail(data).subscribe(function (res) {
            // console.log("Mail Sent!");
        });
    };
    // For checking the answers
    TaskMaturityComponent.prototype.checkAnswers = function () {
        for (var i = 0; i < this.posts.length; i++) {
            if ((this.posts[i].true_ans == this.userAns[i].ans)) {
                this.crtAnswers++;
            }
            else if ((this.userAns[i].ans != '') && (this.posts[i].true_ans != this.userAns[i].ans)) {
                this.wrngAnswers++;
            }
            if ((this.userAns[i].ans != '') && (this.userAns[i].ans != undefined)) {
                this.atmtAnswers++;
            }
        }
    };
    TaskMaturityComponent.prototype.onFinish = function () {
        this.submit();
    };
    TaskMaturityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-maturity',
            template: __webpack_require__("../../../../../src/app/task-maturity/task-maturity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-maturity/task-maturity.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], TaskMaturityComponent);
    return TaskMaturityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-result/user-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-result/user-result.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Loading spinner -->\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n<div class=\"container-fluid\">\n  <!-- Breadcrumbs-->\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a routerLink=\"/dashboard\">Dashboard</a>\n    </li>\n    <li class=\"breadcrumb-item active\">User Results</li>\n  </ol>\n  \n  <h1><i>{{user}}</i></h1>\n  <hr>\n\n  <div class=\"card bg-secondary mb-3\" style=\"width: 50rem;\">\n    <div class=\"card-header text-white\">\n      Module 1\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item list-group-item-success\"><a routerLink=\"I/1\">Level 1 (NA)</a></li>\n      <li class=\"list-group-item list-group-item-success\"><a routerLink=\"I/2\">Level 2 (NA-2)</a></li>\n      <li class=\"list-group-item list-group-item-success\"><a routerLink=\"I/3\">Level 3 (AR)</a></li>\n      <li class=\"list-group-item list-group-item-success\"><a routerLink=\"I/4\">Level 4 (EC)</a></li>\n      <li class=\"list-group-item list-group-item-success\"><a routerLink=\"I/5\">Level 5 (PPQ)</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-result/user-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datagateway_service__ = __webpack_require__("../../../../../src/app/datagateway.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResultComponent = (function () {
    function UserResultComponent(_DataService, router, activeRoute, spinnerService) {
        this._DataService = _DataService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.spinnerService = spinnerService;
    }
    UserResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show;
        this.activeRoute.params.subscribe(function (params) {
            _this.userId = params['uId'];
        });
        this._DataService.getSingleUser(this.userId).subscribe(function (res) {
            _this.user = res[0].username;
            _this.spinnerService.hide;
        });
    };
    UserResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-result',
            template: __webpack_require__("../../../../../src/app/user-result/user-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-result/user-result.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datagateway_service__["a" /* DatagatewayService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], UserResultComponent);
    return UserResultComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map