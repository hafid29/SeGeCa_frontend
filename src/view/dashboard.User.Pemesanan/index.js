import { HeaderUser, FooterUser } from '../../component'
import { Container, Card, Button } from 'react-bootstrap'
const PemesananUser = () => {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Container>
                <Card className="text-center">
                    <Card.Header>Data User Pemesanan</Card.Header>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>
            <FooterUser></FooterUser>
        </>
    )
}
export default PemesananUser