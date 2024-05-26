// Exercises with decorators

// Create a decorator for adding a sauce to Pizza instances:

// @Sauce('pesto')
// class Pizza {}

// In the above example, all instances of the Pizza class
// should have a sauce property set to pesto.

function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  };
}

@Sauce("Pesto")
class Pizza {}
