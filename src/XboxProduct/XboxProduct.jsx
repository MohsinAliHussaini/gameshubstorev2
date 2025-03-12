import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewProduct from "../New_Product/NewProduct";

const XboxProduct = () => {
  return (
    <>
      <Container fluid>
        <Header />
        <Row>
          <Col>
            <NewProduct category_name={"Xbox Products"} />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default XboxProduct;
