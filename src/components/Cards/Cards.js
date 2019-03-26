class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
  }

  generate_deck() {
    let card = (suit, value) => {
      this.name = value + " of " + suit;
      this.suit = suit;
      this.value = value;

      return { name: this.name, suit: this.suit, value: this.value };
    };

    // Arrays
    let values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        this.deck.push(card(suits[s], values[v]));
      }
    }
  }

  print_deck() {
    if (this.deck.length == 0) {
      console.log("This deck has been generated");
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }

  shuffle() {
    let current_ind = this.deck.length,
      temp_val,
      rand_ind;

    while (0 != current_ind) {
      rand_ind = Math.floor(Math.random() * current_ind);
      current_ind -= 1;
      temp_val = this.deck[current_ind];
      this.deck[current_ind] = this.deck[rand_ind];
      this.deck[rand_ind] = temp_val;
    }
  }

  deal() {
    let dealt_card = this.deck.shift();
    this.dealt_cards.push(dealt_card);
    return dealt_card;
  }

  replace() {
    this.deck.unshift(this.dealt_cards.shift());
  }
  clear_deck() {
    this.deck = [];
  }
}

newDeck = new Deck();

newDeck.generate_deck();
console.log(newDeck.deal());
// newDeck.print_newDeck()
newDeck.shuffle();
// newDeck.print_newDeck()
console.log(newDeck.deal());
