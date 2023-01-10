function isAdult({age}) {
  if (age>=18){
    console.log("is old enough!!");
    return age >= 18;
  }
  else{
    return ("is a minor!!!");
  }
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 18
};

console.log(isAdult(person));