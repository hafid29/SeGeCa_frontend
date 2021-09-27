import { Navbar, Button } from "react-bootstrap";
const ComponentHeader = (props) => {
  return (
    <div>
      <Navbar bg="primary" variant="light">
        <Navbar.Brand
          style={{
            color: "#ffffff",
            size: 12,
          }}
        >
          <div style={{align:'center'}}>{props.title}</div>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
export default ComponentHeader;
