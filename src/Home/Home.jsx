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
import { useEffect, useState } from "react";
import { getService } from "../genericPostService";
const Home = () => {
  const [homeData, setHomeData] = useState({
    latestAddition: [],
    ps5: [],
    nintendoSwitch: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = "/gamesHubStoreApi/home.php";
    getService(url, {}, setData);
  };

  const setData = (response) => {
    console.log("responseee", response);
    setHomeData({
      latestAddition: response.latest,
      nintendoSwitch: response.nintendo,
      ps5: response.ps5,
    });
  };

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
              showButton={homeData.latestAddition.length > 0}
              link={utils.routesName.newArrivals}
              data={homeData.latestAddition}
            />
            <NewProduct
              category_name={"PS5"}
              showButton={homeData.ps5.length > 0}
              link={utils.routesName.ps5Link}
              data={homeData.ps5}
            />

            <NewProduct
              category_name={"Nintendo Switch"}
              showButton={homeData.nintendoSwitch.length > 0}
              link={utils.routesName.nintendoLink}
              data={homeData.nintendoSwitch}
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
