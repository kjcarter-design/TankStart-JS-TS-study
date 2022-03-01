"use strict";

function registerUser(fName, lName, age) {
  let person = {
    firstName: fName,
    lastName: lName,
    age: age,
    isAdult() {
      return this.age >= 18;
    },
  };

  function adultConfirm() {
    if (person.isAdult === true) {
      console.log("This person is an adult");
    }
  }
  adultConfirm();

  console.log(person.firstName, person.lastName, person.isAdult());
}

registerUser("Kevin", "Carter", 28);
