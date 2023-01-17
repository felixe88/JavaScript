class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
console.log(typeof(json));
console.log(json);
let developer = JSON.parse(json)
console.log(developer);