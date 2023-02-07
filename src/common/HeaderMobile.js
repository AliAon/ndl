import { Col, Container, Row } from "react-bootstrap";
import OffCanvas from "./OffCanvas";
import {BiMenu} from "react-icons/bi"
import Logo from "../components/Header/Logo";
import LogoTrans from "../components/Header/LogoTrans";
import MobileLogoTrans from "../components/Header/MobileLogoTrans";
const HeaderMobile = () => {
 const placement='end'
 const name=<BiMenu size={35} color="white"/>

  return (
    <header className="mobile-header">
      <Container fluid="sm">
        <Row>
          <Col xs={9} sm={11}>
          <MobileLogoTrans/>
          </Col>
          <Col xs={3} sm={1}>
          <OffCanvas
           placement={placement}
              name={name}
            />
          </Col>
        </Row>
    
      </Container>
    </header>
  );
};
export default HeaderMobile;
