// Type assertions
// let phone = document.getElementById("phone") as HTMLInputElement;
let phone = <HTMLInputElement>document.getElementById("phone");

// now intellisense works
phone.value;
