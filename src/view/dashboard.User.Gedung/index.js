import { Card, Row, Col, Button, Container, Form } from 'react-bootstrap'
import { HeaderUser, FooterUser } from '../../component'
import Image from '../../assets/image_gedung.jpeg'
import { FaSearch } from 'react-icons/fa'
const UserGedung = () => {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Container fluid>
                <Row>
                    <Card.Header as="h2" className="p-3 mb-2 bg-info text-Dark text-center">
                        Daftar Gedung
                    </Card.Header>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 8 }}>
                        <Form.Control placeholder="Search Building" />
                    </Col>
                    <Col>
                        <Button variant="info"><FaSearch className="text-white"></FaSearch></Button>
                    </Col>
                </Row>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Alamat</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content.This content is a little bit longer.
                                    </Card.Text>
                                    <Button href={"/halamanordergedung1"} variant="warning">Detail / Pilih</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <FooterUser></FooterUser>
        </>
    )
}
export default UserGedung