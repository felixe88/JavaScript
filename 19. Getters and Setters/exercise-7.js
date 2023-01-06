class Person {
  firstName="";
  lastName="";
  age=0;
  constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    if(typeof(age)==="number"){
      this.age=age
    }else{
       this.Number(age);
    }
  }
  set firstName(newVal){
    this.firstName=newVal;
  }
  get firstName(){
    return this.firstName;
  }
  set lastName(newVal){
    this.lastName=newVal;
  }
  get lastName(){
    return this.lastName;
  }
  set age(newVal){
    if(newVal<1){
      this.age=1;
    }else if (age>110){
      this.age=110;
    }else{
      this.age=newVal;
    }
  }
  get age(){
    return this.age;
  }
  get fullName(){
    return this.firstName + " "+ this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);