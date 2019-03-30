import React, { Component } from "react";
import NavBar from "./components/layout/NavBar/NavBar";
import Dealer from "./components/Dealer/Dealer";
import Player from "./components/Player/Player";
import Buttons from "./components/Buttons/Buttons";
import Message from "./components/Message/Message";
import Rules from "./components/Rules/Rules";
import Deck from "./game/Deck";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.deck = new Deck();
    this.state = {
      playerCards: [],
      dealerCards: []
    };
  }

  start = () => {
    this.deck.start();
    //let pc = [];
    //let dc = [];
    //let playerCard1 = this.deck.takeCard();
    //let dealerCard1 = this.deck.takeCard();
    //let playerCard2 = this.deck.takeCard();
    //let dealerCard2 = this.deck.takeCard();
    //
    //pc.push(playerCard1);
    //pc.push(playerCard2);
    //dc.push(dealerCard1);
    //dc.push(dealerCard2);
    //
    //this.setState({ playerCards: pc, dealerCards: dc });
  };

  dealPlayerCard = () => {
    let cards = this.state.playerCards.slice(0);

    let newCard = this.deck.randomCard();
    cards.push(newCard);

    this.setState({
      playerCards: cards
    });
  };

  // deal = () => {
  //   let cards = this.state.playerCards.slice(0);
  //   let newDeck = this.deck.shuffleDeck();

  //   cards.push(newDeck);
  // };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Dealer />
        <Player cards={this.state.playerCards} />
        <Buttons
          dealPlayerCard={this.dealPlayerCard}
          // deal={this.deal}
        />
        <Rules />
        <Message />
        {/* <Deck /> */}
      </div>
    );
  }
}

export default App;
