// TASK 1
class Car {
  make: string;
  model: string;
  get: () => void;

  constructor() {
    this.make = "qwe";
    this.model = "rty";
    this.get = () => {
      return `${this.make} ${this.model}`;
    };
  }
}

// TASK 2
class Rectangle {
  width: number;
  height: number;
  getArea: () => void;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.getArea = () => {
      return this.width * this.height;
    };
  }
}
class Square extends Rectangle {
  constructor(width: number, height: number) {
    super(width, height);
  }
}

// TASK 3

class Person {
  private ssn: number;
  public getSSN: () => number;

  constructor(ssn: number) {
    this.ssn = ssn;
    this.getSSN = () => {
      return this.ssn;
    };
  }
}

// TASK 4

abstract class Shape1 {
  getArea: () => number | undefined;
  constructor() {
    this.getArea = () => {
      if (this instanceof Triangle) {
        const perimeter = (this.sideA + this.sideB + this.sideC) / 2;
        const area = Math.sqrt(
          perimeter *
            (perimeter - this.sideA) *
            (perimeter - this.sideB) *
            (perimeter - this.sideC)
        );
        return area;
      } else if (this instanceof Circle1) {
        return this.radius ** 2 * Math.PI;
      } else {
        throw new Error("Incorrect class");
      }
    };
  }
}
class Circle1 extends Shape1 {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
}
class Triangle extends Shape1 {
  sideA: number;
  sideB: number;
  sideC: number;
  constructor(sideA: number, sideB: number, sideC: number) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}
// TASK 5
// ???
