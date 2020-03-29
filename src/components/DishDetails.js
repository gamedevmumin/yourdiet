import React from "react";

export default function DishDetails(props) {
  const { dish } = props;
  const ingredientsListElements = dish.ingredients.map((ingredient, index) => (
    <li key={`ingredient${index}`}> {ingredient} </li>
  ));
  return (
    <>
      <div className="details">
        <div
          className="details__image"
          style={{
            backgroundImage: `url(https:${dish.mainImageURL})`
          }}
        >
          <h1 className="details__title"> {dish.name} </h1>
        </div>
        <div className="details__description">
          {dish.description}
          <div className="details__recipeandingredients">
            <h1 className="details__recipeandingredients__header">
              {dish.name}
            </h1>
            <div className="details__ingredients">
              <h1 className="details__header"> Składniki: </h1>
              <ul>{ingredientsListElements}</ul>
            </div>
            <h1 className="details__header"> Przepis: </h1>
            <div className="details__recipe"> {dish.recipe} </div>
          </div>
        </div>
      </div>
    </>
  );
}
