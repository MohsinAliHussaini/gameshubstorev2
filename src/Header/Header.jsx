import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { utils } from "../Utils";
import { useState } from "react";
const Header = () => {
  /* State */
  const [showAddToCart, setShowAddToCart] = useState(false);

  /* End State */

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary w-75 center mt-3">
        <Container>
          <Navbar.Brand href={utils.routesName.home}>Games Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={utils.routesName.home}>Home</Nav.Link>
              <NavDropdown title="PlayStation" id="basic-nav-dropdown">
                <NavDropdown.Item href={utils.routesName.ps5Link}>
                  PlayStation 5
                </NavDropdown.Item>
                <NavDropdown.Item href={utils.routesName.ps4Link}>
                  PlayStation 4
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Xbox" id="basic-nav-dropdown">
                <NavDropdown.Item href={utils.routesName.xboxLink}>
                  Xbox S Series
                </NavDropdown.Item>
                <NavDropdown.Item href={utils.routesName.xboxLink}>
                  Xbox X Series
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={utils.routesName.nintendoLink}>
                Nintendo Switch
              </Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
