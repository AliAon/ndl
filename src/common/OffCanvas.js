import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MainMenu from '../components/Header/BootomHeaderElements/MainMenu';
import MobileMainMenu from '../components/Header/BootomHeaderElements/MobileMainMenu';
import Logo from '../components/Header/MiddleHeaderElements/Logo';
import Search from '../components/Header/MiddleHeaderElements/Search';
import SocialLinks from '../components/Header/TopBarElements/SocialLinks';

function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><Logo/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col xs={7}>
            <SocialLinks color="#A7A7A7"/>
            </Col>
          </Row>
          <h4 className='primary-nav-link-mobile__title'>Menu</h4>
          <MobileMainMenu/>
          <Search/>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



export default OffCanvas
