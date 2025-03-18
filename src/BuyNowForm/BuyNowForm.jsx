import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./BuyNowForm.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { utils } from "../Utils";
import Swal from "sweetalert2";
import { resources_EN } from "../componentUtils";
const BuyNowForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobNumber: "",
    alternateMobNumber: "",
    deliveryAddress: "",
    nearestLandmark: "",
    emailAddress: "",
    deliveryInst: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const valid = validation();
    if (valid) {
      e.preventDefault();
    }
    console.log("Order Submitted", formData);
  };

  const goBack = () => {
    navigate(utils.routesName.home);
  };

  const validation = () => {
    if (formData.fullName.trim().length < 1) {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.fullNameValid
      );
      return false;
    }
    if (formData.mobNumber.trim().length < 1) {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.mobileNumValid
      );
      return false;
    }
    if (formData.deliveryAddress.trim().length < 1) {
      modal(
        resources_EN.error,
        resources_EN.errorTitle,
        resources_EN.deliveryAddressValid
      );
      return false;
    }
    return true;
  };

  const modal = (icon, title, message) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
    });
  };

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container className="mt-5 mb-4">
        <Row className="justify-content-center" style={{ width: "70vw" }}>
          <Col
            className="p-4 bg-white shadow"
            md={7}
            style={{ borderRadius: "10px" }}
          >
            <h5>Checkout</h5>
            <h5>This is your order</h5>
            <h6>Just a last step, please enter your details: </h6>
            <hr />

            <Form>
              <Form.Group controlId="fullName" className="mb-3">
                <Form.Label className="font-weight-bold">Full Name</Form.Label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-control rounded p-2"
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="mobNumber" className="mb-3">
                    <Form.Label className="font-weight-bold">
                      Mobile Number
                    </Form.Label>
                    <input
                      type="number"
                      name="mobNumber"
                      value={formData.mobNumber}
                      onChange={handleChange}
                      maxLength={11}
                      required
                      className="form-control rounded p-2"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="alternateMobNumber" className="mb-3">
                    <Form.Label className="font-weight-bold">
                      Alternate Mobile Number
                    </Form.Label>
                    <input
                      type="number"
                      name="alternateMobNumber"
                      value={formData.alternateMobNumber}
                      onChange={handleChange}
                      maxLength={11}
                      className="form-control rounded p-2"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="deliveryAddress" className="mb-3">
                <Form.Label className="font-weight-bold">
                  Delivery Address
                </Form.Label>
                <textarea
                  rows={3}
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  required
                  className="form-control rounded p-2"
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="nearestLandmark" className="mb-3">
                    <Form.Label className="font-weight-bold">
                      Nearest Landmark
                    </Form.Label>
                    <input
                      type="text"
                      name="nearestLandmark"
                      value={formData.nearestLandmark}
                      onChange={handleChange}
                      className="form-control rounded p-2"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="emailAddress" className="mb-3">
                    <Form.Label className="font-weight-bold">
                      Email Address
                    </Form.Label>
                    <input
                      type="text"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="form-control rounded p-2"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="deliveryInst" className="mb-3">
                <Form.Label className="font-weight-bold">
                  Delivery Instruction
                </Form.Label>
                <input
                  type="text"
                  name="deliveryInst"
                  value={formData.deliveryInst}
                  onChange={handleChange}
                  className="form-control rounded p-2"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}>
            <Row style={{ width: "25vw" }}>
              <Col
                className="p-4 ml-4 bg-white  shadow"
                style={{ borderRadius: "10px" }}
              >
                <h4 className="mb-4 font-weight-bold">Your Order</h4>
                <div className="d-flex justify-content-between">
                  <h6 className="mt-2">1x PlayStation 5</h6>
                  <h6 className="mt-2 float-right">Rs. 5000</h6>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h6 className="mt-2">1x PlayStation 5</h6>
                  <h6 className="mt-2 float-right">Rs. 5000</h6>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h6 className="mt-2">1x PlayStation 5</h6>
                  <h6 className="mt-2 float-right">Rs. 5000</h6>
                </div>
                <hr />
              </Col>
            </Row>
            <Row style={{ width: "25vw" }}>
              <Col
                className="p-4 ml-4 mt-3 bg-white  shadow"
                style={{ borderRadius: "10px" }}
              >
                <div className="d-flex m-0 justify-content-between">
                  <h6 className="font-weight-bold">Total</h6>
                  <h6 className="font-weight-bold">Rs. 15000</h6>
                </div>
                <div className="d-flex m-0 justify-content-between">
                  <h6 className="font-weight-bold">Delivery Fees</h6>
                  <h6 className="font-weight-bold">Rs. 100</h6>
                </div>
                <div className="d-flex mb-0 justify-content-between">
                  <h6 className="font-weight-bold">Grand Total</h6>
                  <h6 className="font-weight-bold">Rs. 15100</h6>
                </div>
              </Col>
            </Row>

            <Row style={{ width: "25vw" }}>
              <Col className="p-4">
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="text-center mt-3 ml-3 buyNowButton"
                >
                  Place Order
                </Button>
                <Button
                  className="text-center mt-3 ml-3 backButton"
                  onClick={goBack}
                >
                  Continue to Add More Items
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BuyNowForm;
