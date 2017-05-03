function squareLength(side) {
  var length = side * 4;
  return length;
}

function rectangleLength(side1, side2) {
  var length = (side1 * 2) + (side2 * 2);
  return length;
}

function circunference(diameter) {
  var length = diameter * Math.PI;
  return length;
}

var squareSide = 3;
var rectangleLongSide = 7;
var rectangleShortSide = 4;
var diameter = 5;

console.log(squareLength(squareSide));
console.log(rectangleLength(rectangleLongSide, rectangleShortSide));
console.log(circunference(diameter));
