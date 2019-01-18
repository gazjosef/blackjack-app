import React, { Component } from "react";

class Dealer extends Component {
  render() {
    return (
      <div id="dealer" class="playingField">
        <div className="textBox name">Dealer</div>
        <div id="dealerScore" class="textBox">
          &nbsp;
        </div>
        <div id="dealerCards" class="cardArea" />
      </div>
    );
  }
}

export default Dealer;
