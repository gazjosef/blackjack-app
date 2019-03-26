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
      playerCards: []
    };
  }

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
