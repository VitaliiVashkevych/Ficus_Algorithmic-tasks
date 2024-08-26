// Write a function getCurrentDateTime that returns the current date and time as a string in the format YYYY-MM-DD HH:MM:SS.
// TASK 1
function getCurrentDateTime() {
  const date = new Date();
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

// console.log(getCurrentDateTime()); // "2024-07-30 12:34:56"


// TASK 2
// Days Between Dates
// Write a function daysBetween that takes two dates as arguments and returns the number of days between them.
// Example:

function daysBetween(date1, date2) {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  //diff in ms
  // * 1000 - sec * 60 - min * 60 - h * 24 - day

  return (secondDate - firstDate) / (1000 * 60 * 60 * 24);
}

console.log(daysBetween('2024-01-01', '2024-01-31')); // 30


// TASK 3
// Write a function addDays that takes a date and a number of days as arguments, and returns the new date after adding the specified number of days.
// Example:

// console.log(addDays('2024-07-30', 5)); // "2024-08-04"

function addDays(date, days) {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  return result;
}

console.log(addDays('2024-07-30', 5)); // "2024-08-04"

// TASK 4

// Get the Day of the Week
// Write a function getDayOfWeek that takes a date as an argument and returns the day of the week (e.g., "Monday").
// Example:

// console.log(getDayOfWeek('2024-07-30')); // "Tuesday"

function getDayOfWeek(date) {
  const result = new Date(date);
  return result.toLocaleDateString("en-US", { weekday: "long" });
}

console.log(getDayOfWeek('2024-07-30')); // "Tuesday"

// TASK 5
// Recurring Event Scheduler
// Write a function scheduleEvent that takes a start date, an end date, and a day of the week (e.g., "Monday"). The function should return all the dates within that range that fall on the specified day of the week.
// Example:

// console.log(scheduleEvent('2024-07-01', '2024-07-31', 'Monday'));
// // Output: ["2024-07-01", "2024-07-08", "2024-07-15", "2024-07-22", "2024-07-29"]
function scheduleEvent(startDate, endDate, dayOfWeek) { 
  const result = [];
  const start = new Date(startDate).valueOf();
  const end = new Date(endDate).valueOf();  
  // console.log(start, end);
  const week = 1000 * 60 * 60 * 24 * 7;

  for (let i = start; i <= end; i += week) {
    if (new Date(i).toLocaleDateString('en-US', { weekday: 'long' }) === dayOfWeek) {
      result.push(new Date(i).toLocaleDateString());
    }
  }
  
  return result;
}

console.log(scheduleEvent('2024-07-01', '2024-07-31', 'Monday'));