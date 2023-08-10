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

// Import commands.js using ES2015 syntax:
import "./commands";
require("cypress-plugin-api");
import { Person, loginPage } from "./loginSelector";
export {};

// cypress/support/index.ts
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      bookDemo(person: Person): Chainable<void>;
      newLetterSubmit(email: string): Chainable<void>;
    }
  }
}

// cypress/support/index.ts
Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add("bookDemo", (person: Person) => {
  cy.fixture("example").then((data) => {
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

Cypress.Commands.add("newLetterSubmit", (email: string) => {
  cy.get("#Footer-Email-23").type(email);
  cy.get(".button-primary-large").click();
});
