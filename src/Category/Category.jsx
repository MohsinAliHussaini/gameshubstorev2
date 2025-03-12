import { Col, Row } from "react-bootstrap";
import { utils } from "../Utils";
import ps5 from "../[CITYPNG.COM]Playstation5 PS5 Logo Black Gaming - 2000x2000.png";
import ps4 from "../—Pngtree—playstation logo icon_3593262.png";
import nintendoLogo from "../—Pngtree—nintendo switch original_8632201.png";
import xbox from "../xbox.png";
import "./Category.css";
const Category = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="text-center mt-3 font-weight-bold">
            Shop By Category
          </h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4 categoryDisplay">
          <div className="d-flex categorySubRoot m-4">
            <div className="category-root">
              <img src={ps5} alt="Product Image" />
            </div>
            <div className="category-root">
              <img src={ps4} alt="Product Image" />
            </div>
            <div className="category-root">
              <img src={nintendoLogo} alt="Product Image" />
            </div>
            <div className="category-root">
              <img src={xbox} alt="Product Image" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
