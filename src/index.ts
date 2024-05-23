// (OOP) TypeScript Exercises

/*
  Define a class called Logger that takes the name of 
  a file in its constructor and provides a method 
  for writing messages to that file. 
  Don’t worry about the actual file I/O operations. 
  Just define the class with the right members. 
*/

class Logger {
  constructor(public logFile: string) {}

  log(message: string): string {
    return message;
  }
}

/*
  Given the Person class below, create a getter for 
  getting the full name of a person.
*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// let person = new Person("John", "Smith");
// console.log(person.fullName);

/*
  Create a new class called Employee that extends Person 
  and adds a new property called salary.
*/

class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}

/*
  What is the difference between private and protected members?
*/

/*
  answer: a private member is a member only accesible within 
  the declared class, and a protected member is a member only
  accesible within the declared class but can also be accesible
  from child classes who extend the based declared class
*/

/*
  Given the data below, define an interface for 
  representing employees:
*/

let employee = {
  name: "John Smith",
  salary: 50_000,
  address: { street: "Flinders st", city: "Melbourne", zipCode: 3144 },
};

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface Employee {
  name: string;
  salary: number;
  address: Address;
}
