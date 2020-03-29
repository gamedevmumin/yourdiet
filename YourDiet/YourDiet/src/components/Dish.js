import React from "react";
import { Link } from "react-router-dom";

export default function Dish(props) {
  let { id, name, mainImageURL } = props.dish;
  console.log(props.dish);

  return (
    <Link className="link" to={`/dishes/${id}`}>
      <div
        className="dish"
        style={{ backgroundImage: `url(https:${mainImageURL})` }}
      >
        <div className="dish-text"> {name} </div>
      </div>
    </Link>
  );
}
