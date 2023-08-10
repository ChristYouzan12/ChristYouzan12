"use strict";
exports.__esModule = true;
var loginSelector_1 = require("../../support/loginSelector");
var personalDetails = /** @class */ (function () {
    function personalDetails() {
    }
    personalDetails.prototype.getDetail = function () {
        return loginSelector_1.loginPage;
    };
    return personalDetails;
}());
exports["default"] = personalDetails;
