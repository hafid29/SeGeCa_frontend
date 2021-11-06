import { Row, Col, Container, Card, Image, Button } from "react-bootstrap";
import { HeaderUser, FooterUser } from "../../component";
import { useLocation } from "react-router-dom";
import wa from "../../assets/wa.png";
import payment from "../../assets/payment.png";

const Transaksi = () => {
  const pathName = useLocation();
  return (
    <>
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <Container>
        <Card className="text-center">
          <Card.Header as="h2">Hubungi Penyewa Gedung</Card.Header>
          <Card.Body>
            <Card.Title>Hubungi Via WhatsApp</Card.Title>
            <Image
              src={wa}
              style={{ height: "15%", width: "15%" }}
              className="mx-auto"
            />
            <Card.Text>
              Anda akan diarahkan ke chat WhatsApp untuk diskusi dengan admin
              penyewa gedung
            </Card.Text>
            <Button variant="success" href={'https://web.whatsapp.com/send?phone=6282338152403&text=Hay!!%20Apakah%20gedung%20bisa%20saya%20sewa?'}>WhatsApp</Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header as="h2">Bayar Via Payment</Card.Header>
          <Card.Body>
            <Card.Title>Bayar Sekarang</Card.Title>
            <Image
              src={payment}
              style={{ height: "15%", width: "15%" }}
              className="mx-auto"
            />
            <Card.Text>
              Anda akan mendapat kode pembayaran melalui Bank
            </Card.Text>
            <Button variant="info">Payment</Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
        <Button variant="danger" className="mb-3 mx-auto" href={'./pemesananuser'}>Batalkan Pembayaran</Button>
        </Card>
      </Container>
      <FooterUser></FooterUser>
    </>
  );
};
export default Transaksi;
