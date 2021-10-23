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
} from "react-bootstrap";
import { HeaderUser, FooterUser } from "../../component";
import {  useLocation } from "react-router-dom";

const UserAbout = () => {
  const pathName = useLocation()
  return (
    <>
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <Container fluid>
        <Card className="text-center">
          <Card.Header as="h2" className="p-3 mb-2 bg-success text-white">
            About Us
          </Card.Header>
          <Card.Body>
            <Card.Title>Apa yang istemewa dari apilkasi ini ???</Card.Title>
            <Card.Text>
              Kemegahan dan kemewahan interior dengan konsep minimalis, sentuhan
              ekslusif dan gaya arsitektur modern sesuai dengan perkembangan
              jaman, kini hadir di Bojonegoro yaitu SEGECA ( Sewa Gedung dan
              catering). SEGECA memberikan pelayanan terbaiknya yaitu Sewa
              Gedung dan Catering. Tidak perlu kawatir / bimbang untuk memilih
              SEGECA karna disini Memiliki fasilitas bangunan utama untuk kamar
              Superior dan Restoran, bangunan gedung serba guna/function hall
              dan bangunan cottage, sehingga sangat cocok dipergunakan untuk
              acara liburan keluarga, Arisan, Pesta Ulang Tahun, Rombongan
              Piknik, Reuni, Family Gathering, Rapat, Seminar, Wisuda, Pesta
              Pernikahan dan lain-lain.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header as="h2" className="p-3 mb-2 bg-danger text-white">
            Visi
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Visi kami dalam mengembangkan aplikasi ini!!!
            </Card.Title>
            <Card.Text>
              Menjunjung tinggi akan kredibilitas dan kepuasan semua pelanggan
              secara terus - menerus agar dapat diketahui dan dikenal oleh
              seluruh lapisan masyarakat Indonesia melalui teknologi yang ada
              pada saat ini, serta menciptakan solusi persewaan gedung yang
              prospektif, inovatif dan juga investasi menguntungkan dengan harga
              sewa yang terjangkau pada mitra persewaan gedung SEGECA kami.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header as="h2" className="p-3 mb-2 bg-info text-white">
            History
          </Card.Header>
          <Card.Body>
            <Card.Title>Apa ya sejarahnya ???</Card.Title>
            <Card.Text>
              Pusat Pengkajian dan Pengembangan Islam Jakarta (Jakarta Islamic
              Centre) adalah sebuah lembaga yang berdiri di eks Lokasi
              Resosialisasi (Lokres) Kramat Tunggak, Tanjung Priuk, Jakarta
              Utara. Lokres Kramat Tunggak adalah nama sebuah Panti Sosial Karya
              Wanita (PKSW) Teratai Harapan Kramat Tunggak, yang terletak di
              jalan Kramat Jaya RW 019, Kelurahan Tugu Utara, Kecamatan Koja,
              Kotamadya Jakarta Utara. Areal tersebut tepatnya menempati lahan
              seluas 109.435 m2 yang terdiri dari sembilan Rukun Tetangga (RT).
              Kramat Tunggak (kramtung), kemashurannya tidak saja terkenal di
              Indonesia, namun juga terkenal hingga ke seluruh Asia Tenggara
              sebagai pusat jajan terbesar bagi kaum hidung belang. Pada awal
              pembukaannya tahun 1970-an, terdapat 300 orang WTS dengan 76 orang
              germo. Jumlah ini terus bertambah seiring bertambah bulan dan
              tahun. Menjelang akhir ditutupnya Lokres Kramtung tahun 1999,
              jumlahnya mencapai 1.615 orang WTS di bawah asuhan 258 orang
              germo/mucikari. Mereka tinggal di 277 unit bangunan yang memiliki
              3.54
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <FooterUser></FooterUser>
    </>
  );
};
export default UserAbout;
