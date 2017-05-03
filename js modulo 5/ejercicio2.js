deck = [];
hearts = "c";
clubs = "t";
diamonds = "d";
spades = "p";
suits = [hearts, clubs, diamonds, spades];
for (var i = 0; i< suits.length; i = i + 1) {
  for (var j = 1; j<= 13; j = j +1) {
     card = {palo : suits[i], valor : j };
     deck[deck.length] = card;
}}

function shuffle(cards) {
  for (var i = 0; i < deck.length; i++) {
    deck[i] = deck[Math.floor(Math.random() * 52)];
  }
  return deck;
}

function deal() {
  deck.splice(0, 1);
  return deck;
}

function score(hand) {
  var sum = +hand[0][0] + +hand[1][0] + +hand[2][0] + +hand[3][0];
  if ((hand[0] === hand[1]) && (hand[1] === hand[2]) && (hand[2]) === hand[3]) {
    sum = sum * 10;
  }
  return sum;
}

var myHand = ["3p", "5c", "7c", "8t"];
var sameCardsHand = ["2c", "2c", "2c", "2c"];

console.log(shuffle(deck));
console.log(deal(deck));
console.log("Your score is " + score(myHand));
console.log("Your score is " + score(sameCardsHand));
