///////////////////////////
//        Card           //
///////////////////////////

function Card(rank, suit) {
  this.rank = rank,
  this.suit = suit
}

Card.prototype = {
  constructor: Card, // resets constructor to be Card instead of Object

  value: function() { // create shared methods for all card instances
    console.log(this.suit);
  }
}

///////////////////////////
//        Deck           //
///////////////////////////

// Save state in constructor of instances
function Deck(num) {
  this.num = num,
  this.suits = ['hearts', 'spades', 'diamonds', 'clubs'],
  this.ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'],
  this.cards = []
}

// Save methods on prototype of the object
Deck.prototype = {
  constructor: Deck,

  buildDeck: function() {
    for (var r = 0; r < this.ranks.length; r++) {
      for (var s = 0; s <  this.suits.length ; s++) {
        this.cards.push(new Card(this.ranks[r], this.suits[s]));
      }
    }
  },

  dealCard: function() {

  }
}


deck = new Deck(1);
deck.buildDeck();

console.log(deck.cards.length);





