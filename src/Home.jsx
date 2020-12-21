import React from "react";
import Header from "./Header";
import "./Home.css";
import Visits from "./Visits";

function Home() {
  return (
    <div className="home">
      <Header />
      <h2>Analytics</h2>
      <Visits />
    </div>
  );
}

export default Home;
