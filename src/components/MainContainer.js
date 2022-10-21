import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocksList, setStocksList] = useState(false)
  const [allStocks, setAllStocks] = useState(false)
  const [portfolioStocks, setPortfolioStocks] = useState(false)

  // const alphabeticalStocksList = stocksList ? stocksList.sort(function(a, b){
  //   if (a.name < b.name) {
  //     return -1;
  //   } else if (a.name > b.name){
  //     return 1;
  //   } else {return 0;}
  // }) : null;

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(resp=>resp.json())
    .then(data=>{setStocksList(data); setAllStocks(data)})
  }, []);

  function handleClick(stock, stockPlacement){
    if(stockPlacement === "stockList"){
        !portfolioStocks ?
        setPortfolioStocks([stock]) :
        setPortfolioStocks([...portfolioStocks, stock])
    } else {
      const newPortFolioStocks = portfolioStocks.filter(element=> element.id !== stock.id)
      setPortfolioStocks(newPortFolioStocks)
    }
  }

  function handleChecked(checkedValue){
    let sortedList;
    

    if (checkedValue === "Alphabetically"){
     sortedList = [...stocksList.sort(function(a, b){
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name){
          return 1;
        } else {return 0;}
      })] 
      
    } else if (checkedValue === "Price")
     sortedList = [...stocksList.sort(function(a, b){
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price){
        return 1;
      } else {return 0;}
    })];

    setStocksList(sortedList)
  }

  function handleFilterChange(stockType){
    const filteredStocks = allStocks.filter(stock=> stock.type === stockType)
    setStocksList(filteredStocks)
  }

  return (
    <div>
      <SearchBar onChecked={handleChecked} onFilterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksList} onClick={handleClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolioStocks} onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
