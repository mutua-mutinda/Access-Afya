import React from "react";
import Charts from "./Charts";
import Header from "./Header";
import "./Home.css";
import KeyIssues from "./KeyIssues";
import Monitorperiod from "./Monitorperiod";
import Visits from "./Visits";

function Home() {
  return (
    <div className="home">
      <Header />
      <h2>Analytics</h2>
      <Visits />
      <KeyIssues />
      <Monitorperiod />
      <Charts />
    </div>
  );
}

export default Home;
