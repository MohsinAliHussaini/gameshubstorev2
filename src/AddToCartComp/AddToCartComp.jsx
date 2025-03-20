import React, { useContext, useEffect, useState } from "react";
import { Button, ListGroup, Image, Col, Row, NavLink } from "react-bootstrap";
import { CartContext, useCart } from "./CartContext";
import "./AddToCartComp.css";
import { useNavigate } from "react-router-dom";
import { utils } from "../Utils";

const AddToCartComp = (props) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { setShowAddToCart } = props;
  const [cartItems, setCartItems] = useState([]);
  const storedCart = localStorage.getItem("cart");
  const navigate = useNavigate();
  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [storedCart]);

  const addMoreItems = () => {
    setShowAddToCart(false);
  };

  const placeOrder = () => {
    navigate(utils.routesName.buyNow);
  };
  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="text-center">🛒 Cart is empty</p>
      ) : (
        <>
          <ListGroup className="mt-4">
            {cartItems.map((item) => (
              <>
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center itemRoot shadow"
                >
                  <div className="d-flex align-items-center">
                    <Image
                      src={item.productImg}
                      alt={item.title}
                      width="75"
                      height="75"
                      className="me-3 rounded"
                    />
                    <div className="ml-3">
                      <h6>{item.title}</h6>
                      <strong className="mb-0" style={{ fontSize: "18px" }}>
                        Rs.{item.price}
                      </strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-center p-3">
                    {/* Decrease Quantity */}
                    <Button
                      onClick={() => removeFromCart(item)}
                      className="ms-2 addCartquantityBtn font-weight-bold"
                    >
                      -
                    </Button>

                    {/* Show Quantity */}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {item.quantity}
                    </span>

                    {/* Increase Quantity */}
                    <Button
                      onClick={() => addToCart(item)}
                      className="ms-2 addCartquantityBtn"
                    >
                      +
                    </Button>
                  </div>
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
          <Row>
            <Col>
              <NavLink className="mt-2" onClick={addMoreItems}>
                + Add More Items
              </NavLink>
            </Col>
          </Row>

          <Row>
            <Col>
              <Row style={{ width: "25vw" }}>
                <Col
                  className="p-4 ml-4 mt-3 bg-white  shadow"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="d-flex m-0 justify-content-between">
                    <h6 className="font-weight-bold">Total</h6>
                    <h6 className="font-weight-bold">Rs.{totalPrice}</h6>
                  </div>
                  <div className="d-flex m-0 justify-content-between">
                    <h6 className="font-weight-bold">Delivery Fees</h6>
                    <h6 className="font-weight-bold">Rs. 100</h6>
                  </div>
                  <div className="d-flex mb-0 justify-content-between">
                    <h6 className="font-weight-bold">Grand Total</h6>
                    <h6 className="font-weight-bold">Rs. {totalPrice}</h6>
                  </div>
                </Col>
              </Row>

              <Row style={{ width: "25vw" }}>
                <Col className="p-4">
                  <Button
                    type="button"
                    className="text-center mt-3 ml-3 buyNowButton"
                    onClick={placeOrder}
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default AddToCartComp;
