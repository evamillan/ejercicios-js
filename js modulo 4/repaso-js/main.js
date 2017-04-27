function counter(number, array){
  for (i = 0; i < myArray.length; i = i + 1) {
    if (myArray[i] === myNumber) {
      total = total + 1;
    }
  }
  return total;
}

var myNumber = 4;
var myArray = [8, 2, 4, 1, 4, 9, 4];
var total = 0;

console.log(counter(myNumber, myArray))
