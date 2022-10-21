import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

/* 
App
|-Header
|-MainContainer -- stockList state, fetch request
  |-SearchBar
  |-StockContainer
    |-stock
  |-PortfolioContainer
    |-stock(on event triggering)
*/

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
