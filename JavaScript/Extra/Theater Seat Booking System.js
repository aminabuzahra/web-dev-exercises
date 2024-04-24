const theater = [];
const rows = 10;
const columns = 10;

// 1. Initialize the theater
function initializeTheater(rows, columns) {
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(false);
    }
    theater.push(row);
  }
}

// 2. Book a seat
function bookSeat(row, column) {
  if (row < 0 || row >= rows || column < 0 || column >= columns) {
    console.log(`Invalid seat number for row: ${row} and column: ${column}.`);
  } else if (theater[row][column]) {
    console.log(
      `Seat row: ${row + 1} and column ${column + 1} is already booked.`
    );
  } else if (!legalSeat(row, column)) {
    console.log(
      `Seat row: ${row + 1} and column ${
        column + 1
      } if booked leaves a single empty seat between two booked seats! Try another seat.`
    );
  } else {
    theater[row][column] = true;
    console.log(
      `Seat row: ${row + 1} and column ${column + 1} is booked successfully.`
    );
  }
}

function legalSeat(row, column) {
  if (
    (theater[row][column - 2] && !theater[row][column - 1]) ||
    (theater[row][column + 2] && !theater[row][column + 1])
  ) {
    return false;
  }
  return true;
}

// 3. Cancel a booking
function cancelBooking(row, column) {
  if (row < 0 || row >= rows || column < 0 || column >= columns) {
    console.log(
      `Cannot cancel! Invalid seat number for row: ${row + 1} and column: ${
        column + 1
      }.`
    );
  } else if (!theater[row][column]) {
    console.log(
      `Seat row: ${row + 1} and column ${column + 1} is already empty.`
    );
  } else if (!legalCancelationSeat(row, column)) {
    console.log(
      `Seat row: ${row + 1} and column ${
        column + 1
      } if cancelled leaves a single empty seat between two booked seats! Cannot cancel this seat.`
    );
  } else {
    theater[row][column] = false;
    console.log(
      `Seat row: ${row + 1} and column ${column + 1} is cancelled successfully.`
    );
  }
}

function legalCancelationSeat(row, column) {
  if (
    (column === 0 && theater[row][column + 1]) ||
    (column === columns - 1 && theater[row][column - 1])
  ) {
    return false;
  } else if (column >= 1 || column <= columns - 2) {
    if (theater[row][column - 1] && theater[row][column + 1]) {
      return false;
    }
  }
  return true;
}

// 4. Print the theater
function printTheater() {
  console.log("\t\t\t\tColumns:");
  process.stdout.write(`\t\t\t\t`);
  for (let c = 0; c < theater[0].length; c++) {
    process.stdout.write(`${c + 1} `);
  }
  console.log();
  process.stdout.write(`\t\t\t\t--------------------`);
  console.log();

  for (let r = 0; r < theater.length; r++) {
    process.stdout.write(`Row ${r + 1}:\t`);
    for (let c = 0; c < theater[0].length; c++) {
      if (theater[r][c]) {
        process.stdout.write("X ");
      } else {
        process.stdout.write("O ");
      }
    }
    console.log();
  }
}

function bestSeatInARow(row) {
  const middleSeat = Math.floor(theater[row].length / 2);
  if (!theater[row][middleSeat] && legalSeat(row, middleSeat)) {
    return middleSeat;
  }

  let leftSeat = middleSeat - 1;
  let rightSeat = middleSeat + 1;

  while (leftSeat >= 0 || rightSeat < theater[row].length) {
    if (!theater[row][leftSeat] && legalSeat(row, leftSeat)) {
      return leftSeat;
    }
    if (!theater[row][rightSeat] && legalSeat(row, rightSeat)) {
      return rightSeat;
    }

    leftSeat--;
    rightSeat++;
  }
  return -1;
}

// 5. Suggest the best available seat
function bestSeatInStage() {
  const bestOfEachRow = [];
  for (let r = 0; r < theater.length; r++) {
    bestOfEachRow.push(bestSeatInARow(r));
  }

  let middleIndex = Math.floor(theater[0].length / 2);

  bestIndex = -1;
  let seatNumber = -1;
  bestValue = Infinity;

  for (let r = 0; r < theater.length; r++) {
    let std = Math.abs(middleIndex - bestOfEachRow[r]);
    if (bestValue > std) {
      bestValue = std;
      bestIndex = r;
      seatNumber = bestOfEachRow[r];
    }
  }
  const bestSeat = [bestIndex, seatNumber];
  return bestSeat;
}

// Test the Seat Booking System
function test() {
  console.log("Initial Theater:");
  initializeTheater(rows, columns);
  console.log();
  console.log("Booked Seats:");

  bookSeat(-1, 3);
  bookSeat(1, -3);
  bookSeat(rows + 1, 3);
  bookSeat(3, columns + 1);
  console.log();

  bookSeat(2, 2);
  bookSeat(2, 4);
  bookSeat(2, 4);
  bookSeat(2, 1);
  bookSeat(2, 9);
  bookSeat(2, 6);

  console.log();

  bookSeat(2, 5);
  bookSeat(2, 6);
  console.log();

  cancelBooking(-1, 3);
  cancelBooking(1, -3);
  cancelBooking(rows + 1, 3);
  cancelBooking(3, columns + 1);
  cancelBooking(1, 1);
  cancelBooking(2, 5);
  cancelBooking(2, 3);
  console.log();
}

test();
printTheater();
let bestSeat = bestSeatInStage();
console.log();
console.log(
  `Best Seat in Stage in Row: ${bestSeat[0] + 1} Seat: ${bestSeat[1] + 1}`
);
