import React, { Component } from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  loginUser = (e) => {
    e.preventDefault();
    const name = document.querySelector(
      `.${this.props.class_name}-username`
    ).value;
    const password = document.querySelector(
      `.${this.props.class_name}-pass`
    ).value;
    const role = this.props.class_name;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/JSON");

    const userData = JSON.stringify({
      email: name,
      role: role,
      password: password,
    });
    const requestOption = {
      method: "POST",
      headers: myHeaders,
      body: userData,
      redirect: "follow",
    };

    fetch("https://mybooks-an3b.onrender.com/api/user/login", requestOption)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  render() {
    // console.log(this.props);
    const { name, class_name, api, signup } = this.props;
    return (
      <div className={`${class_name}-section section-utility`}>
        <span className="heading-primary">For {name}</span>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label className="input-tag">Username: </label>
              <input
                type="text"
                name="uname"
                className={`${class_name}-username`}
                required
              />
            </div>
            <div className="input-container">
              <label className="input-tag">Password: </label>
              <input
                type="password"
                name="pass"
                className={`${class_name}-pass`}
                required
              />
            </div>
            <div className="button-container">
              {/* <input type="submit" /> */}
              <button
                className={`btn btn-login-${class_name}`}
                onClick={this.loginUser}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <span className="singup-text">Don't have an account?</span>

        <Link to={`/createAccount/${class_name}`}>
          <button onClick={this.mountCounter}>sign up</button>
        </Link>
      </div>
    );
  }
}

export default Login;
