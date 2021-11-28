import React, { useState, useEffect } from "react";
import { HeaderUser, FooterUser } from '../../component'
import { Container, Card, Button, Table, Row, Col, Alert, Image } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Profile from '../../assets/profile.jpeg'
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { ActionUserData } from "../../redux/action/actionUserData";
import { GetUserById } from "../../redux/action/actionGetUserById";
const PemesananUser = (props) => {
    const [userDetail, setUserDetail] = useState({
        no_telp: 0,
        photo_profile: null,
        first_name: null,
        last_name: "",
        user_id: 0,
    });
    // hit data from api
    const getUserId = (userid) => {
        props.ActionGetUserById(userid);
    };
    React.useEffect(async () => {
        const obj = JSON.parse(localStorage.getItem("user_session"));
        if (obj == null) {
            setUserDetail({
                no_telp: 0,
                photo_profile: null,
                first_name: null,
                last_name: "",
                user_id: 0,
            });
        }
        setUserDetail({
            ...userDetail,
            first_name: obj.first_name,
            user_id: obj.userId,
        });

        // load data dari API, ketika halman di akses
        await getUserId(obj.userId);
    }, []);
    const pathName = useLocation();
    return (
        <>
            <HeaderUser pathName={pathName.pathname}></HeaderUser>
            <Container>
                <Card bg="dark">
                    <Card.Header as="h2" className="p-3 mb-2 bg-info text-white text-center">Data User Pemesanan</Card.Header>
                    <Card.Body variant="dark" >
                        <Button className="mb-3"><FaEdit style={{ marginRight: "5px" }} />Edit</Button>
                        <Card.Title className="col col-lg-2 p-3 mb-3 text-white bg-secondary text-center">Foto</Card.Title>
                        {props.stateGetUserById.isLoading == true ? (
                            <ClipLoader
                                color={"white"}
                                loading={props.stateGetUserById.isLoading}
                                size={40}
                            />
                        ) : (
                            <>
                                <Image
                                    style={{ height: 171, width: 180 }}
                                    src={props.stateGetUserById.image_url} roundedCircle />
                            </>
                        )}
                        <Card.Text>
                        </Card.Text>
                        <Table striped bordered hover variant="dark" >
                            {/* <tbody >
                                {props.stateGetUser.isLoading == true ? (
                                    <>
                                        <tr>
                                            <Alert variant="success">
                                                <Alert.Heading>Processing data....</Alert.Heading>
                                            </Alert>
                                        </tr>
                                    </>
                                ) : (
                                    props.stateGetUserById.data.map((data, index) => {
                                        return [
                                            <tr className="text-center" key={index}>
                                                <td>{data.id}</td>
                                                <td>{data.username}</td>
                                                <td>{data.first_name}</td>
                                                <td>{data.last_name}</td>
                                                <td>{data.no_telp}</td>
                                                <td>
                                                    <Row className="text-center">
                                                        <Col>
                                                            <Button>
                                                                <FaEdit></FaEdit>
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button
                                                                variant="danger"
                                                                onClick={(val) => {
                                                                    console.log("Hapus data id " + data.id);
                                                                }}
                                                            >
                                                                <FaTrash></FaTrash>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>,
                                        ];
                                    })
                                )}
                            </tbody> */}
                            <tbody>
                                {props.stateGetUserById.isLoading == true ? (
                                    <>
                                        <tr>
                                            <Alert variant="success">
                                                <Alert.Heading>Processing data....</Alert.Heading>
                                            </Alert>
                                        </tr>
                                    </>
                                ) : (
                                    <>
                                        <tr>
                                            <th>First Name</th>
                                            <td>:</td>
                                            <td>{props.stateGetUserById.first_name}</td>

                                            <th>Last Name</th>
                                            <td>:</td>
                                            <td>{props.stateGetUserById.last_name}</td>
                                        </tr>,
                                        <tr>
                                            <th>Username</th>
                                            <td>:</td>
                                            <td>{props.stateGetUserById.username}</td>

                                            <th>No Telepon</th>
                                            <td>:</td>
                                            <td>{props.stateGetUserById.no_telp}</td>
                                        </tr>,
                                        <tr>
                                            <th>Gedung</th>
                                            <td>:</td>
                                            <td>Parker</td>

                                            <th>Catering</th>
                                            <td>:</td>
                                            <td>Parker</td>
                                        </tr>,
                                    </>
                                )}
                            </tbody>
                            <Button variant="danger"><FaTrash style={{ marginRight: "5px" }} />Hapus</Button>
                        </Table>
                        <Button variant="primary" href={'./transaksi'}>Lakukan Checkout Pemesanan</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>
            <FooterUser></FooterUser>
        </>
    );
};
const mapStateProps = (state) => {
    return {
        stateGetUserById: state.GetUserByIdReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ActionGetUserById: (user_id) => dispatch(GetUserById(user_id)),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(PemesananUser);