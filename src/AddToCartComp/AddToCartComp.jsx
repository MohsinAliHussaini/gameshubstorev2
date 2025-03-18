import React, { useContext } from "react";
import { Button, ListGroup, Image } from "react-bootstrap";
import { CartContext } from "./CartContext";

const AddToCartComp = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center">🛒 Cart is empty</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width="50"
                  height="50"
                  className="me-3 rounded"
                />
                <div>
                  <strong>{item.name}</strong>
                  <p className="mb-0">Price: ${item.price}</p>
                  <p className="mb-0">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                {/* Decrease Quantity */}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                  disabled={item.quantity === 1}
                  className="me-2"
                >
                  -
                </Button>

                {/* Show Quantity */}
                <span>{item.quantity}</span>

                {/* Increase Quantity */}
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => addToCart(item)}
                  className="ms-2"
                >
                  +
                </Button>
              </div>
            </ListGroup.Item>
          ))}

          {/* Total Price */}
          <ListGroup.Item className="text-end fw-bold">
            Total: ${totalPrice}
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default AddToCartComp;
