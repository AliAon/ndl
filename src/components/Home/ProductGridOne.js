import { Button, Col, Container, Row } from "react-bootstrap";
import ProductItem from "./ProductGridOne/ProductItem";
const DummyProducts=[
  {
    title:"Lincoln Continental 2018",
    description:"A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    price:" 200$/hour",
    product_image:"Image (2).png"

  },
  {
    title:"Lincoln Continental 2018",
    description:"A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    price:" 200$/hour",
    product_image:"Image (3).png"
  },
  {
    title:"Lincoln Continental 2018",
    description:"A “card” is a UI design pattern that groups related information in a flexible-size container visually resembling a playing card.",
    price:" 200$/hour",
    product_image:"Image (4).png"

  }

]
const ProductGridOne = () => {

  const productList=DummyProducts.map((el)=>{
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
