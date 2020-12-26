import React from "react";
import "./Visits.css";

function Visits() {
  return (
    <div className="visits">
      <p>VISITS</p>
      <div className="visits__places">
        <button className="visits__btn">
          <span>7</span>Kiambui
          <small className="visits__btnkebab"></small>
        </button>
        <button className="visits__btn">
          <span>12</span>Mukuru kwa Ruben
          <small className="visits__btnkebab"></small>
        </button>
        <button className="visits__btn">
          <span>26</span>Mukuru kwa Njenga
          <small className="visits__btnkebab"></small>
        </button>
        <button className="visits__btn">
          <span>38</span>Baba Dogo <small className="visits__btnkebab"></small>
        </button>
        <button className="visits__btn">
          <span>41</span>Kasovo <small className="visits__btnkebab"></small>
        </button>
        <button className="visits__btn">
          <span>24</span>Mukuru Kayaba
          <small className="visits__btnkebab"></small>
        </button>
      </div>
    </div>
  );
}

export default Visits;
