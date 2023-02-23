import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { DummyTabsListData } from "../../../data/TabsListData";
function ProductTabItem() {

  const productList=DummyTabsListData.map((el)=>{
    return <ProductItem title={el.title}  description={el.description} imagename={el.product_image}/>
  })
  
  return (
    <Container>
      <Row className="row__producttabitem">
        {productList}
      </Row>
    </Container>
  );
}

export default ProductTabItem;
