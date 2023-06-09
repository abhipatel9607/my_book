import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { getPostRequest } from "../util/util";

class SignupPage extends Component {
  state = {};

  registerUser = (e) => {
    e.preventDefault();
    const name = document.getElementById("form1").value;
    const email = document.getElementById("form2").value;
    const password = document.getElementById("form3").value;
    const role = this.props.match.params.class_name;

    const userData = JSON.stringify({
      name: name,
      email: email,
      role: role,
      password: password,
    });

    getPostRequest("register", userData);

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/JSON");

    // const requestOption = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: userData,
    //   redirect: "follow",
    // };

    // fetch("https://mybooks-an3b.onrender.com/api/user/register", requestOption)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
  };
  render() {
    // console.log(this.props);

    return (
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" type="email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3" type="password" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                  />
                </div>

                {/* <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div> */}

                <MDBBtn className="mb-4" size="lg" onClick={this.registerUser}>
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default SignupPage;
