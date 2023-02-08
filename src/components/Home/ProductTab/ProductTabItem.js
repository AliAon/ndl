import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

function ProductTabItem() {
  return (
    <Container>
      <Row className="row__producttabitem">
        <Col lg={12} md={6}>
          <ProductItem
            imagename="combinator 2.png"
            title=" Product Combinator"
            description=" 
             Create unlimited product combinations lorem ipsum dolor sit amir.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ipsum dolor sit ipsum dolor sit."
          />
          </Col>
          <Col lg={12} md={6}>

           <ProductItem
            imagename="image 9 (1).png"
            title="Exact online"
            description=" 
             Create unlimited product combinations lorem ipsum dolor sit amir.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ipsum dolor sit ipsum dolor sit."
          />
          </Col>
          <Col lg={12} md={6}>
           <ProductItem
            imagename="Image (3).png"
            title="Gett Theme"
            description=" 
             Create unlimited product combinations lorem ipsum dolor sit amir.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ipsum dolor sit ipsum dolor sit."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductTabItem;
