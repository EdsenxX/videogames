import React, { Component } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

import "../styles/Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__content">
          <div className="logo"></div>
          <div className="search">
            <div className="search__content">
              <GiMagnifyingGlass className="icon" />
              <input
                name="search"
                type="text"
                placeholder="Search a Video Game"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
