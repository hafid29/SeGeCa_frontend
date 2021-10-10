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
} from "react-bootstrap";
import {
  ProSidebar,
  Menu,
  SidebarFooter,
  SidebarHeader,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { FaFacebook, FaTwitter, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { ImageContact } from "../../assets/image_home_user.jpeg";
import { Link } from "react-router-dom";
import { HeaderUser, FooterUser } from "../../component";
const UserContact = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <Container fluid>
        <Card className="text-center">
          <Card.Header as="h2" className="p-3 mb-2 bg-success text-white">
            Contact
          </Card.Header>
        </Card>

        <Row>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Komentar</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Button href={"/dashboarduser"} size="lg">
              Kembali
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              variant="success"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </Col>
          <Col md="6">
            <ProSidebar
              style={{ height: "100%", width: "100%" }}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/7/7e/Catedral_Metropolitana_de_Sao_Paulo_1_Brasil.jpg"
              }
            >
              <Menu>
                <div style={{ marginTop: "20%" }}>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Button size="lg">
                        <FaFacebook></FaFacebook>
                        Facebook
                      </Button>
                    </Col>
                  </Row>
                  <h5 className="text-center">https://www.facebook.com</h5>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Button size="lg">
                        <FaTwitter></FaTwitter>
                        Twitter
                      </Button>
                    </Col>
                  </Row>
                  <h5 className="text-center">https://www.twitter.com</h5>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Button size="lg" variant="danger">
                        <FaGoogle></FaGoogle>
                        Akun Email
                      </Button>
                    </Col>
                  </Row>
                  <h5 className="text-center">https://www.google.com</h5>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Button size="lg" variant="success">
                        <FaWhatsapp></FaWhatsapp>
                        Whatsapp
                      </Button>
                    </Col>
                  </Row>
                  <h5 className="text-center">https://wa.me.com</h5>
                </div>
              </Menu>
            </ProSidebar>
          </Col>
        </Row>
      </Container>
      <FooterUser></FooterUser>
    </>
  );
};
export default UserContact;
