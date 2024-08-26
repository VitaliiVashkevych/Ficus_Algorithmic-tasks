function createCounter() {
  let result = 1;

  return (res = result) => {
    result++;
    return res;
  };
}
const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

function createPerson() {
  const result = {
    getName: function() {
      return this.name;
    },
    setName: function (name) {
      this.name = name;
    }
  }

  return result
}

const person = createPerson('John');
console.log(person.getName()); // 'John'
person.setName('Jane');
console.log(person.getName()); // 'Jane'

function makeMultiplier(multiplier) {
  return (number) => {
    return number * multiplier
  }
}
const double = makeMultiplier(2);
console.log(double(5)); // 10
const triple = makeMultiplier(3);
console.log(triple(5)); // 15

function once(callback) {
  let isInitialized = false;

  return () => {
    if (isInitialized) {
      return;
    }

    isInitialized = true;
    callback();
  };
}
const initialize = () => console.log("Initialized!");
const initializeOnce = once(initialize);
initializeOnce(); // 'Initialized!'
initializeOnce(); // No output


// Event Listener Memory
// Create a function setupClickHandler that accepts a button element and a message string. It should set up a click event listener on the button that alerts the message when clicked. Demonstrate how the message is retained even after the setupClickHandler function has finished executing.
// Example:

const button = document.createElement('button');
button.textContent = 'Click me';
console.log(button);

document.body.appendChild(button);
function setupClickHandler(el, message) {
  el.addEventListener('click', () => alert(message));
}
setupClickHandler(button, 'Button was clicked!');
button.click(); // Alerts: 'Button was clicked!'

