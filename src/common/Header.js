import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "../components/Header/Logo";
import MainMenu from "../components/Header/MainMenu";

const Header = () => {
  return (
    <header className="desktop-header">
      <Container>
        <Row className="d-flex align-items-baseline">
          <Col lg={3}>
            <Logo />
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
