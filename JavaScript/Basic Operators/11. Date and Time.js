// 1. Display Current Date and Time
const currentDate = new Date();
console.log(
  "1.",
  currentDate.toDateString() + " " + currentDate.toTimeString()
);

// 2. Find the current year
const currentYear = currentDate.getFullYear();
console.log("2. Current Year:", currentYear);

// 3. Identify the current month
const currentMonth = currentDate.getMonth();
console.log("3. Current Month:", currentMonth);

// 4. Get Today's Date
const today = currentDate.getDate();
console.log("4. Today's Date:", today);

// 5. Determine the current Weekday
const currentWeekday = currentDate.getDay();
console.log("5. Current Weekday:", currentWeekday);

// 6. Current Time Details
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
console.log(
  "6. " +
    "Hours: " +
    currentHour +
    " Minutes: " +
    currentMinute +
    " Seconds: " +
    currentSecond
);

/* Important trick for me */
// 7. Determine the length of the current month
const currentMonthLength = new Date(currentYear, currentMonth + 1, 0).getDate();
console.log("7. Length of the current month:", currentMonthLength);

// 8. Calculate Tomorrow's full date
const tomorrowDay = currentDate.getDate() + 1;
const tomorrowMonth = currentDate.getMonth() + 1;
const tomorrowYear = currentDate.getFullYear();
console.log(tomorrowYear + "-" + tomorrowMonth + "-" + tomorrowDay);

// 9. Calculate Minutes to Hourse and Minutes
const totalMinutes = 90;
const minutesInHour = 60;
const hours = Math.floor(90 / minutesInHour);
const minutes = 90 % minutesInHour;
console.log(
  "9. 90 minutes is equivalent to:",
  hours,
  "hours(s) and",
  minutes,
  "minutes(s)"
);
