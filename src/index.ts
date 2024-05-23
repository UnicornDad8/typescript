// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// we should use an "interface" instead of an abstract class
// when we don't have any logic or complex algorithm being implemented
// an interface is purely for type-checking properties and methods
// we don't have method implementation, in interfaces we can only
// have signatures

// we can also inherited an interface
interface CloudCalendar extends Calendar {
  sync(): void;
}

// now we need the implementation
// when we want a class to inherit an interface
// we use the keyword "implements" instead of "extends"
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }

  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
