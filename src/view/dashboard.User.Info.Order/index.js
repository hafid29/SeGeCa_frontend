import { Row, Col, Container, Card } from 'react-bootstrap'
import { HeaderUser, FooterUser } from '../../component'
import Home from '../../assets/image_gedung.jpeg'
const InfoOrder = () => {
    return (
        <>
            <HeaderUser>
            </HeaderUser>
            <Container>
                <Card>
                    <Card.Header as="h2" className="p-3 mb-3 bg-info text-white text-center">Info Order</Card.Header>
                </Card>
                <Card className="bg-dark text-white">

                    <Card.Img src={Home} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <FooterUser>
            </FooterUser>
        </>
    )
}
export default InfoOrder