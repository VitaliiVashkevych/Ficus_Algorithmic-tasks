// Basic Promise
// Write a function fetchData that returns a promise. The promise should resolve with the string "Data fetched" after 2 seconds.
async function fetchData() {
  const result = new Promise(
    (resolve) =>
      resolve(setTimeout(() =>
        console.log("Data fetched"), 1000)
      )
  );
}

fetchData();

// Chaining Promises
// Create two functions firstTask and secondTask. Each function should return a promise. Chain these promises so that secondTask only starts after firstTask resolves.

async function firstTask() {
  const result = new Promise((resolve) =>
    resolve(setTimeout(() => console.log("Task 1"), 1000))
  );
  return result;
}

async function secondTask() {
  const result = new Promise((resolve) =>
    resolve(setTimeout(() => console.log("Task 2"), 1000))
  );
  return result;
}

firstTask().then(secondTask());

// Async/Await Basics
// Convert a function fetchUserData that returns a promise into an async function. Use await to wait for the promise to resolve.

async function fetchUserData() {
  const result = await new Promise((resolve) =>
    resolve(setTimeout(() => console.log("Data fetched"), 1000))
  );
  
  return result;
};
const test = fetchUserData();
console.log(test);


// Handling Errors in Async Functions
// Write an async function fetchWithErrorHandling that calls a promise-returning function fetchData. If the promise is rejected, catch the error and log it.
async function fetchWithErrorHandling() {
  try {
    await fetchData();
  } catch (error) {
    console.log(error);
  }
}

fetchWithErrorHandling();

// Simulate Concurrent Asynchronous Operations
// Create a function fetchAllData that runs three asynchronous functions fetchData1, fetchData2, and fetchData3 concurrently using Promise.all. Each function should resolve after a random amount of time between 1 to 3 seconds. Log the results once all promises are resolved.
async function test1() {
  const result = new Promise((resolve) =>
    resolve(setTimeout(() => console.log("Data fetched 1"), random()))
  );
}
async function test2() {
  const result = new Promise((resolve) =>
    resolve(setTimeout(() => console.log("Data fetched 2"), random()))
  );
}
async function test3() {
  const result = new Promise((resolve) =>
    resolve(setTimeout(() => console.log("Data fetched 3"), random()))
  );
}
function random() {
  return Math.floor(Math.random() * 3 + 1);
}
async function fetchAllData(...params) {
  let result = await Promise.all(params)

  return result;
}
fetchAllData(test1(), test2(), test3());
