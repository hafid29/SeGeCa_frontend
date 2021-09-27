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
import LoginImage from "../../assets/login_image.jpeg";
const ViewDashboardUser = () => {
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
              <Nav.Link href="#deets" style={{ marginRight: "30px" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#deets" style={{ marginRight: "30px" }}>
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
      <Row>
        <Col md={6}>
          <Row>
            <Col>
              <img src={LoginImage} />
            </Col>
            <Col>
              <img src={LoginImage} />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          Event info
          <img src={LoginImage}/>
        </Col>
      </Row>
    </>
  );
};
export default ViewDashboardUser;
