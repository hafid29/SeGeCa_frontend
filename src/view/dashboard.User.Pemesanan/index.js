import { HeaderUser, FooterUser } from '../../component'
import { Container, Card, Button, Table, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Profile from '../../assets/profile.jpeg'
import { useLocation } from "react-router-dom";
const PemesananUser = () => {
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
                        <Card.Img src={Profile}
                            style={{ height: "17%", width: "17%" }}
                        />
                        <Card.Text>
                        </Card.Text>
                        <Table striped bordered hover variant="dark" >
                            <tbody >
                                <tr>
                                    <th>First Name</th>
                                    <td>:</td>
                                    <td>Peter</td>

                                    <th>Last Name</th>
                                    <td>:</td>
                                    <td>Parker</td>
                                </tr>
                                <tr>
                                    <th>Username</th>
                                    <td>:</td>
                                    <td>Parker</td>

                                    <th>No Telepon</th>
                                    <td>:</td>
                                    <td>Parker</td>
                                </tr>
                                <tr>
                                    <th>Gedung</th>
                                    <td>:</td>
                                    <td>Parker</td>

                                    <th>Catering</th>
                                    <td>:</td>
                                    <td>Parker</td>
                                </tr>
                            </tbody>
                            <Button variant="danger"><FaTrash style={{ marginRight: "5px" }} />Hapus</Button>
                        </Table>
                        <Button variant="primary">Lakukan Checkout Pemesanan</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>
            <FooterUser></FooterUser>
        </>
    )
}
export default PemesananUser