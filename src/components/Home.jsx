import React from "react";
import Charts from "./Charts";
import Header from "./Header";
import "./Home.css";
import KeyIssues from "./KeyIssues";
import Monitorperiod from "./Monitorperiod";
import Visits from "./Visits";
import Staffdata from "./Staffdata";
import Menu from "./Menu";

function Home() {
  return (
    <div className="home">
      <Header />
      <Menu />
      <h2>Analytics</h2>
      <Visits />
      <KeyIssues />
      <Monitorperiod />
      <Charts />
      <Staffdata />
    </div>
  );
}

export default Home;
