// storing all className / id's in a variable

// understanding interface better
// using interface to create data then importing into
export interface Person {
  userName: string;
  success: string;
  userEmail: string;
  userCompany: string;
  userPhoneNumber: string;
  numberOfEmployees: string;
  messageEl: string;
  tellUs: string;
  checkBox: string;
}

export const loginPage: Person = {
  userName: "#Name",
  success: ".success-message-3 > div",
  userEmail: "#Email",
  userCompany: "#Company-name",
  userPhoneNumber: "#Phone-number",
  numberOfEmployees: "#Number-of-employees",
  messageEl: "#How-did-you-hear-about-us",
  tellUs: "#Message---tell-us-what-you-re-looking-for",
  checkBox: "#wf-form-Demo-form > .w-checkbox > .w-checkbox-input",
};

// const personal: Person = {
//   name: "christ",
//   age: 21,
//   userName: "#Name",
// };
