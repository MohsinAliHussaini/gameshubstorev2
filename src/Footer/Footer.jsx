import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 text-center">
          <Col>
            <h1 className="mt-4">Games Hub</h1>
          </Col>
          <Col className="mt-4">
            <ul className="categoryList">
              <li>
                <h4 style={{ color: "#001F3F" }}>Products</h4>
              </li>
              <li>Playstation 5</li>
              <li>Playstation 4</li>
              <li>Xbox</li>
              <li>Nintendo Switch</li>
            </ul>
          </Col>
          <Col className="contactDesc  mt-4">
            <h4>Contact Us</h4>
            <p>12345767</p>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 5:30 PM</p>
          </Col>
          <Col className="locationDesc  mt-4">
            <h3>Our Location</h3>
            <p>Hello There is our location.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
