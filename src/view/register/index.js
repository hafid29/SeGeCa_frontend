import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import LoginImage from "../../assets/login_image.jpeg";
import { RegisterAction } from "../../redux/action/actionRegister";
import { Link } from "react-router-dom";
const RegisterView = (props) => {
  // dump state
  const [register, setRegister] = useState({
    username: "",
    password: "",
    userRole: 2,
  });

  // func for handle and prevent refresh page
  const handleSubmit = (e) => {
    // menahan halaman agar tidak refresh
    e.preventDefault();
    props.ActionRegiser(
      register.username,
      register.password,
      register.userRole
    );
  };
  return (
    <div>
      <Container fluid>
        <div className="d-flex bd-highlight example-parent">
          <div className="p-2 w-80 bd-highlight col-example">
            <img src={LoginImage} />
          </div>
          <Row>
            <Col
              style={{
                alignSelf: "center",
              }}
            >
              {props.RegisterState.isAlert == false ? (
                ""
              ) : (
                <Alert>{props.RegisterState.message}</Alert>
              )}
              {
                props.RegisterState.isTrue == false ? (
                  ""
                ) : (
                  <Alert>{props.RegisterState.message}</Alert>
                )
              }
              <h1>Register</h1>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="input"
                    placeholder="Enter Username"
                    required
                    onChange={(val) =>
                      setRegister({
                        // mengambil nilai sebelumnya
                        ...register,
                        username: val.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(val) =>
                      setRegister({
                        // mengambil nilai sebelumnya
                        ...register,
                        password: val.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="align-self-center"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                    width: "60%",
                    marginLeft: "20%",
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="align-self-center"
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                    width: "60%",
                    height: "40px",
                    marginLeft: "20%",
                  }}
                >
                  <Link to="/">
                    <p style={{ color: "#ffffff" }}>Kembali</p>
                  </Link>
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.RegisterReducer)
  return {
    RegisterState: state.RegisterReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ActionRegiser: (username, password, role) => {
      dispatch(RegisterAction(username, password, role));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
