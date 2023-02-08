import { Fragment } from "react";
import { Container ,Row,Col,Button } from "react-bootstrap";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HeaderMobile from "../common/HeaderMobile";
import BookNow from "../components/Home/BookNow";
import CtaOne from "../components/Home/CtaOne";
import { FaArrowRight } from "react-icons/fa";
import Services from "../components/Fleet/Services";
const Fleet = () => {
  return (
    <Fragment>
      <HeaderMobile />
      <Header />
      <main>
        <Container>
          <Row className="section-hero gx-0 mb--30">
            <Col lg={6}>
              <h2 className="section-hero__title">
                Professional Service at Affordable Price
              </h2>
              <p className="section-hero__description">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <Row className="d-flex align-items-baseline">
                <Col lg={5} xs="auto">
                  <img
                    src="./images/Frame 161.png"
                    className="section-hero__brand-img"
                  />
                </Col>
                <Col lg={7} xs={12}>
                  <Button className="section-hero__btn">
                    READ MORE{" "}
                    <FaArrowRight
                      size={14}
                      className="section-hero__btn__icon-right"
                    />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <img
                src="./images/Range-Rover 1.png"
                className="section-hero__img "
              />
            </Col>
          </Row>
          <BookNow />
          <Services/>
        </Container>
        <CtaOne />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Fleet;
