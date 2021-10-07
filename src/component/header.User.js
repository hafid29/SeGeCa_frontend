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
  return (
    <>
      <Row>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Col>
            <Container>
              <Navbar.Brand href="#home">SEGECA</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            </Container>
          </Col>
          <Col>
            <Nav className="justify-content-center">
              <Nav.Link
                href={'./dashboarduser'}
                style={{ marginRight: "30px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href={'./formdatauser'}
                style={{ marginRight: "30px" }}
              >
                Pemesanan
              </Nav.Link>
              <Nav.Link href="#deets" style={{ marginRight: "30px" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </>
  );
};
export default HeaderUser;
