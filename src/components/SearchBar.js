import React, {useState} from "react";

function SearchBar({ onChecked, onFilterChange }) {
  const [alphabetCheckedStatus, setAlphabetCheckedStatus] = useState(false)
  const [priceCheckedStatus, setPriceCheckedStatus] = useState(false)

  function handleChecked(e){
    if (e.target.value === "Alphabetically"){
    setAlphabetCheckedStatus(alphabetCheckedStatus => !alphabetCheckedStatus);
    setPriceCheckedStatus(false);

    onChecked(e.target.value)
    } else if (e.target.value === "Price"){
    setPriceCheckedStatus(priceCheckedStatus => !priceCheckedStatus);
    setAlphabetCheckedStatus(false);

    onChecked(e.target.value)
    }
  }

  function handleFilterChange(e) {
    onFilterChange(e.target.value)
    setAlphabetCheckedStatus(false);
    setPriceCheckedStatus(false);
  }
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabetCheckedStatus}
          onChange={handleChecked}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceCheckedStatus}
          onChange={handleChecked}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
