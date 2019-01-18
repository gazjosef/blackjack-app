import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div id="player0" className="playingField">
        <div className="textBox name">Player</div>
        <div id="player0Score" className="textBox">
          &nbsp;
        </div>
        <div id="player0Bet" className="textBox dollars">
          &nbsp;
        </div>
        <div id="player0Result" className="textBox result">
          &nbsp;
        </div>
        <div id="player0Cards" className="cardArea" />
      </div>
    );
  }
}

export default Player;
