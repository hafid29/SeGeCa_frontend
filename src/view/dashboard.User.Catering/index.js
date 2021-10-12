import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import { HeaderUser, FooterUser } from '../../component'
import Image from '../../assets/image_catering.jpeg'
const UserCatering = () => {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Container>
                <Card.Header as="h2" className="p-3 mb-2 bg-warning text-Dark text-center">
                    Daftar Catering
                </Card.Header>
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
                                    <Button variant="warning">Detail / Pilih</Button>
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
export default UserCatering