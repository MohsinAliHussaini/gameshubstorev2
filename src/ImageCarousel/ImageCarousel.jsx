import { Carousel } from "react-responsive-carousel";
import ps5 from "../ps5_carousel.jpg";
import xbox from "../xbox_carousel.jpg";
import "./ImageCarousel.css";
import { Container } from "react-bootstrap";
const ImageCarousel = () => {
  return (
    <Container fluid>
      <Carousel
        autoPlay
        className="mt-4"
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
      >
        <div>
          <img alt="" className="carousel-img" src={ps5} />
        </div>
        <div>
          <img alt="" className="carousel-img" src={xbox} />
        </div>
      </Carousel>
    </Container>
  );
};

export default ImageCarousel;
