import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Card, Alert } from "react-bootstrap";
import HomeUser from "../../assets/image_home_user.jpeg";
import Catering from "../../assets/catering.jpeg";
import { HeaderUser, FooterUser, Modal } from "../../component";
import { useLocation } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";

const ViewDashboardUser = (props) => {
  const [session, setSession] = useState({
    isAvailable: false,
    role_name: "",
    first_name: "",
  });

  React.useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("user_session"));
    if (obj == null) {
      setSession({
        isAvailable: false,
      });
    } else {
      if (obj.first_name == null) {
        setSession({
          isAvailable: true,
          first_name: "null",
        });
      } else {
        setSession({
          isAvailable: true,
          first_name: obj.first_name,
        });
      }
    }
  }, []);

  const pathName = useLocation();

  return (
    <>
      {session.isAvailable == true ? (
        ""
      ) : (
        <Modal
          title="Anda Belum login"
          message="Lakukan Login terlebih dahulu"
          isShow="true"
        ></Modal>
      )}
      <HeaderUser pathName={pathName.pathname}></HeaderUser>
      <br />
      <Row>
        {session.first_name == "null" ? (
          <Alert variant="warning">
            Untuk melakukan order mohon lengkapi{" "}
            <a href={"/formdatauser"}>data diri</a> anda
          </Alert>
        ) : (
          ""
        )}
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
              <Button
                variant="primary"
                href={"/formdatauser"}
                disabled={session.first_name == "null" ? true : false}
              >
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
              <Button
                variant="warning"
                href={"/formdatauser"}
                disabled={session.first_name == "null" ? true : false}
              >
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
              <Button
                className="text-white"
                variant="info"
                href={"/formdatauser"}
              >
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

const mapStateToProps = (state) => {
  return {
    loginState: state.LoginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewDashboardUser);
