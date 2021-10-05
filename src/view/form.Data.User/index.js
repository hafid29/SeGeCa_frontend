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
import { HeaderUser } from "../../component";
const FormDataUser = () => {
  return (
    <>
      <HeaderUser></HeaderUser>
      <br />
      <br />
      <Container>
        <h2>FORM DATA USER</h2>
        <br />
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>No. Telepon</Form.Label>
              <Form.Control type="text" placeholder="08xxxxxxx" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Foto</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group> */}

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Nama Pertama" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Nama Terakhir" />
            </Form.Group>
          </Row>
          {/* <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row> */}

          {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button href={"/dashboarduser"} size="lg">
            Kembali
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="success"
            type="submit"
            size="lg"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default FormDataUser;
