import { Form, Button, Container, Row, Col } from "react-bootstrap";
import LoginImage from '../../assets/login_image.jpeg'
import {Link} from 'react-router-dom'
const LoginView = () => {
  return (
    <div>
      <Container fluid>
        <div className="d-flex bd-highlight example-parent">
          <div className="p-2 w-80 bd-highlight col-example">
            <img src={LoginImage} />
          </div>
          <Row>
            <Col
              style={{
                alignSelf: "center",
              }}
            >
              <h1>Login</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="align-self-center"
                  style={{
                    marginTop:"10px",
                    marginBottom:"5px",
                    width: "60%",
                    marginLeft: "20%",
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="align-self-center"
                  style={{
                    marginTop:"10px",
                    marginBottom:"5px",
                    width: "60%",
                    height: "40px",
                    marginLeft: "20%",
                  }}
                ><Link to="/"><p style={{color:"#ffffff"}}>Kembali</p></Link>
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginView;
