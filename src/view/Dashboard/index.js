import {
  Form,
  Button,
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
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

const ViewDashboard = () => {
  return (
    <>
      <Row>
        <Navbar bg="primary" expand="xl">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <Col md={2}>
          {/* Death row */}
          <Row />
          <Row>
            <div style={{ height: "100vh" }}>
              <ProSidebar style={{ height: "90%" }} image={"https://upload.wikimedia.org/wikipedia/commons/7/7e/Catedral_Metropolitana_de_Sao_Paulo_1_Brasil.jpg"}>
                <Menu iconShape="circle">
                  <SubMenu title="Menejemen Gedung">
                    <MenuItem>Tambah Gedung</MenuItem>
                    <MenuItem>Edit Gedung</MenuItem>
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
        <Col style={{ marginLeft: "50px", marginTop: "4px" }}>Samping-2</Col>
        <Navbar
          expand="xl"
          variant="light"
          bg="primary"
          style={{ marginTop: "-4.3%" }}
        >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </Row>
      {/* Container parent end */}
    </>
  );
};
export default ViewDashboard;
