import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert,Image } from "react-bootstrap";
import { HeaderUser, FooterUser } from "../../component";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { ActionUserData } from "../../redux/action/actionUserData";
import { GetUserById } from "../../redux/action/actionGetUserById";

const FormDataUser = (props) => {
  // handle post state
  const [userDetail, setUserDetail] = useState({
    no_telp: 0,
    photo_profile: null,
    first_name: null,
    last_name: "",
    user_id: 0,
  });
  // hit data from api
  const getUserId = (userid) => {
    props.ActionGetUserById(userid);
  };
  React.useEffect(async () => {
    const obj = JSON.parse(localStorage.getItem("user_session"));
    if (obj == null) {
      setUserDetail({
        no_telp: 0,
        photo_profile: null,
        first_name: null,
        last_name: "",
        user_id: 0,
      });
    }
    setUserDetail({
      ...userDetail,
      first_name: obj.first_name,
      user_id: obj.userId,
    });

    // load data dari API, ketika halman di akses
    await getUserId(obj.userId);
  }, []);

  const HandleFormAddData = (e) => {
    e.preventDefault();
    props.ActionUserData(userDetail);
  };
  const HandleFormEdit = (e) => {
    e.preventDefault();
    console.log("Run");
  };

  const pathName = useLocation();
  return (
    <>
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <br />
      <br />
      <Container>
        <h2 className="text-center">FORM DATA USER</h2>
        <br />
        <Form
          onSubmit={(e) =>
            props.stateGetUserById.first_name == null
              ? HandleFormAddData(e)
              : HandleFormEdit(e)
          }
        >
          <Row sm={3}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              {props.stateGetUserById.isLoading == true ? (
                <ClipLoader
                  color={"black"}
                  loading={props.stateGetUserById.isLoading}
                  size={10}
                />
              ) : (
                <Form.Control
                  type="text"
                  placeholder="Nama Pertama"
                  defaultValue={props.stateGetUserById.first_name}
                  onChange={(v) =>
                    setUserDetail({
                      ...userDetail,
                      first_name: v.target.value,
                    })
                  }
                />
              )}
            </Form.Group>
          </Row>
          <Row sm={3}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              {props.stateGetUserById.isLoading == true ? (
                <ClipLoader
                  color={"black"}
                  loading={props.stateGetUserById.isLoading}
                  size={10}
                />
              ) : (
                <Form.Control
                  type="text"
                  placeholder="Nama Terakhir"
                  defaultValue={props.stateGetUserById.last_name}
                  onChange={(v) =>
                    setUserDetail({
                      ...userDetail,
                      last_name: v.target.value,
                    })
                  }
                />
              )}
            </Form.Group>
          </Row>
          <Row sm={3}>
            <Form.Group className="mb-3">
              <Form.Label>No. Telepon</Form.Label>
              {props.stateGetUserById.isLoading == true ? (
                <ClipLoader
                  color={"black"}
                  loading={props.stateGetUserById.isLoading}
                  size={10}
                />
              ) : (
                <Form.Control
                  type="number"
                  placeholder="08xxxxxxx"
                  defaultValue={props.stateGetUserById.no_telp}
                  onChange={(v) =>
                    setUserDetail({
                      ...userDetail,
                      no_telp: v.target.value,
                    })
                  }
                />
              )}
            </Form.Group>
          </Row>
          <Row sm={3}>
            <Form.Group className="mb-3">
              {/* TODO: Buat kondisi jika data ada maka jadi picture */}
              {props.stateGetUserById.isLoading == true ? (
                <ClipLoader
                  color={"black"}
                  loading={props.stateGetUserById.isLoading}
                  size={10}
                />
              ) : (
                <>
                  <Form.Label>Foto</Form.Label>
                  {props.stateGetUserById.photo_profile == null ? (
                    <input
                      type="file"
                      className="form-control"
                      sm={3}
                      onChange={(v) =>
                        setUserDetail({
                          ...userDetail,
                          photo_profile: v.target.files[0],
                        })
                      }
                    />
                  ) : (
                    // TODO: Get photo profile from api
                    <Image 
                    style={{ height: 171, width: 180 }}
                    src={props.stateGetUserById.image_url} roundedCircle />
                  )}
                </>
              )}
            </Form.Group>
          </Row>

          <Button href={"/dashboarduser"} size="lg" className="mb-3">
            Kembali
          </Button>
          {props.stateGetUserById.first_name == null ? (
            <Button
              style={{ marginLeft: "10px" }}
              className="mb-3"
              variant="success"
              type="submit"
              size="lg"
            >
              Simpan
            </Button>
          ) : (
            <Button
              style={{ marginLeft: "10px" }}
              className="mb-3"
              variant="success"
              type="submit"
              size="lg"
            >
              Edit
            </Button>
          )}
        </Form>
      </Container>
      <FooterUser></FooterUser>
    </>
  );
};

const mapStateProps = (state) => {
  return {
    stateAddUserData: state.AddUserDataReducer,
    stateGetUserById: state.GetUserByIdReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ActionUserData: (data) => dispatch(ActionUserData(data)),
    ActionGetUserById: (user_id) => dispatch(GetUserById(user_id)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(FormDataUser);
