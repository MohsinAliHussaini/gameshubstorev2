import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { dummyData } from "../data";
import { useContext, useState } from "react";
import "./SingleProduct.css";
import { CartContext } from "../AddToCartComp/CartContext";
import { useNavigate } from "react-router-dom";
import { utils } from "../Utils";

const SingleProduct = () => {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const changingQuantity = (action) => {
    if (action === "-") {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };

  const buyNow = () => {
    navigate(utils.routesName.buyNow);
  };

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container fluid>
        <Row className="mt-5 justify-content-center">
          <Col lg={4}>
            <div className="singleProductImg">
              {" "}
              <img src={dummyData.singleProductData.productImg} />
            </div>
          </Col>
          <Col
            lg={6}
            className="bg-white shadow p-3"
            style={{ borderRadius: "10px" }}
          >
            <Row>
              <Col>
                <h3 className="mt-2">{dummyData.singleProductData.title}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="blackText" style={{ fontWeight: "600" }}>
                  Rs.{" "}
                  {new Intl.NumberFormat("en-EN", {
                    maximumSignificantDigits: 3,
                  }).format(dummyData.singleProductData.price)}{" "}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-baseline">
                <Button
                  className="quantityBtn mt-2"
                  onClick={() => changingQuantity("-")}
                >
                  -
                </Button>
                <p className="ml-3 font-weight-bold">{quantity}</p>
                <Button
                  className="ml-3 quantityBtn"
                  onClick={() => changingQuantity("+")}
                >
                  +
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="p-0">
                <div className="d-flex mt-3 mb-3">
                  <Button className="ml-3 singleProductCart">
                    Add to Cart
                  </Button>
                  <Button className="ml-3 buyNowBtn" onClick={buyNow}>
                    Buy Now
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5
                  className="mt-2"
                  style={{ color: "green", fontWeight: "600" }}
                >
                  {dummyData.singleProductData.description}
                </h5>
              </Col>
            </Row>
            <Row className="">
              <Col>
                <Row className="mt-3">
                  <Col lg={12}>
                    <h6 className=" blackText">
                      Pick up from the Game Hub Store{" "}
                      <span className="float-right">Free</span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h6 className=" blackText">
                      Express within Karachi{" "}
                      <span className="float-right">1-2 Days</span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h6 className=" blackText">
                      Courier Outside Karachi{" "}
                      <span className="float-right">2-3 Days</span>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Row className="mt-3">
                  <Col lg={12}>
                    <h6 className=" blackText">
                      Warranty Coverage{" "}
                      <span className="float-right">
                        {" "}
                        Contact to our support
                      </span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <h6 className=" blackText">
                      Need help? Ask our Experts{" "}
                      <span className="float-right">
                        Contact to our support
                      </span>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SingleProduct;
