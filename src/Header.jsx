import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__assessment">
        <button>Add Assement +</button>
      </div>
      <div className="header__right">
        <div className="header__progressbar">
          <progress
            className="header__progress"
            max="100"
            value="40"
          ></progress>
          <div className="header__patientseen">
            <small>24k/24k patients seen</small>
          </div>
        </div>
        <div className="header__avatar">
          <div className="header__user">
            <strong>Mutua Mutinda</strong>
            <small>mutuamutinda@accessafya.com</small>
          </div>
          <div className="header__profile">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
