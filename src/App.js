import React, { Component } from "react";
import LandingPage from "./componant/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupPage from "./componant/signup";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route
            path="/createAccount/:class_name"
            exact
            component={SignupPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
