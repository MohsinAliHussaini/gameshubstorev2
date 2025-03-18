import { Col, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";

const NewProduct = (props) => {
  const { category_name, showButton = false, link, data } = props;

  return (
    <>
      <Row>
        <Col>
          <h2
            className="mt-5 ml-3 mb-3 d-inline-flex"
            style={{ fontWeight: "700" }}
          >
            {category_name}
          </h2>
          {showButton ? (
            <div className="d-lg-flex-inline float-lg-right float-md-right text-center moreProductRoot">
              <a href={link}>
                <button className="float-lg-right mt-5 moreProduct mb-4 ">
                  More Products
                </button>
              </a>
            </div>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row className="mb-4 row-cols-1" style={{ display: "contents" }}>
        <Col
          className="d-lg-flex d-sm-block"
          style={{ gap: "2.5%", flexWrap: "wrap" }}
          lg={12}
        >
          {data && data.length > 0 ? (
            data.map((val) => (
              <Cart
                productImg={val.productImg}
                price={val.price}
                description={val.description}
                title={val.title}
              />
            ))
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </>
  );
};

export default NewProduct;
