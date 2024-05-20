// Exercises of this section

type User = {
  name: string;
  age: number;
  occupation?: string;
};

// make an alias for this type
let users = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];

// Birds fly. Fish swim.
// A Pet can be a Bird or Fish.
// Use type aliases to represent these
type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = Bird | Fish;

// Define a type for representing the days of week.
// Valid values are “Monday”, “Tuesday”, etc.

type DayOfTheWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let day: DayOfTheWeek = "Monday";

// Simplify the following code snippets
let user = getUser();

console.log(user && user.address ? user.address.street : undefined);

// ---------------------------------------------------------------
// Answer:
console.log(user?.address?.street);

let x = foo !== null && foo !== undefined ? foo : bar();

// ---------------------------------------------------------------
// Answer:
let x = foo ?? bar();

// What is the problem in this piece of code?
let value: unknown = "a";
console.log(value.toUpperCase());

// value is declared as an unknown type.
// In order to call methods on an unknown object,
// we have to use type narrowing first.
let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());
