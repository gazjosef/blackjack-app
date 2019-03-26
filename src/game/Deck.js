import "./cards.css";

class Deck {
  constructor() {
    this.deck = this.buildDeck();
  }

  // render() {
  //   const { deck } = this.state;
  //   const rows = deck.map((card, index) => (
  //     <div key={index} style={{ color: `${card.bgcolor}` }}>
  //       {card.cardnum} of {card.icon};
  //     </div>
  //   ));

  //   return (
  //     <div>
  //       <h1>Random Card</h1>
  //       <div>Random Card</div>
  //       <h1>Deck</h1>
  //       <div>{rows}</div>
  //     </div>
  //   );
  // }

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
    return deck;
    // const randomNum = Math.floor(Math.random() * 52 + 1);
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
    const deck = this.deck;
    const keys = Object.keys(deck);

    let i = keys.length - 1;
    const j = Math.floor(Math.random() * i);
    const card = deck[keys[j]];
    let copy = deck.slice(0);
    copy.splice(j, 1);
    console.log(copy);
    this.setState({ deck: copy });
    return card;
  }

  /*
  start() {
    shuffleDeck(deck);
  }

  shuffleDeck() {
    const deck = this.deck;

    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }
  */
}

export default Deck;
