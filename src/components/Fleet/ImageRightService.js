import { Row,Col } from "react-bootstrap"
const ImageRightService=(props)=>{
    const {
        imgname,
        title,
        description

    }=props
    return(
        <Row className="align-items-center row__productitem">
      
          <Col lg={{order:1}} className="imagerightservice__col col-lg-7 col-12" xs={{order:2}}>
            <div className="section-services__detail">
              <h5 className="section-services_title">
             {title}
              </h5>
              <p className="section-services_des">
              {description}
              </p>
              <button className="section-services_btn">Register Now</button>
            </div>
          </Col>
          <Col lg={{order:2}} xs={{order:1}} className="col-lg-5 col-12">
            <img src={`./images/${imgname}`} className="w-100" />
          </Col>
        </Row>
    )

}
export default ImageRightService