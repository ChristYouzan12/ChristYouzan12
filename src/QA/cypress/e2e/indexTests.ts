// let registerCypressGrep = require("@cypress/grep");
// registerCypressGrep();
import loginFunction from "../integration/dist";
import personalDetails from "../integration/dist/personDetail";
import { loginPage, Person } from "../support/loginSelector";

const personDetails: personalDetails = new personalDetails();
const login: loginFunction = new loginFunction();
enum emailData {
  real = "yanisarnold15@gmail.com",
  fake = "yanisarnold15@tester",
  empty = "hello",
}

const success = ".success-message-3 > div";

// // different test case to show that the input fields are working as expected
describe("Testing different input fields with different values works", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("PROD"));
  });
  it("@TC001: Verify user are able to enter their email successfully inside the newsletter input field ", () => {
    cy.newLetterSubmit(emailData.real);
    cy.get(success).should("be.visible");
    cy.log(login.getName("christ"));
  });
  it("@TC002: Verify invalid email are rejected and congratulations message should not show ", () => {
    cy.newLetterSubmit(emailData.fake);
    cy.get(success).should("not.be.visible");
  });
  it("@T003: Verify submit button is disabled when entering an invalid email", () => {
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
    login.bookingDemo(loginPage);
  });
});
