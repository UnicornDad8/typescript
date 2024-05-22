// imagine we are building the class for an Uber ride
class Ride {
  // passenger
  // pickupLocation
  // dropOffLocation
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  // as a best practice getters for static properties
  // are also declared as static methods
  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
