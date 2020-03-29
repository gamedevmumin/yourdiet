import React, { Component } from "react";
import SearchBar from "../components/SeachBar";
import DishesContainer from "../components/DishesContainer";
import "../CSS/DishesPage.css";
export default class DishesPage extends Component {
  render() {
    return (
      <div className="mainPageContent">
        <SearchBar />
        <DishesContainer />
      </div>
    );
  }
}
