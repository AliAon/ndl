import { Card, Col, Container, Row } from "react-bootstrap";

const ExtendYouShop = () => {
  return (
    <Container>
      <Row className="section-extend-your-shop row align-items-center gx-5">
        <Col lg={6}>
          <Row>
            <Col lg={11}>
              <h4 className="section-extend-your-shop__title">
                Extend you shop with custom modules from our cars
              </h4>
              <p className="section-extend-your-shop__des">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies.
              </p>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <img src="./images/hyundai-alcazar-taiga-brown-removebg-preview 1.png" className="w-100"/>
        </Col>
      </Row>
    </Container>
  );
};
export default ExtendYouShop;
