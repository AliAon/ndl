import { Col, Container, Row } from "react-bootstrap";
import OffCanvas from "./OffCanvas";
import {BiMenu} from "react-icons/bi"
import Logo from "../components/Header/Logo";
import LogoTrans from "../components/Header/LogoTrans";
const HeaderMobile = () => {
 const placement='end'
 const name=<BiMenu size={35} color="white"/>

  return (
    <header className="mobile-header">
      <Container>
        <Row>
          <Col xs={10}>
          <LogoTrans/>
          </Col>
          <Col xs={2}>
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
