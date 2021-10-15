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
    Table
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle, FaWhatsapp, FaSearch, FaEdit, FaTrash } from "react-icons/fa";
const AdminGedung = () => {
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
                                        <MenuItem>Tambah Catering<Link to="./tambahcatering" /></MenuItem>
                                        <MenuItem>Daftar Catering<Link to="./admincatering" /></MenuItem>
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
                            Daftar Gedung
                        </Card.Header>
                        <Col md="auto">
                            <Form.Control placeholder="Search Building" />
                        </Col>
                        <Col>
                            <Button variant="info"><FaSearch className="text-white"></FaSearch></Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "40px" }}>
                        <Col style={{ marginLeft: "4px" }}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr className="text-center">
                                        <th>id</th>
                                        <th>building_name</th>
                                        <th>building_address</th>
                                        <th>type_name</th>
                                        <th>actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Islamic Center</td>
                                        <td>Bojonegoro</td>
                                        <td>engagement</td>
                                        <td>
                                            <Row className="text-center">
                                                <Col>
                                                    <Button><FaEdit></FaEdit></Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="danger"><FaTrash></FaTrash></Button>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
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
        </>
    )
}
export default AdminGedung