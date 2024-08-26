function* numberGenerator() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}
// const gen = numberGenerator();
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

function* infiniteCounter() {
  for (let i = 1; true; i++) {
    yield i;
  }
}
// const gen = infiniteCounter();
// for (let i = 0; i < 10; i++) {
//   console.log(gen.next().value);
// }
function* rangeGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
// const gen = rangeGenerator(5, 10);
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 6
// // ...
function* calculator() {
  let num1 = yield;
  let operator = yield;
  let num2 = yield;

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

const calc = calculator();
calc.next(); // Start the generator
console.log(calc.next(10)); // Provide num1
console.log(calc.next('+').value); // Provide operator
console.log(calc.next(5).value); // Provide num2 and get result


// TASK 5
// Generator for Async Operations
// Write a generator function asyncFlow that mimics the behavior of async/await by yielding promises. Implement a function run that automatically handles the next calls and manages the promise resolutions.
// Example:
async function* asyncFlow() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield Promise.resolve(4);
  yield Promise.resolve(5);
}

async function run() {
  for await (const value of asyncFlow()) {
    console.log(value);
  }
}

run(asyncFlow);