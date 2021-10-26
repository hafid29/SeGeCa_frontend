import React, { useState, useEffect } from "react";
import { Navbar, Button, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
const Modals = (props) => {
  return (
    <div>
      <Modal show={props.isShow}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Link to="/" className="btn btn-primary" onClick={() => {
            localStorage.clear();
          }}>Oke</Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modals;
