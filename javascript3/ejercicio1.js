baraja = [];
hearts = "c";
clubs = "t";
diamonds = "d";
spades = "p";
suits = [hearts, clubs, diamonds, spades];
for (var i = 0; i<= suits.length; i = i + 1) {
  for (var j = 1; j<= 13; j = j +1) {
     card = {palo : suits[i], valor : j };
     baraja[baraja.length] = card;
}}

var redSuits = [];
var blackSuits = [];
for (var k = 0; k <= baraja.length; k = k + 1){
  if (baraja[k].palo === "c" || baraja[k].palo === "d") {
    redSuits[redSuits.length] = baraja[k];
  }
  else {
    blackSuits[blackSuits.length] = baraja[k];
  }
}
var evenRedCards = [];
for (var l = 0; l < redSuits.length; l = l + 1){
  if (redSuits[l].valor % 2 === 0){
    evenRedCards[evenRedCards.length] = redSuits[l];
  }
}

console.log(evenRedCards[evenRedCards.length -1 ])
