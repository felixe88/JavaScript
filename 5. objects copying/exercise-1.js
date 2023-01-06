const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2={
  //vuoto
}

for(const key in person1){
  person2[key]=person1[key];
}
person2.firstName="Simon";

// Modify the property `firstName` of the `person2` in "Simon".
console.log(person1);
console.log(person2);


