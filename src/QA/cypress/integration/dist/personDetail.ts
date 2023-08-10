import { Person, loginPage } from "../../support/loginSelector";

export default class personalDetails {
  public getDetail(): Person {
    return loginPage;
  }
}
