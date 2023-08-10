"use strict";
exports.__esModule = true;
// let registerCypressGrep = require("@cypress/grep");
// registerCypressGrep();
var dist_1 = require("../integration/dist");
var personDetail_1 = require("../integration/dist/personDetail");
var loginSelector_1 = require("../support/loginSelector");
var personDetails = new personDetail_1["default"]();
var login = new dist_1["default"]();
var emailData;
(function (emailData) {
    emailData["real"] = "yanisarnold15@gmail.com";
    emailData["fake"] = "yanisarnold15@tester";
    emailData["empty"] = "hello";
})(emailData || (emailData = {}));
var success = ".success-message-3 > div";
// // different test case to show that the input fields are working as expected
describe("Testing different input fields with different values works", function () {
    beforeEach(function () {
        cy.visit(Cypress.env("PROD"));
    });
    it("@TC001: Verify user are able to enter their email successfully inside the newsletter input field ", function () {
        cy.newLetterSubmit(emailData.real);
        cy.get(success).should("be.visible");
        cy.log(login.getName("christ"));
    });
    it("@TC002: Verify invalid email are rejected and congratulations message should not show ", function () {
        cy.newLetterSubmit(emailData.fake);
        cy.get(success).should("not.be.visible");
    });
    it("@T003: Verify submit button is disabled when entering an invalid email", function () {
        cy.newLetterSubmit(emailData.empty);
        // verifying that the congratulations message is not displaying
        cy.get(success).should("not.be.visible");
    });
});
// Testing book a DEMO
describe("verifying a users can book demo's", function () {
    it("verify a booking can be made successfully", function () {
        // login.visitMainUrl("prod");
        cy.visit(Cypress.env("BOOK"));
        login.bookingDemo(loginSelector_1.loginPage);
    });
});
