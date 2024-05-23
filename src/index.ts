// Generic Constraints
class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

// here we extend from Person class
function echo<T extends Person>(value: T): T {
  return value;
}

console.log(echo(new Person("Ceci")));

// here we can use a child from the Person class
console.log(echo(new Customer("Mosh")));
