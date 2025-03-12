import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewProduct from "../New_Product/NewProduct";
import { dummyData } from "../data";

const NewArrivals = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NewProduct
            category_name={"Latest Addition from Games Hub"}
            data={dummyData.ps5Data}
          />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default NewArrivals;
