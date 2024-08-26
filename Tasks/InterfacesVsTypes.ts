// TASK 1

interface Person1 {
  name: string;
  age: number;
}

const Person1: Person1 = {
  name: "Vitalii",
  age: 26,
};

// TASK 2

interface Person2 {
  name: string;
  age: number;
  email?: string;
}

const Person21: Person2 = {
  name: "Vitalii",
  age: 26,
};

const Person22: Person2 = {
  name: "Vitalii",
  age: 26,
  email: "SomeMail@example.com",
};

// TASK 3

interface Rectangle1 {
  width: number;
  height: number;
  readonly area: () => number;
}

const rectangle: Rectangle1 = {
  width: 10,
  height: 20,
  area: () => {
    return this.width * this.height;
  },
};

// TASK 4
interface Employee extends Person1 {
  employeeId: number;
}

const employee: Employee = {
  name: "Alex",
  age: 30,
  employeeId: 2450,
};

// TASK 5
interface Calculator {
  add: (a: number, b: number) => number;
}

const calculator1: Calculator = {
  add(a, b) {
    return a * b;
  },
};

// TYPES TASK 6
type Status = "success" | "loading" | "error";
function printStatus(status: Status) {
  console.log(status);
}

// TASK 7
type User = {
  username: string;
  password: string;
};

type Profile = {
  age: number;
  bio: string;
};

type UserProfile = User & Profile;
const userProfile: UserProfile = {
  username: "John",
  password: "password",
  age: 40,
  bio: "Slap Fighting Championship winner",
};
// TASK 8
type Readonly2<T> = {
  readonly [Property in keyof T]: T[Property];
};

const readonly: Readonly2<{ age: number; hobby: string }> = {
  age: 15,
  hobby: "Puzzles",
};
// TASK 9
// Conditional Types: Create a conditional type IsString<T> that equals true if T is a string, and false otherwise. Write a function that uses this type.

type IsString<T> = T extends string ? true : false;
// function isString<T>(value: T): IsString<T> {
//   return typeof value === "string";
// }

type Result1 = IsString<number>;
type Result2 = IsString<string>;

//TASK 10

type Circle = {
  radius: number;
};
type Rectangle2 = {
  width: number;
  height: number;
};
type Shape = Circle | Rectangle2;

function getShape(figure: Shape): number {
  let result = 0;
  if ("radius" in figure) {
    result = Math.PI * figure.radius ** 2;
  }

  if ("width" in figure && "height" in figure) {
    result = figure.width * figure.height;
  }

  return result;
}
