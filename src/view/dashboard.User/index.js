import React, { useState, useEffect } from "react";
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
import HomeUser from "../../assets/image_home_user.jpeg";
import Catering from "../../assets/catering.jpeg";
import { HeaderUser, FooterUser,Modal } from "../../component";
import { useLocation } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

const ViewDashboardUser = () => {
  const [session, setSession] = useState({
    isAvailable: false,
    role_name: "",
  });
  React.useEffect(() => {
    const obj = localStorage.getItem("user_session");
    console.log(obj)
    if (obj == null) {
      setSession({
        isAvailable: false,
      });
    }else{
      setSession({
        isAvailable: true,
      });
    }
  }, []);
 
  const pathName = useLocation();

  return (
    <>
      {session.isAvailable == true ? "": <Modal title="Anda Belum login" message="Lakukan Login terlebih dahulu" isShow="true"></Modal> }
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <br />
      <Row>
        <Col md={6}>
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
              <Button variant="warning" href={"/formdatauser"}>
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
              <Button className="text-white" variant="info" href={"/formdatauser"}>
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Row>
      <FooterUser></FooterUser>
    </>
  );
};
export default ViewDashboardUser;
