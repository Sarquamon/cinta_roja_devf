import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "./creative.css";
// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MastHead from "./components/mastHead/MastHead";
import AboutUs from "./components/aboutUs/AboutUs";
import ServicesSec from "./components/servicesSec/ServicesSec";

function App() {
  return (
    <div>
      <Navbar />
      <MastHead />
      <AboutUs />
      <ServicesSec />
    </div>
  );
}

export default App;
