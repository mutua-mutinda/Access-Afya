import React from "react";
import "./Menu.css";
import pulse from "./heartrate.jpg";
import folder from "./folder.png";
import inbox from "./inbox.png";
import adjust from "./adjust.png";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__side">
        <img className="menu__folder" src={folder} alt="" />
        <img className="menu__pulse" src={pulse} alt="" />
        <img className="menu__inbox" src={inbox} alt="" />
        <img className="menu__adjust" src={adjust} alt="" />
      </div>
    </div>
  );
}

export default Menu;
