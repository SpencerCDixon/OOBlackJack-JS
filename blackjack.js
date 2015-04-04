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

  dealCard: function(hand) {
    var card = this.cards.splice(0,1)[0];
    hand.cards.push(card);
  }
}

///////////////////////////
//        Hand           //
///////////////////////////

function Hand() {
  this.cards = []
}

Hand.prototype = {
  constructor: Hand
}

///////////////////////////
//        Play           //
///////////////////////////

hand = new Hand();

deck = new Deck(1);
deck.buildDeck();
deck.dealCard(hand);

console.log(deck.cards.length);
console.log(hand.cards);





