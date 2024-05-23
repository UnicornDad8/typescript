/*
  the diference between "private" and "protected" access modifiers
  is that private means only accesible inside the class, and 
  protected means only accesible inside the class or inherited 
  classes
*/
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  // here we are overriding the "fullName" method of the Person class
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mary", "Smith"),
]);

// Polymorphic behavior
function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

// classes should be open to extension and closed for modification
