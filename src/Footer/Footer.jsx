import { Col, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <Row className="mt-4 borderLine">
        <Col className="text-center mt-4">
          <h4>Game Hub Logo</h4>
          <p className="mt-3 ml-lg-5 footerDesc">
            Pakistan's leading retail gaming store offers lowest prices for
            PlayStation, Xbox, Handheld and Nintendo consoles, games &
            accessories.
          </p>
        </Col>
        <Col lg="2" className="mt-4">
          <ul className="categoryList">
            <li>
              <h4 style={{ color: "#7C0A02" }}>Products</h4>
            </li>
            <li>Playstation 5</li>
            <li>Playstation 4</li>
            <li>Xbox</li>
            <li>Nintendo Switch</li>
          </ul>
        </Col>
        <Col lg="2" className="contactDesc  mt-4">
          <h4>Contact Us</h4>
          <p>12345767</p>
          <p>Monday - Saturday</p>
          <p>9:00 AM - 5:30 PM</p>
        </Col>
        <Col lg="3" className="locationDesc  mt-4">
          <h3>Our Location</h3>
          <p>Hello There is our location.</p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
