import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import LoginImage from "../../assets/login_image.jpeg";
import { Link, Redirect } from "react-router-dom";
import { LoginAction } from "../../redux/action/actionLogin";

const LoginView = (props) => {
  
  const [session, setSession] = useState({
    isAvailable: false,
    role_name: "",
  });

  React.useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("user_session"));
    if (obj == null) {
    } else if (obj.role_name == "USER") {
      setSession({
        isAvailable: true,
        role_name: obj.role_name,
      });
    } else {
      setSession({
        isAvailable: true,
        role_name: obj.role_name,
      });
    }
  }, []);

  const [condition, setCondition] = useState({
    message: "",
  });

  // menampung nilai yang dikirim dari form Ex: username,password
  const [FormLoginState, SetFormLoginState] = useState({
    username: "",
    password: "",
  });

  // handle submit
  const handleSubmit = (e) => {
    // menahan halaman tidak refresh
    e.preventDefault();

    // validasi form
    if (FormLoginState.username == "" && FormLoginState.password) {
      setCondition({ message: "Tolong lengkapi form username dan password" });
    }
    // kirim data ke server
    props.ActionLogin(FormLoginState.username, FormLoginState.password);
    console.log(FormLoginState);
  };

  return (
    <div>
      {/* if session available */}
      {session.isAvailable == false ? (
        ""
      ) : session.role_name == "USER" ? (
        <Redirect to="/dashboarduser" />
      ) : (
        <Redirect to="/dashboard" />
      )}
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
              {/* logika menampilkan pesan Gagal*/}
              {console.log(props.LoginState)}
              {props.LoginState.isAlert == false ? (
                ""
              ) : (
                <Alert>{props.LoginState.message}</Alert>
              )}
              <h1>Login</h1>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="input"
                    placeholder="Username"
                    value={FormLoginState.username}
                    onChange={(val) => {
                      SetFormLoginState({
                        ...FormLoginState,
                        username: val.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={FormLoginState.password}
                    onChange={(val) => {
                      SetFormLoginState({
                        ...FormLoginState,
                        password: val.target.value,
                      });
                    }}
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
                  Login
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
      {/* Arahkan ke halaman dashboar jika login berhasil */}
      {props.LoginState.isSuccess == false ||
      props.LoginState.datas.role_name == "" ? (
        ""
      ) : props.LoginState.isSuccess == true &&
        props.LoginState.datas.role_name == "USER" ? (
        <Redirect to="/dashboarduser" />
      ) : (
        <Redirect to="/dashboard" />
      )}
    </div>
  );
};

// Menyambungkan view atau halaman ke redux
const mapStateProps = (state) => {
  console.log(state.LoginReducer.datas);
  return {
    // menampung state yang dikirim oleh redux
    LoginState: state.LoginReducer,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    // Function atau fungsi untuk hit atau get data ke server
    ActionLogin: (username, password) =>
      dispatch(LoginAction(username, password)),
  };
};

export default connect(mapStateProps, mapDispatachToProps)(LoginView);
