import { Button, Col, Container, Row } from "react-bootstrap";
import LogoTrans from "../components/Header/LogoTrans";
import MainMenu from "../components/Header/MainMenu";

const Header = () => {
  return (
    <header className="desktop-header">
      <Container fluid="sm">
        <Row className="d-flex align-items-baseline">
          <Col lg={3}>
            <LogoTrans />
          </Col>
          <Col>
            <MainMenu />
          </Col>
          <Col lg={2}>
            <Button className="desktop-header__book-now-btn">BOOK NOW</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
