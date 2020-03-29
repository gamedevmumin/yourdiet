import React, { useContext } from "react";
import "../CSS/DishesPage.css";
import { DishesContext } from "./DishesProvider";

function SearchBar(props) {
  const appContext = useContext(DishesContext);
  const { onFilterTextChange } = appContext;
  const handleFilterTextChange = e => {
    onFilterTextChange(e.target.value);
  };

  return (
    <form className="search-form">
      <input
        className="text-input"
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange}
      />
    </form>
  );
}

export default SearchBar;
