import React, { useContext } from "react";
import { DishesContext } from "../components/DishesProvider";
import DishDetails from "../components/DishDetails";
import { useParams } from "react-router-dom";

export default function DishPage() {
  const appContext = useContext(DishesContext);
  const { getDish } = appContext;
  const { slug } = useParams();
  const dish = getDish(parseInt(slug));
  return <> {dish && <DishDetails dish={dish} />} </>;
}
