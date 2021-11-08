import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal, NavDropdown, Dropdown } from "react-bootstrap";
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
  FaList
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
            <NavDropdown title="Layanan" id="basic-nav-dropdown" style={{ marginRight: "30px" }} >
              {path == "/usergedung" ? (
                <NavDropdown.Item
                  active
                  href={"./usergedung"}
                  style={{ marginRight: "30px" }}
                >
                  <FaBuilding style={{ marginRight: "5px" }} />
                  Gedung
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href={"./usergedung"} style={{ marginRight: "30px" }}>
                  <FaBuilding style={{ marginRight: "5px" }} />
                  Gedung
                </NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              {path == "/usercatering" ? (
                <NavDropdown.Item
                  active
                  href={"./usercatering"}
                  style={{ marginRight: "30px" }}
                >
                  <FaUtensils style={{ marginRight: "5px" }} />
                  Catering
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href={"./usercatering"} style={{ marginRight: "30px" }}>
                  <FaUtensils style={{ marginRight: "5px" }} />
                  Catering
                </NavDropdown.Item>
              )}
            </NavDropdown>
            <NavDropdown title="Info" id="basic-nav-dropdown" style={{ marginRight: "30px" }} >
              {path == "/userabout" ? (
                <NavDropdown.Item
                  active
                  href={"./userabout"}
                  style={{ marginRight: "30px" }}
                >
                  <FaQuestionCircle style={{ marginRight: "5px" }} />
                  About Us
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href={"./userabout"} style={{ marginRight: "30px" }}>
                  <FaQuestionCircle style={{ marginRight: "5px" }} />
                  About Us
                </NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              {path == "/usercontact" ? (
                <NavDropdown.Item
                  active
                  href={"./usercontact"}
                  style={{ marginRight: "10px" }}
                >
                  <FaFax style={{ marginRight: "5px" }} />
                  Contact
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href={"./usercontact"} style={{ marginRight: "10px" }}>
                  <FaFax style={{ marginRight: "5px" }} />
                  Contact
                </NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              {path == "/infoorder" ? (
                <NavDropdown.Item
                  active
                  href={"./infoorder"}
                  style={{ marginRight: "30px" }}
                >
                  <FaInfo style={{ marginRight: "5px" }} />
                  Cara Order
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item
                  href={"./infoorder"}
                  style={{ marginRight: "30px" }}
                >
                  <FaInfo style={{ marginRight: "5px" }} />
                  Cara Order
                </NavDropdown.Item>
              )}
            </NavDropdown>
            <NavDropdown title="Action" id="basic-nav-dropdown" style={{ marginRight: "30px" }} >
              <NavDropdown.Item
                onClick={(v) =>
                  hideModal({
                    isShow: true,
                  })
                }
                style={{ marginRight: "30px" }}
              >
                <FaSignOutAlt style={{ marginRight: "5px" }} />
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {path == "/formdatauser" ? (
                <NavDropdown.Item
                  active
                  href={"./formdatauser"}
                  style={{ marginRight: "30px" }}
                >
                  <FaUser style={{ marginRight: "5px" }} />
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href={"./formdatauser"} style={{ marginRight: "30px" }}>
                  <FaUser style={{ marginRight: "5px" }} />
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default HeaderUser;
