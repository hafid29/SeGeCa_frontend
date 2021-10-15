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
const ViewDashboard = () => {
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
          <Row style={{ marginTop: "40px" }}>
            <Col style={{ marginLeft: "4px" }}>
              ===================DISISI====================
            </Col>
          </Row>
        </Col>
        {/* Footer */}
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
export default ViewDashboard;
