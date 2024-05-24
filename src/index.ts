// class decorators
function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Adding component to the DOM");
  };
}

// this is similar behavior as extending from a based class
@Component
class ProfileComponent {}
