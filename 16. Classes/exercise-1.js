// Class definition
class Person{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    firstName='';
    lastName='';
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);