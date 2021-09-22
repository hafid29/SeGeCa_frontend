import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import image from '../../assets/home_image.jpeg'
import LoginImage from '../../assets/apps_logo.jpeg'
const HomeView = () => {
  return (
    <>
      <Container fluid>
          
        <Row>
          <Col sm={8}>
            <div className="p-2 w-80 bd-highlight col-example">
              <img src={image} height="600" width="500" />
            </div>
          </Col>
          <Col sm={3}>
            <div
              class="d-flex flex-column"
              style={{
                alignSelf: "center",
                marginTop: "60%",
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={LoginImage}
                  width="200px"
                  height="200px"
                />
              </div>
              {/* large and long button */}
              <div className="d-grid gap-2" style={{marginTop:"10px"}}>
                <Button variant="primary" size="lg">
                  Login
                </Button>
                <Button variant="secondary" size="lg">
                  Register
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeView;
