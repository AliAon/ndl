import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoTrans from "../components/Header/LogoTrans";
import MobileMainMenu from "../components/Header/MobileMainMenu";
// import Logo from '../components/Header/MiddleHeaderElements/Logo';
// import Search from '../components/Header/MiddleHeaderElements/Search';
import SocialLinks from "../components/Header/TopBarElements/SocialLinks";
function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="btn-togle">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <LogoTrans />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className="primary-nav-link-mobile__title">Menu</h4>
          <MobileMainMenu />
          <center>
            <Button className="desktop-header__book-now-btn">BOOK NOW</Button>
          </center>
          <Row className="justify-content-center mt--40">
            <Col xs={7}>
              <SocialLinks color="#6A4F34" />
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
