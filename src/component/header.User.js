import {
  Form,
  Button,
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Card,
  Nav,
  NavBrand,
  NavMenu,
} from "react-bootstrap";
const HeaderUser = (props) => {
  let path = props.pathName;
  return (
    <>
      <Row>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Col>
            <Container fluid>
              <Navbar.Brand href="#home">SEGECA</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            </Container>
          </Col>
          <Col>
            <Nav className="justify-content-center text-white">
              {path == "/dashboarduser" ? (
                <Nav.Link
                  active
                  href={"./dashboarduser"}
                  style={{ marginRight: "30px" }}
                >
                  Home
                </Nav.Link>
              ) : (
                <Nav.Link
                  href={"./dashboarduser"}
                  style={{ marginRight: "30px" }}
                >
                  Home
                </Nav.Link>
              )}
              <Nav.Link href={"./formdatauser"} style={{ marginRight: "30px" }}>
                Pemesanan
              </Nav.Link>
              <Nav.Link href={"./usergedung"} style={{ marginRight: "30px" }}>
                Gedung
              </Nav.Link>
              <Nav.Link href={"./usercatering"} style={{ marginRight: "30px" }}>
                Catering
              </Nav.Link>
              {path == "/userabout" ? (
                <Nav.Link
                  active
                  href={"./userabout"}
                  style={{ marginRight: "30px" }}
                >
                  About Us
                </Nav.Link>
              ) : (
                <Nav.Link href={"./userabout"} style={{ marginRight: "30px" }}>
                  About Us
                </Nav.Link>
              )}
              <Nav.Link href={"./usercontact"}>Contact</Nav.Link>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </>
  );
};
export default HeaderUser;
