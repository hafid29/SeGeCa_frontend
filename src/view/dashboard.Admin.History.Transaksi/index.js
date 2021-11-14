import React, { useState, useEffect } from "react";
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
    Table,
    Modal
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
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle, FaWhatsapp, FaSearch, FaUser, FaEdit, FaTrash, FaHome, FaSignOutAlt, FaRegBuilding, FaCheck } from "react-icons/fa";
const HistoryTransaksi = () => {
    const [modal, hideModal] = useState({
        isShow: false,
    });
    const HandleHide = () => {
        hideModal({
            isShow: false,
        });
    };
    return (
        <>
            {modal.isShow == false ? (
                ""
            ) : (
                <Modal show={modal} onHide={HandleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Anda yakin untuk logout ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Pilih Oke Keluar</Modal.Body>
                    <Modal.Footer>
                        <Link
                            to="/"
                            className="btn btn-primary"
                            onClick={() => {
                                localStorage.clear();
                            }}
                        >
                            Oke
                        </Link>
                    </Modal.Footer>
                </Modal>
            )}
            <Row>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand className="text-center">
                        <FaRegBuilding style={{ marginRight: "10px" }} />
                        SEGECA
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                    <Nav className="text-white">
                        <NavDropdown title={
                            <span>
                                <FaUser /> Admin
                            </span>
                        }
                            id='collasible-nav-dropdown' id="basic-nav-dropdown" style={{ marginRight: "30px" }} >
                            <NavDropdown.Item
                                onClick={(v) =>
                                    hideModal({
                                        isShow: true,
                                    })
                                }
                                style={{ marginRight: "30px" }}
                            >
                                <FaSignOutAlt style={{ marginRight: "5px" }} />
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
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
                                        <MenuItem>History Transaksi<Link to="./history" /></MenuItem>
                                        <MenuItem>Konfirmasi Transaksi<Link to="./konfirmasi" /></MenuItem>
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
                        <Card.Header as="h2" className="p-3 mb-2 bg-success text-white text-center">
                            History Transaksi User
                        </Card.Header>
                        <Col md="auto">
                            <Form.Control placeholder="Search Transaksi User" />
                        </Col>
                        <Col>
                            <Button variant="success"><FaSearch className="text-white"></FaSearch></Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "40px" }}>
                        <Col style={{ marginLeft: "4px" }}>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr className="text-center">
                                        <th>id</th>
                                        <th>Nama User</th>
                                        <th>No telepon</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Segeca</td>
                                        <td>08xxxxxx</td>
                                        <td>Lunas</td>
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
            {/* Container parent end */}
        </>
    );
};
export default HistoryTransaksi;
