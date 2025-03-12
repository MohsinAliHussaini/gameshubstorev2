import { Col, Container, Row } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Header from "../Header/Header";
import NewArrivals from "../NewArrivals/NewArrivals";
import { utils } from "../Utils";
import { dummyData } from "../data";
import NewProduct from "../New_Product/NewProduct";
import Category from "../Category/Category";
import LandingImage from "../LandingImage/LandingImage";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <LandingImage />
          </Col>
        </Row>
        <Row>
          <Col>
            <Category />
          </Col>
        </Row>

        <Row>
          <Col>
            <NewProduct
              category_name={"Latest Addition"}
              showButton={true}
              link={utils.routesName.newArrivals}
              data={dummyData.homeData}
            />
            <NewProduct
              category_name={"Xbox"}
              showButton={true}
              link={utils.routesName.ps4Link}
              data={dummyData.homeData}
            />

            <NewProduct
              category_name={"Nintendo Switch"}
              showButton={true}
              link={utils.routesName.nintendoLink}
              data={dummyData.homeData}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
