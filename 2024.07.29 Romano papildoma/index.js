// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
//        6.2. Pakeičia NVO statusą į false.
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.
//        9.2. Veiklos rūšį iš veiklų masyvo.

// // 1.
// const company = new Object();
// console.log(company);
// // 2.
// company["company name"] = "TechCompany";
// company.opened = 2000;
// company.companyCode = 123456789;
// company.employees = 1000;
// company.ceo = "John Doe";
// company.nvo = false;
// company.workingLocations = ["Germany", "Spain", "Italy", "France"];
// company.activityAreas = ["SoftwareDev", "HardwareDev"];
// company.contacts = {
//   phone: "+37061234567",
//   email: "tc@gmail.com",
// };
// company.contacts.address = {
//   country: "Germany",
//   city: "Munich",
//   street: "Hauptstrasse",
//   apartment: 15,
// };
// console.log(company);

// // 5.
// function addressString(address) {
//   return `${address.street} ${address.apartment}, ${address.city}, ${address.country}.`;
// }
// console.log(addressString(company.contacts.address));

// // 6.
// function changeNVOStatusTrue(company) {
//   if (!company.nvo) {
//     company.nvo = true;
//   } else {
//     console.log("NVO status already true");
//   }
// }
// changeNVOStatusTrue(company);
// console.log(company);

// function changeNVOStatusFalse(company) {
//   if (company.nvo) {
//     company.nvo = false;
//   } else {
//     console.log("NVO status already false");
//   }
// }
// changeNVOStatusFalse(company);
// console.log(company);

// function changeNVOStatus(company) {
//   company.nvo = !company.nvo;
// }
// changeNVOStatus(company);
// console.log(company);

// // 7.
// function workingLocationsString(company) {
//   return company.workingLocations.join(", ");
// }
// console.log(workingLocationsString(company));

// function activityAreasString(company) {
//   return company.activityAreas.join(", ");
// }
// console.log(activityAreasString(company));

// // 8.
// function addWorkingLocation(company, location) {
//   company.workingLocations.push(location);
// }
// addWorkingLocation(company, "UK");
// console.log(company);

// function addActivityArea(company, area) {
//   company.activityAreas.push(area);
// }
// addActivityArea(company, "AI Dev");
// console.log(company);

// // 9.

// function removeWorkingLocation(company, location) {
//   company.workingLocations = company.workingLocations.filter((loc) => loc !== location);
// }
// removeWorkingLocation(company, "Germany");
// console.log(company);

// function removeActivityArea(company, area) {
//   company.activityAreas = company.activityAreas.filter((ar) => ar !== area);
// }
// removeActivityArea(company, "AI Dev");
// console.log(company);

// const company = {
//   "company name": "TechCompany",
//   opened: 2000,
//   companyCode: 123456789,
//   employees: 1000,
//   ceo: "John Doe",
//   nvo: false,
//   workingLocations: ["Germany", "Spain", "Italy", "France"],
//   activityAreas: ["SoftwareDev", "HardwareDev"],
//   contacts: {
//     phone: "+37061234567",
//     email: "tc@gmail.com",
//     address: {
//       country: "Germany",
//       city: "Munich",
//       street: "Hauptstrasse",
//       apartment: 15,
//     },
//   },
//   addressString() {
//     const address = this.contacts.address;
//     return `${address.street} ${address.apartment}, ${address.city}, ${address.country}.`;
//   },
//   changeNVOStatusTrue() {
//     if (!this.nvo) {
//       this.nvo = true;
//     } else {
//       console.log("NVO status already true");
//     }
//   },
//   changeNVOStatusFalse() {
//     if (this.nvo) {
//       this.nvo = false;
//     } else {
//       console.log("NVO status already false");
//     }
//   },
//   changeNVOStatus() {
//     this.nvo = !this.nvo;
//   },
//   workingLocationsString() {
//     return this.workingLocations.join(", ");
//   },
//   activityAreasString() {
//     return this.activityAreas.join(", ");
//   },
//   addWorkingLocation(location) {
//     this.workingLocations.push(location);
//   },
//   addActivityArea(area) {
//     this.activityAreas.push(area);
//   },
//   removeWorkingLocation(location) {
//     this.workingLocations = this.workingLocations.filter((loc) => loc !== location);
//   },
//   removeActivityArea(area) {
//     this.activityAreas = this.activityAreas.filter((ar) => ar !== area);
//   },
// };

// console.log(company);

// console.log(company.addressString());

// company.changeNVOStatusTrue();
// console.log(company);

// company.changeNVOStatusFalse();
// console.log(company);

// company.changeNVOStatus();
// console.log(company);

// console.log(company.workingLocationsString());
// console.log(company.activityAreasString());

// company.addWorkingLocation("UK");
// console.log(company);

// company.addActivityArea("AI Dev");
// console.log(company);

// company.removeWorkingLocation("Germany");
// console.log(company);

// company.removeActivityArea("AI Dev");
// console.log(company);

1;
const company1 = {};

company1["company name"] = "TechCompany";

company1.opened = 2000;

company1.companyCode = 123456789;

company1.employees = 1000;

company1.ceo = "John Doe";

company1.nvo = false;

company1.workingLocations = ["Germany", "Spain", "Italy", "France"];

company1.activityAreas = ["SoftwareDev", "HardwareDev"];

company1.contacts = {};

company1.contacts.phone = "+37061234567";

company1.contacts.email = `info@techcompany.com`;

company1.contacts.address = {};

company1.contacts.address.country = "Lithuania";

company1.contacts.address.city = "Vilnius";

company1.contacts.address.street = "Gedimino pr.";

company1.contacts.address.apartment = 15;

console.log(company1);

// 5.

company1.addressString = function () {
  let { street, apartment, city, country } = this.contacts.address;
  return `${street} ${apartment}, ${city}, ${country}.`;
};

console.log(company1.addressString());

// 6.

company1.setNVO = function () {
  this.nvo = true;
};

company1.setNVO = function () {
  this.nvo = false;
  return this.nvo;
};

company1.changeNVO = function () {
  this.nvo = !this.nvo;
  return this.nvo;
};

console.log(company1.changeNVO());

// 7.

company1.getWorkingLocations = function () {
  const locationStr = this.workingLocations.join(", ");
  const output = `Company is working in ${locationStr}.`;
  return output;
};

console.log(company1.getWorkingLocations());

company1.activityAreasString = function () {
  const areaStr = this.activityAreas.join(", ");
  const output = `Company is working in ${areaStr}.`;
  return output;
};

console.log(company1.activityAreasString());

// 8.

company1.addWorkingLocation = function (location) {
  const { workingLocations } = this;
  workingLocations.push(location);
  return this.workingLocations;
};

console.log(company1.addWorkingLocation("UK"));

company1.addActivityArea = function (area) {
  this.activityAreas.push(area);
  return this.activityAreas;
};

console.log(company1.addActivityArea("AI Dev"));

// 9.

company1.removeWorkingLocation = function (location) {
  const updateWorkingLocations = this.workingLocations.filter((loc) => loc !== location);
  this.workingLocations = updateWorkingLocations;
  return this.workingLocations;
};

console.log(company1.removeWorkingLocation("Germany"));

company1.removeActivityArea = function (area) {
  this.activityAreas = this.activityAreas.filter((ar) => ar !== area);
  return this.activityAreas;
};

console.log(company1.removeActivityArea("AI Dev"));
