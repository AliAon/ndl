import { Row, Col, Container } from "react-bootstrap";
const CtaOne = () => {
  return (
    <div className="section__cta pt--30 pb--30">
      
      <Row>
        <Col lg={5}>
          <div className="section__cta__news-letter">
            <h3 className="section__cta__news-letter__title">Join our newsletter now!</h3>
            <p className="section__cta__news-letter__description">Register now and get our latest updates and promos.</p>
            <Row>
              <Col lg={8}>
              </Col>
              <Col></Col>
            </Row>
          </div>
         
        </Col>
        <Col lg={7}></Col>
      </Row>

    </div>
  );
};
export default CtaOne;
