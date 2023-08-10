"use strict";
// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
exports.__esModule = true;
// Import commands.js using ES2015 syntax:
require("./commands");
require("cypress-plugin-api");
// cypress/support/index.ts
Cypress.Commands.add("dataCy", function (value) {
    return cy.get("[data-cy=" + value + "]");
});
Cypress.Commands.add("bookDemo", function (person) {
    cy.fixture("example").then(function (data) {
        cy.get(person.userName).type(data.name);
        cy.get(person.userEmail).type(data.email);
        cy.get(person.userCompany).type(data.company);
        cy.get(person.userPhoneNumber).type(data.phoneNumber);
        cy.get(person.numberOfEmployees).type(data.numberOfEmployees);
        cy.get(person.messageEl).type(data.hear);
        cy.get(person.tellUs).type(data.messageEl);
        cy.get(person.checkBox).click();
    });
});
Cypress.Commands.add("newLetterSubmit", function (email) {
    cy.get("#Footer-Email-23").type(email);
    cy.get(".button-primary-large").click();
});
