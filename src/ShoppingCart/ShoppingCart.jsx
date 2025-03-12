import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ShoppingCart = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container fluid>
        <Row className="text-center">
          <Col>
            <h1>Shopping Cart</h1>
            <h6>Oopss... No Product has been added</h6>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default ShoppingCart;
