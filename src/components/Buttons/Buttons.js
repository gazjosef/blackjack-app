import React, { Component } from "react";

class Buttons extends Component {
  onClick = e => {
    console.log("clicked");
    this.props.dealPlayerCard();
  };
  render() {
    return (
      <form id="controls" action="">
        <div id="controlsArea">
          <div id="credits" className="textBox dollars">
            &nbsp;
          </div>
          <div id="default" className="textBox dollars">
            &nbsp;
          </div>
          <input
            id="deal"
            className="button"
            type="reset"
            value="Deal"
            onClick={this.onClick}
          />
          <input
            id="decrease"
            className="button"
            type="reset"
            value="Decrease Bet"
            // onClick="changeBet(-5);return false;"
          />
          <input
            id="increase"
            className="button"
            type="reset"
            value="Increase Bet"
            // onClick="changeBet(+5);return false;"
          />
          <br />
          <input
            id="split"
            className="button"
            type="reset"
            value="Split"
            // onClick="playerSplit();return false;"
            disabled="disabled"
          />
          <input
            id="double"
            className="button"
            type="reset"
            value="Double"
            // onClick="playerDouble();return false;"
            disabled="disabled"
          />
          <input
            id="surrender"
            className="button"
            type="reset"
            value="Surrender"
            // onClick="playerSurrender();return false;"
            disabled="disabled"
          />
          <br />
          <input
            id="hit"
            className="button"
            type="reset"
            value="Hit"
            // onClick="playerHit();return false;"
            disabled="disabled"
          />
          <input
            id="stand"
            className="button"
            type="reset"
            value="Stand"
            // onClick="playerStand();return false;"
            disabled="disabled"
          />
          <input
            id="rules"
            className="button"
            type="reset"
            value="Show Rules"
            // onClick="toggleRules();return false;"
          />
        </div>
      </form>
    );
  }
}

export default Buttons;
