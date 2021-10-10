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
import { Link } from 'react-router-dom'
import Image from "../assets/image_home_user.jpeg";
import { FaFacebook, FaTwitter, FaGoogle, FaWhatsapp } from "react-icons/fa";

const FooterUser = () => {
  return (
    <>
      <Card>
        <Card.Body className="p-3 mb-2 bg-dark text-white">
          <Card.Title className="p-3 mb-2 bg-primary text-white text-center" >SeGeCa(Sewa Gedung dan Catering)
          </Card.Title>
          <Card.Text className="p-3 mb-2 bg-dark text-white">
          </Card.Text>
          <Row style={{ marginLeft: "10%" }}>
            <Col className="text-Left" >
              <Row>
                <Col >
                  Home
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Pemesanan
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Gedung
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Catering
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    About Us
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Contact
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col >
              <Row>
                <Col>
                  Pemesanan
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Pemesanan
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Gedung
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Catering
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    About Us
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Contact
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col >
              <Row>
                <Col>
                  About us
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Pemesanan
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Gedung
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Catering
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    About Us
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Contact
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col >
              <Row>
                <Col>
                  Contact
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Pemesanan
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Gedung
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Daftar Catering
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    About Us
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="./formdatauser" >
                    Contact
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Card.Title className="p-3 mb-2 bg-dark text-white"></Card.Title>

          <Row style={{ marginLeft: "10%" }}>
            <Col>
              <Link to="./formdatauser" >
                <FaFacebook></FaFacebook> Facebook
              </Link>
            </Col>
            <Col>
              <Link to="./formdatauser" >
                <FaTwitter></FaTwitter> Twitter
              </Link>
            </Col>
            <Col>
              <Link to="./formdatauser" >
                <FaGoogle></FaGoogle> Email
              </Link>
            </Col>
            <Col>
              <Link to="./formdatauser" >
                <FaWhatsapp></FaWhatsapp> Whatsapp
              </Link>
            </Col>
          </Row>

        </Card.Body>
        <Card.Footer className="p-3 mb-2 bg-secondary text-white text-center">Aplication Create By : group 4 Boys Who Cry</Card.Footer>
      </Card>
    </>
  )
}
export default FooterUser