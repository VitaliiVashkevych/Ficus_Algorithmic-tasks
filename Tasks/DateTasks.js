// Write a function getCurrentDateTime that returns the current date and time as a string in the format YYYY-MM-DD HH:MM:SS.

function getCurrentDateTime() {
  const date = new Date();
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

// console.log(getCurrentDateTime()); // "2024-07-30 12:34:56"
