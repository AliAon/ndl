import { Col, Row, Form, InputGroup, Button, Container } from "react-bootstrap";
import EmailAddress from "../components/Header/TopBarElements/EmailAddress";
import PhoneNo from "../components/Header/TopBarElements/PhoneNo";
import SocialLinks from "../components/Header/TopBarElements/SocialLinks";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="top-footer ">
          <Col lg={6}>
            <Row className="justify-content-start mb--10">
              <Col lg={6}>
                <div>
                  <h4 className="footer__logo-text">Reaganwirless</h4>
                  <p className="footer__about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                  <div>
                    <Row>
                      <Col lg={7} xs={6}>
                      <SocialLinks  iconwidth={2} color="#A7A7A7" />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={2} xs={6}>
            <h5 className="footer__menu-title">Company</h5>
            <ul className="footer__menu-lnks">
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col lg={2} xs={6}>
            <h5 className="footer__menu-title">Information</h5>
            <ul className="footer__menu-lnks">
              <li>Help Center </li>
              <li>Payment Methods</li>
              <li>Return & Refund</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col lg={2}>
            <h5 className="footer__menu-title">Contact</h5>
            <PhoneNo color="primary"  iconwidth={2} iconwidthsmall={1} icon-color="#3267E3" />
            <EmailAddress color="primary" iconwidth={2} iconwidthsmall={1} icon-color="#3267E3" />
          </Col>
        </Row>
        <Row >
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer__copyright">Copyright © 2022 <strong>Reaganwirless</strong>. All Right Reseved</p>
          </Col>
          <Col>
            <div className="payment text-end">
              <span className="footer__payment__icons">
                <FaCcMastercard />
              </span>
              <span>
                <FaCcVisa />
              </span>
              <span>
                <FaPaypal />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
