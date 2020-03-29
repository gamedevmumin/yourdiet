import React, { useState, useEffect } from "react";
import { fetchDishes as fetchData } from "../functions/DataFetching";

const DishesContext = React.createContext();

const DishesProvider = props => {
  const [isFetching, setIsFetching] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [filterText, setFilterText] = useState("");

  const onFilterTextChange = text => {
    setFilterText(text);
  };

  const getDish = id => {
    const dish = dishes.find(element => element.id === id);
    return dish;
  };

  useEffect(() => {
    setIsFetching(true);
    fetchData(
      process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
    ).then(dishes => {
      setIsFetching(false);
      setDishes(dishes);
    });
  }, []);

  return (
    <DishesContext.Provider
      value={{ isFetching, dishes, filterText, onFilterTextChange, getDish }}
    >
      {props.children}
    </DishesContext.Provider>
  );
};
export { DishesProvider, DishesContext };
