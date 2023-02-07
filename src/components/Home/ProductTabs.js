import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductTabItem from "./ProductTab/ProductTabItem";

function ProductTabs() {
  return (
    <Container>
      <Row className="pt--20 pb--40 mb--40">
        <Col>
          <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3 aligntabs gy-4"
            
            
          >
            <Tab eventKey="home" title="All">
                <ProductTabItem/>
            </Tab>
            <Tab eventKey="profile" title="CarA">
            <ProductTabItem/>
            </Tab>
            <Tab eventKey="longer-tab" title="CarB">
            <ProductTabItem/>
            </Tab>
            <Tab eventKey="contact" title="CarC" >
            <ProductTabItem/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductTabs;
