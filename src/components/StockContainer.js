import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onClick }) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/
      stocks ? stocks.map(stock => <Stock key={stock.id} stock={stock} onClick={onClick} stockPlacement={"stockList"}/>) : null
      }
    </div>
  );
}

export default StockContainer;
