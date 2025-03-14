import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { utils } from "../../Utils";
import React from "react";

const AdminHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-50 center mt-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={utils.routesName.adminProducts}>Product</Nav.Link>
            <Nav.Link href={utils.routesName.adminOrder}>Order</Nav.Link>
            <Nav.Link href="#">Category</Nav.Link>
            <Nav.Link href="#">Change Password</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
