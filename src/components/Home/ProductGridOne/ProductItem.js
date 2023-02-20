import { Row,Col,Button } from "react-bootstrap"
const ProductItem =(props)=>{
    return (
        <Col lg={4} md={4} sm={6} xs={12}>
        <div className="product-one-card">
          <div className="product-one-card__image">
            <img src={`./images/${props.product_image}`} />
          </div>
          <div className="product-one-card__detail">
            <h4 className="product-one-card__product-title">
              {props.title}
            </h4>
            <p className="product-one-card__product-des">
            {props.description}
            </p>
            <Button className="product-one-card__product-btn btn-block">
             {props.price}
            </Button>
          </div>
        </div>
      </Col>
    )

}
export default ProductItem