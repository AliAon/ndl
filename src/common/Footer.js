import { Col, Row, Form, InputGroup, Button, Container } from "react-bootstrap";
import EmailAddress from "../components/Header/TopBarElements/EmailAddress";
import PhoneNo from "../components/Header/TopBarElements/PhoneNo";
import SocialLinks from "../components/Header/TopBarElements/SocialLinks";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import Logo from "../components/Header/Logo";
import LogoTrans from "../components/Header/LogoTrans";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4}>
          <LogoTrans/>
          </Col>
        </Row>
        <Row className="top-footer ">
          <Col lg={4}>
                  <h4 className="footer__logo-text">Reaganwirless</h4>
                  <p className="footer__about-text">
                    Since 2003, NDL CONNECTICUT LIMOUSINE SERVICES has been
                    providing premier car service and limousine transportation
                    to a variety of clients. We are a team composes of
                    reservationists, dispatchers, and professionally trained
                    chauffeurs. Along with our computerized operating systems
                    and modern fleet of vehicles, they play a role in our
                    overall success.
                  </p>
          </Col>
          <Col>
            <h5 className="footer__menu-title">QUICK LINKS</h5>
            <ul className="footer__menu-lnks">
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col >
            <h5 className="footer__menu-title">Contact</h5>
            <PhoneNo
              color="primary"
              iconwidth={2}
              iconwidthsmall={1}
              icon-color="#3267E3"
            />
            <EmailAddress
              color="primary"
              iconwidth={2}
              iconwidthsmall={1}
              icon-color="#3267E3"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
            <div>
              <Row>
                <Col lg={6} xs={6}>
                  <SocialLinks iconwidth={2} color="#A7A7A7" />
                </Col>
              </Row>
            </div>
            <p className="footer__copyright">
              Copyright © 2022 <strong>Reaganwirless</strong>. All Right Reseved
            </p>
          </Col>
         <Col>
         </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
