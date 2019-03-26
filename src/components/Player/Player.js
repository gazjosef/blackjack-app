import React, { Component } from "react";

class Player extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cards: props.cards
  //   };
  // }

  // componentDidMount() {}
  // componentWillUnmount() {}
  // getDerivedStateFromProps(props, state) {
  //   return {
  //     cards: props.cards
  //   };
  // }

  render() {
    console.log("Player Cards", this.props.cards);
    let cards = <div />;
    if (this.props.cards !== undefined) {
      cards = this.props.cards.map((card, index) => (
        <div key={index} style={{ color: `${card.bgcolor}` }}>
          {card.cardnum} of {card.icon};
        </div>
      ));
    }

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
        <div id="player0Cards" className="cardArea">
          {cards}
        </div>
      </div>
    );
  }
}

export default Player;
