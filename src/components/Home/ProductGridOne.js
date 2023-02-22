import { Button, Col, Container, Row } from "react-bootstrap";
import ProductItem from "./ProductGridOne/ProductItem";
import { DummyProducts } from "../../data/ProductGridOne";
const AllDummyProducts=DummyProducts
const ProductGridOne = () => {

  const productList=AllDummyProducts.map((el)=>{
    return <ProductItem title={el.title}  description={el.description} price={el.price} product_image={el.product_image}/>
  })
  


  return (
    <Row className="gx-4 gy-4 row__PrductGridOne">
      {productList}
      <Row className="justify-content-center mt--20 ">
        <Col lg={12} className="text-center">
          <Button  variant="outline-primary" className="product-one-card__view-all">View All</Button>
        </Col>
      </Row>
    </Row>
  );
};
export default ProductGridOne;
