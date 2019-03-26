import React, { Component } from "react";

class Dealer extends Component {
  render() {
    return (
      <div id="dealer" className="playingField">
        <div className="textBox name">Dealer</div>
        <div id="dealerScore" className="textBox">
          &nbsp;
        </div>
        <div id="dealerCards" className="cardArea" />
      </div>
    );
  }
}

export default Dealer;
