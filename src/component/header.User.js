import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaClipboard,
  FaBuilding,
  FaUtensils,
  FaQuestionCircle,
  FaFax,
  FaRegBuilding,
  FaSignOutAlt,
  FaUser,
  FaInfo,
} from "react-icons/fa";
// import Modals from "./modal";

const HeaderUser = (props) => {
  const [modal, hideModal] = useState({
    isShow: false,
  });
  const HandleHide = () => {
    hideModal({
      isShow: false,
    });
  };
  let path = props.pathName;
  return (
    <>
      {modal.isShow == false ? (
        ""
      ) : (
        <Modal show={modal} onHide={HandleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Anda yakin untuk logout ?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Wes mbok pastik o?</Modal.Body>
          <Modal.Footer>
            <Link
              to="/"
              className="btn btn-primary"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Oke
            </Link>
          </Modal.Footer>
        </Modal>
      )}
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand className="text-center">
            <FaRegBuilding style={{ marginRight: "10px" }} />
            SEGECA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="justify-content-end text-white">
            {path == "/dashboarduser" ? (
              <Nav.Link
                active
                href={"./dashboarduser"}
                style={{ marginRight: "30px" }}
              >
                <FaHome style={{ marginRight: "5px" }} />
                Home
              </Nav.Link>
            ) : (
              <Nav.Link
                src={FaHome}
                href={"./dashboarduser"}
                style={{ marginRight: "30px" }}
              >
                <FaHome style={{ marginRight: "5px" }} />
                Home
              </Nav.Link>
            )}
            {path == "/pemesananuser" ? (
              <Nav.Link
                active
                href={"./pemesananuser"}
                style={{ marginRight: "30px" }}
              >
                <FaClipboard style={{ marginRight: "5px" }} />
                Pemesanan
              </Nav.Link>
            ) : (
              <Nav.Link
                href={"./pemesananuser"}
                style={{ marginRight: "30px" }}
              >
                <FaClipboard style={{ marginRight: "5px" }} />
                Pemesanan
              </Nav.Link>
            )}
            {path == "/usergedung" ? (
              <Nav.Link
                active
                href={"./usergedung"}
                style={{ marginRight: "30px" }}
              >
                <FaBuilding style={{ marginRight: "5px" }} />
                Gedung
              </Nav.Link>
            ) : (
              <Nav.Link href={"./usergedung"} style={{ marginRight: "30px" }}>
                <FaBuilding style={{ marginRight: "5px" }} />
                Gedung
              </Nav.Link>
            )}
            {path == "/usercatering" ? (
              <Nav.Link
                active
                href={"./usercatering"}
                style={{ marginRight: "30px" }}
              >
                <FaUtensils style={{ marginRight: "5px" }} />
                Catering
              </Nav.Link>
            ) : (
              <Nav.Link href={"./usercatering"} style={{ marginRight: "30px" }}>
                <FaUtensils style={{ marginRight: "5px" }} />
                Catering
              </Nav.Link>
            )}
            {path == "/userabout" ? (
              <Nav.Link
                active
                href={"./userabout"}
                style={{ marginRight: "30px" }}
              >
                <FaQuestionCircle style={{ marginRight: "5px" }} />
                About Us
              </Nav.Link>
            ) : (
              <Nav.Link href={"./userabout"} style={{ marginRight: "30px" }}>
                <FaQuestionCircle style={{ marginRight: "5px" }} />
                About Us
              </Nav.Link>
            )}
            {path == "/usercontact" ? (
              <Nav.Link
                active
                href={"./usercontact"}
                style={{ marginRight: "10px" }}
              >
                <FaFax style={{ marginRight: "5px" }} />
                Contact
              </Nav.Link>
            ) : (
              <Nav.Link href={"./usercontact"} style={{ marginRight: "10px" }}>
                <FaFax style={{ marginRight: "5px" }} />
                Contact
              </Nav.Link>
            )}
            {path == "/infoorder" ? (
              <Nav.Link
                active
                href={"./infoorder"}
                style={{ marginRight: "30px" }}
              >
                <FaInfo style={{ marginRight: "5px" }} />
                Cara Order
              </Nav.Link>
            ) : (
              <Nav.Link
                href={"./infoorder"}
                style={{ marginRight: "30px" }}
              >
                <FaInfo style={{ marginRight: "5px" }} />
                Cara Order
              </Nav.Link>
            )}
            <Nav.Link
              onClick={(v) =>
                hideModal({
                  isShow: true,
                })
              }
              style={{ marginRight: "30px" }}
            >
              <FaSignOutAlt style={{ marginRight: "5px" }} />
              Logout
            </Nav.Link>
            {path == "/formdatauser" ? (
              <Nav.Link
                active
                href={"./formdatauser"}
                style={{ marginRight: "30px" }}
              >
                <FaUser style={{ marginRight: "5px" }} />
              </Nav.Link>
            ) : (
              <Nav.Link href={"./formdatauser"} style={{ marginRight: "30px" }}>
                <FaUser style={{ marginRight: "5px" }} />
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default HeaderUser;
