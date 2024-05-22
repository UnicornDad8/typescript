class SeatAssignment {
  // A1, A2, ...
  // Ceci, Peke, ...
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats.A1 = "Ceci";
seats.A2 = "Peke";
seats.A3 = "Mosh";
