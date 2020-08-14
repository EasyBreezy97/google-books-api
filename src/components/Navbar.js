import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
              }}
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
