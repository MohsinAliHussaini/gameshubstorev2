import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewProduct from "../New_Product/NewProduct";
import { dummyData } from "../data";
import { useEffect, useState } from "react";
import { getService } from "../genericPostService";

const OtherProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    const payload = {
      cat_id: 5,
    };
    const url = "/gamesHubStoreApi/get_products.php";
    getService(url, payload, setData);
  };

  const setData = (response) => {
    console.log("Response", response);
    setProduct(response);
  };
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <NewProduct category_name={"Accessories"} data={product.product} />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default OtherProduct;
