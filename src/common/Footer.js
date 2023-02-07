import { Col, Row, Form, InputGroup, Button, Container } from "react-bootstrap";
import EmailAddress from "../components/Header/TopBarElements/EmailAddress";
import PhoneNo from "../components/Header/TopBarElements/PhoneNo";
import SocialLinks from "../components/Header/TopBarElements/SocialLinks";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import Logo from "../components/Header/Logo";
import {BsArrowRightCircleFill} from "react-icons/bs"
import LogoTrans from "../components/Header/LogoTrans";
import LocationAddress from "../components/Header/TopBarElements/LocationAddress";
const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid="sm">
        {/* <Row className="mb--20">
          <Col lg={4}>
            <LogoTrans />
          </Col>
        </Row> */}
        <Row className="top-footer mb--40">
          <Col lg={4}>
            <h4 className="footer__menu-title mb--20">ABOUT US</h4>
            <p className="footer__about-text">
              Since 2003, NDL CONNECTICUT LIMOUSINE SERVICES has been providing
              premier car service and limousine transportation to a variety of
              clients. 

              </p>
              <p className="footer__about-text">
              We are a team composes of reservationists, dispatchers,
              and professionally trained chauffeurs. Along with our computerized
              operating systems and modern fleet of vehicles, they play a role
              in our overall success.
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="footer__menu-title mb--20">QUICK LINKS</h5>
            <ul className="footer__menu-lnks">
              <li><BsArrowRightCircleFill color="#544424"  size={12} className="mr--5"/>   Services</li>
              <hr className="hr-line-quick-linke"/>
              <li><BsArrowRightCircleFill color="#544424" size={12} className="mr--5"/>    Booking</li>
              <hr className="hr-line-quick-linke"/>
              <li><BsArrowRightCircleFill color="#544424" size={12} className="mr--5"/>    Luxury Fleet</li>
              <hr className="hr-line-quick-linke"/>
              <li><BsArrowRightCircleFill color="#544424" size={12} className="mr--5"/>    Contact</li>
            </ul>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="footer__menu-title mb--20">CONTACT DETAILS</h5>
            <LocationAddress iconwidth={1}  iconwidthsmall={1} />
            <div className="mb--20"></div>
            <PhoneNo
              color="#4F3313"
              iconwidth={1}
              iconwidthsmall={1}
              icon-color="#4F3313"
            />
            <div className="mb--20"></div>
            <EmailAddress
              color="#4F3313"
              iconwidth={1}
              iconwidthsmall={1}
              icon-color="#4F3313"
            />
          </Col>
        </Row>

        <Row>
          <Col lg={3}></Col>
          <Col>
            <div className="text-center">
              <Row className="d-flex justify-content-center mb--10">
                <Col lg={5} xs={6} md={3} sm={4}>
                  <SocialLinks iconwidth={2} color="#4F3313" />
                </Col>
              </Row>
            </div>
            <p className="footer__copyright">
              © 2021 NDL CONNECTICUT Limousine Services | All Rights Reserved
            </p>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
