import { Row, Col, Container } from "react-bootstrap";
const CtaOne = () => {
  return (
    <div className="section__cta pt--30 pb--30">
      <Container>
        <Row className="row__producttabs">
          <Col lg={5}>
            <div className="section__cta__news-letter">
              <h3 className="section__cta__news-letter__title">
                We love to help you maximize your e-commerce.
              </h3>
              <Row className="row__producttabs">
                <Col lg={8}></Col>
                <Col></Col>
              </Row>
            </div>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </div>
  );
};
export default CtaOne;
