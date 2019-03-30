import "./cards.css";

class Deck {
  start() {
    this.buildDeck();
    this.shuffleDeck();
  }

  buildDeck() {
    const deck = [];
    const suits = ["clubs", "diams", "hearts", "spades"];
    const values = [
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

    for (const s in suits) {
      const suit = suits[s][0].toUpperCase();
      const bgcolor = suit === "C" || suit === "S" ? "black" : "red";
      for (const v in values) {
        const cardValue = v > 9 ? 10 : parseInt(v) + 1;
        const card = {
          suit: suit,
          icon: suits[s],
          bgcolor: bgcolor,
          cardnum: values[v],
          cardvalue: cardValue
        };
        deck.push(card);
      }
    }
    console.log(deck);
    this.deck = deck;
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  randomCard() {
    const deck = this.deck;
    const keys = Object.keys(deck);

    let i = keys.length - 1;
    const j = Math.floor(Math.random() * i);
    const card = deck[keys[j]];
    console.log(card);
    return card;
  }
  takeCard() {
    const keys = Object.keys(this.deck);

    let i = keys.length - 1;
    const j = Math.floor(Math.random() * i);
    const card = this.deck[keys[j]];
    this.deck.splice(j, 1);
    console.log(this.deck);

    return card;
  }
}

export default Deck;
