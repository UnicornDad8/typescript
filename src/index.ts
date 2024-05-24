// parametarized decorators
type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Adding component to the DOM");
    };
  };
}

// this is similar behavior as extending from a based class
@Component({ selector: "#my-profile" }) // passing object as an argument
class ProfileComponent {}
