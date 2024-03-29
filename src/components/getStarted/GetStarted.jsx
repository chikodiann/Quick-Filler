import React from "react";
import Light from "../../assets/cookinggas2.jpeg";
import "./GetStarted.css";
import ConnectWallet from "../connect/ConnectWallet";

function GetStarted() {
  return (
    <div className="getStartedContainer">
      <div className="text-container">
        <span className="future">
          Get Started with Quick <br />
          Filler
        </span>
        <div className="filler">
          <p>Connect your to access our convenient gas filling services.</p>
        </div>
        <div className="button-container">
          <button className="learn">Learn more</button>
          <ConnectWallet />{" "}
        </div>
      </div>
      <div>
        <img src={Light} alt="gas" className="light" />
      </div>
    </div>
  );
}

export default GetStarted;
