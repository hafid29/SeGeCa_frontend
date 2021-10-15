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
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from 'react-router-dom'
const TambahGedung = () => {
  return (
    <>
      <Row>
        <Navbar bg="primary">
          <Navbar.Brand href="./dashboard">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Col md={2}>
          {/* Death row */}
          <Row />
          <Row>
            <div style={{ height: "100vh" }}>
              <ProSidebar
                style={{ height: "90%" }}
                image={
                  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Catedral_Metropolitana_de_Sao_Paulo_1_Brasil.jpg"
                }
              >
                <Menu iconShape="circle">
                  <SubMenu title="Menejemen Gedung">
                    <MenuItem>Tambah Gedung<Link to="./tambahgedung" /></MenuItem>
                    <MenuItem>Daftar Gedung<Link to="./admingedung" /></MenuItem>
                  </SubMenu>
                  <SubMenu title="Menejemen Catering">
                    <MenuItem>Tambah Catering<Link to="./tambahcatering"/></MenuItem>
                    <MenuItem>Daftar Catering<Link to="./admincatering"/></MenuItem>
                  </SubMenu>
                  <SubMenu title="Transaksi">
                    <MenuItem>History Transaksi</MenuItem>
                    <MenuItem>Konfirmasi Transaksi</MenuItem>
                  </SubMenu>
                </Menu>
                <SidebarFooter></SidebarFooter>
              </ProSidebar>
            </div>
          </Row>
        </Col>

        <Col style={{ marginLeft: "50px", marginTop: "4px" }}>
          {/* Row Jumlah transaksi */}
          <Row>
            <Card.Header as="h2" className="p-3 mb-2 bg-info text-Dark text-center">
              Form Tambah Gedung
            </Card.Header>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col style={{ marginLeft: "4px" }}>

              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Nama Bangunan</Form.Label>
                    <Form.Control type="text" placeholder="Nama Gedung" />
                  </Form.Group>
                </Row>
                {/*  */}
                <Button href={"/dashboard"} size="lg">
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
              </Form>
              {/* Footer */}
            </Col>
          </Row>
          {/* chart End */}
        </Col>
        <Navbar
          expand="xl"
          variant="light"
          bg="primary"
          style={{ marginTop: "-4.3%" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </Row>
      {/* Container parent end */}
    </>
  );
};
export default TambahGedung;
