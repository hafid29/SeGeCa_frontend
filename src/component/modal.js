import { Navbar, Button, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
const Modals = (props) => {
  return (
    <div>
      <Modal show="true">
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            className="align-self-center"
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              width: "60%",
              height: "40px",
              marginLeft: "20%",
            }}
          >
            <Link to="/login">
              <p style={{ color: "#ffffff" }}>Oke</p>
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modals;
