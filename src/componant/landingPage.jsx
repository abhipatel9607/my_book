import React, { Component } from "react";
// import "./landingPage.css";
import Login from "./login";

class LandingPage extends Component {
  state = {
    loginComponents: [
      {
        class_name: "customer",
        name: "Customer",
        api: "",
        key: 1,
        signup: false,
      },
      {
        class_name: "expert",
        name: "Expert",
        api: "",
        key: 2,
        signup: false,
      },
    ],
  };

  render() {
    const { loginComponents } = this.state;
    return (
      <div className="container">
        {loginComponents.map((comp) => {
          return (
            <Login
              key={comp.key}
              name={comp.name}
              class_name={comp.class_name}
              api={comp.api}
            />
          );
        })}
      </div>
    );
  }
}

export default LandingPage;
