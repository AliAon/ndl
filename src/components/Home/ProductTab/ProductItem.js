import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

function ProductItem(props) {
    const {title,description,imagename}=props
  return (
    <Col lg={12} md={6}>
    <Container className="mt--40">
      <Row className=" row__productitem align-middle">
        <Col lg={3} >
            
          <img src={`./images/${imagename}`} className="productTabItem__product-item-details__img" />
        </Col>
        <Col>
          <div className="productTabItem__product-item-details">
            <h4 className="productTabItem__product-item-details__subtitle">
              MODULE
            </h4>
            <h2 className="productTabItem__product-item-details__title">
              {title}
            </h2>
            <p className="productTabItem__product-item-details__description section-extend-your-shop__des">
             {description}
            </p>
            <Row className="align-baseline">
              <Col lg={6} xs={12}>
                <h4 className="productTabItem__product-item-details__subtitle">Platform</h4>
              </Col>
              <Col lg={6} xs={12}>
                <p className="section-extend-your-shop__des productTabItem__product-item-details__links  text-underline">Prestashop 1.6 Prestashop 1.7</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={2} className="align-item-bottom">
          <Button className="productTabItem__product-item-details__read-more">
            <span className="pr--10">Read more</span><BsArrowRight />
            <img src="./images/Ellipse 16.png" className="productTabItem__product-item-details__read-more__img"/>
          </Button>
        </Col>
      </Row>
    </Container>
    </Col>
  );
}

export default ProductItem;
