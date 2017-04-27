function score(hand) {
  for (i = 0; i < myHand.length; i++) {
    if (myHand[i].value === 1) {
      myHand[i].value = 20;
    }
    if(myHand[i].suit === "c" || myHand[i].suit === "d"){
      myHand[i].value = myHand[i].value * 2;
    }
    total = total + myHand[i].value;
  }
  return total;
}

total = 0;
var myHand = [{suit: "c", value: 3}, {suit: "d", value: 1}, {suit: "t", value: 8}];
console.log(score(myHand))
