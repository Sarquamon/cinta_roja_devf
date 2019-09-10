import React, {Component} from "react";
import {BrowserRouter as Router, Route /*Redirect*/} from "react-router-dom";
import Main from "./components/cardAl/Main";
import Exalumno from "./components/Exalumno/Exalumno";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/Main" /> */}
          <Route exact path="/Exalumno/:id" component={Exalumno} />
        </main>
      </Router>
    );
  }
}

export default Routes;
