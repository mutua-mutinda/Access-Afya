import React from "react";
import "./Menu.css";
import pulse from "./heartrate.jpg";
import folder from "./folder.png";
import inbox from "./inbox.png";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__side">
        <img className="menu__folder" src={folder} alt="" />
        <img className="menu__pulse" src={pulse} alt="" />
        <img className="menu__inbox" src={inbox} alt="" />
      </div>
    </div>
  );
}

export default Menu;
