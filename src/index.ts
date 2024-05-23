// Abstract classes and methods
// if we prefix a class with the "abstract" keyword
// we are saying we can't create instances of that class
abstract class Shape {
  constructor(public color: string) {}

  // abstract methods can only exist in abstract classes
  // methods can also be abstract when they lack implementation
  // so they don't have a body with braces: { }, only the return type
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}
