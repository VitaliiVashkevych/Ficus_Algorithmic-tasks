// TASK 1
function identity<T>(arg: T): T {
  return arg;
}

// TASK 2
class Box<T> {
  value: T;
  getValue: () => T;
  setValue: (arg: T) => void;
  constructor(value: T) {
    this.value = value;
    this.getValue = () => {
      return this.value;
    };
    this.setValue = (arg) => {
      this.value = arg;
    };
  }
}

// TASK 3
function merge<T1, T2 extends object>(obj1: T1, obj2: T2) {
  return Object.assign(obj2, obj1);
}

// TASK 4
// ??

// TASK 5
// ??
