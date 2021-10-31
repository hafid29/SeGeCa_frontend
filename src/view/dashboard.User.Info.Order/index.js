import { Row, Col, Container, Card } from 'react-bootstrap'
import { HeaderUser, FooterUser } from '../../component'
import { useLocation } from "react-router-dom";
import Info from '../../assets/bg_infoorder.jpeg'
const InfoOrder = () => {
    const pathName = useLocation();
    return (
        <>
            <HeaderUser pathName={pathName.pathname}>
            </HeaderUser>
            <Container>
                <Card>
                    <Card.Header as="h2" className="p-3 mb-3 bg-info text-white text-center">Info Order</Card.Header>
                </Card>
                <Card className="bg-dark text-white">

                    <Card.Img src={Info} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Info Order</Card.Title>
                        <Card.Text>
                            User harap mengisi data terlebih dahulu
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