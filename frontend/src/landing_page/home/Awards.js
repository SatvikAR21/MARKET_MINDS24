import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="Media/Photos/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million MarketMind clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in :{" "}
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and govt. securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="Media/Photos/pressLogos.png" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
