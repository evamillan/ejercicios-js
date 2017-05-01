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
