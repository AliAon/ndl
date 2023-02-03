import { Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <Row className="section-hero gx-0 mb--30">
      <Col>
        <h2 className="section-hero__title">Professional Service at Affordable Price</h2>
        <p className="section-hero__description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <Row className="d-flex align-items-baseline">
          <Col lg={5}>
            <img src="./images/Frame 161.png"  />
          </Col>
          <Col>
            <Button className="section-hero__btn">READ MORE <FaArrowRight size={14} className="section-hero__btn__icon-right"/></Button>
          </Col>
        </Row>
      </Col>
      <Col>
      <img src="./images/Range-Rover 1.png" className="section-hero__img"/>
      </Col>
    </Row>
  );
};
export default Hero;
