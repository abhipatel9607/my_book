import React, { Component } from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

import { getPostRequest } from "../util/util";

class Login extends Component {
  state = {};

  loginUser = (e) => {
    e.preventDefault();
    const name = document.getElementById(
      `${this.props.class_name}-email`
    ).value;
    const password = document.getElementById(
      `${this.props.class_name}-pass`
    ).value;
    const role = this.props.class_name;
    // console.log(name, password, role);

    const userData = JSON.stringify({
      email: name,
      role: role,
      password: password,
    });
    getPostRequest("login", userData);
  };

  render() {
    // console.log(this.props);
    const { name, class_name } = this.props;
    return (
      <div style={{ width: "50vw" }}>
        <MDBContainer
          className="p-3  d-flex flex-column"
          style={{ width: "70%", marginTop: "5rem" }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>For {name}</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id={`${class_name}-email`}
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id={`${class_name}-pass`}
            type="password"
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn onClick={this.loginUser} className="mb-4">
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not a member?{" "}
              <Link to={`/createAccount/${class_name}`}>Register</Link>
            </p>
            <p>or sign up with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default Login;
