"use strict";
exports.__esModule = true;
var personDetail_1 = require("./personDetail");
var person = new personDetail_1["default"]();
var loginFunction = /** @class */ (function () {
    function loginFunction() {
    }
    /**
     * getName
    
    
    */
    loginFunction.prototype.getName = function (data) {
        return data;
    };
    loginFunction.prototype.visitMainUrl = function (data) {
        if (data === "prod") {
            cy.visit(Cypress.env(data));
        }
        else {
            cy.visit(Cypress.env("web"));
        }
    };
    loginFunction.prototype.bookingDemo = function (data) {
        cy.bookDemo(data);
    };
    return loginFunction;
}());
exports["default"] = loginFunction;
