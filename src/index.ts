// Nullish coaelscing operator
let speed: number | null = null;

let ride = {
  // if speed is not null or undefined takes speed value, else 30
  speed: speed ?? 30,
};
