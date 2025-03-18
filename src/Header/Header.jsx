import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { utils } from "../Utils";
import { useContext, useState } from "react";
import { CartContext, useCart } from "../AddToCartComp/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import AddToCartComp from "../AddToCartComp/AddToCartComp";
const Header = () => {
  /* State */
  const { cart } = useContext(CartContext);
  const [showAddToCart, setShowAddToCart] = useState(false);

  /* End State */

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary w-75 center mt-3">
        <Container className="pl-5">
          <Navbar.Brand href={utils.routesName.home}>Games Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navBarItem">
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
              <div className="cart-icon" onClick={() => setShowAddToCart(true)}>
                <FontAwesomeIcon
                  className="mt-2 ml-2"
                  icon={faShoppingCart}
                  size="xl"
                  style={{ cursor: "pointer" }}
                />
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </div>
              {/* Cart Panel */}
              <div className={`cart-panel ${showAddToCart ? "open" : ""}`}>
                <button
                  className="close-btn"
                  onClick={() => setShowAddToCart(false)}
                >
                  ✖
                </button>
                <h3>Your Cart</h3>
                <AddToCartComp />
              </div>

              {/* Overlay */}
              {showAddToCart && (
                <div
                  className="overlay"
                  onClick={() => setShowAddToCart(false)}
                ></div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
