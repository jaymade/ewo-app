(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/EWo/create-ewo/create-ewo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/EWo/create-ewo/create-ewo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Create an EWO </h4>\r\n<!-- loading spinner -->\r\n<div class=\"spinner-border text-info mx-auto\" role=\"status\" *ngIf=\"isLoading\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n\r\n\r\n<form class=\"mt-5 mb-5\" (submit)=\"onSaveEwo()\" [formGroup]=\"ewoForm\" *ngIf=\"!isLoading\">\r\n\r\n  <!-- date -->\r\n  <p><strong>Today: </strong>{{ startDate | date}}</p>\r\n\r\n  <!-- ewo staetDAte  -->\r\n  <div class=\"form-group\">\r\n    <!-- <label for=\"startDate\">Start Date </label> -->\r\n    <input class=\"form-control\" type=\"hidden\" formControlName=\"startDate\" />\r\n\r\n  </div>\r\n\r\n  <!-- row -->\r\n  <div class=\"row\">\r\n\r\n    <!-- ewo starter -->\r\n    <div class=\"form-group col\">\r\n      <label for=\"starter\">Your Name: </label>\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"starter\" placeholder=\" Who started this EWO?\" [ngClass]=\"{ 'is-invalid': ewoForm.get('starter').invalid && ewoForm.get('starter').touched }\" />\r\n      <div *ngIf=\"ewoForm.get('starter').touched && ewoForm.get('starter').errors\" class=\"invalid-feedback\"> Need a contact name\r\n      </div>\r\n    </div>\r\n\r\n    <!-- department -->\r\n    <div class=\"form-group col\">\r\n      <label for=\"status\">Team / Department: </label>\r\n      <select class=\"form-control\" formControlName=\"team\">\r\n        <option *ngFor=\"let dept of departments\" value=\"{{dept.id}}\">{{dept.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n\r\n    <!-- Request Type -->\r\n    <div class=\"form-group col\">\r\n      <label for=\"status\">Request Type: </label>\r\n      <select class=\"form-control\" formControlName=\"reqtype\">\r\n        <option *ngFor=\"let req of requests\" value=\"{{req.id}}\">{{req.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <!--  row -->\r\n  <div class=\"row\">\r\n\r\n    <!-- ewo part -->\r\n    <div class=\"form-group col\">\r\n      <label for=\"input_part\">Exsisting or New part: </label>\r\n      <!-- group inline radios -->\r\n      <div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" value='false' name=\"newPart\" formControlName=\"newPart\" type=\"radio\" (click)=\"onPartChange()\">\r\n          <span>Exsisting</span>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" value='true' name=\"newPart\" formControlName=\"newPart\" type=\"radio\" (click)=\"onPartChange()\">\r\n          <span>New Part</span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!newPart\">\r\n        <h5>Exsisting Part number</h5>\r\n        <input class=\"form-control\" type=\"text\" formControlName=\"partNum\" placeholder=\" xxxxxxxxxx \" />\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Request Type -->\r\n    <div class=\"form-group col\">\r\n      <label for=\"status\">Priority: <small class='orange'>( 1 is lowest, 5 is highest)</small></label>\r\n      <select class=\"form-control\" formControlName=\"priority\">\r\n        <option *ngFor=\"let priority of priorities\" value=\"{{priority.id}}\">{{priority.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <!-- ewo title -->\r\n    <div class=\"form-group col\">\r\n      <label for=\"input_title\">EWO Title: </label>\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"title\" placeholder=\" What we calling it?\" [ngClass]=\"{ 'is-invalid': ewoForm.get('title').invalid && ewoForm.get('title').touched }\" />\r\n      <div *ngIf=\"ewoForm.get('title').touched && ewoForm.get('title').errors\" class=\"invalid-feedback\"> Need a title\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- end of row -->\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"input_descript\">Description of Project: </label>\r\n    <textarea class=\"form-control\" rows=\"4\" formControlName=\"descript\" placeholder=\"What we doing?\" [ngClass]=\"{ 'is-invalid': ewoForm.get('descript').invalid && ewoForm.get('descript').touched }\"></textarea>\r\n\r\n    <div *ngIf=\"ewoForm.get('descript').touched && ewoForm.get('descript').errors\" class=\"invalid-feedback\"> Give us an\r\n      idea of what you need done.\r\n    </div>\r\n  </div>\r\n\r\n  <!-- row -->\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"form-group col\">\r\n      <label for=\"fileUpload\">Add File: <small class=\"orange\">Optional</small> </label>\r\n      <div class=\"input-group mb-3\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r\n        </div>\r\n        <div class=\"custom-file\">\r\n          <input type=\"file\" class=\"custom-file-input\" name=\"fileUpload\" (ckick)=\"filePicker.click()\" #filePicker\r\n            (change)=\"onImagePicked($event)\">\r\n          <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose JPG PNG or PDF</label>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-3 img-preview\" *ngIf=\"imagePreview !== '' && imagePreview && ewoForm.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"ewoForm.value.title\" class=\"img-fluid\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- end of row -->\r\n  <div class=\"row\">\r\n    <h6 for=\"\">Sourcing</h6>\r\n    <!-- col-12 -->\r\n    <div class=\"col-12 mb-3\">\r\n      <div class=\"form-check form-check-inline mr-3\">\r\n        <input class=\"form-check-input\" type=\"radio\" [value]=\"false\" formControlName=\"outsourced\" (click)=\"onSourceChange(false)\">\r\n        <label class=\"form-check-label\" for=\"manf\">\r\n          Manufactured\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" [value]=\"true\" formControlName=\"outsourced\" (click)=\"onSourceChange(true)\">\r\n        <label class=\"form-check-label\" for=\"purch\">\r\n          Purchased\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- eoq  col-6-->\r\n    <div class=\"form-group col-6\">\r\n      <label for=\"input_title\">Economic Order Quantity: </label>\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"eoq\" placeholder=\" Optimal mfg run rate?\" />\r\n    </div>\r\n    <!-- asq -->\r\n    <div class=\"form-group col-6\">\r\n      <label for=\"input_title\">Anual Sales Quantity: </label>\r\n      <input class=\"form-control\" type=\"text\" formControlName=\"asq\" placeholder=\" How many in a year\" />\r\n    </div>\r\n\r\n    <div class=\"col-12\" *ngIf='sourced'>\r\n      <!-- nested row -->\r\n      <div class=\"row\">\r\n        <!-- moq -->\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"input_moq\">Min Order Quantity: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"moq\" placeholder=\"least that can be ordered \" />\r\n        </div>\r\n        <!-- oqp -->\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"input_oqp\">Order Quantity Purchased: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"oqp\" placeholder=\"how many purchased \" />\r\n        </div>\r\n        <!-- vender number -->\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"input_vn\">Vender Number: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"vendnum\" placeholder=\"####### \" />\r\n        </div>\r\n        <!--lead time -->\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"input_vn\">Lead Time: </label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"leadtime\" placeholder=\"####### \" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group mt-5\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [ngClass]=\"{ 'disabled': ewoForm.invalid }\"> Create EWO </button>\r\n    <!-- <div *ngIf=\"ewoForm.controls.submit.disabled\" class=\"invalid-feedback\"> Form invalid: complete required fields </div>\r\n    <div *ngIf=\"ewoForm.controls.submit.disabled\" class=\"valid-feedback\"> Good to go!\r\n    </div> -->\r\n  </div>\r\n</form>\r\n<div class=\"row\">\r\n\r\n  <code class=\"col\">form value:\r\n    <pre>{{ewoForm.value | json}}</pre>\r\n  </code>\r\n  <code> form valid:\r\n    <pre> {{ewoForm.valid}}</pre>\r\n  </code>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/EWo/create-ewo/create-ewo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/EWo/create-ewo/create-ewo.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VXby9jcmVhdGUtZXdvL2NyZWF0ZS1ld28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/EWo/create-ewo/create-ewo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/EWo/create-ewo/create-ewo.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEwoComponent", function() { return CreateEwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_ewo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/ewo.service */ "./src/app/service/ewo.service.ts");
/* harmony import */ var _helpers_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/mime-type.validator */ "./src/app/_helpers/mime-type.validator.ts");






var CreateEwoComponent = /** @class */ (function () {
    function CreateEwoComponent(ewoService, route) {
        this.ewoService = ewoService;
        this.route = route;
        this.departments = [
            { id: 'choose', name: 'Choose One' },
            { id: 'Telcom -Sales', name: 'Telcom -Sales' },
            { id: 'Contract - Sales', name: 'Contract - Sales' },
            { id: 'Dimension Change', name: 'Dimension Change' },
            { id: 'Development', name: 'Development' },
            { id: 'Purchasing', name: 'Purchasing' },
            { id: 'Quaility', name: 'Quaility' },
            { id: 'Sr-MGR Team', name: 'Sr-MGR Team' },
            { id: 'MNFT Engineer', name: 'MNFT Engineer' },
            { id: 'Sheet Metal', name: 'Sheet Metal' },
            { id: 'Heavy Metal', name: 'Heavy Metal' },
            { id: 'Welding', name: 'Welding' },
            { id: 'Finishing', name: 'Finishing' },
            { id: 'Assembly', name: 'Assembly' },
            { id: 'Kitting', name: 'Kitting' }
        ];
        this.requests = [
            { id: 'choose', name: 'Choose One' },
            { id: 'Assembly', name: 'Assembly' },
            { id: 'Color Change', name: 'Color Change' },
            { id: 'Tolerance Change', name: 'Tolerance Change' },
            { id: 'Fixture', name: 'Fixture' },
            { id: 'Process Change Request', name: 'Process Change Request' },
            { id: 'Machine Program', name: 'Machine Program' },
            { id: 'New Design', name: 'New Design' },
            { id: 'Part Modification', name: 'Part Modification' },
            { id: 'New Color', name: 'New Color' },
            { id: 'Miscellaneous', name: 'Miscellaneous' },
            { id: 'Quote', name: 'Quote' },
            { id: 'Part Number', name: 'Part Number' },
            { id: 'Routing Change', name: 'Routing Change' }
        ];
        this.priorities = [
            { id: 'choose', name: 'Choose One' },
            { id: '1', name: '1-When You Can' },
            { id: '2', name: '2-ASAP' },
            { id: '3', name: '3-Order Pending' },
            { id: '4', name: '4-Urgent' },
            { id: '5', name: '5-Hot Stuff' }
        ];
        this.statuses = [
            { id: 'choose', name: 'Choose One' },
            { id: 'Unassigned', name: 'Unassigned' },
            { id: 'Assigned', name: 'Assigned' },
            { id: 'Completed', name: 'Completed' },
            { id: 'Canceled', name: 'Canceled' },
            { id: 'Hold', name: 'Hold' }
        ];
        this.isLoading = false;
        this.sourced = false; // is part out sourced
        this.newPart = true; // new part number toggle
        this.startDate = this.currentDate();
    }
    CreateEwoComponent.prototype.ngOnInit = function () {
        this.ewoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            starter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            team: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('choose', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            reqtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('choose', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            newPart: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            partNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('choose', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            descript: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            outsourced: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            eoq: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            asq: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            moq: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            oqp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            vendnum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            leadtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            // image: new FormControl(null)
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { asyncValidators: [_helpers_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]] })
        });
        this.ewoForm.controls['startDate'].setValue(this.currentDate());
        this.ewoForm.controls['starter'].setValue('Jay Rich');
        this.ewoForm.controls['team'].setValue('Telcom -Sales');
        this.ewoForm.controls['reqtype'].setValue('New Design');
        this.ewoForm.controls['newPart'].setValue('true');
        this.ewoForm.controls['partNum'].setValue('xxxxxxxxxx');
        this.ewoForm.controls['priority'].setValue('4');
        this.ewoForm.controls['title'].setValue('TEST 11');
        this.ewoForm.controls['descript'].setValue('11 TEST tickles');
        this.ewoForm.controls['eoq'].setValue('22');
        this.ewoForm.controls['asq'].setValue('33');
        this.ewoForm.controls['moq'].setValue('44');
        this.ewoForm.controls['oqp'].setValue('55');
        this.ewoForm.controls['vendnum'].setValue('VINMUMBER123');
        this.ewoForm.controls['leadtime'].setValue('4 score & 7 years');
        // this.ewoForm.controls['image'].setValue('');
    };
    CreateEwoComponent.prototype.currentDate = function () {
        var currentDate = new Date();
        return currentDate.toISOString().substring(0, 10);
    };
    CreateEwoComponent.prototype.onSourceChange = function (value) {
        var toggle = value;
        this.sourced = toggle;
    };
    CreateEwoComponent.prototype.onPartChange = function () {
        // const toggle = value;
        this.newPart = !this.newPart;
    };
    CreateEwoComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.ewoForm.patchValue({ image: file });
        this.ewoForm.get('image').updateValueAndValidity();
        // console.log('FILE: ', file);
        // console.log('FORM: ', this.ewoForm);
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result; // website reference to patch error
        };
        reader.readAsDataURL(file);
    };
    CreateEwoComponent.prototype.onSaveEwo = function () {
        // if (this.ewoForm.invalid) {
        //   return;
        // }
        this.isLoading = true;
        this.ewoService.addEwo(this.ewoForm.value.startDate, this.ewoForm.value.starter, this.ewoForm.value.team, this.ewoForm.value.reqtype, this.ewoForm.value.partNum, this.ewoForm.value.priority, this.ewoForm.value.title, this.ewoForm.value.descript, this.ewoForm.value.eoq, this.ewoForm.value.asq, this.ewoForm.value.moq, this.ewoForm.value.oqp, this.ewoForm.value.vendnum, this.ewoForm.value.leadtime, this.ewoForm.value.assignment, this.ewoForm.value.lastupdated, this.ewoForm.value.timestamp, this.ewoForm.value.completed, this.ewoForm.value.hours, this.ewoForm.value.image);
        this.ewoForm.reset();
    };
    CreateEwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-ewo',
            template: __webpack_require__(/*! ./create-ewo.component.html */ "./src/app/EWo/create-ewo/create-ewo.component.html"),
            styles: [__webpack_require__(/*! ./create-ewo.component.scss */ "./src/app/EWo/create-ewo/create-ewo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ewo_service__WEBPACK_IMPORTED_MODULE_4__["EwoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateEwoComponent);
    return CreateEwoComponent;
}());



/***/ }),

/***/ "./src/app/EWo/detail-ewo/detail-ewo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/EWo/detail-ewo/detail-ewo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>EWO Details</h3>\r\n<h5>EWO #: <span class=\"orange\">{{ewo?._id}}</span></h5>\r\n\r\n<div class=\"row mt-3\">\r\n\r\n  <div class=\"col-sm\">\r\n    <h5>User Input</h5>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Start Date: </strong>\r\n        <span class=\"data float-right\">{{ewo?.startDate}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Initiator: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.starter}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Department / Team: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.team}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Last Updated: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.lastupdated}} </span>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"mt-3 file rounded\">\r\n      <h6>Uploaded  File</h6>\r\n      <div class=\"border p-3\">\r\n        <a href=\"{{ewo?.imagePath}}\" class=\"fluid \"> {{ ewo?.title}}</a>\r\n        <!-- <img src=\"{{ewo.imagePath}}\" [alt]=\"ewoUpdateForm.value.title\" class=\"fluid \"> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm\">\r\n    <h5>Engineering Info</h5>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Request Type: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.reqtype}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Part Number: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.partNum}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Priority <small class=\"blue\">(1=low - 5=high)</small>: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.priority}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Assignment: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.assignment}} </span>\r\n      </li>\r\n\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Hours: </strong>\r\n        <span class=\"data float-right\">{{ewo?.hours}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Status: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.status}} </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"col-sm\">\r\n    <h5>Purchasing Info</h5>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Economic Order Quantity <small class=\"blue\">(EOQ)</small>: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.eoq}}</span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Annual Sales Quantity <small class=\"blue\">(ASQ)</small>: </strong>\r\n        <span class=\"data float-right\"> {{ewo?.asq}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Min Order Quantity <small class=\"blue\">(MOQ)</small>: </strong>\r\n        <span class=\"data float-right\">{{ewo?.moq}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Order Quantity Purchased <small class=\"blue\">(OQP)</small>: </strong>\r\n        <span class=\"data float-right\">{{ewo?.oqp}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Vender Number: </strong>\r\n        <span class=\"data float-right\">{{ewo?.vendnum}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Lead Time: </strong>\r\n        <span class=\"data float-right\">{{ewo?.leadtime}} </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"col-12 mt-5\">\r\n    <h5>EWO info</h5>\r\n    <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Title: </strong>\r\n        <span class=\"\">{{ewo?.title}} </span>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <strong class=\"mr-3\"> Description: </strong>\r\n        <span class=\"\">{{ewo?.descript}} </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"col-12\">\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- eng update form -->\r\n<div *ngIf=\"userIsAuthenticated\">\r\n  <form class=\"mt-5 mb-5\" *ngIf=\"ewo\" (submit)=\"onUpdateEwo()\" [formGroup]=\"ewoUpdateForm\">\r\n    <div class=\"row bg border p-3 rounded\">\r\n      <h6>Engineering Update Section</h6>\r\n\r\n      <!-- timestamp -->\r\n      <div class=\"col-12\">\r\n        <p>Timestamp: {{timestamp | date}}</p>\r\n        <input type=\"hidden\" formControlName=\"lastupdated\" />\r\n      </div>\r\n\r\n      <!-- assignment -->\r\n      <div class=\"form-group col\">\r\n        <label for=\"status\">Assignment: </label>\r\n        <select class=\"form-control\" formControlName=\"assignment\">\r\n          <option *ngFor=\"let ass of assignments\" value=\"{{ass.id}}\">{{ass.name}}</option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n      <!-- Status change -->\r\n      <div class=\"form-group col\">\r\n        <label for=\"status\">Status Change </label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option *ngFor=\"let status of statuses\" value=\"{{status.id}}\">{{status.name}}</option>\r\n        </select>\r\n      </div>\r\n      <!-- Request type change -->\r\n      <div class=\"form-group col\">\r\n        <label for=\"status\">Request Type Change </label>\r\n        <select class=\"form-control\" formControlName=\"reqtype\">\r\n          <option *ngFor=\"let req of requests\" value=\"{{req.id}}\">{{req.name}}</option>\r\n        </select>\r\n      </div>\r\n      <!-- hours -->\r\n      <div class=\"form-group col\">\r\n        <label for=\"status\">Hours </label>\r\n        <input class=\"form-control\" type=\"text\" formControlName=\"hours\" />\r\n      </div>\r\n      <!-- submit btn -->\r\n      <div class=\"form-group col-12\">\r\n        <button class=\"btn btn-primary\" type=\"submit\">Update EWO</button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- <div class=\"row\">\r\n\r\n  <code class=\"col\">From DB: <br>\r\n    <pre>{{ewo | json}}</pre>\r\n  </code>\r\n  <code class=\"col\"> Updated info: <br>\r\n    <pre>{{ewoUpdateForm.value | json }}</pre>\r\n  </code>\r\n  <code class=\"col\">Valid Form: {{ewoUpdateForm.valid}} </code>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/EWo/detail-ewo/detail-ewo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/EWo/detail-ewo/detail-ewo.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\n.red {\n  color: #f90303; }\n.pink {\n  color: #ff00f2; }\n.green {\n  color: #1a7c01; }\n.orange {\n  color: #ff7b00; }\n.lt-orange {\n  color: #ff9533; }\n.dk-orange {\n  color: #cc6200; }\n.blue {\n  color: #5ca7be; }\n.lt-blue {\n  color: #80bbcd; }\n.dk-blue {\n  color: #428ea5; }\n.gray {\n  color: #4b4b4b; }\n.lt-gray {\n  color: #656464; }\n.dk-gray {\n  color: #323131; }\n.info {\n  color: #0099ff; }\nheader h1 {\n  font-size: 2rem;\n  color: #000000; }\nheader h1 small {\n    font-size: .8rem; }\nheader h3 {\n  color: #5ca7be; }\nheader .smalltxt {\n  font-size: 1rem;\n  font-weight: 100;\n  color: #636363;\n  display: inline; }\nfooter {\n  border-top: 1px solid #ccc;\n  padding-top: 1rem; }\nfooter .stack {\n    max-height: 5rem; }\nli span .data {\n  color: green !important; }\nli span .data:hover {\n    color: red; }\n.system {\n  border: 1px solid #00ddfa;\n  border-radius: .3rem;\n  padding: 1rem; }\n.required {\n  border: 1px solid red;\n  border-radius: .3rem;\n  padding: 1rem; }\n.optional {\n  border: 1px solid #4b4b4b;\n  border-radius: .3rem;\n  padding: 1rem; }\n.report {\n  padding: 1rem;\n  background-color: #f2f2f2;\n  border: 1pt solid #4b4b4b;\n  border-radius: .5rem; }\nli strong {\n  color: #4b4b4b; }\nli span.data {\n  color: #4b4b4b !important; }\nli span.data:hover {\n    color: #ff7b00 !important; }\n.bg {\n  background-color: #99badd; }\n.file {\n  border: solid 2px #99badd;\n  background-color: rgba(153, 186, 221, 0.3);\n  padding: .5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRVdvL2RldGFpbC1ld28vQzpcXHNpdGVzXFxld28tYXBwL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL0VXby9kZXRhaWwtZXdvL0M6XFxzaXRlc1xcZXdvLWFwcC9zcmNcXGFwcFxcRVdvXFxkZXRhaWwtZXdvXFxkZXRhaWwtZXdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDhFQUFBO0FBUUEsOEVBQUE7QUFHQTtFQUNFLGNBUFcsRUFBQTtBQVNiO0VBQ0UsY0FkcUIsRUFBQTtBQWdCdkI7RUFDRSxjQVhhLEVBQUE7QUFhZjtFQUNFLGNBbkJ1QixFQUFBO0FBcUJ6QjtFQUNFLGNBQTRCLEVBQUE7QUFFOUI7RUFDRSxjQUEyQixFQUFBO0FBRzdCO0VBQ0UsY0EzQlksRUFBQTtBQTZCZDtFQUNFLGNBQXlCLEVBQUE7QUFFM0I7RUFDRSxjQUF3QixFQUFBO0FBRTFCO0VBQ0UsY0FyQ29CLEVBQUE7QUF1Q3RCO0VBQ0UsY0FBMEIsRUFBQTtBQUU1QjtFQUNFLGNBQXlCLEVBQUE7QUFFM0I7RUFDRSxjQUF1QixFQUFBO0FBR3pCO0VBRUksZUFBZTtFQUNmLGNBakRXLEVBQUE7QUE4Q2Y7SUFNTSxnQkFBZ0IsRUFBQTtBQU50QjtFQVdJLGNBM0RVLEVBQUE7QUFnRGQ7RUFlSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQXNCO0VBQ3RCLGVBQWUsRUFBQTtBQUluQjtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTtBQUZuQjtJQUlJLGdCQUFnQixFQUFBO0FBSXBCO0VBR00sdUJBQXVCLEVBQUE7QUFIN0I7SUFNUSxVQUFVLEVBQUE7QUFPbEI7RUFDRSx5QkFBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLGFBQWEsRUFBQTtBQUdmO0VBQ0UscUJBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQXpHb0I7RUEwR3BCLG9CQUFvQjtFQUNwQixhQUFhLEVBQUE7QUFHZjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBakhvQjtFQWtIcEIsb0JBQW9CLEVBQUE7QUNwSHRCO0VBRUksY0RBa0IsRUFBQTtBQ0Z0QjtFQU9JLHlCQUF1QixFQUFBO0FBUDNCO0lBVU0seUJBQXlCLEVBQUE7QUFLL0I7RUFDRSx5QkFBeUIsRUFBQTtBQUUzQjtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBeUM7RUFDekMsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvRVdvL2RldGFpbC1ld28vZGV0YWlsLWV3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbiRwaW5rOiByZ2IoMjU1LCAwLCAyNDIpO1xyXG4kb3JhbmdlOiByZ2IoMjU1LCAxMjMsIDApO1xyXG4kZ3JheTogcmdiKDc1LCA3NSwgNzUpO1xyXG4kYmx1ZTogIzVjYTdiZTtcclxuJHJlZDogI2Y5MDMwMztcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kZ3JlZW46ICMxYTdjMDE7XHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbi8vIGNvbG9yc1xyXG4ucmVkIHtcclxuICBjb2xvcjogJHJlZDtcclxufVxyXG4ucGluayB7XHJcbiAgY29sb3I6ICRwaW5rO1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6ICRncmVlbjtcclxufVxyXG4ub3JhbmdlIHtcclxuICBjb2xvcjogJG9yYW5nZTtcclxufVxyXG4ubHQtb3JhbmdlIHtcclxuICBjb2xvcjogbGlnaHRlbigkb3JhbmdlLCAxMCUpO1xyXG59XHJcbi5kay1vcmFuZ2Uge1xyXG4gIGNvbG9yOiBkYXJrZW4oJG9yYW5nZSwgMTAlKTtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGNvbG9yOiAkYmx1ZTtcclxufVxyXG4ubHQtYmx1ZSB7XHJcbiAgY29sb3I6bGlnaHRlbigkYmx1ZSwgMTAlKTtcclxufVxyXG4uZGstYmx1ZSB7XHJcbiAgY29sb3I6ZGFya2VuKCRibHVlLCAxMCUpO1xyXG59XHJcbi5ncmF5IHtcclxuICBjb2xvcjogJGdyYXk7XHJcbn1cclxuLmx0LWdyYXkge1xyXG4gIGNvbG9yOiBsaWdodGVuKCRncmF5LCAxMCUpO1xyXG59XHJcbi5kay1ncmF5IHtcclxuICBjb2xvcjogZGFya2VuKCRncmF5LCAxMCUpO1xyXG59XHJcbi5pbmZvIHtcclxuICBjb2xvcjogcmdiKDAsIDE1MywgMjU1KTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogJGJsYWNrO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICB9XHJcblxyXG4gIC5zbWFsbHR4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgLnN0YWNrIHtcclxuICAgIG1heC1oZWlnaHQ6IDVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5saSB7XHJcbiAgc3BhbiB7XHJcbiAgICAuZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZm9ybXNcclxuLnN5c3RlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDIyMSwgMjUwKTtcclxuICBib3JkZXItcmFkaXVzOiAuM3JlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ucmVxdWlyZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDAsIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5vcHRpb25hbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnJlcG9ydCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIGJvcmRlcjogMXB0IHNvbGlkICRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbmxpIHtcclxuICBzdHJvbmcge1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG5cclxuICB9XHJcblxyXG4gIHNwYW4uZGF0YSB7XHJcbiAgICBjb2xvcjogJGdyYXkgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5YmFkZDtcclxufVxyXG4uZmlsZSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggIzk5YmFkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTg2LCAyMjEsLjMwKTtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/EWo/detail-ewo/detail-ewo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/EWo/detail-ewo/detail-ewo.component.ts ***!
  \********************************************************/
/*! exports provided: DetailEwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEwoComponent", function() { return DetailEwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_ewo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/ewo.service */ "./src/app/service/ewo.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");






var DetailEwoComponent = /** @class */ (function () {
    function DetailEwoComponent(ewoService, userService, route) {
        this.ewoService = ewoService;
        this.userService = userService;
        this.route = route;
        this.engineer = true;
        this.userIsAuthenticated = false;
        this.timestamp = this.currentDate();
        this.assignments = [
            { id: 'No One', name: 'No One' },
            { id: 'Billy Unger', name: 'Billy Unger' },
            { id: 'Greg Barbee', name: 'Greg Barbee' },
            { id: 'Joe Dunagin', name: 'Joe Dunagin' },
            { id: 'Robert Hyde', name: 'Robert Hyde' }
        ];
        this.statuses = [
            { id: 'Unassigned', name: 'Unassigned' },
            { id: 'Assigned', name: 'Assigned' },
            { id: 'Completed', name: 'Completed' },
            { id: 'Canceled', name: 'Canceled' },
            { id: 'Hold', name: 'Hold' }
        ];
        this.requests = [
            { id: 'choose', name: 'Choose One' },
            { id: 'Assembly', name: 'Assembly' },
            { id: 'Color Change', name: 'Color Change' },
            { id: 'Tolerance Change', name: 'Tolerance Change' },
            { id: 'Fixture', name: 'Fixture' },
            { id: 'Process Change Request', name: 'Process Change Request' },
            { id: 'Machine Program', name: 'Machine Program' },
            { id: 'New Design', name: 'New Design' },
            { id: 'Part Modification', name: 'Part Modification' },
            { id: 'New Color', name: 'New Color' },
            { id: 'Miscellaneous', name: 'Miscellaneous' },
            { id: 'Quote', name: 'Quote' },
            { id: 'Part Number', name: 'Part Number' },
            { id: 'Routing Change', name: 'Routing Change' }
        ];
    }
    DetailEwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.ewoId = paramMap.get('ewoId');
            _this.ewoService.getEwo(_this.ewoId).subscribe(function (ewoData) {
                _this.ewo = {
                    _id: ewoData._id,
                    startDate: ewoData.startDate,
                    starter: ewoData.starter,
                    team: ewoData.team,
                    reqtype: ewoData.reqtype,
                    partNum: ewoData.partNum,
                    priority: ewoData.priority,
                    title: ewoData.title,
                    descript: ewoData.descript,
                    status: ewoData.status,
                    eoq: ewoData.eoq,
                    asq: ewoData.asq,
                    moq: ewoData.moq,
                    oqp: ewoData.oqp,
                    vendnum: ewoData.vendnum,
                    leadtime: ewoData.leadtime,
                    assignment: ewoData.assignment,
                    lastupdated: ewoData.lastupdated,
                    completed: ewoData.completed,
                    timestamp: ewoData.timestamp,
                    hours: ewoData.hours,
                    imagePath: ewoData.imagePath
                };
                var stat = _this.ewo.status;
                var req = _this.ewo.reqtype;
                var eng = _this.ewo.assignment;
                var hours = _this.ewo.hours;
                // form
                _this.ewoUpdateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    assignment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    }),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    }),
                    lastupdated: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    }),
                    hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    }),
                    reqtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    })
                });
                // console.log('%c STAT: ', 'color:red', this.stat);
                _this.ewoUpdateForm.controls['assignment'].setValue(eng);
                _this.ewoUpdateForm.controls['status'].setValue(stat);
                _this.ewoUpdateForm.controls['reqtype'].setValue(req);
                _this.ewoUpdateForm.controls['lastupdated'].setValue(_this.timestamp);
                _this.ewoUpdateForm.controls['hours'].setValue(hours);
            });
        });
        this.userIsAuthenticated = this.userService.getIsAuth();
        this.authStatusSub = this.userService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    DetailEwoComponent.prototype.currentDate = function () {
        var currentDate = new Date();
        return currentDate.toISOString().substring(0, 10);
    };
    DetailEwoComponent.prototype.onUpdateEwo = function () {
        if (this.ewoUpdateForm.invalid) {
            return;
        }
        // this.isLoading = true;
        this.ewoService.updateEwo(this.ewo._id, this.ewo.startDate, this.ewo.starter, this.ewo.team, this.ewoUpdateForm.value.reqtype, this.ewoUpdateForm.value.partNum, this.ewo.priority, this.ewo.title, this.ewo.descript, this.ewoUpdateForm.value.status, this.ewo.eoq, this.ewo.asq, this.ewo.moq, this.ewo.oqp, this.ewo.vendnum, this.ewo.leadtime, this.ewoUpdateForm.value.assignment, this.ewoUpdateForm.value.lastupdated, this.ewoUpdateForm.value.timestamp, this.ewoUpdateForm.value.completed, this.ewoUpdateForm.value.hours);
        this.ewoUpdateForm.reset();
    };
    DetailEwoComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    DetailEwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-ewo',
            template: __webpack_require__(/*! ./detail-ewo.component.html */ "./src/app/EWo/detail-ewo/detail-ewo.component.html"),
            styles: [__webpack_require__(/*! ./detail-ewo.component.scss */ "./src/app/EWo/detail-ewo/detail-ewo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ewo_service__WEBPACK_IMPORTED_MODULE_4__["EwoService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailEwoComponent);
    return DetailEwoComponent;
}());



/***/ }),

/***/ "./src/app/EWo/ewo-list/ewo-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/EWo/ewo-list/ewo-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Active EWO List</h4>\r\n<!-- loading spinner -->\r\n<div class=\"spinner-border text-info mx-auto\" role=\"status\" *ngIf=\"isLoading\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<ul class=\"list-inline\">\r\n  <li class=\"list-inline-item mr-3\"> Total: <strong>{{ewos.length}}</strong></li>\r\n  <li class=\"list-inline-item mr-3\"> Active: <strong class=\"red\">{{activeEWOs}}</strong></li>\r\n  <li class=\"list-inline-item mr-3\"> Closed: <strong class=\"green\">{{closedEWOs}}</strong></li>\r\n\r\n  <!-- <li  class=\"list-inline-item float-right\">Show per page:\r\n    <select class=\"form-control\">\r\n      <option value=\"5\">5</option>\r\n      <option value=\"10\">10</option>\r\n      <option value=\"15\">15</option>\r\n      <option value=\"20\">20</option>\r\n      <option value=\"30\">30</option>\r\n      <option value=\"50\">50</option>\r\n      <option value=\"100\">100</option>\r\n    </select>\r\n  </li> -->\r\n</ul>\r\n\r\n<!-- <nav>\r\n  <ul class=\"pagination\">\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n  </ul>\r\n</nav> -->\r\n\r\n<!-- {{activeEWOs}} -->\r\n\r\n<!-- show if not loading and greater than 0 -->\r\n<div *ngIf=\"ewos.length > 0 && !isLoading\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <!-- <th scope=\"col\">EWO #</th> -->\r\n        <!-- <th scope=\"col\">Engineer</th> -->\r\n        <th>Initiator</th>\r\n        <th>EWO Title</th>\r\n        <th>Description</th>\r\n        <th>Status</th>\r\n        <th>Details</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let ewo of ewos\">\r\n        <!-- <td>{{ewo.ewoId}}</td> -->\r\n        <!-- <td>{{ewo.userId}}</td> -->\r\n        <td>{{ewo.starter}}</td>\r\n        <td>{{ewo.title}}</td>\r\n        <td>{{ewo.descript}}</td>\r\n        <td>{{ewo.status}}</td>\r\n        <td>\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/detail', ewo._id]\">\r\n            <i class=\"far fa-edit\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"ewos.length <= 0\">\r\n  <p class=\"text-center\"><strong class=\"text-danger\">No Active EWOs</strong></p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/EWo/ewo-list/ewo-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/EWo/ewo-list/ewo-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VXby9ld28tbGlzdC9ld28tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/EWo/ewo-list/ewo-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/EWo/ewo-list/ewo-list.component.ts ***!
  \****************************************************/
/*! exports provided: EwoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EwoListComponent", function() { return EwoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ewo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ewo.service */ "./src/app/service/ewo.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");




var EwoListComponent = /** @class */ (function () {
    function EwoListComponent(ewoService, userService) {
        this.ewoService = ewoService;
        this.userService = userService;
        this.ewos = [];
        this.isLoading = false;
        this.closedEWOs = 0;
        this.activeEWOs = 0;
        this.userIsAuthenticated = false;
    }
    EwoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.ewoService.getEwoList();
        this.ewosSub = this.ewoService
            .getEwoUpdatedListener()
            .subscribe(function (ewos) {
            _this.isLoading = false;
            _this.ewos = ewos;
            _this.closedEWOs = _this.ewos.filter(function (ewo) { return ewo.status === 'Completed'; }).length;
            _this.activeEWOs = _this.ewos.filter(function (ewo) { return ewo.status !== 'Completed'; }).length;
            // console.log('C: ', this.closedEWOs, 'A:', this.activeEWOs);
        });
        this.userIsAuthenticated = this.userService.getIsAuth();
        this.authStatusSub = this.userService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    EwoListComponent.prototype.onDeleteEwo = function (ewoId) {
        this.ewoService.deleteEwo(ewoId);
    };
    EwoListComponent.prototype.ngOnDestroy = function () {
        this.ewosSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    EwoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ewo-list',
            template: __webpack_require__(/*! ./ewo-list.component.html */ "./src/app/EWo/ewo-list/ewo-list.component.html"),
            styles: [__webpack_require__(/*! ./ewo-list.component.scss */ "./src/app/EWo/ewo-list/ewo-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ewo_service__WEBPACK_IMPORTED_MODULE_2__["EwoService"], src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EwoListComponent);
    return EwoListComponent;
}());



/***/ }),

/***/ "./src/app/EWo/update-ewo/update-ewo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/EWo/update-ewo/update-ewo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mb-5\">Update EWO</h2>\r\n\r\n<app-detail-ewo></app-detail-ewo>\r\n"

/***/ }),

/***/ "./src/app/EWo/update-ewo/update-ewo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/EWo/update-ewo/update-ewo.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VXby91cGRhdGUtZXdvL3VwZGF0ZS1ld28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/EWo/update-ewo/update-ewo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/EWo/update-ewo/update-ewo.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateEwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEwoComponent", function() { return UpdateEwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_ewo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/ewo.service */ "./src/app/service/ewo.service.ts");




var UpdateEwoComponent = /** @class */ (function () {
    function UpdateEwoComponent(ewoService, route) {
        this.ewoService = ewoService;
        this.isLoading = false;
        this.sourced = false;
        this.timestamp = this.currentDate();
    }
    UpdateEwoComponent.prototype.ngOnInit = function () { };
    UpdateEwoComponent.prototype.currentDate = function () {
        var currentDate = new Date();
        return currentDate.toISOString().substring(0, 10);
    };
    UpdateEwoComponent.prototype.onUpdateEwo = function () {
        this.ewoService.updateEwo(this.ewoId, this.ewoUpdateForm.value.starter, this.ewoUpdateForm.value.startDate, this.ewoUpdateForm.value.team, this.ewoUpdateForm.value.reqtype, this.ewoUpdateForm.value.partNum, this.ewoUpdateForm.value.priority, this.ewoUpdateForm.value.title, this.ewoUpdateForm.value.descript, this.ewoUpdateForm.value.status, this.ewoUpdateForm.value.eoq, this.ewoUpdateForm.value.asq, this.ewoUpdateForm.value.moq, this.ewoUpdateForm.value.oqp, this.ewoUpdateForm.value.vendnum, this.ewoUpdateForm.value.leadtime, this.ewoUpdateForm.value.assignment, this.ewoUpdateForm.value.lastupdated, this.ewoUpdateForm.value.timestamp, this.ewoUpdateForm.value.completed, this.ewoUpdateForm.value.hours);
    };
    UpdateEwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-update-ewo',
            template: __webpack_require__(/*! ./update-ewo.component.html */ "./src/app/EWo/update-ewo/update-ewo.component.html"),
            styles: [__webpack_require__(/*! ./update-ewo.component.scss */ "./src/app/EWo/update-ewo/update-ewo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_ewo_service__WEBPACK_IMPORTED_MODULE_3__["EwoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UpdateEwoComponent);
    return UpdateEwoComponent;
}());



/***/ }),

/***/ "./src/app/_helpers/confirm-equal.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/_helpers/confirm-equal.directive.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmEqualDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualDirective", function() { return ConfirmEqualDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConfirmEqualDirective = /** @class */ (function () {
    function ConfirmEqualDirective() {
    }
    ConfirmEqualDirective_1 = ConfirmEqualDirective;
    ConfirmEqualDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqual);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    var ConfirmEqualDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmEqualDirective.prototype, "appConfirmEqual", void 0);
    ConfirmEqualDirective = ConfirmEqualDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appConfirmEqual]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualDirective_1,
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmEqualDirective);
    return ConfirmEqualDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/mime-type.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/mime-type.validator.ts ***!
  \*************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (!control.value || typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            // const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = true;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                case '25504446':
                    isValid = true; // pdf
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/_helpers/select-req-valid.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/_helpers/select-req-valid.directive.ts ***!
  \********************************************************/
/*! exports provided: SelectReqValidDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectReqValidDirective", function() { return SelectReqValidDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SelectReqValidDirective = /** @class */ (function () {
    function SelectReqValidDirective() {
    }
    SelectReqValidDirective_1 = SelectReqValidDirective;
    SelectReqValidDirective.prototype.validate = function (control) {
        return control.value === '-1' ? { 'defaultSelected': true } : null;
    };
    var SelectReqValidDirective_1;
    SelectReqValidDirective = SelectReqValidDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: '[appSelectReqValid]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: SelectReqValidDirective_1,
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectReqValidDirective);
    return SelectReqValidDirective;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Admin</h2>\n<a class=\"btn btn-outline-success\" [routerLink]=\"['/usercreate']\">Add User</a>\n<app-user-list></app-user-list>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _EWo_ewo_list_ewo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EWo/ewo-list/ewo-list.component */ "./src/app/EWo/ewo-list/ewo-list.component.ts");
/* harmony import */ var _EWo_create_ewo_create_ewo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EWo/create-ewo/create-ewo.component */ "./src/app/EWo/create-ewo/create-ewo.component.ts");
/* harmony import */ var _EWo_detail_ewo_detail_ewo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EWo/detail-ewo/detail-ewo.component */ "./src/app/EWo/detail-ewo/detail-ewo.component.ts");
/* harmony import */ var _EWo_update_ewo_update_ewo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EWo/update-ewo/update-ewo.component */ "./src/app/EWo/update-ewo/update-ewo.component.ts");
/* harmony import */ var _engineer_engineer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engineer/engineer.component */ "./src/app/engineer/engineer.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");




//









var routes = [
    { path: '', redirectTo: 'ewos', pathMatch: 'full' },
    { path: 'ewos', component: _EWo_ewo_list_ewo_list_component__WEBPACK_IMPORTED_MODULE_4__["EwoListComponent"] },
    { path: 'create', component: _EWo_create_ewo_create_ewo_component__WEBPACK_IMPORTED_MODULE_5__["CreateEwoComponent"] },
    // { path: 'login', component: LoginComponent },
    { path: 'detail/:ewoId', component: _EWo_detail_ewo_detail_ewo_component__WEBPACK_IMPORTED_MODULE_6__["DetailEwoComponent"] },
    { path: 'update/:ewoId', component: _EWo_update_ewo_update_ewo_component__WEBPACK_IMPORTED_MODULE_7__["UpdateEwoComponent"] },
    { path: 'users', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_10__["UserListComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    {
        path: 'usercreate',
        component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"],
        canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    { path: 'useredit/:userId', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"] },
    { path: 'eng', component: _engineer_engineer_component__WEBPACK_IMPORTED_MODULE_8__["EngineerComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'oops', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { path: '**', redirectTo: 'oops', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n  <app-nav></app-nav>\r\n</div>\r\n\r\n<div class=\"container mb-3\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'ewo-app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.autoAuthUser();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/nav/nav.component */ "./src/app/common/nav/nav.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _EWo_ewo_list_ewo_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EWo/ewo-list/ewo-list.component */ "./src/app/EWo/ewo-list/ewo-list.component.ts");
/* harmony import */ var _EWo_create_ewo_create_ewo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EWo/create-ewo/create-ewo.component */ "./src/app/EWo/create-ewo/create-ewo.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _engineer_engineer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./engineer/engineer.component */ "./src/app/engineer/engineer.component.ts");
/* harmony import */ var _EWo_update_ewo_update_ewo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EWo/update-ewo/update-ewo.component */ "./src/app/EWo/update-ewo/update-ewo.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_confirm_equal_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_helpers/confirm-equal.directive */ "./src/app/_helpers/confirm-equal.directive.ts");
/* harmony import */ var _helpers_select_req_valid_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_helpers/select-req-valid.directive */ "./src/app/_helpers/select-req-valid.directive.ts");
/* harmony import */ var _EWo_detail_ewo_detail_ewo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./EWo/detail-ewo/detail-ewo.component */ "./src/app/EWo/detail-ewo/detail-ewo.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");




 // template drive forms


// common






// pages






// custom validators




// import { AuthInterceptor } from './common/admin/auth-interceptor';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _common_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _EWo_ewo_list_ewo_list_component__WEBPACK_IMPORTED_MODULE_9__["EwoListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _EWo_create_ewo_create_ewo_component__WEBPACK_IMPORTED_MODULE_10__["CreateEwoComponent"],
                _engineer_engineer_component__WEBPACK_IMPORTED_MODULE_12__["EngineerComponent"],
                _helpers_confirm_equal_directive__WEBPACK_IMPORTED_MODULE_18__["ConfirmEqualDirective"],
                _helpers_select_req_valid_directive__WEBPACK_IMPORTED_MODULE_19__["SelectReqValidDirective"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_14__["CreateUserComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"],
                _EWo_update_ewo_update_ewo_component__WEBPACK_IMPORTED_MODULE_13__["UpdateEwoComponent"],
                _EWo_detail_ewo_detail_ewo_component__WEBPACK_IMPORTED_MODULE_20__["DetailEwoComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [
            // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"pl-5\">\r\n<p><span class=\"pb-5\">This App is made with a</span>\r\n <img src=\"https://cdn-images-1.medium.com/max/1037/1*kkXbE9GlS73U7x1iXHP_vQ.png\" alt=\"mean\" class=\"stack\"> stack and a\r\n  lot of\r\n  <i class=\"fas fa-heart  align-middle red\"></i> from Jay Rich</p>\r\n  <!-- <ul class=\"list-inline \"> -->\r\n    <!-- <li class=\"list-inline-item\">\r\n      <i class=\"fab fa-html5 fa-2x align-middle orange \"></i>\r\n    </li>\r\n    <li class=\"list-inline-item\">\r\n      <i class=\"fab fa-sass fa-2x align-middle pink\"></i>\r\n    </li>\r\n    <li class=\"list-inline-item\">\r\n      <i class=\"fab fa-node-js fa-2x align-middle green\"></i>\r\n    </li>\r\n    <li class=\"list-inline-item\">\r\n      <i class=\"fab fa-angular fa-2x align-middle blue\"></i>\r\n    </li>\r\n    <li class=\"list-inline-item\">\r\n    </li>\r\n</ul> -->\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/common/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"container-fluid mt-3 d-flex\">\r\n\r\n  <h1 class=\"flex-fill\">EWO <small class=\"gray\"> Engineering Work Order</small></h1>\r\n\r\n  <div class=\"float-lg-right\">\r\n    <img src=\"assets/images/NewtonLogo_OrangeBlack.png\" class=\"img-fluid\" alt=\"newton logo\">\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/common/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mt-3 bg\">\r\n  <div class=\"flex-fill\">\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['ewos']\" routerLinkActive=\"router-link-active\">EWOs</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['create']\" routerLinkActive=\"router-link-active\">New EWOs</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['eng']\" routerLinkActive=\"router-link-active\">Edit EWO EWOs</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"flex\">\r\n    <!-- if logged out -->\r\n    <div *ngIf=\"!userIsAuthenticated\">\r\n      <a class=\"btn btn-outline-dark btn-sm float-right\" [routerLink]=\"['/eng']\">Engineering Log In</a>\r\n    </div>\r\n    <!-- if logged in -->\r\n    <div *ngIf=\"userIsAuthenticated\">\r\n      <button class=\"btn btn-outline-dark btn-sm float-right\" (click)=\"onLogout()\">Engineering Log Out</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/common/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/common/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(userService) {
        this.userService = userService;
        this.userIsAuthenticated = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.userService.getIsAuth();
        this.authListenerSubs = this.userService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    NavComponent.prototype.onLogout = function () {
        this.userService.logout();
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/common/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/common/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{ mode | titlecase }} User</h4>\r\n\r\n<!-- loading spinner -->\r\n<div class=\"spinner-border text-info mx-auto\" role=\"status\" *ngIf=\"isLoading\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n\r\n\r\n<form [formGroup]=\"userForm\" (ngSubmit)=\"onSaveUser()\" [formGroup]=\"userForm\" *ngIf=\"!isLoading\">\r\n\r\n  <!-- uname -->\r\n  <div class=\"form-group\">\r\n    <label for=\"uname\">User ID: </label>\r\n    <input type=\"email\" formControlName=\"uname\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': userForm.get('uname').invalid && userForm.get('uname').touched }\"\r\n      name=\"uname\" placeholder=\"user ID is your Newton email address\" />\r\n    <div *ngIf=\"userForm.get('uname').touched && userForm.get('uname').invalid\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"userForm.get('uname').errors\">Email is required</div>\r\n      <div *ngIf=\"userForm.get('uname').errors\">Email must be a valid email address</div>\r\n    </div>\r\n  </div>\r\n  <!-- PW1 -->\r\n  <div class=\"form-group\">\r\n    <label for=\"pw\">Password: </label>\r\n    <input class=\"form-control mr-3\" type=\"text\" formControlName=\"pw\" name=\"pw\" id=\"pw\" placeholder=\"password\"\r\n      [ngClass]=\"{ 'is-invalid': userForm.get('pw').invalid && userForm.get('pw').touched   }\" />\r\n    <div *ngIf=\"userForm.get('pw').touched && userForm.get('pw').errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"userForm.get('pw').errors\">Password is required</div>\r\n      <div *ngIf=\"userForm.get('pw').errors\">Password must be at least 6 characters</div>\r\n    </div>\r\n  </div>\r\n  <!-- PW2 -->\r\n  <div class=\"form-group\">\r\n    <label for=\"pwConfirm\"> Confirm Password: </label>\r\n    <input class=\"form-control mr-3\" type=\"text\" class=\"form-control mr-3\" formControlName=\"pwConfirm\" appConfirmEqual=\"pw\"\r\n      name=\"pwConfirm\" id=\"pwConfirm\" placeholder=\"match password\" [ngClass]=\"{ 'is-invalid': userForm.get('pwConfirm').invalid && userForm.get('pwConfirm').touched   }\" />\r\n    <div *ngIf=\"userForm.get('pwConfirm').touched && userForm.get('pwConfirm').invalid\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"userForm.get('pw').errors\">Confirm must Match</div>\r\n      <!-- <div *ngIf=\"userForm.get('pw').errors?.notEqual\">Passwords must match</div> -->\r\n    </div>\r\n  </div>\r\n  <!-- permissions -->\r\n  <div class=\"form-group\">\r\n    <label for=\"\">Permissions: </label>\r\n    <!-- eng -->\r\n    <div class=\"form-check form-check-inline ml-3\">\r\n      <input class=\"form-check-input\" formControlName=\"eng\" name=\"eng\" type=\"checkbox\" id=\"eng\" required />\r\n      <label class=\"form-check-label\" for=\"eng\"> Engineer </label>\r\n    </div>\r\n    <!-- admin -->\r\n    <div class=\"form-check form-check-inline ml-3\">\r\n      <input class=\"form-check-input\" formControlName=\"admin\" name=\"admin\" type=\"checkbox\" id=\"admin\" />\r\n      <label class=\"form-check-label\" for=\"admin\"> Admin </label>\r\n    </div>\r\n    <!-- active -->\r\n    <div class=\"form-check form-check-inline ml-3\">\r\n      <input class=\"form-check-input\" formControlName=\"active\" name=\"active\" type=\"checkbox\" id=\"admin\" />\r\n      <label class=\"form-check-label\" for=\"active\"> Active User</label>\r\n    </div>\r\n    <!-- buttons -->\r\n    <div class=\"form-group\">\r\n      <div class=\"btn-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">{{btnTxt}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/create-user/create-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.enteredTitle = '';
        this.enteredDescript = '';
        this.isLoading = false;
        this.mode = 'create';
        this.btnTxt = 'Add User';
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            uname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            }),
            pw: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
            }),
            pwConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
            }),
            eng: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            admin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('userId')) {
                _this.mode = 'edit';
                _this.btnTxt = 'Update User';
                _this.userId = paramMap.get('userId');
                // console.log('User ID: ', this.userId);
                _this.isLoading = true;
                _this.userService.getUser(_this.userId).subscribe(function (userData) {
                    _this.isLoading = false;
                    _this.user = {
                        _id: userData._id,
                        uname: userData.uname,
                        pw: userData.pw,
                        eng: userData.eng,
                        admin: userData.admin,
                        active: userData.active
                    };
                    // console.log('This User: ', this.user);
                    _this.userForm.setValue({
                        uname: _this.user.uname,
                        pw: _this.user.pw,
                        pwConfirm: _this.user.pw,
                        eng: _this.user.eng,
                        admin: _this.user.admin,
                        active: _this.user.active
                    });
                });
            }
            else {
                _this.mode = 'create';
                _this.btnTxt = 'Add User';
                _this.userId = null;
            }
        });
    };
    CreateUserComponent.prototype.onSaveUser = function () {
        if (this.userForm.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.btnTxt = 'Create User';
            this.userService.addUser(this.userForm.value.uname, this.userForm.value.pw, this.userForm.value.eng, this.userForm.value.admin, this.userForm.value.active); // check to see if status needs adding
        }
        else {
            this.userService.updateUser(this.userId, this.userForm.value.uname, this.userForm.value.pw, this.userForm.value.eng, this.userForm.value.admin, this.userForm.value.active);
        }
        this.userForm.reset();
    };
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.scss */ "./src/app/create-user/create-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/engineer/engineer.component.html":
/*!**************************************************!*\
  !*** ./src/app/engineer/engineer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"mb-5\"> Engineering View</h4>\r\n\r\n<div *ngIf=\"!userIsAuthenticated\">\r\n  <app-login></app-login>\r\n</div>\r\n\r\n<div *ngIf=\"userIsAuthenticated\">\r\n  <h5>Active EWO List</h5>\r\n  <!-- loading spinner -->\r\n  <div class=\"spinner-border text-info mx-auto\" role=\"status\" *ngIf=\"isLoading\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n\r\n  <!-- show if not loading and greater than 0 -->\r\n  <div *ngIf=\"ewos.length > 0 && !isLoading\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <!-- <th scope=\"col\">EWO #</th> -->\r\n          <!-- <th scope=\"col\">Engineer</th> -->\r\n          <th scope=\"col\">Start Date</th>\r\n          <th scope=\"col\">Initiator</th>\r\n          <th scope=\"col\">Title</th>\r\n          <th scope=\"col\">Description</th>\r\n          <th scope=\"col\">Status</th>\r\n          <th scope=\"col\">Update</th>\r\n          <th scope=\"col\">Delete</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let ewo of ewos\">\r\n          <td>{{ewo.startDate}}</td>\r\n          <td>{{ewo.starter}}</td>\r\n          <td>{{ewo.title}}</td>\r\n          <td>{{ewo.descript}}</td>\r\n          <td>{{ewo.status}}</td>\r\n          <td>\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['/update', ewo._id]\">\r\n              <i class=\"far fa-edit\"></i>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-danger\" (click)=\"onDeleteEwo(ewo._id)\">\r\n              <i class=\"far fa-trash-alt\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"ewos.length <= 0\">\r\n    <p class=\"text-center\"><strong class=\"text-danger\">No Active EWOs</strong></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/engineer/engineer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/engineer/engineer.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZWVyL2VuZ2luZWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/engineer/engineer.component.ts":
/*!************************************************!*\
  !*** ./src/app/engineer/engineer.component.ts ***!
  \************************************************/
/*! exports provided: EngineerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineerComponent", function() { return EngineerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_ewo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/ewo.service */ "./src/app/service/ewo.service.ts");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");





var EngineerComponent = /** @class */ (function () {
    function EngineerComponent(ewoService, userService, route) {
        this.ewoService = ewoService;
        this.userService = userService;
        this.route = route;
        this.isLoading = false;
        this.ewos = [];
        this.userIsAuthenticated = false;
    }
    EngineerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.userService.getIsAuth();
        this.authListenerSubs = this.userService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
        this.isLoading = true;
        this.ewoService.getEwoList();
        this.ewosSub = this.ewoService
            .getEwoUpdatedListener()
            .subscribe(function (ewos) {
            _this.isLoading = false;
            _this.ewos = ewos;
        });
    };
    EngineerComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    EngineerComponent.prototype.onDeleteEwo = function (ewoId) {
        this.ewoService.deleteEwo(ewoId);
    };
    EngineerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-engineer',
            template: __webpack_require__(/*! ./engineer.component.html */ "./src/app/engineer/engineer.component.html"),
            styles: [__webpack_require__(/*! ./engineer.component.scss */ "./src/app/engineer/engineer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ewo_service__WEBPACK_IMPORTED_MODULE_3__["EwoService"],
            src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EngineerComponent);
    return EngineerComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Log in to continue</h3>\r\n<form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\r\n  <div class=\"form-group\">\r\n    <label for=\"uname\">email address:</label>\r\n    <input type=\"email\" class=\"form-control\" name=\"uname\" ngModel #unameInput=\"ngModel\" required email placeholder=\"Enter uname\">\r\n    <!-- validation -->\r\n    <div class=\"red pl-5\" *ngIf=\"unameInput.invalid && unameInput.touched\">\r\n      a valid email must be entered\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleInputPassword1\">Password:</label>\r\n    <input type=\"password\" class=\"form-control\" name=\"pw\" ngModel #pwInput=\"ngModel\" placeholder=\"Password\" required>\r\n    <!-- validation -->\r\n    <div class=\"red pl-5\" *ngIf=\"pwInput.invalid && pwInput.touched\">\r\n      Please enter a valid username or password\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary mt-5\">Submit</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "./src/app/service/user.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.userService.login(form.value.uname, form.value.pw);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Page Not found</h4>\r\n<div class=\"mx-auto\">\r\n<img src=\"assets/images/404error.jpg\" class=\"img-fluid \" alt=\"404\"><br>\r\n<button class=\"btn btn-danger\">Back to EWOs</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.userService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/eng']);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/ewo.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/ewo.service.ts ***!
  \****************************************/
/*! exports provided: EwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EwoService", function() { return EwoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var EwoService = /** @class */ (function () {
    function EwoService(http, router) {
        this.http = http;
        this.router = router;
        this.ewos = [];
        this.ewosUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    EwoService.prototype.getEwo = function (id) {
        console.log('%c F.E. ewo.service.getEwo()  param ID: ', 'color:green;', id);
        // return { ...this.ewos.find(e => e._id === id) };
        return this.http.get('http://localhost:3000/api/ewos/' + id);
    };
    EwoService.prototype.getEwoUpdatedListener = function () {
        return this.ewosUpdated.asObservable();
    };
    EwoService.prototype.addEwo = function (startDate, starter, team, reqtype, partNum, priority, title, descript, eoq, asq, moq, oqp, vendnum, leadtime, assignment, lastupdated, timestamp, completed, hours, image) {
        // const ewo: Ewo = {
        //   startDate: startDate,
        //   starter: starter,
        //   team: team,
        //   reqtype: reqtype,
        //   partNum: partNum,
        //   priority: priority,
        //   title: title,
        //   descript: descript,
        //   eoq: eoq,
        //   asq: asq,
        //   moq: moq,
        //   oqp: oqp,
        //   vendnum: vendnum,
        //   leadtime: leadtime,
        //   _id: null,
        //   status: 'Unassigned',
        //   assignment: 'No One',
        //   lastupdated: 'TBD',
        //   timestamp: 'TBD',
        //   completed: 'TBD',
        //   hours: 'TBD',
        var _this = this;
        // };
        var ewoFormData = new FormData();
        ewoFormData.append('startDate', startDate);
        ewoFormData.append('starter', starter);
        ewoFormData.append('team', team);
        ewoFormData.append('reqtype', reqtype);
        ewoFormData.append('partNum', partNum);
        ewoFormData.append('priority', priority);
        ewoFormData.append('title', title);
        ewoFormData.append('descript', descript);
        ewoFormData.append('eoq', eoq);
        ewoFormData.append('asq', asq);
        ewoFormData.append('moq', moq);
        ewoFormData.append('oqp', oqp);
        ewoFormData.append('vendnum', vendnum);
        ewoFormData.append('leadtime', leadtime);
        ewoFormData.append('status', 'Unassigned');
        ewoFormData.append('assignment', 'No One');
        ewoFormData.append('lastupdated', 'TBD');
        ewoFormData.append('timestamp', 'TBD');
        ewoFormData.append('completed', 'TBD');
        ewoFormData.append('hours', 'TBD');
        ewoFormData.append('image', image, title);
        this.http
            .post('http://localhost:3000/api/ewos', ewoFormData)
            .subscribe(function (responseData) {
            // console.log(responseData.message);
            var ewo = {
                _id: responseData.ewo._id,
                startDate: startDate,
                starter: starter,
                team: team,
                reqtype: reqtype,
                partNum: partNum,
                priority: priority,
                title: title,
                descript: descript,
                eoq: eoq,
                asq: asq,
                moq: moq,
                oqp: oqp,
                vendnum: vendnum,
                leadtime: leadtime,
                status: status,
                assignment: assignment,
                lastupdated: lastupdated,
                timestamp: timestamp,
                completed: completed,
                hours: hours,
                imagePath: responseData.ewo.imagePath
            };
            // const id = responseData.ewoId;
            // ewo._id = id;
            _this.ewos.push(ewo);
            // to refresh list
            _this.ewosUpdated.next(_this.ewos.slice());
            console.log('sent from addEWO: ', _this.ewos);
            _this.router.navigate(['/ewos']);
        });
    };
    EwoService.prototype.getEwoList = function () {
        var _this = this;
        this.http
            .get('http://localhost:3000/api/ewos')
            // .pipe(
            //   map(ewoData => {
            //     return ewoData.ewos.map(ewo => {
            //       return {
            //         title: ewo.title,
            //         discript: ewo.descript,
            //         id: ewo._id
            //       };
            //     });
            //   })
            // )
            .subscribe(function (mapedEwos) {
            _this.ewos = mapedEwos.ewos;
            // console.log('FE getEWO Sub', this.ewos);
            _this.ewosUpdated.next(_this.ewos.slice());
        });
    };
    EwoService.prototype.updateEwo = function (_id, startDate, starter, team, reqtype, partNum, priority, title, descript, status, eoq, asq, moq, oqp, vendnum, leadtime, assignment, lastupdated, timestamp, completed, hours) {
        var _this = this;
        var ewo = {
            _id: _id,
            startDate: startDate,
            starter: starter,
            team: team,
            reqtype: reqtype,
            partNum: partNum,
            priority: priority,
            title: title,
            descript: descript,
            status: status,
            eoq: eoq,
            asq: asq,
            moq: moq,
            oqp: oqp,
            vendnum: vendnum,
            leadtime: leadtime,
            assignment: assignment,
            lastupdated: lastupdated,
            timestamp: timestamp,
            completed: completed,
            hours: hours,
            imagePath: null
        };
        this.http
            .put('http://localhost:3000/api/ewos/' + _id, ewo)
            .subscribe(function (response) {
            var updatedEwos = _this.ewos.slice();
            var oldEwosIndex = updatedEwos.findIndex(function (e) { return e._id === ewo._id; });
            updatedEwos[oldEwosIndex] = ewo;
            _this.ewos = updatedEwos;
            console.log('updated FE updatedEWOS: ', _this.ewos);
            _this.ewosUpdated.next(_this.ewos.slice());
            _this.router.navigate(['/ewos']);
        });
    };
    // delete EWO
    EwoService.prototype.deleteEwo = function (ewoId) {
        var _this = this;
        this.http
            .delete('http://localhost:3000/api/ewos/' + ewoId)
            .subscribe(function () {
            console.log('Deleted EWO: ' + ewoId);
            var updatedEwos = _this.ewos.filter(function (ewo) { return ewo._id !== ewoId; });
            _this.ewos = updatedEwos;
            _this.ewosUpdated.next(_this.ewos.slice());
        });
    };
    EwoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EwoService);
    return EwoService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.users = [];
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    UserService.prototype.getToken = function () {
        return this.token;
    };
    UserService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    UserService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    UserService.prototype.getUserList = function () {
        var _this = this;
        this.http
            .get('http://localhost:3000/api/users')
            .subscribe(function (mapedUsers) {
            _this.users = mapedUsers.users;
            _this.usersUpdated.next(_this.users.slice());
        });
    };
    // get user by ID
    UserService.prototype.getUser = function (id) {
        // console.log(id);
        // return { ...this.ewos.find(e => e._id === id) };
        return this.http.get('http://localhost:3000/api/users/' + id);
    };
    // update Users observable
    UserService.prototype.getUserUpdatedListener = function () {
        return this.usersUpdated.asObservable();
    };
    UserService.prototype.addUser = function (uname, pw, admin, eng, active) {
        var _this = this;
        var user = {
            uname: uname,
            pw: pw,
            eng: eng,
            admin: admin,
            active: active,
            _id: null
        };
        this.http
            .post('http://localhost:3000/api/users', user)
            .subscribe(function (responseData) {
            // console.log('user resData: ', responseData.message);
            var id = responseData.userId;
            user._id = id;
            _this.users.push(user);
            _this.usersUpdated.next(_this.users.slice());
            _this.router.navigate(['/users']);
        });
    };
    UserService.prototype.updateUser = function (_id, uname, pw, eng, admin, active) {
        var _this = this;
        var user = {
            _id: _id,
            uname: uname,
            pw: pw,
            eng: eng,
            admin: admin,
            active: active
        };
        this.http
            .put('http://localhost:3000/api/users/' + _id, user)
            .subscribe(function (response) {
            var updatedUsers = _this.users.slice();
            var oldUserIndex = updatedUsers.findIndex(function (u) { return u._id === user._id; });
            updatedUsers[oldUserIndex] = user;
            _this.users = updatedUsers;
            _this.usersUpdated.next(_this.users.slice());
            _this.router.navigate(['/users']);
        });
    };
    // delete user
    UserService.prototype.deleteUser = function (userId) {
        var _this = this;
        this.http
            .delete('http://localhost:3000/api/users/' + userId)
            .subscribe(function () {
            // console.log('Deleted EWO: ' + ewoId);
            var updatedUsers = _this.users.filter(function (user) { return user._id !== userId; });
            _this.users = updatedUsers;
            _this.usersUpdated.next(_this.users.slice());
        });
    };
    UserService.prototype.login = function (uname, pw) {
        var _this = this;
        var userData = { uname: uname, pw: pw };
        this.http
            .post('http://localhost:3000/api/login/', userData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                // console.log('XP:', expiresInDuration);
                _this.setAuthTime(expiresInDuration);
                _this.isAuthenticated = true;
                _this.authStatusListener.next(true);
                var now = new Date();
                var xpireDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log('XPIRE:', xpireDate);
                _this.saveAuthData(token, xpireDate);
                _this.router.navigate(['/eng']);
            }
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    };
    UserService.prototype.autoAuthUser = function () {
        var authInfo = this.getAuthData();
        if (!authInfo) {
            return;
        }
        var now = new Date();
        var expiresIn = authInfo.xpire.getTime() - now.getTime();
        // console.log('AUTHINFO ', authInfo, 'XP: ', expiresIn);
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.isAuthenticated = true;
            this.setAuthTime(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    UserService.prototype.setAuthTime = function (duration) {
        var _this = this;
        console.log('Seting Timer: ' + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    UserService.prototype.saveAuthData = function (token, experationDate) {
        localStorage.setItem('token', token);
        // localStorage.setItem('admin', admin);
        // localStorage.setItem('active', active);
        localStorage.setItem('xpire', experationDate.toISOString());
    };
    UserService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('xpire');
        // localStorage.setItem('admin', admin);
        // localStorage.setItem('active', active);
    };
    UserService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var xpire = localStorage.getItem('xpire');
        if (!token || !xpire) {
            return;
        }
        return {
            token: token,
            xpire: new Date(xpire)
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>User List</h4>\r\n\r\n<!-- loading spinner -->\r\n<div class=\"spinner-border text-info mx-auto\" role=\"status\" *ngIf=\"isLoading\">\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n\r\n<!-- USER table -->\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">User</th>\r\n      <th scope=\"col\">PassWord</th>\r\n      <th scope=\"col\">Engineer</th>\r\n      <th scope=\"col\">Admin</th>\r\n      <th scope=\"col\">Active</th>\r\n      <th scope=\"col\">Edit</th>\r\n      <th scope=\"col\">Delete</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{ user.uname }}</td>\r\n      <td>{{ user.pw }}</td>\r\n      <td>{{ user.eng }}</td>\r\n      <td>{{ user.admin }}</td>\r\n      <td>{{ user.active }}</td>\r\n      <td>\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/useredit', user._id]\">\r\n          <i class=\"far fa-edit\"></i>\r\n        </a>\r\n      </td>\r\n      <td>\r\n        <button class=\"btn btn-danger\" (click)=\"onDeleteUser(user._id)\">\r\n          <i class=\"fas fa-user-minus\"></i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.isLoading = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.getUserList();
        this.usersSub = this.userService
            .getUserUpdatedListener()
            .subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
        });
    };
    UserListComponent.prototype.onDeleteUser = function (userId) {
        this.userService.deleteUser(userId);
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.usersSub.unsubscribe();
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sites\ewo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map