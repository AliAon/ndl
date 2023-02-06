import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductTabItem from "./ProductTab/ProductTabItem";

function ProductTabs() {
  return (
    <Container>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3 aligntabs"
            
            
          >
            <Tab eventKey="home" title="All">
                <ProductTabItem/>
            </Tab>
            <Tab eventKey="profile" title="Profile"></Tab>
            <Tab eventKey="longer-tab" title="Loooonger Tab"></Tab>
            <Tab eventKey="contact" title="Contact" ></Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductTabs;
