import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewProduct from "../New_Product/NewProduct";
import { dummyData } from "../data";

const PS5Product = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <NewProduct
              category_name={"PlayStation 5 Products"}
              data={dummyData.ps5Data}
            />
          </Col>
        </Row>

        <Footer />
      </Container>
    </>
  );
};

export default PS5Product;
