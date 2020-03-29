import React from "react";
import { Link } from "react-router-dom";

export default function NavOptions() {
  return (
    <ul className="nav-options">
      <Link className="link" to="/dishes">
        <li className="nav-option">Dishes</li>
      </Link>
    </ul>
  );
}
