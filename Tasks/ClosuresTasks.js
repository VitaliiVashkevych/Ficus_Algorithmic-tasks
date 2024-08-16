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

// function makeMultiplier() {

// }
// const double = makeMultiplier(2);
// console.log(double(5)); // 10
// const triple = makeMultiplier(3);
// console.log(triple(5)); // 15