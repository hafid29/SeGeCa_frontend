import { HeaderUser } from '../../component'
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
    NavBrand,
    NavMenu,
} from 'react-bootstrap'
import HomeUser from '../../assets/image_gedung.jpeg'
const HalamanOrderGedung1 = () => {
    return (
        <>
            <HeaderUser></HeaderUser>
            <Container>
                <Card>
                    <Card.Header as="h2" className="p-3 mb-2 bg-primary text-white">
                        Order Gedung
                    </Card.Header>
                    <Card.Img
                        variant="top"
                        src={HomeUser}
                        style={{ height: "20rem" }}
                    />
                    <Card.Body>
                        <Card.Title>Gedung</Card.Title>
                        <Card.Text>
                            Dewasa ini kebutuhan akan gedung pernikahan dengan fasilitas
                            lengkap dan harga terjangkau memang semakin meningkat, terutama
                            di kota-kota besar. Banyak orang yang kesulitan mendapatkan
                            gedung pernikahan karena rata-rata gedung yang ada sudah full
                            booking..
                        </Card.Text>
                        <Button style={{ marginRight: "10px" }} variant="danger" href={"/usergedung"}>
                            Batal
                        </Button>
                        <Button variant="primary" href={"/formdatauser"}>
                            Order Sekarang
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default HalamanOrderGedung1