import { Row,Col } from "react-bootstrap"
const ImageLeftService=(props)=>{
    const {
        imgname,
        title,
        description

    }=props
    return(
        <Row className="align-items-center">
          <Col lg={5}>
            <img src={`./images/${imgname}`} className="w-100" />
          </Col>
          <Col lg={6}>
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
        </Row>
    )

}
export default ImageLeftService