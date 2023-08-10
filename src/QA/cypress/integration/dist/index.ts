import { Person } from "../../support/loginSelector";
import personalDetails from "./personDetail";

const person: personalDetails = new personalDetails();
export default class loginFunction {
  private name: Person;
  private email: string;

  /**
   * getName
  
  
  */

  public getName(data: string): string {
    return data;
  }

  public visitMainUrl(data: string): void {
    if (data === "prod") {
      cy.visit(Cypress.env(data));
    } else {
      cy.visit(Cypress.env("web"));
    }
  }

  public bookingDemo(data: Person): void {
    cy.bookDemo(data);
  }
}
