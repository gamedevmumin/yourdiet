import React from "react";
import { Switch, Route } from "react-router-dom";
import "./CSS/Navbar.css";
import DishesPage from "./pages/DishesPage";
import Navbar from "./components/Navbar";
import DishPage from "./pages/DishPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/dishes" component={DishesPage}></Route>
        <Route path="/dishes/:slug">
          <DishPage />
        </Route>
        <Route path="/" component={DishesPage}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
