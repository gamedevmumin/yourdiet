import React from "react";
import { FaUtensils } from "react-icons/fa";
import NavOptions from "./NavOptions";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="side-navbar-elements">
          <div className="logo">
            <FaUtensils className="logo-icon" />
            <div className="logo-text"> YourDiet </div>
          </div>
          <NavOptions />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
