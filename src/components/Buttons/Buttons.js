import React, { Component } from "react";

class NavBar extends Component {
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
            onclick="startRound();return false;"
          />
          <input
            id="decrease"
            className="button"
            type="reset"
            value="Decrease Bet"
            onclick="changeBet(-5);return false;"
          />
          <input
            id="increase"
            className="button"
            type="reset"
            value="Increase Bet"
            onclick="changeBet(+5);return false;"
          />
          <br />
          <input
            id="split"
            className="button"
            type="reset"
            value="Split"
            onclick="playerSplit();return false;"
            disabled="disabled"
          />
          <input
            id="double"
            className="button"
            type="reset"
            value="Double"
            onclick="playerDouble();return false;"
            disabled="disabled"
          />
          <input
            id="surrender"
            className="button"
            type="reset"
            value="Surrender"
            onclick="playerSurrender();return false;"
            disabled="disabled"
          />
          <br />
          <input
            id="hit"
            className="button"
            type="reset"
            value="Hit"
            onclick="playerHit();return false;"
            disabled="disabled"
          />
          <input
            id="stand"
            className="button"
            type="reset"
            value="Stand"
            onclick="playerStand();return false;"
            disabled="disabled"
          />
          <input
            id="rules"
            className="button"
            type="reset"
            value="Show Rules"
            onclick="toggleRules();return false;"
          />
        </div>
      </form>
    );
  }
}

export default NavBar;
