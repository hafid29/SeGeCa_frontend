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
import { Bar } from "react-chartjs-2";
import { DumyData } from "./dumy.datas.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                    <MenuItem>Tambah Gedung<Link to="./tambahgedung"/></MenuItem>
                    <MenuItem>Daftar Gedung<Link to="./admingedung"/></MenuItem>
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
          <Row md={4} style={{ justifyContent: "center", marginTop: "40px" }}>
            <Col style={{ marginLeft: "4px" }} md={4}>
              <Card style={{ marginTop: "4px" }}>
                <Card.Header
                  style={{
                    background: "#eff748",
                  }}
                >
                  Down Payment
                </Card.Header>
                <Card.Body
                  style={{
                    background: "#eff748",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "40%",
                      marginRight: "40%",
                    }}
                  >
                    <h1>10</h1>
                  </div>
                </Card.Body>
                <Card.Footer
                  style={{
                    background: "#f1fa3c",
                  }}
                >
                  <small className="text-muted">Last Data 3 Days Ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={2}></Col>
            <Col style={{ marginLeft: "4px" }} md={4}>
              <Card style={{ marginTop: "4px" }}>
                <Card.Header
                  style={{
                    background: "#3bdb5e",
                  }}
                >
                  Pembayaran Lunas
                </Card.Header>
                <Card.Body
                  style={{
                    background: "#3bdb5e",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "40%",
                      marginRight: "40%",
                    }}
                  >
                    <h1>10</h1>
                  </div>
                </Card.Body>
                <Card.Footer
                  style={{
                    background: "#3bdb5e",
                  }}
                >
                  <small className="text-muted">Last Data 3 Days Ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          {/* Row Jumlah end */}
          {/* chart Start */}
          <Row
            xs={12}
            md={8}
            style={{
              justifyContent: "left",
              marginTop: "40px",
            }}
          >
            <Col
              md={10}
              style={{
                marginLeft: "90px",
              }}
            >
              <Card>
                <Card.Header>
                  <h5>History Transaksi</h5>
                </Card.Header>
                <Card.Body>
                  <Bar height={65} data={DumyData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* chart End */}
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
