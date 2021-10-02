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
} from "react-bootstrap";
import LoginImage from "../../assets/login_image.jpeg";
import HomeUser from "../../assets/image_home_user.jpeg";
import Catering from "../../assets/catering.jpeg";
import { HeaderUser } from "../../component";
const ViewDashboardUser = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <br />
      <Row>
        <Col md={6}>
          {/* <Col md={6}>
          <Row>
            <Col>
              <img src={LoginImage} />
            </Col>
            <Col>
              <img src={LoginImage} />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          Event info
          <img src={LoginImage} />
        </Col> */}
          <Card>
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
              <Button variant="primary" href={"/formdatauser"}>
                Pesan Sekarang
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={Catering}
              style={{ height: "20rem" }}
            />
            <Card.Body>
              <Card.Title>Catering</Card.Title>
              <Card.Text>
                Catering adalah koki dan sekelompok tim yang menyiapkan, memasak
                dan menyajikan makanan. Kalau di Indonesia akrabnya disebut
                sebagai jasa boga yang melayani pemesanan makanan untuk berbagai
                acara (pesta, pribadi, institut pemerintahan dan yang ada
                hubungannya dengan kebutuhan makanan).
              </Card.Text>
              <Button variant="primary" href={"/formdatauser"}>
              Pesan Sekarang
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>INFORMASI</Card.Title>
              <Card.Text>
                Saat ini terdapat event besar besaran dengan mengadakan harga
                sewa promo bagi pelanggan berturut-turut memesan gedung dan
                catering sampai 3 kali banyaknya, selengkapnya klik tombol di
                bawah
              </Card.Text>
              <Button variant="primary" href={"/formdatauser"}>
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Row>
    </>
  );
};
export default ViewDashboardUser;
