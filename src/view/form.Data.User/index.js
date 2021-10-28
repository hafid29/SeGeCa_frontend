import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col,Alert } from "react-bootstrap";
import { HeaderUser, FooterUser } from "../../component";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { ActionUserData } from "../../redux/action/actionUserData";

const FormDataUser = (props) => {
  // handle post state
  const [userDetail, setUserDetail] = useState({
    no_telp: 0,
    photo_profile: null,
    first_name: "",
    last_name: "",
    user_id: 0,
  });

  React.useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("user_session"));
    if (obj == null) {
      console.log("kosong");
    }
    setUserDetail({
      ...userDetail,
      user_id: obj.userId,
    });
  }, []);

  const HandleForm = (e) => {
    e.preventDefault();
    props.ActionUserData(userDetail);
  };
  const pathName = useLocation();
  return (
    <>
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <br />
      <br />
      <Container>
        <h2>FORM DATA USER</h2>
        <br />
        <Form onSubmit={(e) => HandleForm(e)}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>No. Telepon</Form.Label>
              <Form.Control
                type="number"
                placeholder="08xxxxxxx"
                onChange={(v) =>
                  setUserDetail({
                    ...userDetail,
                    no_telp: v.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Foto</Form.Label>
            <input
              type="file"
              className="form-control"
              size="md"
              onChange={(v) =>
                setUserDetail({
                  ...userDetail,
                  photo_profile: v.target.files[0],
                })
              }
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Pertama"
                onChange={(v) =>
                  setUserDetail({
                    ...userDetail,
                    first_name: v.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Terakhir"
                onChange={(v) =>
                  setUserDetail({
                    ...userDetail,
                    last_name: v.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>

          <Button href={"/dashboarduser"} size="lg">
            Kembali
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="success"
            type="submit"
            size="lg"
          >
            Simpan
          </Button>
        </Form>
      </Container>
      <FooterUser></FooterUser>
    </>
  );
};

const mapStateProps = (state) => {
  return {
    stateAddUserData: state.AddUserDataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ActionUserData: (data) => dispatch(ActionUserData(data)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(FormDataUser);
