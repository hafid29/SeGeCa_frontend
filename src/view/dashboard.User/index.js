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
import {HeaderUser} from "../../component";
const ViewDashboardUser = () => {
  return (
    <>
    <HeaderUser></HeaderUser>
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
          <img src={LoginImage} />
        </Col>
      </Row>
    </>
  );
};
export default ViewDashboardUser;
