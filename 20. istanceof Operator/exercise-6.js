class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    let areaSquare;
    let areaRectangle;
    let areaCirce;
    if(figure==square){
      return areaSquare=figure.side*figure.side;
    }
    if(figure==rectangle){
      return areaRectangle=figure.width*figure.height;
    }
    if(figure==circle){
      return areaCirce=figure.radius*figure.radius*3.14;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));