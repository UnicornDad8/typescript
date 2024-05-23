class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public id: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  // here we are overriding the "fullName" method of the Person class
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
