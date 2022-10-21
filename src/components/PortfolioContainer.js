import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        stocks ? stocks.map(stock => <Stock key={stock.ticker} stock={stock} stockPlacement={"myPortfolio"} onClick={onClick}/>) : null
      }
    </div>
  );
}

export default PortfolioContainer;
