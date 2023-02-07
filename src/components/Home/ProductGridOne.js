import { Button, Col, Container, Row } from "react-bootstrap";

const ProductGridOne = () => {
  return (
    <Row className="gx-4 gy-4">
      <Col lg={4} md={4} sm={6} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src="./images/Image (2).png" />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              Lincoln Continental 2018
            </h4>
            <p className="product-one-card__product-des">
              A “card” is a UI design pattern that groups related information in
              a flexible-size container visually resembling a playing card.
            </p>
            <Button className="product-one-card__product-btn btn-block">
              200$/hour
            </Button>
          </div>
        </div>
      </Col>
      <Col lg={4} md={4} sm={6} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src="./images/Image (3).png" />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              iPhone 11 Pro & Pro Max
            </h4>
            <p className="product-one-card__product-des">
              A “card” is a UI design pattern that groups related information in
              a flexible-size container visually resembling a playing card.
            </p>
            <Button className="product-one-card__product-btn btn-block">
              320$/hour
            </Button>
          </div>
        </div>
      </Col>
      <Col lg={4} md={4} sm={6} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src="./images/Image (4).png" />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              Cadillac Escalade Limousine
            </h4>
            <p className="product-one-card__product-des">
              A “card” is a UI design pattern that groups related information in
              a flexible-size container visually resembling a playing card.
            </p>
            <Button className="product-one-card__product-btn btn-block">
              320$/hour
            </Button>
          </div>
        </div>
      </Col>
      <Row className="justify-content-center mt--20">
        <Col lg={3} className="text-center">
          <Button  variant="outline-primary" className="product-one-card__view-all">View All</Button>
        </Col>
      </Row>
    </Row>
  );
};
export default ProductGridOne;
