import { Row, Col, Container, Card, Image } from "react-bootstrap";
import { HeaderUser, FooterUser } from "../../component";
import { useLocation } from "react-router-dom";
import Info from "../../assets/bg_infoorder.jpeg";
import Step1 from "../../assets/step1.JPG";
import Step2 from "../../assets/step2.JPG";
import Step3 from "../../assets/step3.JPG";
import Step4 from "../../assets/step4.JPG";
import Step5 from "../../assets/step5.JPG";



const InfoOrder = () => {
  const pathName = useLocation();
  return (
    <>
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <Container>
        <Card>
          <Card.Header
            as="h2"
            className="p-3 mb-3 bg-info text-white text-center">
            Cara Order Gedung
          </Card.Header>
        </Card>

        <Card className="bg-dark text-white">

          <Card.Title as="h2" className="text-center p-3 mb-3 bg-warning">
            Step 1
          </Card.Title>
          <Image
            src={Step1}
            style={{ height: "100%", width: "80%" }}
            className="mx-auto"
          />
          <Card.Text className="text-center p-3 mb-3">
            User harus melakukan Register terlebih dahulu agar bisa Login
          </Card.Text>

          <Card.Title as="h2" className="text-center p-3 mb-3 bg-warning">
            Step 2
          </Card.Title>
          <Image
            src={Step2}
            style={{ height: "50%", width: "80%" }}
            className="mx-auto"
          />
          <Card.Text className="text-center p-3 mb-3">
            Pilih menu Gedung kemudian pilih menu Detail/Pilih untuk melihat detail dari gedung tersebut
          </Card.Text>

          <Card.Title as="h2" className="text-center p-3 mb-3 bg-warning">
            Step 3
          </Card.Title>
          <Image
            src={Step3}
            style={{ height: "50%", width: "80%" }}
            className="mx-auto"
          />
          <Card.Text className="text-center p-3 mb-3">
            Tampilan gedung dan deskripsi gedung akan tampil, kemudian klik Order Sekarang
          </Card.Text>
          
          <Card.Title as="h2" className="text-center p-3 mb-3 bg-warning">
            Step 4
          </Card.Title>
          <Image
            src={Step4}
            style={{ height: "50%", width: "80%" }}
            className="mx-auto"
          />
          <Card.Text className="text-center p-3 mb-3">
            Lengkapi terlebih dahulu Form Data User, kemudian klik simpan
          </Card.Text>

          <Card.Title as="h2" className="text-center p-3 mb-3 bg-warning">
            Step 5
          </Card.Title>
          <Image
            src={Step5}
            style={{ height: "50%", width: "80%" }}
            className="mx-auto"
          />
          <Card.Text className="text-center p-3 mb-3">
            Untuk melihat pemesanan anda klik menu Pemesanan, jika sudah valid klik Lakukan Checkout Pemesanan
          </Card.Text>

        </Card>
      </Container>
      <FooterUser></FooterUser>
    </>
  );
};
export default InfoOrder;
