import React, { useContext } from "react";
import Dish from "./Dish";
import { DishesContext } from "./DishesProvider";

export default function DishesContainer(props) {
  const appContext = useContext(DishesContext);
  const { isFetching, filterText, dishes } = appContext;
  let capitalizedFilterText = filterText.toUpperCase();

  let filteredDishes = dishes.filter(dish => {
    let capitalizedDishName = dish.name.toUpperCase();
    return capitalizedDishName.indexOf(capitalizedFilterText) !== -1;
  });

  return (
    <>
      <div className="dishes-container">
        {isFetching
          ? "Fetching Dishes..."
          : filteredDishes.map(dish => <Dish key={dish.id} dish={dish} />)}
      </div>
    </>
  );
}
