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
  // Your code here
}
// const calc = calculator();
// calc.next(); // Start the generator
// console.log(calc.next(10).value); // Provide num1
// console.log(calc.next('+').value); // Provide operator
// console.log(calc.next(5).value); // Provide num2 and get result

function* asyncFlow() {
  // Your code here
}
function run(generator) {
  // Your code here
}
run(asyncFlow);