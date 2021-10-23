import { Card, Container, Button } from 'react-bootstrap'
import { HeaderUser, FooterUser } from '../../component'
import  Catering  from '../../assets/catering.jpeg'
const HalamanOrderCatering1 = () => {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Container>
                <Card>
                    <Card.Header as="h2" className="p-3 mb-2 bg-primary text-white">
                        Order Catering
                    </Card.Header>
                    <Card.Img
                        variant="top"
                        src={Catering}
                        style={{ height: "20rem" }}
                    />
                    <Card.Body>
                        <Card.Title>Catering</Card.Title>
                        <Card.Text>
                            Dewasa ini kebutuhan akan gedung pernikahan dengan fasilitas
                            lengkap dan harga terjangkau memang semakin meningkat, terutama
                            di kota-kota besar. Banyak orang yang kesulitan mendapatkan
                            gedung pernikahan karena rata-rata gedung yang ada sudah full
                            booking..
                        </Card.Text>
                        <Button style={{ marginRight: "10px" }} variant="danger" href={"/usercatering"}>
                            Batal
                        </Button>
                        <Button variant="warning" href={"/formdatauser"}>
                            Order Sekarang
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
            <FooterUser></FooterUser>
        </>
    )
}
export default HalamanOrderCatering1