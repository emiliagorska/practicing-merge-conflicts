import React from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  return (
    <div className="pageContainer">
      <div className="titleContainer">
        <h1>Bidding stage</h1>
      </div>
      <div>
        <button className="shareInfoButton">Share Information</button>
      </div>
      <div>
        <button className="shareInfoButton">Share Information</button>
      </div>
      <div>
        <button className="placeBidButton">Place Bid</button>
      </div>
      <div>
        <button className="newGameButton">New Game</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
